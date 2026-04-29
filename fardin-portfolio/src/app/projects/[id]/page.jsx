import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default function ProjectDetailsPage({ params }) {
  const project = projects.find((item) => item.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-base-200 pt-28">
      <section className="container-custom section-padding">
        <Link
          href="/#projects"
          className="btn btn-outline btn-primary rounded-full"
        >
          ← Back to Projects
        </Link>

        <div className="mt-8 overflow-hidden rounded-4xl bg-white shadow-xl">
          <div className="relative h-72 md:h-105">
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover"
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-3xl font-extrabold md:text-5xl">
              {project.name}
            </h1>

            <div className="mt-6 flex flex-wrap gap-3">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="badge badge-primary badge-outline p-4"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <InfoCard title="Brief Description" text={project.description} />
              <InfoCard title="Challenges Faced" text={project.challenges} />
              <InfoCard title="Future Plans" text={project.improvements} />
              <div className="rounded-2xl bg-base-200 p-6">
                <h3 className="text-xl font-bold">Project Links</h3>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    className="btn btn-primary rounded-full text-white"
                  >
                    Live Project
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    className="btn btn-outline btn-primary rounded-full"
                  >
                    GitHub Client
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const InfoCard = ({ title, text }) => {
  return (
    <div className="rounded-2xl bg-base-200 p-6">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-3 leading-8 text-gray-600">{text}</p>
    </div>
  );
};
