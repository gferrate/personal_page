import Bio from "@/components/bio";
import Project from "@/components/project";
import Timeline from "@/components/timeline";
import { bio, projects, works, education } from "@/lib/data";

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Bio Section */}
      <section id="this-is-me" className="py-6">
        <div className="flex flex-col md:flex-row justify-center items-center mt-5 max-w-6xl mx-auto px-4">
          <div className="flex flex-col-reverse md:flex-row justify-center items-center space-y-4 md:space-y-0 space-x-0 md:space-x-4">
            {/* Social Links */}
            <div className="mt-4 md:mt-0 flex justify-center items-center flex-row md:flex-col space-y-0 md:space-y-2 space-x-2 md:space-x-0">
              <a
                href="mailto:hello@gabrielferrate.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-center bg-cover shadow-md hover:shadow-lg hover:rotate-6 hover:scale-105 transform duration-500 flex-none"
                style={{ backgroundImage: "url('/images/email_icon.png')" }}
              />
              <a
                href="https://www.linkedin.com/in/gferrate/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-center bg-cover shadow-md hover:shadow-lg hover:rotate-6 hover:scale-105 transform duration-500 flex-none"
                style={{
                  backgroundImage: "url('/images/linkedin_logo_sq.png')",
                }}
              />
              <a
                href="https://github.com/gferrate"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-center bg-cover shadow-md hover:shadow-lg hover:rotate-6 hover:scale-105 transform duration-500 flex-none"
                style={{ backgroundImage: "url('/images/github_logo.png')" }}
              />
            </div>
            {/* Profile Picture */}
            <div
              className="h-56 w-56 rounded-full bg-center bg-cover shadow-md hover:shadow-lg hover:rotate-6 hover:scale-105 transform duration-500 flex-none"
              style={{ backgroundImage: "url('/images/jo_low_res.jpg')" }}
            />
          </div>
          {/* Bio Text */}
          <div className="max-w-md px-4 mt-6 md:mt-0 md:p-0 ml-0 md:ml-5 text-sm text-justify md:text-left">
            <Bio {...bio} />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-6 max-w-6xl mx-auto px-4">
        <h1 className="text-2xl text-center mb-2">
          These are some of my projects:
        </h1>
        <h2 className="text-sm text-center text-gray-600">
          (Click any project to get more info)
        </h2>
        <div className="w-full mt-6 grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
          {projects.map((project) => (
            <Project key={project.title} {...project} />
          ))}
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="work-experience" className="py-5 max-w-6xl mx-auto px-4">
        <h1 className="text-2xl text-center">These are my work experiences:</h1>
        <Timeline items={works} />
      </section>

      {/* Education Section */}
      <section id="education" className="py-5 max-w-6xl mx-auto px-4">
        <h1 className="text-2xl text-center">This is my academic path:</h1>
        <Timeline items={education} />
      </section>

      {/* Footer */}
      <section
        id="footer"
        className="py-8 text-center text-gray-500 text-sm max-w-6xl mx-auto px-4"
      >
        <div className="border-t pt-8 flex justify-between items-center flex-col md:flex-row space-y-4 md:space-y-0 border-gray-300">
          <p>
            Like what you see?{" "}
            <a
              className="underline"
              href="https://github.com/gferrate/personal_page"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fork it on Github
            </a>
          </p>
          <p>Gabriel Ferraté, {currentYear}</p>
        </div>
      </section>
    </main>
  );
}
