import Footer from '@/components/footer';
import Header from '@/components/header';
import site from '@/site.config';

const year = new Date().getFullYear();

export const metadata = {
  title: site.title,
  description: site.description,
};

export default function RootLayout({ children }) {
  return (
<html lang="en">
<head>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Courier+Prime:wght@400;700&family=Libre+Franklin:wght@400;600;700;800&family=Stardos+Stencil:wght@700&display=swap" />

<link rel="stylesheet" href="/assets/css/styles.css" />
<script src="/assets/js/main.js" defer></script>
</head>
<body>
<Header />
{children}
<Footer site={site} year={year} />
</body>
</html>
  );
}
