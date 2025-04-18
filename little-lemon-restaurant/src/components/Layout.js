import Header from './Header';
import Footer from './Footer';
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import AboutPage from './pages/AboutPage/AboutPage';
import ReservationPage from './pages/BookingPage/BookingPage'
import Developing from './pages/Developing/Developing'
import HomePage from './pages/HomePage/HomePage';
import ConfirmedBooking from './pages/BookingConfirmationPage/ConfirmedBooking';
import Main from './Main';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Main>
        {children}
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/reservations" element={<ReservationPage />}></Route>
          <Route path="/Developing" element={<Developing />}></Route>
          <Route path="/confirmedBooking" element={<ConfirmedBooking />}></Route>
        </Routes>
      </Main>
      <Footer />
    </>
  );
};

export default Layout;