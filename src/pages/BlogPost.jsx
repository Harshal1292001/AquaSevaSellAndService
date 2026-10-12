import { Link, useParams } from 'react-router-dom';
import PageBanner from '../components/PageBanner.jsx';
import CtaStrip from '../components/CtaStrip.jsx';
import useDocumentTitle from '../hooks/useDocumentTitle.js';
import NotFound from './NotFound.jsx';
import { posts, site } from '../data/siteData.js';

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);
  useDocumentTitle(post ? post.title : 'Not found', post ? post.excerpt : undefined);
  if (!post) return <NotFound />;

  const others = posts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <PageBanner title={post.title} crumbs={[{ to: '/blog', label: 'Blog' }]} />
      <section className="section">
        <div className="container">
          <div className="row g-5">
            <article className="col-lg-8 article">
              <img src={post.img} alt={post.title} className="img-fluid rounded-4 mb-4 w-100" />
              <p className="text-muted"><i className="bi bi-calendar3 me-1"></i>{post.date} · {post.readTime}</p>
              {post.sections.map((s, i) => (
                <div key={i}>
                  {s.h && <h3 className="fw-bold mt-4">{s.h}</h3>}
                  {s.p.map((t, j) => <p key={j}>{t}</p>)}
                </div>
              ))}
              <div className="panel mt-5 d-flex flex-wrap gap-3 align-items-center justify-content-between">
                <div><strong>Need help with your RO?</strong><div className="text-muted small">Same-day doorstep service in Chinchwad – Pune.</div></div>
                <a href={`tel:${site.phone}`} className="btn btn-accent rounded-pill px-4"><i className="bi bi-telephone-fill me-2"></i>{site.phone}</a>
              </div>
              <Link to="/blog" className="link-call d-inline-block mt-4"><i className="bi bi-arrow-left me-1"></i>Back to all articles</Link>
            </article>

            <aside className="col-lg-4">
              <div className="panel sticky-side">
                <h5 className="fw-bold mb-3">More Articles</h5>
                {others.map((o) => (
                  <Link to={`/blog/${o.slug}`} className="side-post" key={o.slug}>
                    <img src={o.img} alt="" loading="lazy" decoding="async" />
                    <span>{o.title}</span>
                  </Link>
                ))}
                <hr />
                <h6 className="fw-bold">Quick Contact</h6>
                <p className="small mb-1"><i className="bi bi-telephone-fill me-2 text-brand"></i><a href={`tel:${site.phone}`}>{site.phone}</a></p>
                <p className="small mb-0"><i className="bi bi-envelope-fill me-2 text-brand"></i><a href={`mailto:${site.email}`}>{site.email}</a></p>
              </div>
            </aside>
          </div>
        </div>
      </section>
      <CtaStrip title="Book AMC Plan For RO Water Purifier" />
    </>
  );
}
