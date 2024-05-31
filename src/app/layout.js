import '@/scss/style.scss'
import 'react-toastify/dist/ReactToastify.css';
import StoreProvider from './StoreProvider';
import { ToastContainer } from 'react-toastify';

// Components
import SupHeader from "@/components/supHeader/SupHeader";
import SubHeader from '@/components/subHeader/SubHeader';
import Footer from "@/components/footer/Footer";
import Backtop from '@/components/backtop/Backtop';

export const metadata = {
  title: "Welcome E-Comm",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <SupHeader />
          <SubHeader />
          {children}
          <Footer />
          <Backtop />
          <ToastContainer />
        </StoreProvider>
      </body>
    </html>
  );
}
