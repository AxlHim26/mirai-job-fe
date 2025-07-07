import Slider from "react-slick";

export const Companies = () => {
  const companies = [
    { name: "Vodafone", logo: "V" },
    { name: "Intel", logo: "intel" },
    { name: "Tesla", logo: "TESLA" },
    { name: "AMD", logo: "AMD" },
    { name: "Talkit", logo: "Talkit" },
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    pauseOnFocus: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 968,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-gray-500 mb-8">
          Companies we helped grow
        </p>
        <Slider {...settings}>
          {companies.map((company, index) => (
            <div
              key={index}
              className="flex justify-center"
            >
              <div className="text-gray-400 font-semibold text-2xl">
                {company.logo === "V" ? (
                  <div className="w-8 h-8 bg-red-600 text-white rounded flex items-center justify-center">
                    V
                  </div>
                ) : (
                  company.logo
                )}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};
