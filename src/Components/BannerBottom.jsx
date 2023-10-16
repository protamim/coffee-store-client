const BannerBottom = () => {
  const data = [
    {
      icon: "/src/assets/images/icons/1.png",
      title: "Awesome Aroma",
      description:
        "You will definitely be a fan of the design & aroma of your coffee",
    },
    {
      icon: "/src/assets/images/icons/2.png",
      title: "High Quality",
      description:
        "We served the coffee to you maintaining the best quality",
    },
    {
      icon: "/src/assets/images/icons/3.png",
      title: "Pure Grades",
      description:
        "The coffee is made of the green coffee beans which you will love",
    },
    {
      icon: "/src/assets/images/icons/4.png",
      title: "Proper Roasting",
      description:
        "Your coffee is brewed by first roasting the green coffee beans",
    },
  ];
  console.log(data);
  return (
    <>
      <section className="py-12 bg-yellow-50">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 place-items-center items-center">
            {data.map((item, index) => (
              <div key={index} className="space-y-3">
                <img src={item.icon} alt="" />
                <h3 className="text-2xl">{item.title}</h3>
                <p className="text-lg">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BannerBottom;
