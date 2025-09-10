/* eslint-disable sort-keys */
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import { Stories } from "./general.dto";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TeamStories = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    adaptiveHeight: true,
    cssEase: "ease-out",
    responsive: [
      {
        breakpoint: 2250,
        settings: {
          appendDots: (dots: React.ReactNode[]) => (
            <div
              style={{
                height: "20px",
                top: "0.5rem",
                bottom: "0px",
                marginLeft: "4vw",
                listStyle: "none",
              }}
            >
              <ul
                style={{
                  margin: "0px",
                  padding: "0px",
                  listStyle: "none",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {dots}
              </ul>
            </div>
          ),
        },
      },
      {
        breakpoint: 1900,
        settings: {
          appendDots: (dots: React.ReactNode[]) => (
            <div
              style={{
                height: "20px",
                top: "0.5rem",
                bottom: "0px",
                marginLeft: "4.5vw",
                listStyle: "none",
              }}
            >
              <ul
                style={{
                  margin: "0px",
                  padding: "0px",
                  listStyle: "none",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {dots}
              </ul>
            </div>
          ),
        },
      },
      {
        breakpoint: 1800,
        settings: {
          appendDots: (dots: React.ReactNode[]) => (
            <div
              style={{
                height: "20px",
                top: "0.5rem",
                bottom: "0px",
                marginLeft: "5vw",
                listStyle: "none",
              }}
            >
              <ul
                style={{
                  margin: "0px",
                  padding: "0px",
                  listStyle: "none",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {dots}
              </ul>
            </div>
          ),
        },
      },
      {
        breakpoint: 1540,
        settings: {
          appendDots: (dots: React.ReactNode[]) => (
            <div
              style={{
                height: "20px",
                top: "0.5rem",
                bottom: "0px",
                marginLeft: "5.5vw",
                padding: "0px",
                listStyle: "inside",
              }}
            >
              <ul
                style={{
                  margin: "0px",
                  padding: "0px",
                  listStyle: "inside",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {dots}
              </ul>
            </div>
          ),
        },
      },
      {
        breakpoint: 1441,
        settings: {
          appendDots: (dots: React.ReactNode[]) => (
            <div
              style={{
                height: "20px",
                top: "0.5rem",
                bottom: "0px",
                marginLeft: "6vw",
              }}
            >
              <ul
                style={{
                  margin: "0px",
                  padding: "0px",
                  listStyle: "inside",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {dots}
              </ul>
            </div>
          ),
        },
      },
      {
        breakpoint: 1300,
        settings: {
          appendDots: (dots: React.ReactNode[]) => (
            <div
              style={{
                height: "20px",
                top: "0.5rem",
                bottom: "0px",
                marginLeft: "7vw",
                listStyle: "none",
              }}
            >
              <ul
                style={{
                  margin: "0px",
                  padding: "0px",
                  listStyle: "none",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {dots}
              </ul>
            </div>
          ),
        },
      },
      {
        breakpoint: 1140,
        settings: {
          appendDots: (dots: React.ReactNode[]) => (
            <div
              style={{
                height: "20px",
                top: "0.5rem",
                bottom: "0px",
                marginLeft: "8vw",
                listStyle: "none",
              }}
            >
              <ul
                style={{
                  margin: "0px",
                  padding: "0px",
                  listStyle: "none",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {dots}
              </ul>
            </div>
          ),
        },
      },
      {
        breakpoint: 1024,
        settings: {
          appendDots: (dots: React.ReactNode[]) => (
            <div
              style={{
                height: "20px",
                top: "0.5rem",
                bottom: "0px",
                marginLeft: "9vw",
              }}
            >
              <ul
                style={{
                  margin: "0px",
                  padding: "0px",
                  listStyle: "none",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {dots}
              </ul>
            </div>
          ),
        },
      },
      {
        breakpoint: 890,
        settings: {
          appendDots: (dots: React.ReactNode[]) => (
            <div
              style={{
                height: "20px",
                top: "0.5rem",
                bottom: "0px",
                marginLeft: "11vw",
              }}
            >
              <ul
                style={{
                  margin: "0px",
                  padding: "0px",
                  listStyle: "none",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {dots}
              </ul>
            </div>
          ),
        },
      },
      {
        breakpoint: 768.5,
        settings: {
          speed: 1500,
          appendDots: (dots: React.ReactNode[]) => (
            <div
              style={{
                height: "20px",
                bottom: "4vh  ",
                padding: "0px",
                listStyle: "none",
              }}
            >
              <ul
                style={{
                  margin: "0px",
                  padding: "0px",
                  listStyle: "none",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {dots}
              </ul>
            </div>
          ),
        },
      },
      {
        breakpoint: 480,
        settings: {
          speed: 1500,
          appendDots: (dots: React.ReactNode[]) => (
            <div
              style={{
                height: "20px",
                top: "0",
                margin: "0 22vw 0 24vw",
                width: "fit-content",
                padding: "0px",
              }}
            >
              <ul
                style={{
                  margin: "0px",
                  padding: "0px",
                  listStyle: "inside",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {dots}
              </ul>
            </div>
          ),
        },
      },
      {
        breakpoint: 376,
        settings: {
          speed: 1500,
          appendDots: (dots: React.ReactNode[]) => (
            <div
              style={{
                height: "20px",
                top: "0",
                margin: "0 22vw 0 20vw",
                width: "fit-content",
                padding: "0px",
                listStyle: "none",
              }}
            >
              <ul
                style={{
                  margin: "0px",
                  padding: "0px",
                  listStyle: "none",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {dots}
              </ul>
            </div>
          ),
        },
      },
      {
        breakpoint: 321,
        settings: {
          speed: 1500,
          appendDots: (dots: React.ReactNode[]) => (
            <div
              style={{
                height: "20px",
                top: "0",
                margin: "0 22vw 0 16vw",
                width: "fit-content",
                padding: "0px",
                listStyle: "none",
              }}
            >
              <ul
                style={{
                  margin: "0px",
                  padding: "0px",
                  listStyle: "none",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {dots}
              </ul>
            </div>
          ),
        },
      },
      {
        breakpoint: 300,
        settings: {
          dots: false,
        },
      },
    ],
    customPaging: () => (
      <div
        style={{
          width: "10px",
          height: "10px",
          backgroundColor: "transparent", // Transparent background
          border: "1px solid #FFF", // White border
          borderRadius: "50%",
          cursor: "pointer",
        }}
      />
    ),
    appendDots: (dots: React.ReactNode[]) => (
      <div
        style={{
          //Default view for screen > 2250px
          position: "absolute",
          height: "20px",
          top: "0.5rem",
          bottom: "0px",
          marginLeft: "3vw",
          padding: "0px",
          listStyle: "none",
        }}
      >
        <ul
          style={{
            margin: "0px",
            padding: "0px",
            listStyle: "none",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {dots}
        </ul>
      </div>
    ),
  };

  return (
    <div className="mx-[1.2rem] my-40 mb-12 px-4 sm:mb-8 sm:px-6 md:mx-8 lg:mx-[8.06%] lg:mb-32 lg:px-10">
      <h1 className="font-hackathoneCabinetGrotesk text-3xl font-extrabold text-hackathone-font-rocket-red lg:text-4xl">
        Hackathon Unplugged: Team Stories
      </h1>
      <p className="mt-4 font-hackathoneSFProDisplay text-base sm:text-lg lg:text-xl">
        Let&apos;s hear what the Teams have to say
      </p>
      <div className="relative mt-8 min-h-[650px] overflow-hidden rounded-lg shadow-md lg:min-h-[400px]">
        <Slider {...settings}>
          {Stories.map((item, index) => (
            <div
              key={index}
              className="!flex h-auto !flex-col items-center justify-center md:!flex-row"
            >
              <div className="mt-10 !flex max-h-[560px] w-full justify-center sm:mt-0 md:w-1/2 md:items-center md:justify-start">
                <Image
                  className="max-h-[320px] max-w-full cursor-pointer rounded-2xl sm:max-h-[350px]"
                  src={item.img}
                  width={500}
                  height={450}
                  alt={"Team Image"}
                />
              </div>
              <div className="w-full pr-4 pt-8 text-center md:ml-10 md:mt-4 md:w-1/2 md:pt-0 md:text-left xl:ml-8 2xl:ml-4">
                <p className="max-w-prose pb-8 font-hackathoneCabinetGrotesk text-lg sm:pt-8 md:pt-10">
                  {item.text}
                </p>
                <p className="pt-8 text-center text-[22px] font-bold leading-6 text-hackathone-font-rocket-red sm:pt-12 md:text-left">
                  {item.author}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TeamStories;
