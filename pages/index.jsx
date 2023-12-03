import React, { useState } from "react";
import Image from "next/image";
import star from "../public/icon-star.svg";
import Link from "next/link";
import success from "../public/illustration-thank-you.svg";

export default function Home() {
  const [textContent, setTextContent] = useState("SUBMIT");
  const [valueOne, setValueOne] = useState("1");
  const [valueTwo, setValueTwo] = useState("2");
  const [valueThree, setValueThree] = useState("3");
  const [valueFour, setValueFour] = useState("4");
  const [valueFive, setValueFive] = useState("5");
  const [score, setScore] = useState(0);
  const [scoreBlock, setScoreBlock] = useState("");
  const [successBlock, setSuccessBlock] = useState("hidden");

  const handleOne = (e) => {
    setTextContent(`Send Score ${valueOne}`);
    setScore(valueOne);
  };
  const handleTwo = (e) => {
    setTextContent(`Send Score ${valueTwo}`);
    setScore(valueTwo);
  };
  const handleThree = (e) => {
    setTextContent(`Send Score ${valueThree}`);
    setScore(valueThree);
  };
  const handleFour = (e) => {
    setTextContent(`Send Score ${valueFour}`);
    setScore(valueFour);
  };
  const handleFive = (e) => {
    setTextContent(`Send Score ${valueFive}`);
    setScore(valueFive);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setScoreBlock("hidden");
    setSuccessBlock("");
  };

  return (
    <>
      <div className="container w-auto h-auto sm:w-[410px] ml-[20px] mr-[20px] sm:mx-auto mt-48">
        <div className="flex flex-col justify-between">
          <div
            className={`flex flex-col gap-[31px] p-[32px] bg-gradient-to-b from-darkblue/[0.8] to-verydarkblue/[0.4] rounded-[32px] ${scoreBlock}`}
          >
            <div className="flex items-center justify-center w-[48px] h-[48px] bg-mediumgrey/[0.1] rounded-full">
              <Image src={star} alt="icon-star" />
            </div>
            <div className="flex flex-col gap-[10px] text-white">
              <h1 className="text-3xl font-bold text-[28px]">How did we do?</h1>
              <p className="text-lightgrey">
                Please let us know how we did with your support request. All
                feedback is appreciated to help us improve our offering!
              </p>
            </div>
            <div className="flex justify-between">
              <button
                className="flex items-center justify-center w-[48px] h-[48px] bg-mediumgrey/[0.1] hover:bg-mediumgrey/[1.0] text-white/[0.3] hover:text-white/[1.0] focus:bg-primary focus:text-white rounded-full pt-[2px] transition ease-in-out duration-300"
                onClick={handleOne}
              >
                {valueOne}
              </button>
              <button
                className="flex items-center justify-center w-[48px] h-[48px] bg-mediumgrey/[0.1] hover:bg-mediumgrey/[1.0] text-white/[0.3] hover:text-white/[1.0] focus:bg-primary focus:text-white rounded-full pt-[2px] transition ease-in-out duration-300"
                onClick={handleTwo}
              >
                {valueTwo}
              </button>
              <button
                className="flex items-center justify-center w-[48px] h-[48px] bg-mediumgrey/[0.1] hover:bg-mediumgrey/[1.0] text-white/[0.3] hover:text-white/[1.0] focus:bg-primary focus:text-white rounded-full pt-[2px] transition ease-in-out duration-300"
                onClick={handleThree}
              >
                {valueThree}
              </button>
              <button
                className="flex items-center justify-center w-[48px] h-[48px] bg-mediumgrey/[0.1] hover:bg-mediumgrey/[1.0] text-white/[0.3] hover:text-white/[1.0] focus:bg-primary focus:text-white rounded-full pt-[2px] transition ease-in-out duration-300"
                onClick={handleFour}
              >
                {valueFour}
              </button>
              <button
                className="flex items-center justify-center w-[48px] h-[48px] bg-mediumgrey/[0.1] hover:bg-mediumgrey/[1.0] text-white/[0.3] hover:text-white/[1.0] focus:bg-primary focus:text-white rounded-full pt-[2px] transition ease-in-out duration-300"
                onClick={handleFive}
              >
                {valueFive}
              </button>
            </div>
            <form action="" onSubmit={handleSubmit}>
              <button className="bg-primary rounded-full tracking-[1.95px] h-12 hover:bg-[white] hover:text-primary pt-[2px] transition ease-in-out duration-300 w-[100%]">
                {textContent}
              </button>
            </form>
          </div>

          <div
            className={`flex flex-col items-center gap-[31px] p-[32px] bg-gradient-to-b from-darkblue/[0.8] to-verydarkblue/[0.4] rounded-[32px] ${successBlock}`}
          >
            <Image src={success} alt="icon-star" />
            <small className="text-primary text-[16px] tracking-[0.8px] bg-darkblue rounded-full pl-[32px] pr-[32px] pt-[8px] pb-[4px] font-[400]">
              You selected {score} out of 5
            </small>
            <div className="flex flex-col gap-[10px] text-white">
              <h1 className="text-3xl font-bold text-[28px] text-center">
                Thank you!
              </h1>
              <p className="text-lightgrey text-center font-normal">
                We appreciate you taking the time to give a rating.<br></br>
                If you ever need more support, don’t hesitate to get in touch!
              </p>
            </div>
          </div>
          <small className="text-center mt-[50px] text-white/[0.4]">
            Challenge By &ensp;
            <a
              className="underline text-primary/[0.8]"
              href="https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI"
            >
              frontendmentor.io
            </a>
            <br></br>
            Code By &ensp;
            <a
              className="underline text-primary/[0.8]"
              href="https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI"
            >
              Jasmine
            </a>
          </small>
        </div>
      </div>
    </>
  );
}
