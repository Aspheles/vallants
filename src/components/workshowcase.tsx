const WorkShowcase = () => {
  const projects = [
    {
      id: 1,
      image: "./moonlight.png",
      title: "Project Moonlight",
      description: "A captivating project focused on a photography portfolio",
      link: "https://moonlightphoto.nl",
    },
  ];

  return (
    <>
      <div className="w-full bg-gradient-to-br from-[#1D0D4C] via-[#470981] to-[#A900FF] py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-xl text-center pt-8">
          Our Work
        </h1>

        <div className="mt-10 mb-12 px-4">
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-6 ">
            {projects.map((project) => (
              <div
                key={project.id}
                className="lg:w-[800px] md:w-full relative group overflow-hidden rounded-lg shadow-lg justify-center items-center mx-auto"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full object-cover duration-300 group-hover:scale-105 shadow-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 duration-300 flex items-center justify-center">
                  <div className="text-center text-white p-4">
                    <h3 className="text-lg font-bold">{project.title}</h3>
                    <p className="text-sm mt-2">{project.description}</p>
                    <button className="mt-4 px-4 py-2 bg-[#470981] hover:bg-[#A900FF] text-white rounded-md">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit Website
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkShowcase;
