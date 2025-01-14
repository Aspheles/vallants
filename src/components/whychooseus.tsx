const WhyChooseUs = () => {
  const features = [
    {
      icon: <img src="./advantages/img_wcu01.png" />,
      title:
        "Offer custom-designed websites tailor to the budgets of small businesses",
      description: "Tailor to the budgets of small businesses",
    },
    {
      icon: <img src="./advantages/img_wcu02.png" />,
      title: "Create scalable websites that grow with the business",
      description: "That grow with the business",
    },
    {
      icon: <img src="./advantages/img_wcu03.png" />,
      title: "Balancing affordability and quality to meet your needs",
      description: "Without sacrificing quality",
    },
    {
      icon: <img src="./advantages/img_wcu04.png" />,
      title: "Focused on helping startups build their identity from ground up",
      description: "Build their identity from ground up",
    },
  ];

  return (
    <div className="lg:px-20 sm:px-2 lg:h-[400px] flex flex-col items-center justify-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[#6A00A1] mb-8 drop-shadow-xl">
        Why Choose Us?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 lg:grid-cols-2">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center space-x-4 p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition duration-200 xl:h-[120px]"
          >
            <div className="shrink-0 w-[75px]">{feature.icon}</div>
            <div>
              <h3 className="lg:text-xl md:text-lg text-[#1D0D4C] text-left">
                {feature.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
