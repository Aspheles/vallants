const WorkFlow = () => {
  const steps = [
    {
      img: "./workflow/img_sow01.png",
      title: "Understand Needs",
      subtitle: "We start by identifying your unique requirements.",
    },
    {
      img: "./workflow/img_sow02.png",
      title: "Plan & Design",
      subtitle: "Creating a tailored plan and design to suit your needs.",
    },
    {
      img: "./workflow/img_sow03.png",
      title: "Develop",
      subtitle: "Building your solution with precision and care.",
    },
    {
      img: "./workflow/img_sow04.png",
      title: "Test & Refine",
      subtitle: "Ensuring everything works perfectly before delivery.",
    },
    {
      img: "./workflow/img_sow05.png",
      title: "Deliver & Support",
      subtitle: "Providing ongoing support for your peace of mind.",
    },
  ];

  return (
    <section className="w-full mx-auto px-12">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#6A00A1] text-center mb-12">
          How We Work
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
              aria-label={`Step ${index + 1}: ${step.title}`}
            >
              <img
                className="w-[150px] md:w-[200px] mb-4 rounded-lg"
                src={step.img}
                alt={step.title}
              />
              <h3 className="text-xl font-semibold text-center mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600 text-center">
                {step.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkFlow;
