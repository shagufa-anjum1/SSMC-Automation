import React from 'react';
import { Container } from '@components/layout/Container';
import { Card } from '@components/ui/Card';

export const HomeCapabilities: React.FC = () => {
  const capabilities = [
    {
      icon: '🔧',
      title: 'Injection Molding',
      description:
        'Advanced plastic injection molding with 500+ machines ranging from 90T to 2100T. Precision manufacturing for complex components.',
    },
    {
      icon: '⚙️',
      title: 'Assembly Services',
      description:
        'Complete assembly solutions with automated production lines. Quality control at every stage ensuring zero defects.',
    },
    {
      icon: '🎨',
      title: 'Surface Finishing',
      description:
        'State-of-the-art PU painting and powder coating facilities. Premium surface finishes for aesthetic and functional requirements.',
    },
    {
      icon: '🔬',
      title: 'Quality Control',
      description:
        'ISO-certified quality management systems. Advanced testing facilities and 100% inspection protocols.',
    },
    {
      icon: '📐',
      title: 'Design Engineering',
      description:
        'Expert CAD/CAM design services. DFM analysis and rapid prototyping for optimized manufacturability.',
    },
    {
      icon: '🤖',
      title: 'Automation Solutions',
      description:
        'Fully automated production processes. Industry 4.0 ready manufacturing with real-time monitoring.',
    },
  ];

  return (
    <section style={{ padding: '5rem 0', background: '#f8f9fa' }}>
      <Container>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '1rem' }}>
            Our Core Capabilities
          </h2>
          <p style={{ fontSize: '1.125rem', color: '#666', maxWidth: '700px', margin: '0 auto' }}>
            End-to-end manufacturing solutions powered by cutting-edge technology and skilled
            workforce
          </p>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
          }}
        >
          {capabilities.map((capability, index) => (
            <Card key={index} style={{ padding: '2rem', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{capability.icon}</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>
                {capability.title}
              </h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>{capability.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};
