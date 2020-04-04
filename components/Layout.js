import React, { createRef, useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import MobileMenu from './MobileMenu';
import { usePopup } from '../utils';

const options = {};
const Layout = ({ children }) => {
  const [isOpen, setOpen] = usePopup();
  const [showFixedHeader, setShowHeader] = useState(false);

  const headerRef = createRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        setShowHeader(!entry.isIntersecting);
      });
    }, options);
    observer.observe(headerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header
        isFixed={false}
        isOpen={isOpen}
        setOpen={setOpen}
        ref={headerRef}
        showFixedHeader={showFixedHeader}
      />
      <Header
        isFixed={true}
        isOpen={isOpen}
        setOpen={setOpen}
        showFixedHeader={showFixedHeader}
      />
      <MobileMenu isOpen={isOpen} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
