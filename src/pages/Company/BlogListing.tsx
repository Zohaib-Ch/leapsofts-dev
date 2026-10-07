import React, { useState, useEffect } from 'react';
import styles from './BlogListing.module.css';
import { motion } from 'framer-motion';
import { Link, useLoaderData } from 'react-router';
import { Search, Clock, Calendar, ArrowRight, Sparkles } from 'lucide-react';
import { blogsData } from '../../data/blogsData';
import Button from '../../components/Button/Button';
import MetaSEO from '../../components/SEO/MetaSEO';
import { getSanityBlogs } from '../../sanity/queries';
import type { SanityBlog } from '../../sanity/types';
import { buildPageMeta } from '../../utils/seoHelper';

export async function loader() {
  const sanityData = await getSanityBlogs();
  return { sanityData };
}

export function meta({ data }: { data?: any }) {
  const sanityData = data?.sanityData;
  const firstBlogSeo = Array.isArray(sanityData) ? sanityData[0]?.seo : null;
  return buildPageMeta({
    sanityData: { seo: firstBlogSeo },
    defaultTitle: "Engineering Insights & Software Development Blog | Leapsofts",
    defaultDescription: "Expert articles on custom software development, cloud engineering, AI/ML, and digital transformation from the Leapsofts engineering team.",
    defaultKeywords: "software development blog, engineering insights, cloud architecture articles, AI development articles",
    canonicalUrl: "https://www.leapsofts.com/blog",
  });
}

const categories = ['All Topics', 'Enterprise AI', 'Cloud Architecture', 'Product Engineering', 'Cyber Security'];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const cardChildVariant = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const BlogListing: React.FC = () => {
  const loaderData = useLoaderData<typeof loader>();
  const [selectedCategory, setSelectedCategory] = useState('All Topics');
  const [searchQuery, setSearchQuery] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [emailInput, setEmailInput] = useState('');
  const [sanityBlogs, setSanityBlogs] = useState<SanityBlog[] | null>(null);

  useEffect(() => {
    if (!loaderData?.sanityData) {
      getSanityBlogs().then((data) => {
        if (data) setSanityBlogs(data);
      });
    }
  }, [loaderData]);

  const normalizedPosts = React.useMemo(() => {
    const rawList = (loaderData?.sanityData && loaderData.sanityData.length > 0)
      ? loaderData.sanityData
      : ((sanityBlogs && sanityBlogs.length > 0) ? sanityBlogs : blogsData);

    const uniqueMap = new Map();
    rawList.forEach((blog: any) => {
      const slug = blog.slug?.current || blog.slug || '';
      if (slug && !uniqueMap.has(slug)) {
        const title = blog.title || '';
        const subtitle = blog.subtitle || '';
        const category = blog.category || 'Enterprise AI';
        const readTime = blog.readTime || '5 min read';
        const publishedDate = blog.publishedDate || (blog.publishedAt ? new Date(blog.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : 'September 2026');
        const featured = blog.featured || false;
        const excerpt = blog.excerpt || blog.subtitle || '';
        const coverImage = blog.coverImageUrl || blog.coverImage || '/projectImages/agileauto.png';

        const author = {
          name: blog.author?.name || 'Leapsofts Engineering',
          role: blog.author?.role || 'Technical Lead',
          avatar: blog.author?.avatar || blog.author?.avatarInitials || 'LS',
        };

        uniqueMap.set(slug, {
          id: blog._id || blog.id || slug,
          slug,
          title,
          subtitle,
          category,
          readTime,
          publishedDate,
          featured,
          coverImage,
          excerpt,
          author,
          tags: blog.tags || [],
        });
      }
    });

  const normalizedPosts = React.useMemo(() => {
    const rawList = (sanityBlogs && sanityBlogs.length > 0) ? sanityBlogs : blogsData;
    return rawList.map((blog: any) => {
      const slug = blog.slug?.current || blog.slug || '';
      const title = blog.title || '';
      const subtitle = blog.subtitle || '';
      const category = blog.category || 'Enterprise AI';
      const readTime = blog.readTime || '5 min read';
      const publishedDate = blog.publishedDate || (blog.publishedAt ? new Date(blog.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : 'September 2026');
      const featured = blog.featured || false;
      const excerpt = blog.excerpt || blog.subtitle || '';
      const coverImage = blog.coverImageUrl || blog.coverImage || '/projectImages/agileauto.png';

      const author = {
        name: blog.author?.name || 'Leapsofts Engineering',
        role: blog.author?.role || 'Technical Lead',
        avatar: blog.author?.avatar || blog.author?.avatarInitials || 'LS',
      };

      return {
        id: blog._id || blog.id || slug,
        slug,
        title,
        subtitle,
        category,
        readTime,
        publishedDate,
        featured,
        coverImage,
        excerpt,
        author,
        tags: blog.tags || [],
      };
    });
  }, [sanityBlogs]);

  const featuredPost = normalizedPosts.find((post) => post.featured) || normalizedPosts[0];

  const filteredPosts = normalizedPosts.filter((post) => {
    const matchesCategory = selectedCategory === 'All Topics' || post.category === selectedCategory;
    const matchesQuery =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  const gridPosts = React.useMemo(() => {
    if (selectedCategory === 'All Topics' && !searchQuery && featuredPost) {
      return filteredPosts.filter((post) => post.slug !== featuredPost.slug);
    }
    return filteredPosts;
  }, [filteredPosts, featuredPost, selectedCategory, searchQuery]);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setEmailInput('');
    }
  };

  return (
    <div className={styles.blogListingPage}>
      <MetaSEO
        defaultTitle="Engineering Insights & Architecture Tech Blog | Leapsofts"
        defaultDescription="Read technical articles, AI system architecture blueprints, MLOps, cloud microservices, and product strategy insights from Leapsofts engineering leaders."
      />
      {/* Chapter 1: Hero Header & Search Controls */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.heroContent}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.label}>ENGINEERING INSIGHTS & THOUGHT LEADERSHIP</span>
            <h1 className={styles.heroTitle}>
              Architectural Rigor for <em>Technical Founders</em>
            </h1>
            <p className={styles.heroSub}>
              Technical insights on custom software development, enterprise AI engineering, cloud microservices architecture, and modern digital transformation strategies from Leapsofts lead software architects.
            </p>

            {/* Search Bar & Category Pills */}
            <div className={styles.controlsWrapper}>
              <div className={styles.searchBar}>
                <Search className={styles.searchIcon} size={18} />
                <input
                  type="text"
                  placeholder="Search architecture insights, AI pipelines, tags..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={styles.searchInput}
                />
              </div>

              <div className={styles.categoryPills}>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    className={`${styles.pillBtn} ${selectedCategory === cat ? styles.activePillBtn : ''}`}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Chapter 2: Featured Article Spotlight */}
      <section className={styles.section}>
        {selectedCategory === 'All Topics' && !searchQuery && featuredPost && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <Link to={`/blog/${featuredPost.slug}`} className={styles.spotlightCard}>
              <div className={styles.spotlightImageWrapper}>
                <img src={featuredPost.coverImage} alt={featuredPost.title} className={styles.spotlightImage} />
              </div>

              <div className={styles.spotlightContent}>
                <div>
                  <span className={styles.spotlightBadge}>
                    <Sparkles className="w-3.5 h-3.5 inline mr-1" /> FEATURED ARCHITECTURE ARTICLE
                  </span>
                  <h2 className={styles.spotlightTitle}>{featuredPost.title}</h2>
                  <p className={styles.spotlightSubtitle}>{featuredPost.subtitle}</p>
                </div>

                <div className={styles.articleFooter}>
                  <div className={styles.authorBox}>
                    <div className={styles.authorAvatar}>{featuredPost.author.avatar}</div>
                    <div>
                      <div className={styles.authorName}>{featuredPost.author.name}</div>
                      <div className="text-xs text-gray-400">{featuredPost.author.role}</div>
                    </div>
                  </div>

                  <span className={styles.readMoreBtn}>
                    Read Article <ArrowRight className="w-4 h-4 ml-1" />
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* Chapter 3: Filtered Articles Grid */}
        <h2 className={styles.gridTitle}>
          {selectedCategory === 'All Topics' ? 'Latest Publications' : `${selectedCategory} Articles`}
        </h2>

        {gridPosts.length === 0 ? (
          <div className="text-center py-16 bg-white/5 rounded-2xl border border-white/10 my-8">
            <h3 className="text-xl font-bold text-white mb-2">No Articles Found</h3>
            <p className="text-gray-400 text-sm">Try broadening your search query or selecting another category.</p>
          </div>
        ) : (
          <motion.div
            className={styles.articlesGrid}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {gridPosts.map((post) => (
              <motion.div key={post.id} variants={cardChildVariant}>
                <Link to={`/blog/${post.slug}`} className={styles.articleCard}>
                  <div className={styles.articleImageWrapper}>
                    <img src={post.coverImage} alt={post.title} className={styles.articleImage} />
                    <span className={styles.articleCategory}>{post.category}</span>
                  </div>

                  <div className={styles.articleBody}>
                    <div>
                      <div className={styles.articleMeta}>
                        <div className="flex items-center gap-1">
                          <Calendar size={13} />
                          <span>{post.publishedDate}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={13} />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      <h3 className={styles.articleTitle}>{post.title}</h3>
                      <p className={styles.articleExcerpt}>{post.excerpt}</p>
                    </div>

                    <div className={styles.articleFooter}>
                      <div className={styles.authorBox}>
                        <div className={styles.authorAvatar}>{post.author.avatar}</div>
                        <div className={styles.authorName}>{post.author.name}</div>
                      </div>

                      <span className={styles.readMoreBtn}>
                        Read <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Chapter 4: Architect's Newsletter Box */}
        <motion.div
          className={styles.newsletterBox}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.newsletterTitle}>
            Senior Engineering <em>Blueprints</em> in Your Inbox
          </h2>
          <p className={styles.newsletterSub}>
            Subscribe to receive bi-weekly architecture teardowns, AI production strategies, and cloud security compliance updates. No spam, pure technical depth.
          </p>

          {subscribed ? (
            <div className="bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 font-mono text-sm py-3 px-6 rounded-full inline-flex items-center gap-2">
              <Sparkles size={16} /> Subscribed! You will receive our next architecture blueprint.
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className={styles.newsletterForm}>
              <input
                type="email"
                placeholder="Enter your work email address..."
                required
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                className={styles.newsletterInput}
              />
              <Button text="Subscribe" color1="var(--color-primary)" color2="var(--color-primary-light)" />
            </form>
          )}
        </motion.div>
      </section>
    </div>
  );
};

export default BlogListing;
