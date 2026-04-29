import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGithub,
  FaNodeJs,
} from "react-icons/fa6";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiDaisyui,
  SiFirebase,
} from "react-icons/si";

const skills = [
  {
    title: "Frontend",
    items: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "React", icon: <FaReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
      { name: "DaisyUI", icon: <SiDaisyui /> },
    ],
  },
  {
    title: "Backend & Tools",
    items: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Firebase", icon: <SiFirebase /> },
      { name: "GitHub", icon: <FaGithub /> },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-base-200">
      <div className="container-custom">
        <div className="text-center">
          <p className="font-semibold text-primary">Skills</p>
          <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
            Technologies I Use
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {skills.map((group) => (
            <div
              key={group.title}
              className="rounded-4xl bg-white p-6 shadow-md"
            >
              <h3 className="text-2xl font-bold">{group.title}</h3>

              <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {group.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="rounded-2xl border border-base-300 bg-base-100 p-5 text-center transition hover:-translate-y-1 hover:border-primary hover:shadow-lg"
                  >
                    <div className="mx-auto mb-3 text-4xl text-primary">
                      {skill.icon}
                    </div>
                    <p className="font-semibold">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
