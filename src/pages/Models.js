import { CARDATA } from '../data/CarData';
import LittleCar from '../images/images/models-page-icon.png';
import Gear from '../images/images/gear.png';
import Doors from '../images/images/doors.png';
import Fuel from '../images/images/fuel.png';
import Banner from '../components/Banner';

function Models() {
  return (
    <section>
      <div className="container mx-auto p-3">
        <h2 className="font-mono text-4xl font-bold">Vehicle Models</h2>
        <div className="grid xl:grid-cols-4 lg:mt0 mt-20 lg:grid-cols-3 gap-6 sm:grid-cols-2 grid-cols-1">
          {CARDATA.map(el => {
            return (
              <div className="border" key={el.id}>
                <img src={el.image} alt="" />

                <div className="flex justify-between p-3">
                  <h2>{el.make}</h2>
                  <div className="flex flex-col items-center">
                    <p>$ {el.price}</p>
                    <span>Per Day</span>
                  </div>
                </div>

                <div className="flex justify-between p-3 items-center">
                  <div className="flex items-center gap-3">
                    <img src={LittleCar} alt="little car" />
                    <span>{el.model}</span>
                  </div>
                  <div className="flex items-center">
                    <span>{el.doors}</span>
                    <img src={Doors} alt="" />
                  </div>
                </div>
                <div className="flex justify-between items-center p-3 border-b-2">
                  <div className="flex items-center">
                    <img src={Gear} alt="gearbox" />
                    <span>{el.transmision}</span>
                  </div>
                  <div className="flex items-center ">
                    <span>{el.fuel}</span>
                    <img src={Fuel} alt="fuel" />
                  </div>
                </div>
                <div className="flex justify-center ">
                  <a
                    className="py-3 px-12 bg-blue-500 rounded text-white my-6 shadow-2xl hover:bg-blue-700"
                    href="/#book-car"
                  >
                    Book a Ride
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Banner />
    </section>
  );
}
export default Models;
