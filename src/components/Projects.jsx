import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <div className=" px-4 md:px-24  mt-4  pb-4">
      <h3 className="text-3xl font-bold text-[#2F6BA9] dark:text-[#2D9FE5] mb-6 text-center mt-4 md:text-left md:mt-0">
        Projects
      </h3>
      <div className="grid gap-y-8 md:gap-y-2 md:gap-x-2 md:grid-cols-[repeat(auto-fit,minmax(24rem,1fr))]
 justify-center md:justify-start  lg:gap-y-4">
        <ProjectCard
          title="Escape"
          description="Escape is a web application that allows users to discover nearby places. The platform suggests locations based on the user's preferences, helping them explore restaurants, outdoor activities, and other points of interest"
          image="./img/escape.png"
          link="https://front-escape.vercel.app/"
          github="https://github.com/tintin1401/escape-site"
        />
        <ProjectCard
          title="Hotel Beach"
          description="Hotel Beach is a web platform built with ASP.NET that allows users to book rooms with customizable packages. It calculates prices dynamically, manages payments, and applies discounts based on stay duration and selected services."
          image="./img/hotel.png"
          link="http://beachsa.somee.com/"
          github="https://github.com/AsuncionPD/Proyecto.Net_API/tree/master"
        />
        <ProjectCard
          title="Sultan of Flavors"
          description="Sultan of Flavors is a Lebanese restaurant website that features a shopping cart, product filtering, content translation in Arabic, and user login to enhance the browsing and ordering experience for local and international customers."
          image="./img/sultan.png"
          link="#"
          github="https://github.com/benjaminpaniagua/projectInteractivas2"
        />
        <ProjectCard
          title="Camping"
          description="Camping is a web platform designed for adventurers looking to book camping experiences and guided tours effortlessly. The website allows users to explore different campsites, select exciting tours, and make hassle-free reservations with ease."
          image="./img/Camping.png"
          link="https://exquisite-tapioca-b92078.netlify.app/"
          github="https://github.com/tintin1401/camping"
        />

          
      </div>
    </div>
  );
}
