export default function PostList({ posts, paginator }) {
  return (
<main id="main">
    <section className="page-hero" aria-labelledby="page-title">
      <div className="wrap">
        <div>
          <p className="kicker">Farm notes · Every Wednesday since 2013</p>
          <h1 id="page-title">Notes from the rows, written after chores.</h1>
          <p className="lede">The Wednesday note goes out the night before every pickup: what went into the ground, what came out of it, what to cook with the crate, and what the weather did to the peppers. These are the ones members asked us to keep.</p>
        </div>
        <p className="stamp stamp--round">Written<strong>Wed.</strong>packed Thurs.</p>
      </div>
    </section>

    <section className="section band" aria-label="Latest farm notes">
      <div className="wrap">
        <div className="post-list">
          {posts.map((post) => (
            <article key={post.slug} className="post-card">
              <div className="packet">
                <div className="packet__top"><span>Farm note</span><span className="reg" aria-hidden="true"></span></div>
                <div className="packet__art"><img src={post.cover} alt="" width="200" height="200" loading="lazy" /></div>
                <h2 className="packet__name"><a href={post.url}>{post.title}</a></h2>
                <p className="post-card__excerpt">{post.description}</p>
                <p className="post-card__by"><span>Bramblecut Farm</span><span className="post-date">{post.date}</span></p>
                <div className="packet__ink" aria-hidden="true"><i></i><i></i><i></i></div>
              </div>
            </article>
          ))}
        </div>

        <nav className="pagination" aria-label="Blog pages">
          {paginator.prev && (<><a className="pagination__step" href={paginator.prev}>&larr; Newer notes</a></>)}{' '}
          {paginator.next && (<><a className="pagination__step" href={paginator.next}>Older notes &rarr;</a></>)}
        </nav>
      </div>
    </section>
  </main>
  );
}
