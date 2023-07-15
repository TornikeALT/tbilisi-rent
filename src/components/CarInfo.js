import ImageSwitcher from './ImageSwitcher';

function CarInfo() {
  return (
    <section className="mt-40">
      <div className="container mx-auto flex flex-col ">
        <div className="text-center p-3">
          <h3 className="text-4xl font-bold pb-5">Vehicle Models</h3>
          <p className="text-neutral-400">
            Choose a car according to your taste, for business or travel
          </p>
        </div>
        <div className="flex flex-col justify-between  lg:flex-row items-center">
          <ImageSwitcher />
        </div>
      </div>
    </section>
  );
}

export default CarInfo;
