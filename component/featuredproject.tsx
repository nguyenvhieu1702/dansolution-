const projects = [
  {
    image: '/image/Screenshot-2024-11-01-at-16.06.36.png',
    url: 'https://dansolutions.vn/portfolio/du-an-vncaps/',
  },
  {
    image: '/image/Screenshot-2024-11-01-at-16.04.38.png',
    url: 'https://dansolutions.vn/portfolio/fastcarevn/',
  },
  {
    image: '/image/Screenshot-2024-11-01-at-16.06.20.png',
    url: 'https://dansolutions.vn/portfolio/tamdaexpress/',

  },
];

const FeaturedProjects = () => {
  return (
    <section className="py-10 bg-white">
      <div className="flex justify-center gap-4 mb-6">
        <button className="bg-gray-200 px-4 py-2 rounded font-medium">All</button>
        <button className="bg-gray-200 px-4 py-2 rounded font-medium">Mobile</button>
        <button className="bg-gray-200 px-4 py-2 rounded font-medium">Website</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className=" w-[343px] h-[195px] block shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={project.image}
              alt={`Dự án ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
