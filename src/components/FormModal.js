import Spinner from './Spinner';
import {
  BsPinAngleFill,
  BsCalendarDayFill,
  BsXLg,
  BsFillInfoCircleFill,
} from 'react-icons/bs';

function FormModal({
  isOpen,
  onClose,
  selectedValues,
  setReserved,
  isLoading,
}) {
  const handleFormSubmit = e => {
    e.preventDefault();
    setReserved(true);
    onClose(true);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div
        className="fixed top-0 left-0 w-full h-screen z-10 opacity-75 bg-black overscroll-contain"
        onClick={onClose}
      />
      <div className="flex max-w-3xl items-center flex-col fixed justify-center top-0 z-40 xl:left-1/3 h-screen sm:left-1/4 ">
        <div className="max-w-7xl overflow-scroll overflow-x-hidden overflow-y-auto  bg-gray-300 w-10/12 border-white border-4">
          <div className="bg-blue-600 text-white  flex flex-col sm:justify-between sm:flex-row items-center p-3">
            <h2 className="py-6 text-3xl px-3 sm:text-left text-center">
              COMPLETE RESERVATION
            </h2>

            <div>
              <BsXLg
                size={25}
                onClick={onClose}
                className="hover:text-black delay-75 duration-200 cursor-pointer"
              />
            </div>
          </div>
          <div className="bg-blue-100 p-6">
            <div className="mb-6 font-bold text-xl sm:text-left text-center flex items-baseline">
              <BsFillInfoCircleFill />
              Upon completing this reservation enquiry, you will receive:
            </div>
            <p className="text-gray-600 sm:text-left text-center">
              Your rental voucher to produce on arrival at the rental desk and a
              toll-free customer support number.
            </p>
          </div>

          <div className="p-5">
            {selectedValues.map(el => {
              return (
                <div
                  className="sm:grid sm:grid-cols-2 p-3 flex flex-col-reverse items-center sm:items-start"
                  key={el.carName}
                >
                  <div>
                    <h2 className="font-mono text-blue-700 font-bold md:text-2xl sm:text-xl p-3">
                      Location & Date
                    </h2>
                    <span className="flex items-baseline p-3">
                      <BsPinAngleFill size={20} color="red" />
                      <div>
                        <h3 className="ml-1">Pick up date</h3>
                        <p className="mb-6 ml-1 text-gray-700">
                          {el.pickUpDate}
                        </p>
                      </div>
                    </span>
                    <span className="flex items-baseline p-3">
                      <BsPinAngleFill size={20} color="red" />
                      <div>
                        <h3 className="ml-1">Drop off date</h3>
                        <p className="mb-6 ml-1 text-gray-700">
                          {el.dropOffDate}
                        </p>
                      </div>
                    </span>
                    <span className="flex items-baseline p-3">
                      <BsCalendarDayFill size={20} color="gray" />
                      <div>
                        <h3 className="ml-1">Pick Up location</h3>
                        <p className="mb-6 ml-1 text-gray-700">
                          {el.pickUpLocation}
                        </p>
                      </div>
                    </span>
                    <span
                      className="flex items-baseline p-3
                  "
                    >
                      <BsCalendarDayFill size={20} color="gray" />
                      <div>
                        <h3 className="ml-1">Drop off location</h3>
                        <p className="mb-6 ml-1 text-gray-700">
                          {el.dropOffLocation}
                        </p>
                      </div>
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <h2 className="font-mono text-blue-700 font-bold md:text-2xl sm:text-xl p-3">
                      Your Selected Car
                    </h2>

                    <div className="p-3 flex justify-center">
                      {el.selectedCarImage[0].make}
                      <p className="ml-2">{el.carName}</p>
                    </div>

                    <div>
                      {isLoading ? (
                        <Spinner />
                      ) : (
                        <img
                          alt="test"
                          src={el.selectedCarImage[0].image}
                          loading="lazy"
                        />
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="sm:text-left text-center">
            <h4 className=" text-blue-600 font-bold font-mono sm:text-left text-center p-6 text-2xl">
              Personal information
            </h4>
            <form
              action="/"
              className="flex flex-col gap-3 p-6"
              onSubmit={handleFormSubmit}
            >
              <div className="grid md:grid-cols-2 gap-6 ">
                <span className="flex flex-col">
                  <label htmlFor="first-name" className="pb-3">
                    First Name <b>*</b>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your first name"
                    required
                  />
                  <p className="text-xs">This field is required.</p>
                </span>
                <span className="flex flex-col">
                  <label htmlFor="last-name" className="pb-3">
                    Last Name <b>*</b>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your last name"
                    required
                  />
                  <p className="text-xs">This field is required.</p>
                </span>
                <span className="flex flex-col">
                  <label htmlFor="age">
                    Age <b>*</b>
                  </label>
                  <input
                    type="number"
                    placeholder="Enter Your age"
                    className="pb-3"
                    required
                  />
                  <p className="text-xs">This field is required.</p>
                </span>
                <span className="flex flex-col">
                  <label htmlFor="phone-number">
                    Phone Number <b>*</b>
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter Your phone number"
                    required
                  />
                  <p className="text-xs">This field is required.</p>
                </span>
              </div>
              <div className="grid gap-3">
                <label htmlFor="email">
                  Email<b> *</b>
                </label>
                <input type="email" placeholder="Enter your email" required />
                <p className="text-xs">This field is required.</p>
                <label htmlFor="addres">
                  Address<b> *</b>
                </label>
                <input type="text" placeholder="Enter your Address" required />
                <p className="text-xs">This field is required.</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <span className="flex flex-col">
                  <label htmlFor="city" className="pb-3">
                    City <b> *</b>
                  </label>
                  <input type="text" placeholder="Enter your city" required />
                  <p className="text-xs">This field is required.</p>
                </span>
                <span className="flex flex-col">
                  <label htmlFor="zip-code" className="pb-3">
                    Zip Code <b>*</b>
                  </label>
                  <input
                    type="number"
                    placeholder="Enter your Zip code"
                    required
                  />
                  <p className="text-xs">This field is required.</p>
                </span>
              </div>
              <span className="flex items-center">
                <input type="checkbox" className="h-5 w-5" />
                <label htmlFor="checkbox" className="pl-3">
                  SEND ME NEWS AND UPDATES
                </label>
              </span>
              <div className="text-center sm:text-right px-3 mt-3">
                <button
                  type="submit"
                  className="bg-blue-600 py-3 px-5 text-white rounded hover:-translate-y-1 hover:scale-110"
                >
                  Reserve Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormModal;
