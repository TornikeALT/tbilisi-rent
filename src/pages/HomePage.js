import Banner from '../components/Banner';
import BookCar from '../components/BookCar';
import CarInfo from '../components/CarInfo';
import Faq from '../components/Faq';
import PlanTrip from '../components/PlanTrip';
import ScrollToTop from '../components/ScrollToTop';
import bookRideImage from '../images/images/car images/Top-Car-Rentals-in-Mohali.png';
import DownloadApp from './DownloadApp';

function HomePage() {
  return (
    <>
      <section className="bg-gray-100 ">
        <div className="container mx-auto mt-32 block lg:flex py-6">
          <div className="text-left gap-3  flex flex-col justify-center items-start p-3">
            <h3 className="text-2xl font-bold pb-4">Plan Your Trip !</h3>
            <h2 className="text-4xl  pb-4 font-bold">
              Car Rental - Search, Compare & Save !
            </h2>
            <p className="text-yellow-800">
              Free cancellations on most bookings 60,000+ locations Customer
              support in 40+ languages
            </p>

            <a
              className="cursor-pointer mt-5 py-3 px-10 bg-blue-800 text-white rounded-md mb-5 duration-100 hover:-translate-y-1 hover:scale-110"
              href="#book-car"
            >
              Book a Ride !
            </a>
          </div>

          <div>
            <img src={bookRideImage} alt="cars side by side" loading="lazy" />
          </div>
        </div>
      </section>
      <BookCar />
      <PlanTrip />
      <CarInfo />
      <Banner />
      <Faq />
      <DownloadApp />
      <ScrollToTop />
    </>
  );
}
export default HomePage;
