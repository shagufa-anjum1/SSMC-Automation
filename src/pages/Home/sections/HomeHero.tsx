import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@components/layout/Container';
import { Button } from '@components/ui/Button';

export const HomeHero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Building a Greener Tomorrow',
      description:
        'Leading manufacturer of precision plastic components with sustainable manufacturing practices',
      image: '/src/assets/images/Service/ServiceHeroImg1.jpg',
      link: '/sustainability',
    },
    {
      title: 'Leadership Through Innovation',
      description: 'Advanced automation solutions and cutting-edge manufacturing technology',
      image:
        '/src/assets/images/Service/ServiceHeroImg2.jpg',
      link: '/about',
    },
    {
      title: 'Redefining Manufacturing Excellence',
      description:
        'Precision-engineered plastic components for electronics and automotive industries',
      image:
        '/src/assets/images/Service/servicePro1.jpg',
      link: '/services',
    },
    {
      title: 'Shaping the Future of Industry',
      description: 'State-of-the-art injection molding and assembly services for global brands',
      image:
        '/src/assets/images/Service/servicePro2.jpg',
      link: '/industries',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section
      style={{
        position: 'relative',
        height: '70vh',
        minHeight: '600px',
        overflow: 'hidden',
        color: 'white',
      }}
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${slide.image})`, // Darker overlay
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: currentSlide === index ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
            zIndex: currentSlide === index ? 1 : 0,
          }}
        >
          <Container style={{ height: '100%' }}>
            <div
              style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                maxWidth: '800px',
              }}
            >
              <h1
                style={{
                  fontSize: '4.5rem',
                  fontWeight: '700',
                  marginBottom: '1.5rem',
                  marginTop: '5rem',
                  lineHeight: '1.1',
                  color: '#FFFFFF', // Pure white
                  textShadow: '0 4px 30px rgba(0, 0, 0, 0.9), 0 2px 10px rgba(0, 0, 0, 0.8)', // Stronger shadow
                  opacity: currentSlide === index ? 1 : 0,
                  transform: currentSlide === index ? 'translateY(0)' : 'translateY(30px)',
                  transition: 'all 0.8s ease-out 0.3s',
                }}
              >
                {slide.title}
              </h1>

              <p
                style={{
                  fontSize: '1.5rem',
                  marginBottom: '3rem',
                  lineHeight: '1.6',
                  color: '#FFFFFF', // Pure white
                  textShadow: '0 3px 20px rgba(0, 0, 0, 0.9), 0 1px 8px rgba(0, 0, 0, 0.7)', // Stronger shadow
                  opacity: currentSlide === index ? 1 : 0,
                  transform: currentSlide === index ? 'translateY(0)' : 'translateY(30px)',
                  transition: 'all 0.8s ease-out 0.5s',
                }}
              >
                {slide.description}
              </p>

              <Link
                to={slide.link}
                style={{
                  opacity: currentSlide === index ? 1 : 0,
                  transform: currentSlide === index ? 'translateY(0)' : 'translateY(30px)',
                  transition: 'all 0.8s ease-out 0.7s',
                  textDecoration: 'none',
                }}
              >
                <Button
                  size="large"
                  style={{
                    background: 'white',
                    color: '#1570EF',
                    padding: '1.2rem 3rem',
                    fontSize: '1.15rem',
                    fontWeight: '600',
                    border: 'none',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                    cursor: 'pointer',
                  }}
                >
                  Know More →
                </Button>
              </Link>
            </div>
          </Container>
        </div>
      ))}

      {/* Navigation Dots */}
      <div
        style={{
          position: 'absolute',
          bottom: '3rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '1rem',
          zIndex: 10,
        }}
      >
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            style={{
              width: currentSlide === index ? '50px' : '12px',
              height: '12px',
              borderRadius: '6px',
              background: currentSlide === index ? 'white' : 'rgba(255, 255, 255, 0.5)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Arrow Navigation */}
      <button
        onClick={() => goToSlide((currentSlide - 1 + slides.length) % slides.length)}
        style={{
          position: 'absolute',
          left: '2rem',
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'rgba(255, 255, 255, 0.3)',
          border: 'none',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          color: 'white',
          fontSize: '1.5rem',
          cursor: 'pointer',
          zIndex: 10,
          backdropFilter: 'blur(10px)',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.5)')}
        onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)')}
      >
        ‹
      </button>

      <button
        onClick={() => goToSlide((currentSlide + 1) % slides.length)}
        style={{
          position: 'absolute',
          right: '2rem',
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'rgba(255, 255, 255, 0.3)',
          border: 'none',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          color: 'white',
          fontSize: '1.5rem',
          cursor: 'pointer',
          zIndex: 10,
          backdropFilter: 'blur(10px)',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.5)')}
        onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)')}
      >
        ›
      </button>
    </section>
  );
};
