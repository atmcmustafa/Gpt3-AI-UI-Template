import NavbarButton from "../Navbar/NavbarButton";

const GradientCard = () => {
  return (
    <div className="bg-colorBg w-full py-24">
      <div className="container flex flex-col md:flex-row justify-between text-white gradient-bar rounded-md p-6">
        <div className="w-full">
          <span className="text-sm mb-2 inline-block">
            Request Early Access to Get Started
          </span>
          <h2 className="text-lg md:text-xl font-bold">
            Register Today & start exploring the endless possibilities.
          </h2>
        </div>
        <div className="w-full flex md:justify-end justify-center items-center mt-4 md:mt-0">
          <NavbarButton buttonName={"Get Started"} bgColor={"bg-black"} />
        </div>
      </div>
    </div>
  );
};

export default GradientCard;
