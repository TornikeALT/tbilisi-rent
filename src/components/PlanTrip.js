import selectCar from '../images/images/selectcar.png';
import operator from '../images/images/operator.png';
import road from '../images/images/road.png';

function PlanTrip() {
  return (
    <section className="container mx-auto flex flex-col items-center mt-40 gap-3 bg-gray-100">
      <div className="text-center pb-4">
        <h3 className="text-2xl pb-4">Plan your trip now</h3>
        <h1 className="text-5xl pb-24 font-bold">Quick & easy car rental</h1>
      </div>
      <div className="flex flex-col gap-16 sm:flex-col md:flex-row">
        <div className="max-w-md flex justify-center flex-col items-center text-left">
          <img src={selectCar} alt="little purple car" />
          <h3 className="text-3xl font-bold py-3">Choose Car</h3>
          <p className="max-w-xs text-neutral-600">
            We offers a big range of vehicles for all your driving needs. We
            have the perfect car to meet your needs
          </p>
        </div>
        <div className="max-w-md flex  flex-col items-center text-left">
          <img src={operator} alt="purple colored oeprator" />
          <h3 className="text-3xl font-bold py-3">Contact our Operator</h3>
          <p className="max-w-xs text-neutral-600">
            Our knowledgeable and friendly operators are always ready to help
            with any questions or concerns
          </p>
        </div>
        <div className="max-w-md flex  flex-col items-center text-left">
          <img src={road} alt="purple colored road" />
          <h3 className="text-3xl font-bold py-3">Lets Take a ride</h3>
          <p className="max-w-xs text-neutral-600">
            Whether you're hitting the open road, we've got you covered with our
            wide range of cars
          </p>
        </div>
      </div>
    </section>
  );
}

export default PlanTrip;
