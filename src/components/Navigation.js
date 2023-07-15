import { Link } from 'react-router-dom';
import { useState } from 'react';
import carLogo from '../images/images/car images/car-logo.png';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';

function Navigation() {
  const [showModal, setShowModal] = useState(false);

  const handleHamburgerModal = () => {
    setShowModal(!showModal);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className=" bg-blue-800">
      <div
        className={`fixed w-full h-full flex items-center justify-center bg-white z-10 transition-opacity ease-out ${
          showModal ? 'block' : 'hidden'
        }`}
      >
        {showModal && (
          <nav className="max-w-[50%] w-40">
            <ul>
              <li className="my-10 text-4xl hover:text-blue-800 hover:font-bold transition ease-in-out">
                <Link to="/" onClick={handleCloseModal}>
                  HOME
                </Link>
              </li>
              <li className="my-10 text-4xl hover:text-blue-800 hover:font-bold transition ease-in-out">
                <Link to="/about" onClick={handleCloseModal}>
                  ABOUT
                </Link>
              </li>
              <li className="my-10 text-4xl hover:text-blue-800 hover:font-bold transition ease-in-out">
                <Link to="/models" onClick={handleCloseModal}>
                  MODELS
                </Link>
              </li>
              <li className="my-10 text-4xl hover:text-blue-800 hover:font-bold transition ease-in-out">
                <Link to="/feedback" onClick={handleCloseModal}>
                  FEEDBACK
                </Link>
              </li>
              <li className="my-10 text-4xl hover:text-blue-800 hover:font-bold transition ease-in-out">
                <Link to="/team" onClick={handleCloseModal}>
                  TEAM
                </Link>
              </li>
              <li className="my-10 text-4xl hover:text-blue-800 hover:font-bold transition ease-in-out">
                <Link to="/contact" onClick={handleCloseModal}>
                  CONTACT
                </Link>
              </li>
            </ul>
          </nav>
        )}
        <button
          className="absolute top-2.5 right-2.5 cursor-pointer hover:text-blue-800  ease-out duration-300"
          onClick={handleHamburgerModal}
        >
          <AiOutlineClose size={40} />
        </button>
      </div>

      <div className="container flex justify-between p-4  mx-auto w-full text-white lg:mb-96">
        <div className="flex">
          <a href="/">
            <img src={carLogo} alt="car logo on the top" />
          </a>
          <div className="flex flex-col  justify-center text-2xl">
            <a href="/" className=" hover:text-black transition ease-in-out">
              <h3>Tbilisi</h3>
              <span>Rent</span>
            </a>
          </div>
        </div>
        <div className="flex items-center uppercase">
          <nav className="hidden md:block">
            <ul className="flex ">
              <li className="p-3 hover:text-black transition ease-in-out">
                <Link to="/">Home</Link>
              </li>
              <li className="p-3  hover:text-black transition ease-in-out">
                <Link to="/about">About</Link>
              </li>
              <li className="p-3 hover:text-black transition ease-in-out">
                <Link to="/models">Models</Link>
              </li>
              <li className="p-3 hover:text-black transition ease-in-out">
                <Link to="/feedback">Feedback</Link>
              </li>
              <li className="p-3 hover:text-black transition ease-in-out">
                <Link to="/team">Team</Link>
              </li>
              <li className="p-3 hover:text-black transition ease-in-out">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
          <div onClick={handleHamburgerModal}>
            <GiHamburgerMenu
              size={50}
              className="block md:hidden cursor-pointer hover:text-black  ease-in duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
