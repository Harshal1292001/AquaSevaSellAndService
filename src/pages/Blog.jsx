import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner.jsx';
import Reveal from '../components/Reveal.jsx';
import TiltCard from '../components/TiltCard.jsx';
import CtaStrip from '../components/CtaStrip.jsx';
import useDocumentTitle from '../hooks/useDocumentTitle.js';
import { posts } from '../data/siteData.js';

export default function Blog() {
  useDocumentTitle('Blog');
  return (
    <>
      <PageBanner title="Blog" />
      <section className="section">
        <div className="container">
          <p className="lead text-center mb-5 mx-auto" style={{ maxWidth: 680 }}>
            Practical tips on RO maintenance, water quality and getting the most from your water purifier.
          </p>
          <div className="row g-4">
            {posts.map((p, i) => (
              <Reveal className="col-md-6" key={p.slug} delay={(i % 2) * 100}>
                <TiltCard className="post-card h-100" max={6}>
                  <Link to={`/blog/${p.slug}`} className="post-img"><img loading="lazy" decoding="async" src={p.img} alt={p.title} /></Link>
                  <div className="p-4">
                    <small className="text-muted"><i className="bi bi-calendar3 me-1"></i>{p.date} · {p.readTime}</small>
                    <h4 className="fw-bold mt-2"><Link to={`/blog/${p.slug}`} className="stretched-title">{p.title}</Link></h4>
                    <p className="text-muted">{p.excerpt}</p>
                    <Link to={`/blog/${p.slug}`} className="link-call">Read article <i className="bi bi-arrow-right ms-1"></i></Link>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaStrip title="Questions About Your RO? Just Call Us" />
    </>
  );
}
