import { SectionHeader } from "./SectionHeader";
import { Tabs } from "./Tabs";
import { Base } from "./Base";
import { NavLink } from "@remix-run/react";
import { ListItem } from "./ListItem";
import { Card, SmallCard } from "./Card";
import { Button } from "./Button";
import { Header } from "./Header";
import { Socials } from "./Socials";
import { Sidebar } from "./Sidebar";
import { Navbar } from "./Navbar";
import { Timeline } from "./Timeline";
import { Footer } from "./Footer";
import { personalProjects, projects } from "../data";

export const Main = ({ isActive, setisActive }) => {
  return (
    <main className="flex flex-col items-start space-y-7 bg-[#0D192D] px-7 sm:px-14">
      <Sidebar isActive={isActive} setisActive={setisActive} />
      <Navbar />
      <section className="flex h-screen flex-col items-start justify-center gap-10 lg:w-full lg:items-center">
        <div className="space-y-3">
          <h1 className="font-mono text-sm text-[#64ffda]">Hi, my name is</h1>
          <Header text="Macqy Garcia." variant="primary" />
          <Header text="I build things for the web." variant="secondary" />
          <p className="text-sm tracking-wide text-[#8892b0] sm:text-base sm:leading-relaxed md:max-w-xl lg:py-7">
            I’m a software engineer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I’m focused
            on building accessible, human-centered products at{" "}
            <NavLink to="https://joyride.com.ph/" className="text-[#64ffda]">
              JoyRide PH
            </NavLink>
          </p>
          <Button text="Check out my course!" link="/" />
        </div>
      </section>
      {/* ABOUT */}
      <section className="w-full lg:mx-auto lg:flex lg:max-w-4xl lg:gap-10">
        <div className="lg:max-w-md">
          <SectionHeader title="About Me" before="before:content-['01.']" />
          <div>
            <Base
              variant="primary"
              text="Hello! My name is Macqy and I enjoy creating things that live on the
        internet. My interest in web development started back in 2017 when I
        decided to create a system that will handle documents for my company — turns out hacking together
        a custom reblog button taught me a lot about HTML & CSS!"
            />
            <br />
            <br />
            <Base
              variant="primary"
              text="Fast-forward to today, and I’ve had the privilege of working at a"
            />
            <Base variant="secondary" text="fintech company," />
            <Base variant="secondary" text="a start-up," />
            <Base variant="secondary" text="a huge corporation," />
            <Base variant="primary" text="and" />
            <Base variant="secondary" text="a leading homegrown superapp." />
            <Base
              variant="primary"
              text="My main focus these days is
        building accessible, inclusive products and digital experiences at"
            />
            <Base variant="secondary" text="JoyRide PH" />
            <Base variant="primary" text="for a variety of clients." />
            <br />
            <br />
            <Base variant="primary" text="I also recently" />
            <Base variant="secondary" text="launched a course" />
            <Base
              variant="primary"
              text="that covers everything you need to build an Ecommerce app using Remix & PlanetScale as its database."
            />
          </div>
          <br />
          <Base
            variant="primary"
            text="Here are a few technologies I’ve been working with recently:"
          />
          <ul className="grid grid-cols-2 gap-2 py-5">
            <li className="font-mono text-xs font-thin tracking-wide text-[#8892b0] before:mr-2 before:text-sm before:text-[#64ffda] before:content-['▹']">
              JavaScript (ES6+)
            </li>
            <li className="font-mono text-xs font-thin tracking-wide text-[#8892b0] before:mr-2 before:text-sm before:text-[#64ffda] before:content-['▹']">
              Remix
            </li>
            <li className="font-mono text-xs font-thin tracking-wide text-[#8892b0] before:mr-2 before:text-sm before:text-[#64ffda] before:content-['▹']">
              Node.js
            </li>
            <li className="font-mono text-xs font-thin tracking-wide text-[#8892b0] before:mr-2 before:text-sm before:text-[#64ffda] before:content-['▹']">
              TypeScript
            </li>
            <li className="font-mono text-xs font-thin tracking-wide text-[#8892b0] before:mr-2 before:text-sm before:text-[#64ffda] before:content-['▹']">
              Express
            </li>
            <li className="font-mono text-xs font-thin tracking-wide text-[#8892b0] before:mr-2 before:text-sm before:text-[#64ffda] before:content-['▹']">
              Prisma
            </li>
          </ul>
        </div>
        {/* Profile Photo */}
        <div className="group relative mx-auto mt-10 h-56 w-56 cursor-pointer lg:mt-24 lg:h-72 lg:w-72">
          <div className="absolute h-56 w-56 rounded-md bg-[#64ffda] group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:transition group-hover:duration-300 group-hover:ease-in-out lg:h-72 lg:w-72" />
          <div className="absolute left-3 top-3 h-56 w-56 rounded-md border-2 border-[#64ffda] group-hover:translate-x-1 group-hover:translate-y-1 group-hover:transition group-hover:duration-300 group-hover:ease-in-out lg:h-72 lg:w-72" />
        </div>
      </section>
      {/* WORKED */}
      <section className="py-24 lg:mx-auto">
        <SectionHeader
          title="Where I've Worked"
          before="before:content-['02.']"
        />
        <Tabs />
        <div className="lg:mt-7 lg:flex lg:items-start lg:justify-between lg:gap-5">
          <Timeline />
          <div>
            <div className="space-y-1 pt-2">
              <h3>
                <span className="text-xl text-[#ccd6f6]">
                  Software Engineer
                </span>
                <span className="mx-1 text-[#64ffda]">@</span>
                <NavLink
                  to="https://joyride.com.ph/"
                  className="mx-1 text-xl text-[#64ffda]"
                >
                  JoyRide PH
                </NavLink>
              </h3>
              <p className="font-mono text-xs text-[#8892b0]">
                May 2022 - Present
              </p>
            </div>
            <ul className="relative flex flex-col gap-4 p-5 text-sm font-light">
              <ListItem
                text="Deliver high-quality, robust production code for a diverse array of
          projects for company and customer use such as inventory and selling system,
          mobile app using react native and an admin dashboard for the app"
              />
              <ListItem
                text="Work alongside creative directors to lead the research, development,
          and architecture of technical solutions to fulfill business
          requirements"
              />
              <ListItem
                text="Collaborate with designers, project managers, and other engineers to
          transform creative concepts into production realities for clients and
          stakeholders"
              />
              <ListItem
                text="Provide leadership within engineering department through close
          collaboration, knowledge shares, and mentorship"
              />
            </ul>
          </div>
        </div>
      </section>
      {/* BUILT */}
      <section className="lg:mx-auto lg:max-w-5xl">
        <SectionHeader
          title="Some Things I’ve Built"
          before="before:content-['03.']"
        />
        <section className="flex flex-col gap-7 pb-7 lg:mt-7 lg:grid lg:grid-cols-2">
          {personalProjects.map((project, index) => (
            <Card key={index} project={project} />
          ))}
        </section>
      </section>
      <div className="flex w-full flex-col items-center justify-center gap-3 py-10">
        <h2 className="text-center text-xl font-semibold text-[#ccd6f6]">
          Other Noteworthy Projects
        </h2>
        <NavLink
          to="/"
          className="font-mono text-sm font-thin tracking-wider text-[#64ffda]"
        >
          view the archive
        </NavLink>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:mx-auto lg:max-w-3xl xl:max-w-5xl xl:grid-cols-3">
        {projects.map((project, index) => (
          <SmallCard key={index} project={project} />
        ))}
      </div>
      {/* <div className="flex w-full justify-center py-8">
        <Button text="Show More" link="/" />
      </div> */}
      <div className="flex w-full flex-col items-center justify-center gap-4 pb-20 pt-12 text-center lg:gap-7">
        <h2 className="font-mono text-sm font-thin tracking-wider text-[#64ffda]">
          What's Next?
        </h2>
        <h2 className="text-4xl font-bold text-[#ccd6f6] lg:text-6xl">
          Get In Touch
        </h2>
        <p className="text-sm text-[#a8b2d1] sm:mx-auto sm:max-w-md sm:text-base lg:max-w-xl">
          Although I’m not currently looking for any new opportunities, my inbox
          is always open. Whether you have a question or just want to say hi,
          I’ll try my best to get back to you!
        </p>
        <button className="relative left-0 top-0 z-10 rounded border border-[#64ffda] bg-[#0D192D] px-5 py-4 font-mono text-sm text-[#64ffda] transition duration-300 ease-in-out hover:-translate-x-[1px] hover:-translate-y-[1px] hover:border-b-4 hover:border-r-4">
          <a href="mailto:garciamacqy@gmail.com">Say Hello!</a>
        </button>
      </div>
      <footer className="flex w-full flex-col justify-center gap-5 pb-10 pt-16">
        <Footer />
        <p className="text-center font-mono text-xs text-[#a8b2d1]">
          Designed & Built by Macqy Garcia
        </p>
        <Socials />
      </footer>
    </main>
  );
};
