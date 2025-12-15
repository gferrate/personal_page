import Bio from "@/components/bio";
import Project from "@/components/project";
import Timeline from "@/components/timeline";
import SocialLink from "@/components/social-link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { bio, projects, works, education } from "@/lib/data";

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <main className="min-h-screen bg-gray-50 space-y-6 px-1 pt-6">
      {/* Bio Section */}
      <section id="this-is-me">
        <div className="flex flex-col md:flex-row justify-center items-center max-w-6xl mx-auto">
          <div className="flex flex-col-reverse md:flex-row justify-center items-center space-y-4 md:space-y-0 space-x-0 md:space-x-4">
            {/* Social Links */}
            <div className="mt-4 md:mt-0 flex justify-center items-center flex-row md:flex-col space-y-0 md:space-y-2 space-x-2 md:space-x-0">
              <SocialLink
                href="mailto:hello@gabrielferrate.com"
                imageSrc="/images/email_icon.png"
                alt="Email"
              />
              <SocialLink
                href="https://www.linkedin.com/in/gferrate/"
                imageSrc="/images/linkedin_logo_sq.png"
                alt="LinkedIn"
              />
              <SocialLink
                href="https://github.com/gferrate"
                imageSrc="/images/github_logo.png"
                alt="GitHub"
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
      <section
        id="projects"
        className="p-4 max-w-6xl mx-auto hover:bg-gray-100 transition-all duration-500 rounded-xl hover:inset-shadow-sm"
      >
        <h1 className="text-2xl text-center mb-2">
          Some of my personal projects
        </h1>
        <h2 className="text-sm text-center text-gray-600">
          (Click any project to get more info)
        </h2>
        <div className="w-full mt-6 grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
          {projects
            .filter((project) => !project.hiddenByDefault)
            .map((project) => (
              <Project key={project.title} project={project} />
            ))}
        </div>
        <div className="w-full mt-2">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="older-projects" className="border-none">
              <AccordionTrigger className="max-w-min">
                <div className="text-nowrap">View older projects</div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="w-full mt-4 grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
                  {projects
                    .filter((project) => project.hiddenByDefault)
                    .map((project) => (
                      <Project key={project.title} project={project} />
                    ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Work Experience Section */}
      <section
        id="work-experience"
        className="p-4 max-w-6xl mx-auto hover:bg-gray-100 transition-all duration-500 rounded-xl hover:hover:inset-shadow-sm"
      >
        <h1 className="text-2xl text-center">My work experiences</h1>
        <Timeline items={works} />
      </section>

      {/* Education Section */}
      <section
        id="education"
        className="p-4 max-w-6xl mx-auto hover:bg-gray-100 transition-all duration-500 rounded-xl hover:hover:inset-shadow-sm"
      >
        <h1 className="text-2xl text-center">My academic path</h1>
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
