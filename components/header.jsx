'use client';

import { useCurrent } from '@/components/current';

export default function Header() {
  const current = useCurrent();
  return (
<>
<a className="skip" href="#main">Skip to content</a>
  <p className="topbar">Farm stand open <strong>Fri to Sun, 9 to 6</strong> on County Road B. The honor box never closes.</p>
  <header className="site-header">
    <div className="wrap">
      <a className="logo" href="/" aria-label="Bramblecut Farm, home">
        <img src="/assets/img/mark.svg" alt="" width="46" height="46" />{' '}
        <span>Bramblecut<small>Farm · Est. 2011</small></span>
      </a>{' '}
      <button className="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav"><span aria-hidden="true"></span>Menu</button>
      <nav className="nav" id="site-nav" aria-label="Main">
        <ul>
          <li><a href="/" {...current("/")}>Home</a></li>
          <li><a href="/pricing/" {...current("/pricing/")}>Shares &amp; pricing</a></li>
          <li><a href="/about/" {...current("/about/")}>About the farm</a></li>
          <li><a href="/blog/" {...current("/blog/")}>Farm notes</a></li>
          <li><a href="/contact/" {...current("/contact/")}>Contact</a></li>
        </ul>
        <a className="btn btn--sm" href="/pricing/">Join the CSA</a>
      </nav>
    </div>
  </header>
</>
  );
}
