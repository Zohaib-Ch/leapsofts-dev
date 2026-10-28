import React, { useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import {
  Database,
  Clock,
  ShieldCheck,
  Activity,
  TrendingUp,
  Target,
  BarChart3,
  Mail,
  Zap,
  Award,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';
import styles from './GrowthHeroMetrics.module.css';

export interface MetricItem {
  value: string;
  label: string;
  description: string;
  iconName?: string;
}

interface GrowthHeroMetricsProps {
  metrics: MetricItem[];
}

function resolveIcon(item: MetricItem, idx: number): { Icon: LucideIcon; isLive?: boolean } {
  const label = item.label.toLowerCase();
  const val = item.value.toLowerCase();
  const desc = item.description.toLowerCase();

  // Explicit Live Real-Time Beacon only when value or label explicitly indicates real-time / live
  if (val.includes('real-time') || label.includes('real-time') || val.includes('live') || label.includes('live')) {
    return { Icon: Activity, isLive: true };
  }

  // Label prioritized matching
  if (label.includes('sync') || label.includes('integration') || label.includes('crm') || label.includes('system')) {
    return { Icon: Database };
  }
  if (label.includes('time') || label.includes('saved') || label.includes('speed') || label.includes('cycle') || label.includes('hour') || label.includes('launch')) {
    return { Icon: Clock };
  }
  if (label.includes('reliab') || label.includes('retention') || label.includes('security') || label.includes('tactic') || label.includes('sla')) {
    return { Icon: ShieldCheck };
  }
  if (label.includes('velocity') || label.includes('traffic') || label.includes('roas') || label.includes('roi') || label.includes('lift')) {
    return { Icon: TrendingUp };
  }
  if (label.includes('lead') || label.includes('capture') || label.includes('demo') || label.includes('close') || label.includes('conversion') || label.includes('cpa')) {
    return { Icon: Target };
  }
  if (label.includes('dashboard') || label.includes('deal') || label.includes('spend') || label.includes('arr') || label.includes('pipeline') || label.includes('revenue')) {
    return { Icon: BarChart3 };
  }
  if (label.includes('inbox') || label.includes('email') || label.includes('placement')) {
    return { Icon: Mail };
  }
  if (label.includes('rank') || label.includes('keyword') || label.includes('top')) {
    return { Icon: Award };
  }

  // Fallback to description keywords
  if (desc.includes('sync') || desc.includes('database')) return { Icon: Database };
  if (desc.includes('webhook') || desc.includes('automation')) return { Icon: Zap };
  if (desc.includes('lead') || desc.includes('pipeline')) return { Icon: Target };

  const fallbacks: LucideIcon[] = [Zap, Clock, ShieldCheck, Sparkles];
  return { Icon: fallbacks[idx % fallbacks.length] };
}

function parseValue(raw: string) {
  const trimmed = raw.trim();
  const match = trimmed.match(/^([^\d.,\-+]*)([-+]?[\d.,]+)(.*)$/);

  if (!match) {
    return {
      prefix: '',
      number: trimmed,
      suffix: '',
      isWordSuffix: false,
      isTextOnly: true,
    };
  }

  const suffix = match[3]?.trim() ?? '';
  // Multi-char alphabetic suffixes like "min", "Days", "hrs" get word spacing, whereas "%", "x", "k" stay snug
  const isWordSuffix = suffix.length > 1 && /^[a-zA-Z]/.test(suffix);

  return {
    prefix: match[1]?.trim() ?? '',
    number: match[2]?.trim() ?? '',
    suffix: suffix,
    isWordSuffix,
    isTextOnly: false,
  };
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const GrowthHeroMetrics: React.FC<GrowthHeroMetricsProps> = ({ metrics }) => {
  const gridRef = useRef<HTMLDivElement>(null);

  // 90fps - 120fps Cursor Light Tracking (Zero React Re-renders, Pure GPU CSS Variable Update)
  const handlePointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (!gridRef.current) return;
    const rect = gridRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    gridRef.current.style.setProperty('--mouse-x', `${x}px`);
    gridRef.current.style.setProperty('--mouse-y', `${y}px`);
  }, []);

  if (!metrics || metrics.length === 0) return null;

  return (
    <div className={styles['metrics-wrapper']}>
      {/* Soft Ambient Background Mesh Glow */}
      <div className={styles['ambient-mesh-glow']} aria-hidden="true" />

      {/* Grid Container */}
      <motion.div
        ref={gridRef}
        className={styles['metrics-grid']}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        onPointerMove={handlePointerMove}
      >
        {metrics.map((item, idx) => {
          const { Icon, isLive } = resolveIcon(item, idx);
          const parsed = parseValue(item.value);

          return (
            <motion.div
              key={idx}
              className={styles['metric-card']}
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.015 }}
              transition={{ type: 'spring', stiffness: 380, damping: 25 }}
            >
              {/* Interactive Spotlight Overlay */}
              <div className={styles['spotlight-overlay']} aria-hidden="true" />

              {/* Card Top Row: Micro Badge / Live Indicator */}
              <div className={styles['card-top']}>
                {isLive ? (
                  <div className={styles['live-pill']} title="Real-Time Data Pipeline Active">
                    <span className={styles['pulse-beacon']}>
                      <span className={styles['pulse-ring']} />
                      <span className={styles['pulse-dot']} />
                    </span>
                    <span className={styles['live-text']}>REAL-TIME</span>
                  </div>
                ) : (
                  <div className={styles['icon-pill']}>
                    <Icon size={15} strokeWidth={2.2} className={styles['icon-graphic']} />
                  </div>
                )}
              </div>

              {/* Metric Value Display */}
              <div className={styles['metric-value-container']}>
                {parsed.isTextOnly ? (
                  <span className={styles['metric-text-val']}>{parsed.number}</span>
                ) : (
                  <div className={styles['metric-num-group']}>
                    {parsed.prefix && <span className={styles['metric-prefix']}>{parsed.prefix}</span>}
                    <span className={styles['metric-num']}>{parsed.number}</span>
                    {parsed.suffix && (
                      <span className={`${styles['metric-suffix']} ${parsed.isWordSuffix ? styles['word-suffix'] : ''}`}>
                        {parsed.suffix}
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Metric Label & Contextual Description */}
              <div className={styles['metric-label']}>{item.label}</div>
              <div className={styles['metric-desc']}>{item.description}</div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default GrowthHeroMetrics;
