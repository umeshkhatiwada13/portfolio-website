import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-100 bg-gradient-to-b from-gray-800 to-black text-white about pb-5"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-5">
          I am a Software Engineer with 3 years’ experience primarily working and developing Applications using
          Java programming language along with related technologies.
        </p>

        <br />

        <p className="text-xl">
          {/* I like to code projects from scratch and changing ideas to software  <br /> <br /> */}
          Working for both Startup and Big enterprise, I have developed, maintained and fixed application which are currently being used by
          Hundreds of Thousands of users<br /><br />
          I am a passionate developer who loves his job and is willing to learn
          latest technology while developing and maintain applications which I believe makes people’s life a bit
          easier.
        </p>
      </div>
    </div>
  );
};

export default About;
