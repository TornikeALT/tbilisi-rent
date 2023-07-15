import Prius from '../images/images/car images/toyota-prius-2012-_black.jpg';
import { useState } from 'react';
import { CARDATA } from '../data/CarData';

const ImageSwitcher = () => {
  const [currImage, setCurrImage] = useState(Prius);
  const [currModel, setCurrModel] = useState('Prius');
  const [currMake, setCurrMake] = useState('Toyota');
  const [currYear, setCurrYear] = useState('2012');
  const [currDoors, setCurrDoors] = useState('4/5');
  const [currTransmission, setCurrTransmission] = useState('Automatic');
  const [currFuel, setCurrFuel] = useState('Hybrid');
  const [currPrice, setCurrPrice] = useState('50');
  const [activeModelIndex, setActiveModelIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const handleClick = (
    imageName,
    model,
    year,
    doors,
    transmission,
    fuel,
    make,
    price,
    index
  ) => {
    setLoading(true);
    setCurrImage(imageName);
    setCurrModel(model);
    setCurrMake(make);
    setCurrYear(year);
    setCurrDoors(doors);
    setCurrTransmission(transmission);
    setCurrFuel(fuel);
    setCurrPrice(price);
    setActiveModelIndex(index);
  };

  return (
    <>
      <div>
        {CARDATA.map((item, index) => (
          <div
            className={`px-6 mb-4 py-3 cursor-pointer text-xl hover:bg-blue-800 hover:text-white transition-all duration-300 font-mono ${
              activeModelIndex === index
                ? 'bg-blue-800 text-white'
                : 'bg-gray-100 text-black'
            }`}
            key={item.id}
            onClick={() =>
              handleClick(
                item.image,
                item.model,
                item.year,
                item.doors,
                item.transmision,
                item.fuel,
                item.make,
                item.price,
                index
              )
            }
          >
            {item.make} {item.model}
          </div>
        ))}
      </div>

      <div>
        <img src={currImage} alt={currModel} loading="lazy" />
      </div>

      <div className="w-80 ml-3 sm:mt-12 md:mt-3 mt-6 font-mono">
        <h2 className="text-2xl mb-4 bg-blue-800 text-center text-white py-3">
          Rent Per Day : {currPrice}$
        </h2>
        <div className="grid grid-cols-1 gap-5 text-2xl text-center">
          <div className="text-center grid grid-cols-2 row-auto border-b-2 border-slate-300 pb-2">
            <span className="border-r-2 border-gray-600">Make</span>
            <span>{currMake}</span>
          </div>
          <div className="text-center grid grid-cols-2 row-auto border-b-2 border-slate-300 pb-2">
            <span className="border-r-2 border-gray-600">Model</span>
            <span>{currModel}</span>
          </div>
          <div className="text-center grid grid-cols-2 row-auto border-b-2 border-slate-300 pb-2">
            <span className="border-r-2 border-gray-600">Year</span>
            <span>{currYear}</span>
          </div>
          <div className="text-center grid grid-cols-2 row-auto border-b-2 border-slate-300 pb-2">
            <span className="border-r-2 border-gray-600">Doors</span>
            <span>{currDoors}</span>
          </div>
          <div className="text-center grid grid-cols-2 row-auto border-b-2 border-slate-300 pb-2">
            <span className="border-r-2 border-gray-600">Transmision</span>
            <span>{currTransmission}</span>
          </div>
          <div className="text-center grid grid-cols-2 row-auto border-b-2 border-slate-300 pb-2">
            <span className="border-r-2 border-gray-600">Fuel Type</span>
            <span>{currFuel}</span>
          </div>
        </div>
        <div>
          <a
            href="#book-car"
            className="text-center bg-blue-800 text-white py-4 px-2 cursor-pointer rounded-sm text-xl flex justify-center mt-6  shadow-lg hover:bg-blue-700 hover:text-black"
          >
            RESERVE CAR
          </a>
        </div>
      </div>
    </>
  );
};

export default ImageSwitcher;
