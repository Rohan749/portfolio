import React from "react";
import "./FrontPage.css";
import { GrTwitter } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { SiGeeksforgeeks } from "react-icons/si";
import { HiClipboardCopy } from "react-icons/hi";
import { motion } from "framer-motion";

const FrontPage = () => {
  return (
    <>
      <div className="front_body">
        <div className="col1_front"></div>
        <div className="col2_front"></div>
        <motion.div
          className="profile_pic"
          initial={{ y: "10vh", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.1, delay: 0.2 }}
        ></motion.div>
        <motion.div
          className="more_information fontReduce"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <div className="gmail">
            Email:
            <br /> rohanpandey749@gmail.com
          </div>
          <div>
            Ph No.:
            <br /> 91-8210036627
          </div>
          <div className="resume_div">
            <a 
            href="https://drive.google.com/file/d/1xyQQK6hRdaWSjonEpjcXOnpXt52jbMhy/view?usp=sharing"
            target="_blank"
            ><button>
              Resume <HiClipboardCopy className="resume_icon" />
            </button></a>
            <a href="https://www.showwcase.com/rohan749"
            target="_blank"
            ><button>Showwcase</button></a>
          </div>
        </motion.div>
        <div className="name">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            ROHAN
          </motion.div>
          <motion.div
            className="surname"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            {" "}
            KUMAR PANDEY
          </motion.div>
          <motion.div
            className="profile_description fontReduce"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            My name is Rohan Kumar Pandey. I'm an Artist, Front-End developer
            and Content Creator. I love travelling, meeting new people and
            creating content.
          </motion.div>
        </div>
        <motion.div
          className="icon_links"
          initial={{ y: "13vh", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.1, delay: 0.24 }}
        >
          <nav>
            <a
              href="https://www.linkedin.com/in/rohan-kumar-pandey-25a263208/"
              target="_blank"
            >
              <BsLinkedin />
            </a>
          </nav>
          <nav>
            <a href="https://www.instagram.com/_r.code_/" target="_blank">
              <BsInstagram />
            </a>
          </nav>
          <nav>
            <a href="https://twitter.com/heyrohan7" target="_blank">
              <GrTwitter />
            </a>
          </nav>
          <nav>
            <a href="https://github.com/Rohan749" target="_blank">
              <BsGithub />
            </a>
          </nav>
          <nav>
            <a
              href="https://auth.geeksforgeeks.org/user/rohanpandey749/practice"
              target="_blank"
            >
              <SiGeeksforgeeks />
            </a>
          </nav>
        </motion.div>
        <motion.div
          className="routes_links fontReduce"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <nav>
            <nav>
              <a href="/projects">Project</a>
            </nav>
            <hr />
            <nav>
              <a href="/skills">Skills & Education</a>
            </nav>
            <hr />
          </nav>
        </motion.div>
      </div>
    </>
  );
};

export default FrontPage;
