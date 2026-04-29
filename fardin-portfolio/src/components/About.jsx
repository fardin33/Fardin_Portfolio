const About = () => {
  return (
    <section id="about" className="section-padding bg-base-100">
      <div className="container-custom">
        <div className="text-center">
          <p className="font-semibold text-primary">About Me</p>
          <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
            My Programming Journey
          </h2>
        </div>

        <div className="mt-12 rounded-4xl bg-base-200 p-6 shadow-sm md:p-10">
          <p className="text-lg leading-9 text-gray-700">
            I am Fardin Hassan, a passionate Frontend Developer who enjoys
            creating clean, modern and responsive web applications. My
            programming journey started with curiosity about how websites work.
            Step by step, I learned HTML, CSS, JavaScript and then moved into
            React and Next.js to build more powerful real-world projects.
          </p>

          <p className="mt-5 text-lg leading-9 text-gray-700">
            I enjoy working on user interfaces, landing pages, dashboards,
            portfolios and business websites. I love solving UI problems,
            improving user experience and making websites look polished on every
            device.
          </p>

          <p className="mt-5 text-lg leading-9 text-gray-700">
            Outside programming, I like learning new technologies, exploring
            creative design ideas, watching tech content and improving myself
            every day. I believe consistency, patience and curiosity are the
            most important parts of becoming a better developer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
