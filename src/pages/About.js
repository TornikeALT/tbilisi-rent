import CarKeys from '../images/images/Car-Keys.png';
import Car from '../images/images/car.png';
import CarGarage from '../images/images/car-garage.png';
import CarRepair from '../images/images/car-repair.png';
import PlanTrip from '../components/PlanTrip';
import Banner from '../components/Banner';


function About() {
  return (
    <section>
      <div className="container mx-auto p-10 xl:mt-1 mt-20">
        <div className="gap-5 flex flex-col items-center xl:items-stretch xl:flex-row xl:justify-between">
          <div className='flex justify-center items-center flex-row'>
            <img
              src={CarKeys}
              alt="woman with mobile and car in background"
              loading="lazy"
            />
          </div>
          <div className="max-w-lg flex flex-col justify-between">
            <h2 className="text-4xl font-bold">About our company and us</h2>
            <p className="text-left mt-3 text-gray-600 text-lg xl:py-0 py-10">
              Car Rent is an aggregator of local car rental companies. We find
              small car rentals that work only in their city, carefully choose
              the best ones and later on, track the quality of their work. So
              that customers could get the best service for the lowest price. We
              have been operating since 2011 and annually serve more than 30,000
              customers from all around the world.
            </p>
            <div className="grid sm:grid-cols-3 grid-cols-1 gap-3 mt-8 sm:mt-0">
              <div
                className="flex flex-col items-center
              "
              >
                <img src={Car} alt="little white car" />
                <span className="flex gap-3 sm:items-center sm:flex-row flex-col">
                  <h2>Car Types</h2>
                  <p className="text-4xl text-blue-700 font-bold"> 20</p>
                </span>
              </div>
              <div className="flex flex-col items-center">
                <img src={CarGarage} alt="Car garage" />
                <span className="flex gap-3 sm:items-center sm:flex-row flex-col">
                  <h2>Rental Outlets</h2>
                  <p className="text-4xl text-blue-700 font-bold"> 20</p>
                </span>
              </div>
              <div className="flex flex-col items-center">
                <img src={CarRepair} alt="car repair" />
                <span className="flex gap-3 sm:items-center sm:flex-row flex-col">
                  <h2>Repair Shops</h2>
                  <p className="text-4xl text-blue-700 font-bold">5</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PlanTrip />
      <Banner />
    </section>
  );
}

export default About;
