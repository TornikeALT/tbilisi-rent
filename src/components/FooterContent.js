import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

function FooterContent() {
  return (
    <>
      <section>
        <div className="grid lg:grid-cols-4 grid-cols-1 sm:grid-cols-3 container mx-auto max-w-7xl gap-12 px-10 sm:text-left text-center">
          <ul>
            <li className="py-2 text-2xl">
              <span className="font-bold">Car</span>
              <span> RENT</span>
            </li>
            <li className="py-2 text-gray-500 ">
              <p>
                We offers a big range of vehicles for all your driving needs. We
                have the perfect car to meet your needs.
              </p>
            </li>
            <li className="py-2 flex items-center sm:justify-normal justify-center">
              <a
                href="/"
                className="flex items-center gap-3 hover:text-blue-800"
              >
                <FaPhoneAlt />
                123-456-789
              </a>
            </li>
            <li className="py-2 flex items-center sm:justify-normal justify-center">
              <a
                href="/"
                className="flex items-center gap-3  hover:text-blue-800"
              >
                <FaEnvelope />
                carrental@gmail.com
              </a>
            </li>
          </ul>
          <ul>
            <li className="py-2">
              <h3 className="text-xl font-bold">COMPANY</h3>
            </li>
            <li className="py-2">
              <a href="/" className=" hover:text-blue-800 hover:font-bold">
                TBILISI
              </a>
            </li>
            <li className="py-2">
              <a href="/" className=" hover:text-blue-800 hover:font-bold">
                ABOUT US
              </a>
            </li>
            <li className="py-2">
              <a href="/" className=" hover:text-blue-800 hover:font-bold">
                HOW WE WORK
              </a>
            </li>
          </ul>
          <ul>
            <li className="py-2 text-xl font-bold">WORKING HOURS</li>
            <li className="py-2">Mon - Fri: 9:00 - 18:00 </li>
            <li className="py-2">Sat: 9:00 - 14:00 </li>
            <li className="py-2">Sun: Closed</li>
          </ul>
          <ul>
            <li className="py-2 text-xl font-bold">CONTACTS</li>
            <li className="py-2">
              <a href="/" className=" hover:text-blue-800 hover:font-bold">
                Privacy Policy
              </a>
            </li>
            <li className="py-2">
              <a href="/" className=" hover:text-blue-800 hover:font-bold">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default FooterContent;
