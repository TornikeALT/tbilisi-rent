import { FaAngleDoubleUp } from 'react-icons/fa';

import { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY;

      if (scrollPosition > scrollHeight / 2 - windowHeight / 2) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <FaAngleDoubleUp
      size={35}
      color="blue"
      className={`cursor-pointer fixed bottom-4 right-8 ${
        isVisible ? 'block' : 'hidden'
      } hover:-translate-y-1 hover:scale-110`}
      onClick={scrollTop}
    />
  );
};

export default ScrollToTop;
