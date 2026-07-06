const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-slate-900 text-white"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold">
            About{" "}
            <span className="text-cyan-400">Me</span>
          </h2>

          <div className="w-24 h-1 bg-cyan-400 mx-auto mt-4 rounded-full"></div>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Passionate Computer Science student dedicated to building
            innovative software solutions and continuously learning
            modern technologies.
          </p>
        </div>

        {/* Card */}
        <div className="bg-slate-800/70 backdrop-blur-lg border border-slate-700 rounded-3xl shadow-xl p-8 md:p-12 hover:border-cyan-400 transition-all duration-500">

          <p className="text-gray-300 leading-9 text-lg">
            Hello! I'm{" "}
            <span className="text-cyan-400 font-semibold">
              Prathmesh Bhagwat
            </span>
            , a passionate and motivated{" "}
            <span className="font-semibold text-white">
              B.Tech Computer Science Engineering
            </span>{" "}
            student currently pursuing my third year at
            <span className="text-cyan-400 font-semibold">
              {" "}J.G. University
            </span>
            . I enjoy transforming ideas into interactive, responsive,
            and user-friendly web applications.

            <br />
            <br />

            My technical expertise includes developing modern web
            applications using{" "}
            <span className="text-cyan-400 font-medium">
              React.js, JavaScript, Tailwind CSS, HTML, CSS, Bootstrap,
              WordPress, SQL, Python, Java, Django
            </span>{" "}
            while continuously exploring{" "}
            <span className="text-cyan-400 font-medium">
              Machine Learning
            </span>{" "}
            and Artificial Intelligence.

            <br />
            <br />

            Throughout my academic journey, I have built several
            projects that have strengthened my skills in software
            development, problem-solving, analytical thinking, and UI
            design. I enjoy creating clean, responsive interfaces while
            writing efficient and maintainable code.

            <br />
            <br />

            I am eager to gain real-world industry experience through
            internships, freelance opportunities, and collaborative
            projects. I believe that every project is an opportunity to
            improve my technical knowledge and professional skills.

            <br />
            <br />

            My goal is to become a skilled Software Engineer capable of
            developing impactful digital solutions while continuously
            learning emerging technologies such as Cloud Computing,
            Machine Learning, AI, and Full Stack Development. I am
            enthusiastic about working with experienced professionals,
            contributing to meaningful projects, and growing within the
            technology industry.
          </p>

          {/* Skills */}
          <div className="mt-10 flex flex-wrap gap-4 justify-center">

            {[
              "React",
              "Python",
              "Java",
              "Django",
              "Machine Learning",
              "Tailwind CSS",
              "JavaScript",
              "HTML",
              "CSS",
              "Bootstrap",
              "WordPress",
              "SQL",
            ].map((skill) => (
              <span
                key={skill}
                className="px-5 py-2 bg-cyan-500/10 border border-cyan-500 text-cyan-300 rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-300 cursor-default"
              >
                {skill}
              </span>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;