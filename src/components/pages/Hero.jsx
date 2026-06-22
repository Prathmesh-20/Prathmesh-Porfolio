const Hero = () => {
  return (
    <section className="text-center py-24 px-4">
      {/* Edit Name & Role */}
      <h1 className="text-5xl md:text-7xl font-bold mb-4">
        Hi, I'm <span className="text-cyan-400">Prathmesh Bhagwat</span>
      </h1>

      <p className="text-gray-300 text-xl max-w-2xl mx-auto">
        Student | Developer | Enthusiastic Learner  
      </p>

      <a
        href="#projects"
        className="inline-block mt-8 px-8 py-3 bg-cyan-500 rounded-lg hover:bg-cyan-600"
      >
        View My Work
      </a>
    </section>
  );
};

export default Hero;