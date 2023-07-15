import { FaQuoteRight } from 'react-icons/fa';
import Karsten from '../images/images/feedback-1.jpg';
import Bob from '../images/images/feedback-2.jpg';
import Banner from '../components/Banner';

function FeedBack() {
  return (
    <>
      <section className="bg-gray-100 pb-32">
        <div className="container mx-auto font-mono xl:mt-0 mt-40">
          <div className="flex justify-center flex-col items-center gap-3 max-w-xl mx-auto p-3">
            <h2 className="text-2xl text-blue-900 font-bold">Reviews</h2>
            <h3 className="text-4xl font-bold">
              See What Customers Say About Us
            </h3>
            <p className="text-gray-500">
              We take customer feedback seriously — we use it to know what and
              where we can improve to make the process of booking a rental car
              even clearer and simpler. Every review matters to us. With these
              reviews, you won't have to take our word on its face, but you can
              be assured that what we say about ourselves is what customers
              think, too.
            </p>
          </div>
          <div className="flex flex-col  sm:flex-row justify-center pt-24 gap-6">
            <div className="p-8  bg-white shadow-2xl flex flex-col justify-between">
              <p className="text-xl">
                "We have had the great pleasure of working with Car Rent for
                many years and really appreciate the common goals we share such
                as providing a great customer experience and being innovative to
                the benefit of all parties involved. They truly care about
                helping their Affiliates grow and prosper."
              </p>
              <div className="flex justify-between items-center p-3">
                <div className="flex items-center">
                  <img
                    src={Bob}
                    alt="Bob Thunell"
                    className="max-w-[35%] rounded"
                  />
                  <p className="pl-3 font-bold">Bob Thunell</p>
                </div>
                <FaQuoteRight size={30} color="blue" />
              </div>
            </div>
            <div className="p-8  bg-white shadow-2xl flex flex-col justify-between">
              <p className="text-xl">
                "I rented from Rent Car multiple times in various places:
                Tbilisi, Rustavi, Batumi and never had any issues. They always
                had many different standards of cars available. I had to change
                the date of my booking once and everything was handled very
                quickly and efficiently."
              </p>
              <div className="flex justify-between items-center p-3">
                <div className="flex items-center">
                  <img
                    src={Karsten}
                    alt="anna karsten"
                    className="max-w-[35%] rounded"
                  />
                  <p className="pl-3 font-bold">Anna Karsten</p>
                </div>
                <FaQuoteRight size={30} color="blue" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Banner />
    </>
  );
}

export default FeedBack;
