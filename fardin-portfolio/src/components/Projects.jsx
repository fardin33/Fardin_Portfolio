import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-11/12 mx-auto section-padding bg-base-100"
    >
      <div className="container-custom">
        <div className="text-center">
          <p className="font-semibold text-primary">Projects</p>
          <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
            My Best Projects
          </h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="card bg-white shadow-xl transition hover:-translate-y-2 hover:shadow-2xl"
            >
              <figure className="relative h-56">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover"
                />
              </figure>

              <div className="card-body">
                <h3 className="card-title">{project.name}</h3>
                <p className="text-gray-600">{project.description}</p>

                <div className="card-actions mt-4">
                  <Link
                    href={`/projects/${project.id}`}
                    className="btn btn-primary w-full rounded-full text-white"
                  >
                    View More / Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
