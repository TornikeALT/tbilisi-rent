import React, { useEffect, useState } from 'react';
import bookBackground from '../images/images/bookbg.jpg';
import { AiFillCar } from 'react-icons/ai';
import { BsPinAngleFill, BsCalendarDayFill } from 'react-icons/bs';
import FormModal from './FormModal';
import { CARDATA } from '../data/CarData';

function BookCar() {
  const [carName, setCarName] = useState('');
  const [pickUpLocation, setPickUpLocation] = useState('');
  const [dropOffLocation, setDropOffLocation] = useState('');
  const [pickUpDate, setPickUpDate] = useState('');
  const [dropOffDate, setDropOffDate] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [reserved, setReserved] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = e => {
    e.preventDefault();
    setFormSubmitted(true);
    setModalOpen(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [modalOpen]);

  const handleSearchBtn = () => {
    setIsLoading(true);
  };

  const handleFormModalClose = () => {
    setModalOpen(false);
  };

  const selectedCarImage = CARDATA.filter(item => item.model === carName);

  const selectedValues = [
    {
      carName,
      pickUpLocation,
      dropOffLocation,
      dropOffDate,
      pickUpDate,
      selectedCarImage,
    },
  ];
  return (
    <div
      id="book-car"
      className="container mt-40 xl:mt-80 p-16 mx-auto max-w-7xl"
      style={{ backgroundImage: `url(${bookBackground})` }}
    >
      <h2 className="mb-8 text-3xl font-bold">Book A Car</h2>
      {formSubmitted &&
        (carName === '' ||
          pickUpLocation === '' ||
          dropOffLocation === '' ||
          pickUpDate === '' ||
          dropOffDate === '') && (
          <p className="bg-red-300 mb-4">Please fill all fields!</p>
        )}

      <div>
        <form
          className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          method="GET"
          onSubmit={handleFormSubmit}
        >
          {/* Car Name Field */}
          <div className="flex flex-col">
            <label className="pb-4 flex items-center" htmlFor="car-name">
              <AiFillCar color="blue" size={25} />
              <span className="ml-3"> Select Car</span>
            </label>
            <select
              name="car-name"
              id="car-name"
              className="border border-stone-300 bg-transparent py-3"
              required
              value={carName}
              onChange={e => setCarName(e.target.value)}
            >
              <option value="">Select Car</option>
              <option value="Prius">Toyota Prius 2012</option>
              <option value="Aqua">Toyota Aqua 2012</option>
              <option value="Elantra">Hyundai Elantra 2014</option>
              <option value="Insight">Honda Insight 2010</option>
              <option value="Mustang">Ford Mustang 2018</option>
              <option value="Challenger">Dodge Challenger 2018</option>
              <option value="Cayenne">Porsche Cayenne 2012</option>
              <option value="Gelendvagen">Mercedes Benz 2021</option>
            </select>
          </div>

          {/* Pick Up Location Field */}
          <div className="flex flex-col">
            <label
              className="pb-4 flex items-center"
              htmlFor="pick-up-location"
            >
              <BsPinAngleFill color="blue" size={25} />
              <span className="ml-3"> Pick-UP</span>
            </label>
            <select
              name="pick-up-location"
              id="pick-up-location"
              className="border border-stone-300 bg-transparent py-3"
              required
              value={pickUpLocation}
              onChange={e => setPickUpLocation(e.target.value)}
            >
              <option value="">Select pick up location</option>
              <option value="Tbilisi">Tbilisi</option>
              <option value="Rustavi">Rustavi</option>
              <option value="Kutaisi">Kutaisi</option>
              <option value="Batumi">Batumi</option>
              <option value="Zugdidi">Zugdidi</option>
            </select>
          </div>

          {/* Drop Off Location Field */}
          <div className="flex flex-col">
            <label
              className="pb-4 flex items-center"
              htmlFor="drop-off-location"
            >
              <BsPinAngleFill color="blue" size={25} />
              <span className="ml-3">Drop-Off</span>
            </label>
            <select
              name="drop-off-location"
              id="drop-off-location"
              className="border border-stone-300 bg-transparent py-3"
              required
              value={dropOffLocation}
              onChange={e => setDropOffLocation(e.target.value)}
            >
              <option value="">Select Drop Off location</option>
              <option value="Tbilisi">Tbilisi</option>
              <option value="Rustavi">Rustavi</option>
              <option value="Kutaisi">Kutaisi</option>
              <option value="Batumi">Batumi</option>
              <option value="Zugdidi">Zugdidi</option>
            </select>
          </div>

          {/* Pick Up Date Field */}
          <div className="flex flex-col">
            <label className="pb-4 flex items-center" htmlFor="pick-up-date">
              <BsCalendarDayFill color="blue" size={20} />
              <span className="ml-3"> Select Pick Up Date</span>
            </label>
            <input
              required
              type="date"
              id="pick-up-date"
              className="border border-stone-300 bg-transparent py-3"
              value={pickUpDate}
              onChange={e => setPickUpDate(e.target.value)}
            />
          </div>

          {/* Drop Off Date Field */}
          <div className="flex flex-col">
            <label className="pb-4 flex items-center" htmlFor="drop-off-date">
              <BsCalendarDayFill color="blue" size={20} />
              <span className="ml-3">Select Drop-Off Date</span>
            </label>
            <input
              type="date"
              id="drop-off-date"
              className="border border-stone-300 bg-transparent py-3"
              required
              value={dropOffDate}
              onChange={e => setDropOffDate(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          <div className="flex flex-col justify-end">
            <button
              className="bg-blue-800 text-white rounded-md py-3 duration-100 hover:-translate-y-1 hover:scale-100"
              type="submit"
              onClick={handleSearchBtn}
            >
              Search
            </button>
          </div>
        </form>
        {reserved && (
          <div className="flex justify-between mt-6 bg-green-500 p-2">
            <p className="">Form Submitted Successfully!</p>
            <div onClick={() => setReserved(false)} className="cursor-pointer">
              X
            </div>
          </div>
        )}
        <FormModal
          isOpen={modalOpen}
          selectedValues={selectedValues}
          onClose={handleFormModalClose}
          setReserved={setReserved}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
      </div>
    </div>
  );
}

export default BookCar;
