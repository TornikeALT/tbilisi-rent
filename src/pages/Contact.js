import Banner from '../components/Banner';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { BsPinAngleFill } from 'react-icons/bs';

function Contact() {
  return (
    <section>
      <div className="container mx-auto p-8 ">
        <div className="flex xl:justify-around lg:flex-row flex-col p-6 gap-7 lg:mt-0 mt-40 items-center lg:items-start">
          <div className="max-w-lg flex flex-col gap-6 items-center lg:items-start">
            <h2 className="text-4xl font-bold text-center sm:text-left">
              Need Aditional information?
            </h2>
            <p className="pb-3 text-gray-500 text-center lg:text-left">
              A multifaceted professional skilled in multiple fields of
              research, development as well as a learning specialist. Over 15
              years of experience.
            </p>
            <ul>
              <li className="py-2 flex items-center font-bold">
                <a
                  href="/"
                  className="flex items-center gap-3 hover:text-blue-800"
                >
                  <FaPhoneAlt />
                  123-456-789
                </a>
              </li>
              <li className="py-2 flex items-center font-bold">
                <a
                  href="/"
                  className="flex items-center gap-3  hover:text-blue-800"
                >
                  <FaEnvelope />
                  carrental@gmail.com
                </a>
              </li>
              <li className="py-2 flex items-center font-bold">
                <a
                  href="/"
                  className="flex items-center gap-3  hover:text-blue-800"
                >
                  <BsPinAngleFill />
                  Tbilisi, Georgia
                </a>
              </li>
            </ul>
          </div>
          <div className="max-w-md">
            <form action="" className="flex flex-col gap-3 p-3">
              <label htmlFor="full-name" className=" font-bold">
                Full Name<b>*</b>
              </label>
              <input
                type="text"
                id="full-name"
                placeholder="e.g:John smith"
                className="bg-gray-200 lg:max-w-none max-w-xs"
              />
              <label htmlFor="email" className="font-bold">
                Email <b>*</b>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="your email"
                className="bg-gray-200 lg:max-w-none max-w-xs"
              />
              <label htmlFor="about" className="font-bold">
                Tell us about it<b>*</b>
              </label>
              <textarea
                name="about"
                id="about"
                cols="50"
                rows="10"
                placeholder="Write here ..."
                className="bg-gray-200 p-2 lg:max-w-none max-w-xs"
              ></textarea>
              <button
                type="submit"
                className="bg-blue-700 py-4 text-white rounded
                hover:bg-blue-900 "
              >
                SEND EMAIL
              </button>
            </form>
          </div>
        </div>
      </div>
      <Banner />
    </section>
  );
}

export default Contact;
