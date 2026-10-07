import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Clock, Calendar, ArrowRight } from 'lucide-react';
import { blogsData } from '../../data/blogsData';
import Button from '../Button/Button';
import { getSanityBlogs } from '../../sanity/queries';
import type { SanityBlog } from '../../sanity/types';
import styles from './BlogSection.module.css';

const headerVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const cardChildVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: 'easeOut' },
  },
};

const BlogSection: React.FC = () => {
  const navigate = useNavigate();
  const [sanityBlogs, setSanityBlogs] = React.useState<SanityBlog[] | null>(null);

  React.useEffect(() => {
    getSanityBlogs().then((data) => {
      if (data) setSanityBlogs(data);
    });
  }, []);

  const latestArticles = React.useMemo(() => {
    const rawList = (sanityBlogs && sanityBlogs.length > 0) ? sanityBlogs : blogsData;
    return rawList.slice(0, 3).map((blog: any) => {
      const slug = blog.slug?.current || blog.slug || '';
      return {
        id: blog._id || blog.id || slug,
        slug,
        title: blog.title || '',
        category: blog.category || 'Enterprise AI',
        readTime: blog.readTime || '5 min read',
        publishedDate: blog.publishedDate || (blog.publishedAt ? new Date(blog.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : 'September 2026'),
        coverImage: blog.coverImageUrl || blog.coverImage || '/projectImages/agileauto.png',
        excerpt: blog.excerpt || blog.subtitle || '',
        author: {
          name: blog.author?.name || 'Leapsofts Engineering',
          role: blog.author?.role || 'Technical Lead',
          avatar: blog.author?.avatar || blog.author?.avatarInitials || 'LS',
        },
      };
    });
  }, [sanityBlogs]);

  return (
    <section className={styles.blogSection} id="insights">
      <motion.div
        className={styles.sectionHeader}
        variants={headerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <span className={styles.label}>ENGINEERING INSIGHTS & THOUGHT LEADERSHIP</span>
        <h2 className={styles.title}>
          Architectural Rigor & <em>Tech Insights</em>
        </h2>
        <p className={styles.subtitle}>
          Deep dives into cloud engineering, autonomous AI workflows, zero-trust security, and enterprise product scaling from our senior architects.
        </p>
      </motion.div>

      <motion.div
        className={styles.blogGrid}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {latestArticles.map((article) => (
          <motion.div key={article.id} variants={cardChildVariant}>
            <Link to={`/blog/${article.slug}`} className={styles.blogCard}>
              <div className={styles.imageWrapper}>
                <img
                  src={article.coverImage}
                  alt={article.title}
                  className={styles.coverImage}
                  loading="lazy"
                />
                <span className={styles.categoryBadge}>{article.category}</span>
              </div>

              <div className={styles.cardBody}>
                <div>
                  <div className={styles.metaRow}>
                    <div className={styles.metaItem}>
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{article.publishedDate}</span>
                    </div>
                    <div className={styles.metaItem}>
                      <Clock className="w-3.5 h-3.5" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  <h3 className={styles.cardTitle}>{article.title}</h3>
                  <p className={styles.cardExcerpt}>{article.excerpt}</p>
                </div>

                <div className={styles.cardFooter}>
                  <div className={styles.authorBox}>
                    <div className={styles.authorAvatar}>{article.author.avatar}</div>
                    <div>
                      <div className={styles.authorName}>{article.author.name}</div>
                      <div className={styles.authorRole}>{article.author.role}</div>
                    </div>
                  </div>

                  <span className={styles.readMoreBtn}>
                    Read <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      <div className={styles.ctaWrapper}>
        <Button
          text="Explore All Engineering Insights"
          color1="var(--color-primary)"
          color2="var(--color-primary-light)"
          onClick={() => navigate('/blog')}
        />
      </div>
    </section>
  );
};

export default BlogSection;
