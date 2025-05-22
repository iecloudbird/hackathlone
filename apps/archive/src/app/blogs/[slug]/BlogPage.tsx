"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Canvas } from "@react-three/fiber";
import CloudParticleBg from "@/app/general/cloud-particle-bg";
import NavigationBar from "../../general/navigation-bar";
import Footer from "../../general/footer";
import Tooltip from "../../general/tooltip";
import { IconButton } from "@mui/material";
import Image from "next/image";

interface Tag {
  name: string;
}
interface Blog {
  image: string;
  tags: Tag[];
  title: string;
  summary: string;
  points: React.ReactNode[];
  author: string;
  date: string;
  slug: string;
}

interface BlogPageProps {
  blog: Blog;
}

const BlogPage: React.FC<BlogPageProps> = ({ blog }) => {
  const router = useRouter();

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/blogs");
    }
  };

  return (
    <div className="relative min-h-screen bg-black text-slate-50">
      <div className="fixed inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <CloudParticleBg />
        </Canvas>
      </div>
      <div className="relative z-10 py-[24px] MobileScreen:py-[12px]">
        <NavigationBar />
        {/* Laptop view */}
        <div className="hidden lg:block mx-24 my-16 pl-2">
          <Tooltip text="Back to Blogs">
            <IconButton
              size="large"
              color="primary"
              onClick={handleBack}
              className="mr-4 text-white hover:text-hackathone-font-rocket-red TabletScreen:hidden MobileScreen:hidden mb-8"
              edge="start"
              sx={{
                width: "4.5rem",
                height: "4.5rem",
                fontSize: "6rem",
                transition:
                  "transform 0.3s ease-in-out, color 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.3)",
                },
              }}
              aria-label="back to blogs"
            >
              <svg
                width="120"
                height="120"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="50" cy="50" r="50" fill="#EAFE07" />
                <path
                  d="M50 76L54.5825 71.4175L36.4475 53.25L76 53.25L76 46.75L36.4475 46.75L54.5825 28.5825L50 24L24 50L50 76Z"
                  fill="black"
                />
              </svg>
            </IconButton>
          </Tooltip>

          <div>
            <Image
              src={blog.image}
              width={1200}
              height={1200}
              className="lg:float-right w-1/2 h-auto ml-16 mb-10 rounded-lg"
              alt="Blog Image"
            />
          </div>
          <div className="font-hackathoneCabinetGrotesk">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white font-hackathoneSFProDisplay">
              {blog.title}
            </h2>
            <p className="text-base md:text-2xl mt-2 text-hackathone-font-rocket-red mb-10">
              {blog.author} - {blog.date}
            </p>
            <p className="text-xl md:text-xl text-slate-50 mt-8">
              {blog.summary}
            </p>
            <br />
            <ul className="list-none space-y-8">
              {blog.points.map((point, index) => (
                <li
                  key={`event-point-${index}`}
                  className="text-xl md:text-xl text-slate-50"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile view */}
        <div className="block lg:hidden mx-8 my-12 flex flex-col">
          <Tooltip text="Back to Blogs">
            <IconButton
              size="large"
              color="primary"
              onClick={handleBack}
              className="mr-4 text-white hover:text-hackathone-font-rocket-red mb-8"
              edge="start"
              sx={{
                width: "3.5rem",
                height: "3.5rem",
                fontSize: "4rem",
                transition:
                  "transform 0.3s ease-in-out, color 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.2)",
                },
              }}
              aria-label="back to blogs"
            >
              <svg
                width="120"
                height="120"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="50" cy="50" r="50" fill="#EAFE07" />
                <path
                  d="M50 76L54.5825 71.4175L36.4475 53.25L76 53.25L76 46.75L36.4475 46.75L54.5825 28.5825L50 24L24 50L50 76Z"
                  fill="black"
                />
              </svg>
            </IconButton>
          </Tooltip>
          <Image
            src={blog.image}
            width={1200}
            height={1200}
            className="w-auto h-auto mb-8 rounded-lg"
            alt="Blog Image"
          />

          <div className="font-hackathoneCabinetGrotesk">
            <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-slate-50">
              {blog.title}
            </h2>
            <p className="text-base md:text-2xl mt-2 text-hackathone-font-rocket-red mb-10">
              {blog.author} - {blog.date}
            </p>
            <p className="text-base md:text-lg text-slate-50 mt-8">
              {blog.summary}
            </p>
            <br />
            <ul className="list-none space-y-4">
              {blog.points.map((point, index) => (
                <li
                  key={`event-point-${index}`}
                  className="text-base md:text-lg text-slate-50"
                >
                  {typeof point === "string" ? point : <>{point}</>}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default BlogPage;
