import React, { useEffect, useRef } from 'react';
import styles from './ParticleCanvas.module.css';

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
    color: string;
    opacity: number;
}

const PARTICLE_COLORS = [
    'rgba(255, 107, 0, 0.65)',   // Brand Orange
    'rgba(100, 116, 139, 0.55)', // Slate 500
    'rgba(59, 130, 246, 0.55)',  // Blue 500
    'rgba(148, 163, 184, 0.45)', // Slate 400
];

const LINE_COLOR_BASE = '148, 163, 184'; // Slate 400 rgb
const LINK_DISTANCE = 145;
const REPULSE_DISTANCE = 150;
const REPULSE_STRENGTH = 0.45;

const ParticleCanvas: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let isVisible = true;
        let width = (canvas.width = container.clientWidth);
        let height = (canvas.height = container.clientHeight);

        const mouse = {
            x: -9999,
            y: -9999,
            isActive: false,
        };

        // Determine particle count based on canvas area (~80 for 1200x800)
        const getParticleCount = (w: number, h: number) => {
            const area = (w * h) / (800 * 800);
            return Math.min(90, Math.max(35, Math.floor(65 * area)));
        };

        let particles: Particle[] = [];

        const createParticle = (x?: number, y?: number, burst = false): Particle => {
            const angle = Math.random() * Math.PI * 2;
            const speed = burst ? Math.random() * 3 + 1.5 : Math.random() * 1.2 + 0.4;
            const color = PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)];

            return {
                x: x ?? Math.random() * width,
                y: y ?? Math.random() * height,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                radius: Math.random() * 2 + 1.6,
                color,
                opacity: Math.random() * 0.4 + 0.4,
            };
        };

        const initParticles = () => {
            const count = getParticleCount(width, height);
            particles = [];
            for (let i = 0; i < count; i++) {
                particles.push(createParticle());
            }
        };

        initParticles();

        // Handle resize with High-DPI support
        const handleResize = () => {
            if (!container || !canvas) return;
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            width = container.clientWidth;
            height = container.clientHeight;

            canvas.width = width * dpr;
            canvas.height = height * dpr;
            ctx.scale(dpr, dpr);

            initParticles();
        };

        handleResize();
        const resizeObserver = new ResizeObserver(() => {
            handleResize();
        });
        resizeObserver.observe(container);

        // Track mouse interactions relative to parent intro section
        const parentSection = container.closest('section') || container;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = container.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
            mouse.isActive = true;
        };

        const handleMouseLeave = () => {
            mouse.isActive = false;
            mouse.x = -9999;
            mouse.y = -9999;
        };

        const handleClick = (e: MouseEvent) => {
            const rect = container.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const clickY = e.clientY - rect.top;
            
            // Push 4 new particles (matches particlesjs-config push mode)
            for (let i = 0; i < 4; i++) {
                if (particles.length < 120) {
                    particles.push(createParticle(clickX, clickY, true));
                }
            }
        };

        parentSection.addEventListener('mousemove', handleMouseMove as EventListener);
        parentSection.addEventListener('mouseleave', handleMouseLeave);
        parentSection.addEventListener('click', handleClick as EventListener);

        // Pause animation loop when out of viewport
        const intersectionObserver = new IntersectionObserver(
            ([entry]) => {
                isVisible = entry.isIntersecting;
                if (isVisible) {
                    lastTime = performance.now();
                }
            },
            { threshold: 0.05 }
        );
        intersectionObserver.observe(container);

        // Main Animation Loop
        let lastTime = performance.now();

        const render = (time: number) => {
            const dt = Math.min((time - lastTime) / 1000, 0.1);
            lastTime = time;

            if (isVisible) {
                ctx.clearRect(0, 0, width, height);

                // Update and Draw Particles
                for (let i = 0; i < particles.length; i++) {
                    const p = particles[i];

                    // Movement
                    p.x += p.vx * dt * 60;
                    p.y += p.vy * dt * 60;

                    // Boundary collision / wrap
                    if (p.x < -10) p.x = width + 10;
                    else if (p.x > width + 10) p.x = -10;
                    if (p.y < -10) p.y = height + 10;
                    else if (p.y > height + 10) p.y = -10;

                    // Mouse Repulse Effect (from particlesjs-config)
                    if (mouse.isActive) {
                        const dx = p.x - mouse.x;
                        const dy = p.y - mouse.y;
                        const dist = Math.sqrt(dx * dx + dy * dy);

                        if (dist < REPULSE_DISTANCE && dist > 0) {
                            const force = (1 - dist / REPULSE_DISTANCE) * REPULSE_STRENGTH;
                            const fx = (dx / dist) * force * 7;
                            const fy = (dy / dist) * force * 7;

                            p.x += fx;
                            p.y += fy;
                        }
                    }

                    // Draw Node
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                    ctx.fillStyle = p.color;
                    ctx.fill();

                    // Connect Interconnecting Lines (line_linked)
                    for (let j = i + 1; j < particles.length; j++) {
                        const p2 = particles[j];
                        const dx = p.x - p2.x;
                        const dy = p.y - p2.y;
                        const dist = Math.sqrt(dx * dx + dy * dy);

                        if (dist < LINK_DISTANCE) {
                            const alpha = (1 - dist / LINK_DISTANCE) * 0.22;
                            ctx.beginPath();
                            ctx.moveTo(p.x, p.y);
                            ctx.lineTo(p2.x, p2.y);
                            ctx.strokeStyle = `rgba(${LINE_COLOR_BASE}, ${alpha})`;
                            ctx.lineWidth = 0.9;
                            ctx.stroke();
                        }
                    }
                }
            }

            animationFrameId = requestAnimationFrame(render);
        };

        animationFrameId = requestAnimationFrame(render);

        return () => {
            cancelAnimationFrame(animationFrameId);
            resizeObserver.disconnect();
            intersectionObserver.disconnect();
            parentSection.removeEventListener('mousemove', handleMouseMove as EventListener);
            parentSection.removeEventListener('mouseleave', handleMouseLeave);
            parentSection.removeEventListener('click', handleClick as EventListener);
        };
    }, []);

    return (
        <div ref={containerRef} className={styles.canvasContainer} aria-hidden="true">
            <canvas ref={canvasRef} className={styles.canvas} />
        </div>
    );
};

export default React.memo(ParticleCanvas);
