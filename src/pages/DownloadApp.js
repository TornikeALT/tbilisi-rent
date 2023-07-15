import mobile from '../images/images/downloadapp.jpg';
import ios from '../images/images/appstore.png';
import android from '../images/images/googleplay.png';

function DownloadApp() {
  return (
    <section className="bg-gray-100 mt-24">
      <div className="container mx-auto flex flex-col xl:flex-row  gap-12 p-3 items-center xl:justify-between">
        <div className="max-w-lg flex flex-col justify-end">
          <div>
            <h3 className="text-4xl font-bold pb-5">
              Download our app to get most out of it
            </h3>
            <p className="text-gray-600">
              Thrown shy denote ten ladies though ask saw. Or by to he going
              think order event music. Incommode so intention defective at
              convinced. Led income months itself and houses you
            </p>
          </div>
          <div className="flex flex-col items-center sm:flex-row max-w-xl gap-12 pt-6">
            <a
              href="https://play.google.com/"
              target="blank"
              className="max-w-[50%] "
            >
              <img src={android} alt="android" className="xs:max-w-full " />
            </a>
            <a
              href="https://www.apple.com/store"
              target="blank"
              className="max-w-[50%] "
            >
              <img src={ios} alt="ios" className="xs:max-w-full" />
            </a>
          </div>
        </div>
        <div className="hidden sm:block">
          <img src={mobile} alt="download app" />
        </div>
      </div>
    </section>
  );
}
export default DownloadApp;
