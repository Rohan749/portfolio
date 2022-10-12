import React from "react";
import "./FrontPage.css";
import { motion } from "framer-motion";
import { GrTwitter } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { SiGeeksforgeeks } from "react-icons/si";
import { HiClipboardCopy } from "react-icons/hi";

const FrontPage = () => {
  return (
    <>
      <div className="leftside" />
      
      <div id="home" className="background">
        <motion.div className="profile"
        initial={{ y: "15vh", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        ></motion.div>
        <motion.div className="name"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.9 }}
        >ROHAN</motion.div>
        <motion.div className="surname"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 3.7 }}
        >KUMAR PANDEY</motion.div>
        <motion.div className="desc"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 3.7}}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
          molestiae voluptates ipsa quo repudiandae iusto rem incidunt error
          consectetur itaque. Quasi dolore tempore aspernatur debitis
          praesentium magnam facere. Praesentium, debitis.
        </motion.div>
        <motion.div className="icons"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 4.5}}
        >
        <nav>
            <a className="a_link"
              href="https://www.linkedin.com/in/rohan-kumar-pandey-25a263208/"
              target="_blank"
            >
              <BsLinkedin />
            </a>
          </nav>
          <nav>
            <a className="a_link" href="https://www.instagram.com/_r.code_/" target="_blank">
              <BsInstagram />
            </a>
          </nav>
          <nav>
            <a className="a_link" href="https://twitter.com/heyrohan7" target="_blank">
              <GrTwitter />
            </a>
          </nav>
          <nav>
            <a className="a_link" href="https://github.com/Rohan749" target="_blank">
              <BsGithub />
            </a>
          </nav>
          <nav>
            <a className="a_link"
              href="https://auth.geeksforgeeks.org/user/rohanpandey749/practice"
              target="_blank"
            >
              <SiGeeksforgeeks />
            </a>
          </nav>
        </motion.div>
        <motion.div className="personal_info"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 4.5 }}
        >
          <div className="info email"><strong>Email:</strong> <br /> rohanpandey749@gmail.com</div>
          <div className="info phno"><strong>Ph No.:</strong> <br /> 8210036627</div>
          <a href="https://drive.google.com/file/d/1xyQQK6hRdaWSjonEpjcXOnpXt52jbMhy/view?usp=sharing"
            target="_blank"><button className="info resume">Download Resume<HiClipboardCopy className="clip"/></button></a>
          <br />
          <a href="https://www.showwcase.com/rohan749"
            target="_blank"><button className="info showcase">Showwcase</button></a>
        </motion.div>
      </div>
    </>
  );
};
export default FrontPage;
