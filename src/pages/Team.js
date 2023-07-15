import Banner from '../components/Banner';
import salesman from '../images/images/team/salesman.jpg';
import developer from '../images/images/team/developer.jpg';
import ceo from '../images/images/team/developer-2.jpg';
import contentManager from '../images/images/team/content-manager.jpg';
import mechanic from '../images/images/team/mechanic.jpg';
import customerCare from '../images/images/team/custom-care.jpg';

function Team() {
  return (
    <>
      <section>
        <div className="container mx-auto">
          <div className="grid xl:grid-cols-3 gap-8 sm:grid-cols-2 lg:mt-0 mt-40">
            <div className="flex flex-col items-center">
              <img src={salesman} alt="Sue Barrett" />
              <p className="py-3 text-2xl font-bold">Sue Barrett</p>
              <span className="text-xl text-gray-600">Salesman</span>
            </div>
            <div className="flex flex-col items-center">
              <img src={developer} alt="Terry Chen" />
              <p className="py-3 text-2xl font-bold">Terry Chen</p>
              <span className="text-xl text-gray-600">Developer</span>
            </div>
            <div className="flex flex-col items-center">
              <img src={ceo} alt="Beau Brennan" />
              <p className="py-3 text-2xl font-bold">Beau Brennan</p>
              <span className="text-xl text-gray-600">CEO</span>
            </div>
            <div className="flex flex-col items-center">
              <img src={contentManager} alt="" />
              <p className="py-3 text-2xl font-bold">Estanje Samanta</p>
              <span className="text-xl text-gray-600">Content Manager</span>
            </div>
            <div className="flex flex-col items-center">
              <img src={customerCare} alt="" />
              <p className="py-3 text-2xl font-bold">Kate o Hara</p>
              <span className="text-xl text-gray-600">Customer Care</span>
            </div>
            <div className="flex flex-col items-center">
              <img src={mechanic} alt="Alex Sullivan" />
              <p className="py-3 text-2xl font-bold">Alex Sullivan</p>
              <span className="text-xl text-gray-600">Mechanic</span>
            </div>
          </div>
        </div>
      </section>
      <Banner />
    </>
  );
}

export default Team;
