import React from "react";
import "./ProjectSection.css";

const ProjectSection = () => {
  return (
    <>
    <div id="projects" className="project_top"></div>
      <div className="project_body">
        <div>
          <div className="right_side" />
          <div className="left_side" />
        </div>
        <h1 className="heading">
          MY PROJECTS
        </h1>
        <div className="p_body">
          <div className="individual_projects ">
            <div className="p_description ">
              <h2>Choice Predicting App</h2>
              <hr/>
              <p>
                This is a React app which predicts a person's interest in a
                particular art field among the given options based on time spent
                hovering over the image.
              </p>
              <p>
                If more time spent, means more interested the person is in that
                art style.
              </p>
            </div>
            <a
              href="https://rohan749.github.io/Choice-Predicting-App/"
              className="p_image ch_app"
            ></a>
          </div>

          <div className="individual_projects">
            <div className="p_description ">
              <h2>Expense App</h2>
              <hr/>
              <p>
                A react app that helps users to add new expenses in the list and
                keep track of monthly expenses.
              </p>
            </div>
            <a
              href="https://rohan749.github.io/Expenses-App/"
              className="p_image exp_app"
            ></a>
          </div>

          <div className="individual_projects ">
            <div className="p_description ">
              <h2>Rocket.Chat App</h2>
              <hr/>
              <p>
                This app specifically runs inside Rocket.Chat. It will help
                newcomers to get familiar with Rocket.chat environment.
              </p>
              <p>
                Also regular contributors can use it to get to the frequently
                used links.
              </p>
            </div>
            <a
              href="https://github.com/Rohan749/Apps.Community.Welcome.v2"
              className="p_image caw"
            ></a>
          </div>

          <div className="individual_projects ">
            <div className="p_description ">
              <h2>Background Changing App</h2>
              <hr/>
              <p>
                This webpage is made using HTML and CSS. It not only changes the
                background colors randomly, but also it has a large number of
                gradient color combinations.
              </p>
              <p>
                In addition to it, the background images can also be changed if
                desired.
              </p>
            </div>
            <a
              href="https://rohan749.github.io/Random-Background-Changing-Webpage/"
              className="p_image bg_app"
            ></a>
          </div>

          <div className="individual_projects ">
            <div className="p_description ">
              <h2>Graffiti Calculator</h2>
              <hr/>
              <p>
                A simple calculator using HTML, CSS and JavaScript When clicked
                on "Say my Name" button, it shows up a Graffiti art saying:
                Rohan! Go to the master branch to get the project files.
              </p>
            </div>
            <a
              href="https://github.com/Rohan749/Basic-Calculator"
              className="p_image graf_app"
            ></a>
          </div>

          <div className="individual_projects ">
            <div className="p_description ">
              <h2>Food Ordering App</h2>
              <hr/>
              <p>This is a food ordering webpage using HTML and CSS.</p>
            </div>
            <a
              href="https://github.com/Rohan749/Food-ordering-webpage"
              className="p_image food_app"
            ></a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectSection;
