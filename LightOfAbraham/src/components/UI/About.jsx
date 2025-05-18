
import { motion } from "framer-motion";


const About = () => {
  return (
    // Section wrapper with responsive padding and light theme styling only
    <section className=" w-full px-4 py-12 md:px-12 lg:px-32 bg-air text-power">
      
      {/* Motion div to animate entry on scroll */}
      <motion.div
        initial={{ opacity: 0, y: 30 }} // Starting hidden + offset down
        whileInView={{ opacity: 1, y: 0 }} // Animate to visible + aligned
        transition={{ duration: 0.8, ease: "easeOut" }} // Smooth scroll-in
        viewport={{ once: true }} // Animate once on first view
        className="max-w-4xl mx-auto"
      >
        {/* Section heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-air p-3 bg-blood">
          About Me
        </h2>

        {/* Paragraph block with spacing and clean typography */}
        <div className="space-y-6 leading-relaxed">
          
          {/* Intro paragraph */}
          <p>
            <span className="text-2xl">H</span>ello, I’m Abraham Bortey Danfa —
            a Front-end Web Developer & Creative Graphic Designer with a pixel-perfect eye and brain tuned to clean architecture,
            and a heart wired for building things that matter.
          </p>

          {/* Journey and background paragraph */}
          <p>
            I bridge two worlds: the sharp logic of <span className="font-medium text-[#004B46]">React code</span> 
            and the visual poetry of <span className="font-medium text-[#004B46]">UI/UX design</span>.
            My journey began in the art trenches—creating bold visuals at 
            <span className="italic"> ELLICOM Multimedia</span> and crafting digital content at 
            <span className="italic"> Koala Supermarket</span>. But soon, curiosity sparked a pivot into tech, 
            where I leveled up through the <span className="font-semibold">ALX Software Engineering Program</span>, 
            specializing in front-end development.
          </p>

          {/* Tech stack and product philosophy */}
          <p className=" hyphens-none">
            Today, I don’t just build web apps, I <span className="italic">design and connect</span> them.
            From     <span className="italic"> <br /> low-fidelity wireframes </span> to 
            <span className="italic"> <br /> high-impact UIs</span>, I craft clean, scalable, and 
            human-centered experiences using <span className="font-medium text-[#004B46]">React</span>, 
            <span className="font-medium text-blood"> Vite</span>, 
            <span className="font-medium text-blood"> Tailwind CSS</span>, 
            <span className="font-medium text-blood"> Zustand</span>, and 
            <span className="font-medium text-blood">API integration</span> that brings the frontend to life.
            It’s about creating products that don’t just look good—but <span className="font-semibold">work smart</span>.
          </p>

          {/* Project highlight */}
          <p>
            My favorite projects blend clarity with creativity—like 
            <span className="font-semibold"> FES-Manager</span>, a transparency-first platform 
            that merges thoughtful design, intuitive state management, and API-fed data 
            to support donor-led education.
          </p>

          {/* Philosophy and principles */}
          <p>
            I believe in code that feels human. In design that speaks before it scrolls. 
            And in interfaces that are as smart as they are stunning.
          </p>

        </div>
      </motion.div>
    </section>
  );
};

export default About;
