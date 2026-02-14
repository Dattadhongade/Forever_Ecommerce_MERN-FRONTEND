import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-112.5  "
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
            odit non cumque reprehenderit voluptatem iusto rerum necessitatibus,
            sint nemo assumenda sit temporibus maxime reiciendis ab illo
            corrupti repellat consectetur corporis!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
            adipisci laboriosam doloremque id fuga voluptatem porro debitis
            neque, modi vero eligendi consequuntur ex. Quas tempore est
            similique deleniti a sapiente?
          </p>
          <b className="text-gray-800">Our Mission </b>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est
            voluptates consequatur iure voluptatum quibusdam saepe esse illo
            placeat ullam nihil architecto aperiam, fugiat repudiandae. Sapiente
            dignissimos soluta debitis ipsum ullam.
          </p>
        </div>
      </div>
      <div className="text-xl py-4 ">
        <Title text1={"WHY"} text2={"SHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 ">
          <b>Quality Assurance</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
            alias soluta pariatur, dignissimos consectetur cum consequuntur.
          </p>
        </div>
        <div className="border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 ">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="border border-gray-300  px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 ">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
            alias soluta pariatur, dignissimos consectetur cum consequuntur.
          </p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default About;
