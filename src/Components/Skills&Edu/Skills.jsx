import React from "react";
import "./Skills.css";
import { FaReact } from "react-icons/fa"
import { AiFillHtml5 } from "react-icons/ai"
import { DiCss3 } from "react-icons/di"
import { SiJavascript } from "react-icons/si"
import { SiCanva } from "react-icons/si"
import { GrNode } from "react-icons/gr"
import { CgFigma } from "react-icons/cg"
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <>
      <div className="skill_body">
        <div className="flex_bodyCover">
          <motion.div className="_section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="_head">EDUCATION</div>
            <hr />
            <div className="edu_">
              <div className="clg_name">
                <h2>
                  Dayananda Sagar College of Engineering
                </h2>
                <strong>B-TECH in Electronics and Communication Engineering (ECE)</strong>
              </div>
              <div className="duration"><h2>2020 - Present</h2></div>
            </div>
            <div className="edu_">
              <div className="clg_name">
                <h2>
                  Kairali School (+2) HEC Township
                </h2>
                <strong>12th with Physics, Chemistry & Mathematics</strong>
              </div>
              <div className="duration"><h2>2017-2019</h2></div>
            </div>
          </motion.div>

          <motion.div className="_section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="_head">TECHSTACK</div>
            <hr />
            <div className="tech_">
              <div className="tech_icon"><FaReact size="2rem" /></div>
              <div className="tech_icon"><AiFillHtml5 size="2rem" /></div>
              <div className="tech_icon"><DiCss3 size="2rem"/></div>
              <div className="tech_icon"><SiJavascript size="2rem"/></div>
              <div className="tech_icon cicon">C++</div>
            </div>
            <div className="tech_">
              <div className="tech_icon"><SiCanva size="2rem"  fill="white"/></div>
              <div className="tech_icon"><GrNode size="2rem"/></div>
              <div className="tech_icon"><CgFigma size="2rem"/></div>
            </div>
          </motion.div>
        </div>
        <motion.div
          className="skill__links "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <nav>
            <nav>
              <a href="/">Home</a>
            </nav>
            <nav>
              <a href="/projects">Projects</a>
            </nav>
          </nav>
        </motion.div>
      </div>
    </>
  );
};

export default Skills;
