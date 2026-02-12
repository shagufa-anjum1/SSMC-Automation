import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { MinimalLayout } from '../layouts/MinimalLayout';

// Lazy load pages
const Home = React.lazy(() => import('../pages/Home'));
const About = React.lazy(() => import('../pages/About'));
const Services = React.lazy(() => import('../pages/Services'));
const Industries = React.lazy(() => import('../pages/Industries'));
const Engineering = React.lazy(() => import('../pages/Engineering'));
const Sustainability = React.lazy(() => import('../pages/Sustainability'));
const Careers = React.lazy(() => import('../pages/Careers'));
const Contact = React.lazy(() => import('../pages/Contact'));
const NotFound = React.lazy(() => import('../pages/NotFound'));

const LoadingSpinner = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontSize: '24px',
      color: '#1570EF',
    }}
  >
    Loading...
  </div>
);

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="industries" element={<Industries />} />
            <Route path="engineering" element={<Engineering />} />
            <Route path="sustainability" element={<Sustainability />} />
            <Route path="careers" element={<Careers />} />
            <Route path="contact" element={<Contact />} />
          </Route>
          <Route
            path="*"
            element={
              <MinimalLayout>
                <NotFound />
              </MinimalLayout>
            }
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
