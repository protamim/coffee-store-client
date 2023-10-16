import BannerImage from "../assets/images/more/3.png";
import BannerBottom from "./BannerBottom";

const Banner = () => {
  return (
    <>
      <section
        className="bg-cover bg-bottom"
        style={{ backgroundImage: `url(${BannerImage})` }}
      >
        <div className="container mx-auto px-5">
          <div className="h-[50vh] text-white flex justify-center items-center">
            <div className="w-1/2 ml-auto space-y-6">
              <h2 className="text-3xl">
                Would you like a Cup of Delicious Coffee?
              </h2>
              <p className="text-xl font-normal tracking-wide">
                It&apos;s coffee time - Sip & Savor - Relaxation in every sip!
                Get the nostalgia back!! Your companion of every moment!!! Enjoy
                the beautiful moments and make them memorable.
              </p>
              <button className="bg-yellow-500 text-lg text-white px-4 py-1">Learn More</button>
            </div>
          </div>
        </div>
      </section>
      <BannerBottom />
    </>
  );
};

export default Banner;
