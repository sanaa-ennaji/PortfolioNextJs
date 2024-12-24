"use client";

import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

// components
import { Button } from "@/components/ui/button";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import About from "@/app/about/page";
import Contact from "@/app/contact/page";
import Projects from "@/app/projects/page";
// import Contact from "@/app/contact/page";


const Home = () => {
  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
      className="min-h-[80vh]  flex flex-col justify-center xl:justify-between py-12 xl:py-0"
    >
      <div className="container mx-auto max-w-[1280px] flex-1 flex items-center">
        {/* main content */}
        <div className="flex flex-col xl:flex-row items-center justify-center xl:gap-[100px] w-full">
        
          {/* text */}
          <div className="flex flex-col gap-5 w-auto max-w-[500px] text-center xl:text-left">
            {/* hello */}
            <motion.div
              variants={fadeIn("down", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
            >
              <h1 className="h1">
                Hello!
                <br />
                I'm <span className="text-accent">Sanaa</span>
              </h1>
            </motion.div>
            {/* bio */}
            <motion.div
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
              className="flex flex-col gap-2"
            >
              <h3 className="h3 text-white/60">fULL STACK Developer</h3>
              <p className="p max-w-[312px] text-white/80">
              I design and build intuitive digital experiences, blending clean code with creative vision to bring ideas to life.
              </p>
            </motion.div>
            {/* take action */}
             <motion.h3
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
              className="h3"
            >
              Let's create something <br />
              remarkable together!
            </motion.h3> 
            {/* btn and socials */}
            <motion.div
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
              className="flex flex-col xl:flex-row xl:mt-[5px] items-center xl:items-start gap-8"
            >
              <a
                href="/assets/SanaaEnnaji-Resumee.pdf"
                download
                aria-label="Download sanaa's CV"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </motion.div>
          </div>
            {/* photo */}
            <div className="mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      {/* Stats at the bottom */}
      <div className="w-full">
        <Stats />
      </div>
      <div className="mt-40" id="about">
      <About />
      </div>
      <div className="mt-20" id="projects">
      <Projects />
      </div>
      <div className="mt-10" id="contact">
      {/* Render the Contact component */}
      <Contact />
      </div>

    </motion.div>
  );
};

export default Home;
