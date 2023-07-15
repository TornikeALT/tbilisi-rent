import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation';
import FooterContent from '../components/FooterContent';

function RootLayout() {
  return (
    <>
      <Navigation />
      <Outlet />
      <footer className="mt-40 pb-20">
        <FooterContent />
      </footer>
    </>
  );
}

export default RootLayout;
