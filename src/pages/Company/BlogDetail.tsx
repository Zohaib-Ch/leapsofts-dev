import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Clock,
  Calendar,
  Share2,
  Copy,
  Check,
  Sparkles,
  Code,
  CheckCircle2,
  BookOpen,
} from 'lucide-react';
import { blogsData, type BlogPost } from '../../data/blogsData';
import { useContactModal } from '../../context/ContactModalContext';
import Button from '../../components/Button/Button';
import styles from './BlogDetail.module.css';
import MetaSEO from '../../components/SEO/MetaSEO';
import { getSanityBlogBySlug } from '../../sanity/queries';
import type { SanityBlog } from '../../sanity/types';

import { buildPageMeta } from '../../utils/seoHelper';

export async function loader({ params }: { params: { slug?: string } }) {
  if (!params.slug) return { sanityData: null };
  const sanityData = await getSanityBlogBySlug(params.slug);
  return { sanityData };
}

export function meta({ data, params }: { data?: any; params?: any }) {
  const sanityData = data?.sanityData;
  const slug = params?.slug || '';
  return buildPageMeta({
    sanityData,
    defaultTitle: sanityData?.title || "Engineering Insights | Leapsofts Blog",
    defaultDescription: sanityData?.excerpt || "Read technical insights and enterprise engineering strategies from Leapsofts.",
    defaultKeywords: "software engineering, tech blog, leapsofts insights",
    canonicalUrl: `https://www.leapsofts.com/blog/${slug}`,
    defaultOgImage: sanityData?.coverImageUrl,
  });
}

const fadeInVariant = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const BlogDetail: React.FC = () => {
  const loaderData = useLoaderData<typeof loader>();
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { openContactModal } = useContactModal();

  const [sanityPost, setSanityPost] = useState<SanityBlog | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState<string>('');
  const [copiedCodeIndex, setCopiedCodeIndex] = useState<number | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  const localPost = useMemo(() => {
    return blogsData.find((b) => b.slug === slug);
  }, [slug]);

  // Load Post data from Sanity
  useEffect(() => {
    window.scrollTo(0, 0);
    let isMounted = true;
    if (slug) {
      setIsLoading(true);
      getSanityBlogBySlug(slug)
        .then((data) => {
          if (isMounted) {
            if (data) setSanityPost(data);
            setIsLoading(false);
          }
        })
        .catch(() => {
          if (isMounted) setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
    return () => {
      isMounted = false;
    };
  }, [slug]);

  const post: BlogPost | null = useMemo(() => {
    if (sanityPost) {
      const slugVal = sanityPost.slug || slug || '';
      return {
        id: sanityPost._id || sanityPost.id || slugVal,
        slug: slugVal,
        title: sanityPost.title,
        subtitle: sanityPost.subtitle || sanityPost.excerpt || '',
        category: (sanityPost.category as any) || 'Enterprise AI',
        readTime: sanityPost.readTime || '5 min read',
        publishedDate: sanityPost.publishedDate || (sanityPost.publishedAt ? new Date(sanityPost.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : 'September 2026'),
        featured: sanityPost.featured || false,
        author: {
          name: sanityPost.author?.name || 'Leapsofts Engineering',
          role: sanityPost.author?.role || 'Technical Lead',
          avatar: sanityPost.author?.avatar || sanityPost.author?.avatarInitials || 'LS',
          bio: sanityPost.author?.bio || '',
        },
        coverImage: sanityPost.coverImageUrl || sanityPost.coverImage || '/projectImages/agileauto.png',
        excerpt: sanityPost.excerpt || sanityPost.subtitle || '',
        tags: sanityPost.tags || [],
        content: sanityPost.content && sanityPost.content.length > 0 ? (sanityPost.content as any) : (localPost?.content || []),
      };
    }
    return localPost || null;
  }, [sanityPost, localPost, slug]);

  // Track scroll progress and active section in ToC
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }

      if (!post || !post.content) return;

      const headings = post.content
        .map((_, index) => document.getElementById(`section-${index}`))
        .filter(Boolean);

      const scrollPos = window.scrollY + 180;
      for (let i = headings.length - 1; i >= 0; i--) {
        const el = headings[i];
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(`section-${i}`);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [post]);

  const handleCopyCode = (code: string, index: number) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeIndex(index);
    setTimeout(() => setCopiedCodeIndex(null), 2500);
  };

  const handleShareLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  if (isLoading && !localPost) {
    return (
      <div className={styles.blogDetailWrapper}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
          <div style={{
            width: '48px',
            height: '48px',
            border: '4px solid rgba(255,255,255,0.1)',
            borderTopColor: '#ec4899',
            borderRadius: '50%',
            animation: 'spin 0.8s linear infinite',
          }} />
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className={styles.blogDetailWrapper}>
        <div className={styles.notFoundState}>
          <h1 className={styles.notFoundTitle}>Article Not Found</h1>
          <p className={styles.notFoundText}>
            The technical insight you are searching for does not exist or has been relocated.
          </p>
          <Button text="Return to Engineering Insights" onClick={() => navigate('/blog')} />
        </div>
      </div>
    );
  }

  const relatedPosts = blogsData.filter((b) => b.id !== post?.id && b.slug !== post?.slug).slice(0, 3);

  return (
    <div className={styles.blogDetailWrapper}>
      <MetaSEO
        seo={sanityPost?.seo}
        defaultTitle={`${post.title} | Leapsofts Engineering Insights`}
        defaultDescription={post.subtitle || post.excerpt}
      />
      {/* Top Reading Progress Bar */}
      <div className={styles.progressBar} style={{ width: `${scrollProgress}%` }} />

      <div className={styles.container}>
        {/* Navigation Bar */}
        <div className={styles.topNav}>
          <Link to="/blog" className={styles.backBtn}>
            <ArrowLeft size={16} />
            Back to Insights
          </Link>

          <span className={styles.categoryBadge}>
            <Sparkles size={14} />
            {post.category}
          </span>
        </div>

        {/* Article Main Header */}
        <motion.header
          className={styles.headerContent}
          initial="hidden"
          animate="visible"
          variants={fadeInVariant}
        >
          <h1 className={styles.articleTitle}>{post.title}</h1>
          <p className={styles.articleSubtitle}>{post.subtitle}</p>

          {/* Meta Information Bar */}
          <div className={styles.metaBar}>
            <div className={styles.authorMeta}>
              <div className={styles.authorAvatar}>{post.author.avatar}</div>
              <div className={styles.authorInfo}>
                <div className={styles.authorName}>{post.author.name}</div>
                <div className={styles.authorRole}>{post.author.role}</div>
              </div>
            </div>

            <div className={styles.metaDivider} />

            <div className={styles.metaDetails}>
              <div className={styles.metaItem}>
                <Calendar size={15} />
                <span>{post.publishedDate}</span>
              </div>
              <div className={styles.metaItem}>
                <Clock size={15} />
                <span>{post.readTime}</span>
              </div>
            </div>

            <div className={styles.metaDivider} />

            {/* Share Group */}
            <div className={styles.shareBtnGroup}>
              <button
                className={styles.shareIconBtn}
                onClick={handleShareLink}
                title="Copy Article Link"
              >
                {copiedLink ? <Check size={16} color="#FF7917" /> : <Copy size={16} />}
              </button>
              <button
                className={styles.shareIconBtn}
                onClick={() =>
                  window.open(
                    `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                      window.location.href
                    )}`,
                    '_blank'
                  )
                }
                title="Share on LinkedIn"
              >
                <Share2 size={16} />
              </button>
            </div>
          </div>
        </motion.header>

        {/* Cover Image Frame */}
        <motion.div
          className={styles.coverContainer}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <img src={post.coverImage} alt={post.title} className={styles.coverImage} />
          <div className={styles.coverOverlay} />
        </motion.div>

        {/* Article Grid Content Layout */}
        <div className={styles.articleGrid}>
          {/* Sticky Table of Contents Sidebar */}
          <aside className={styles.sidebar}>
            <div className={styles.tocCard}>
              <div className={styles.tocTitle}>
                <BookOpen size={15} />
                Table of Contents
              </div>
              <ul className={styles.tocList}>
                {post.content.map((sec, idx) => {
                  if (!sec.heading) return null;
                  const secId = `section-${idx}`;
                  const isActive = activeSection === secId;
                  return (
                    <li key={idx}>
                      <a
                        href={`#${secId}`}
                        className={`${styles.tocLink} ${isActive ? styles.tocLinkActive : ''}`}
                        onClick={(e) => {
                          e.preventDefault();
                          const el = document.getElementById(secId);
                          if (el) {
                            const y = el.getBoundingClientRect().top + window.pageYOffset - 120;
                            window.scrollTo({ top: y, behavior: 'smooth' });
                          }
                        }}
                      >
                        {sec.heading}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Sidebar Contact Callout */}
            <div className={styles.sidebarCtaCard}>
              <h4 className={styles.sidebarCtaTitle}>Need Custom AI & Cloud Architecture?</h4>
              <p className={styles.sidebarCtaDesc}>
                Consult with our senior technical leads to map your enterprise transformation.
              </p>
              <Button
                text="Book Consultation"
                onClick={openContactModal}
              />
            </div>
          </aside>

          {/* Main Content Area */}
          <main className={styles.contentArea}>
            {post.content.map((section, idx) => (
              <motion.section
                key={idx}
                id={`section-${idx}`}
                className={styles.sectionBlock}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={fadeInVariant}
              >
                {section.heading && (
                  <h2 className={styles.sectionHeading}>{section.heading}</h2>
                )}

                {section.paragraphs &&
                  section.paragraphs.map((pText, pIdx) => (
                    <p key={pIdx} className={styles.paragraph}>
                      {pText}
                    </p>
                  ))}

                {/* Key Takeaway Highlight Callout */}
                {section.keyTakeaway && (
                  <div className={styles.keyTakeawayBox}>
                    <div className={styles.takeawayHeader}>
                      <Sparkles size={18} />
                      Key Takeaway
                    </div>
                    <p className={styles.takeawayText}>{section.keyTakeaway}</p>
                  </div>
                )}

                {/* Formatted Code Block */}
                {section.codeBlock && (
                  <div className={styles.codeBlockContainer}>
                    <div className={styles.codeHeader}>
                      <span className={styles.codeFilename}>
                        <Code size={16} />
                        {section.codeBlock.filename || `${section.codeBlock.language} snippet`}
                      </span>
                      <button
                        className={styles.copyCodeBtn}
                        onClick={() => handleCopyCode(section.codeBlock!.code, idx)}
                      >
                        {copiedCodeIndex === idx ? (
                          <>
                            <Check size={14} color="#FF7917" />
                            <span>Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy size={14} />
                            <span>Copy Code</span>
                          </>
                        )}
                      </button>
                    </div>
                    <pre className={styles.codePre}>
                      <code>{section.codeBlock.code}</code>
                    </pre>
                  </div>
                )}

                {/* Bullet Points */}
                {section.bulletPoints && (
                  <ul className={styles.bulletList}>
                    {section.bulletPoints.map((bItem, bIdx) => (
                      <li key={bIdx} className={styles.bulletItem}>
                        <CheckCircle2 className={styles.bulletIcon} size={18} />
                        <span>{bItem}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Quote Block */}
                {section.quote && (
                  <blockquote className={styles.quoteBlock}>
                    "{section.quote}"
                  </blockquote>
                )}
              </motion.section>
            ))}

            {/* Article Tags Footer */}
            <div className={styles.tagsRow}>
              <span className={styles.tagLabel}>Topics:</span>
              {post.tags.map((tag, tIdx) => (
                <span key={tIdx} className={styles.tagPill}>
                  #{tag}
                </span>
              ))}
            </div>

            {/* Author Spotlight Box */}
            <div className={styles.authorSpotlight}>
              <div className={styles.spotlightAvatar}>{post.author.avatar}</div>
              <div className={styles.spotlightContent}>
                <h4 className={styles.spotlightTitle}>Written by {post.author.name}</h4>
                <div className={styles.spotlightRole}>{post.author.role}</div>
                <p className={styles.spotlightBio}>{post.author.bio}</p>
              </div>
            </div>

            {/* High Impact Bottom CTA Banner */}
            <div className={styles.ctaBanner}>
              <div className={styles.ctaGlow} />
              <h3 className={styles.ctaHeading}>
                Ready to Build Resilient, Scale-Ready Software?
              </h3>
              <p className={styles.ctaDescription}>
                Partner with Leapsofts engineering teams to build custom AI pipelines, cloud infrastructure, and modern web & mobile applications.
              </p>
              <Button
                text="Talk to Our Engineering Team"
                onClick={openContactModal}
              />
            </div>
          </main>
        </div>

        {/* Related Technical Articles Section */}
        {relatedPosts.length > 0 && (
          <div className={styles.relatedContainer}>
            <h3 className={styles.relatedHeading}>More Technical Insights</h3>
            <div className={styles.relatedGrid}>
              {relatedPosts.map((rPost) => (
                <Link
                  key={rPost.id}
                  to={`/blog/${rPost.slug}`}
                  className={styles.relatedCard}
                >
                  <div className={styles.relatedImageWrapper}>
                    <img
                      src={rPost.coverImage}
                      alt={rPost.title}
                      className={styles.relatedImage}
                    />
                  </div>
                  <div className={styles.relatedCardBody}>
                    <span className={styles.relatedCardCategory}>{rPost.category}</span>
                    <h4 className={styles.relatedCardTitle}>{rPost.title}</h4>
                    <div className={styles.relatedCardMeta}>
                      <span>{rPost.readTime}</span>
                      <span>•</span>
                      <span>{rPost.publishedDate}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogDetail;
