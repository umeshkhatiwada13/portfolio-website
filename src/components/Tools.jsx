import React from "react";

import java from "../assets/java.png";
import spring from "../assets/spring.png";
import mysql from "../assets/mysql.png";
import psql from "../assets/psql.png";
import docker from "../assets/docker.png";
import aws from "../assets/aws.png";
import git from "../assets/git.png";
import js from "../assets/js.png";
import jquery from "../assets/jquery.png";
import react from "../assets/react.png";
import thymeleaf from "../assets/thymeleaf.png"
import hibernate from "../assets/Hibernate.png"
import rabbit from "../assets/rabbitmq.png"
const Tools = () => {
  const techs = [
    {
      id: 1,
      src: java,
      title: "Java",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: spring,
      title: "Spring & Spring Boot",
      style: "shadow-green-300",
    },
    {
      id: 3,
      src: mysql,
      title: "MySQL",
      style: "shadow-teal-500",
    },
    {
      id: 4,
      src: psql,
      title: "PostgreSQL",
      style: "shadow-cyan-300",
    },
    {
      id: 5,
      src: docker,
      title: "Docker",
      style: "shadow-blue-400",
    },
    {
      id: 6,
      src: aws,
      title: "AWS",
      style: "shadow-white",
    },
    {
      id: 7,
      src: js,
      title: "Javascript",
      style: "shadow-yellow-400",
    },
    {
      id: 8,
      src: react,
      title: "React",
      style: "shadow-blue-400",
    },
    {
      id: 9,
      src: jquery,
      title: "jQuery",
      style: "shadow-sky-400",
    },
    {
      id: 10,
      src: thymeleaf,
      title: "Thymeleaf",
      style: "shadow-green-400",
    },
    // {
    //   id: 11,
    //   src: hibernate,
    //   title: "Hibernate",
    //   style: "shadow-amber-200",
    // },
    {
      id: 11,
      src: git,
      title: "Git",
      style: "shadow-orange-400",
    },
    {
      id: 12,
      src: rabbit,
      title: "RabbitMQ",
      style: "shadow-orange-300",
    },
  ];

  return (
    <div
      name="tools"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen tools"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Tools
          </p>
          {/* <p className="py-6 font-bold ">Infodevelopers 2021-02-Current</p> */}
          {/* <p className="font-bold inline">Java Developer  Digital Nepal(2019/02 - 2021/01)</p> */}
          <p className="py-6">These are the technologies I've worked with and used them in my projects.</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tools;
