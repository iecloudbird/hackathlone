/* eslint-disable react/no-unescaped-entities */
"use client";
import { IconButton } from "@mui/material";
import { motion } from "framer-motion";
import Image, { type StaticImageData } from "next/image";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import Space1 from "@/assets/images/blogs/space1.png";
import Space10 from "@/assets/images/blogs/space10.jpg";
import Space2 from "@/assets/images/blogs/space2.png";
//Lazy and Dynamic import TODO
import Space3 from "@/assets/images/blogs/space3.png";
import Space4 from "@/assets/images/blogs/space4.png";
import Space5 from "@/assets/images/blogs/space5.jpg";
import Space6 from "@/assets/images/blogs/space6.jpg";
import Space7 from "@/assets/images/blogs/space7.png";
import Space8 from "@/assets/images/blogs/space8.jpg";
import Space9 from "@/assets/images/blogs/space9.jpg";
import { Footer } from "@/components/common/shared/footer";
import { NavbarDemo } from "@/components/common/shared/Navbar/Navbar";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import Tooltip from "../../general/tooltip";
import { cards } from "../blogs.dto";

interface Tag {
  name: string;
}
interface Blog {
  image: StaticImageData;
  tags: Tag[];

  title: string;
  summary: string;
  // points: string[];
  points: React.ReactNode[];
  author: string;
  date: string;
  slug: string;
}

const BlogPage: React.FC = () => {
  const { slug } = useParams(); // Get the slug from the dynamic route

  // Find the card data based on the slug
  const card = cards.find((c) => c.slug === slug);

  const router = useRouter();

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/blogs");
    }
  };

  if (!card) {
    return <div>Blog not found</div>;
  }

  //I don't understand why this is here
  const blogs: Blog[] = [
    {
      image: Space1,
      tags: [{ name: "Technology" }],
      title: "The Importance of Diversity in Space Exploration",
      summary:
        "Valuing diverse perspectives, backgrounds, talents, and experiences amplifies our comprehension of the universe and nurtures a just and equitable future for everyone, making space exploration more successful and inclusive.",
      points: [
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Space exploration is one of the most important endeavors of our time. It has the potential to transform our understanding of the universe, and help us develop new technologies that can benefit humanity as a whole. But to reach its full potential, space exploration must be inclusive and diverse.Diversity in spatial analysis is important for many different reasons. First, it can bring a broader perspective on the challenges of spatial exploration. With teams of scientists, engineers and astronauts, we are able to think critically and solve problems in new and innovative ways.",

        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Second, the diversity of space exploration helps us to be an inclusive and equitable society. Seeing people from all walks of life represented in the space program sends the message that everyone has a place in the future of space exploration. This can inspire young people from all walks of life to pursue careers in STEM fields, helping us build a more just and equitable world. Ultimately, diverse spatial exploration is just the right thing to do. No one group of people has a monopoly on knowledge or skills. If we want to reach our full potential in the space, we need to attract the talents and insights of people from all walks of life. There are many ways to increase diversity in spatial exploration. We can start by ensuring that our educational institutions provide opportunities for students from all backgrounds to study STEM subjects. We can also work to increase visibility for women and minorities in the space program, fostering a welcoming and inclusive environment. By diversifying space exploration, we can help ensure that it is more successful, fairer, and more representative of the world in which we live.",

        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Here are some specific examples of how diversity has helped advance space exploration: In the early days of the space program, women were excluded from many important roles. However, many women, such as Catherine Johnson and Margaret Hamilton, were able to make important contributions. Their work contributed to the success of the Apollo mission. In recent years, there has been a growing movement to increase the number of people of color in the space program. This group has been able to bring more diversity to the program, as well as help inspire young people of color to pursue careers in STEM fields. There is also a growing movement to increase the number of people with disabilities in the space program. This movement is important because it shows that people with disabilities can be as successful as anyone else in the space. These are just a few examples of how diversity has helped advance space exploration. As we explore the universe, it is important to continuously increase the diversity of the spatial system. This will help us reach our full potential in the space, and help create an inclusive and equitable society.",
      ],
      author: "Mitrashi Das",
      date: "Aug 04, 2025",
      slug: "card-grid-layout-1",
    },
    {
      image: Space2,
      tags: [{ name: "Technology" }],
      title: "Here's How to Register for SpaceApps 2025!",
      summary:
        "Register for NASA's SpaceApps Challenge 2025 at TU Shannon, Ireland. Explore the website, find the local event (HackAthlone), choose individual or team registration, access resources, and prepare for an exciting cosmic adventure in space exploration.",
      points: [
        "The NASA SpaceApps Challenge 2025 is gearing up for an exciting cosmic adventure, and you're invited! Whether you're an aspiring space scientist, a data wizard, a game developer, or a creative storyteller, this year's hackathon has something for everyone. If you're ready to join the global SpaceApps community and make your mark in space exploration, follow these simple steps to register for the event.",
        <strong
          className="text-hackathone-font-rocket-red"
          key={"item-${index}"}
        >
          Step 1: Visit the SpaceApps Website{" "}
        </strong>,
        <span key={"item-${index}"}>
          {"\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"}First things
          first, open your web browser and head over to the official SpaceApps
          Challenge website. You can do this by typing &apos;SpaceApps
          Challenge&apos; into your preferred search engine or by directly
          entering the URL:{" "}
          <a
            className="hover:text-red-500"
            href="https://www.spaceappschallenge.org/"
            key={"item-${index}"}
          >
            https://www.spaceappschallenge.org/
          </a>
        </span>,
        <strong
          className="text-hackathone-font-rocket-red"
          key={"item-${index}"}
        >
          Step 2: Explore the Local Events{" "}
        </strong>,
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Once you're on the SpaceApps website, take a moment to explore the available options. You'll find a variety of resources, including information about past challenges, inspirational stories, and more. But right now, we're here for SpaceApps 2025, so let's dive in!",
        <strong
          className="text-hackathone-font-rocket-red"
          key={"item-${index}"}
        >
          Step 3: Search for 2025 Local Events
        </strong>,
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0To participate in SpaceApps 2025, you'll want to find a local event near you. These events serve as the launchpad for your SpaceApps journey. Click on the 'Find a Local Event' or similar link to begin your search.",
        <strong
          className="text-hackathone-font-rocket-red"
          key={"item-${index}"}
        >
          Step 4: Choose HackAthlone (TU Shannon, Ireland){" "}
        </strong>,
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0As you search for local events, you'll come across various locations around the world. However, if you're looking for the Athlone event in Ireland, you're in the right place! Look for 'HackAthlone, or simply 'Athlone' in the list of events. This event is hosted at TU Shannon (Technological University Shannon) and promises an exciting experience in space innovation and collaboration.",
        <strong
          className="text-hackathone-font-rocket-red"
          key={"item-${index}"}
        >
          Step 5: Sign Up{" "}
        </strong>,
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Once you've found the Athlone event, it's time to secure your spot. Click on the event to access its dedicated page. There, you'll find all the details you need about Athlone's SpaceApps event, including dates, schedules, and more.",
        <strong
          className="text-hackathone-font-rocket-red"
          key={"item-${index}"}
        >
          Step 6: Register as an Individual or Team{" "}
        </strong>,
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Now, it's registration time! Choose whether you want to participate as an individual or as part of a team. If you're planning to collaborate with friends or fellow enthusiasts, team registration is the way to go. Otherwise, you can register as an individual and join or form a team later.",
        <strong
          className="text-hackathone-font-rocket-red"
          key={"item-${index}"}
        >
          Step 7: Access Resources and Challenges{" "}
        </strong>,
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Congratulations! You're now officially registered for SpaceApps 2025, Athlone. This means you'll have access to a wealth of resources, including datasets, tools, mentorship, and more to help you prepare for the hackathon. Additionally, you can explore the list of exciting challenges that await your innovation and problem-solving skills.",
        <strong
          className="text-hackathone-font-rocket-red"
          key={"item-${index}"}
        >
          Step 8: Get Ready for the Cosmic Adventure{" "}
        </strong>,
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0With your registration complete, you're one step closer to an incredible cosmic adventure. Stay tuned for updates from the Athlone event organizers, connect with fellow participants, and start brainstorming your hackathon ideas. Remember, SpaceApps is not just a competition; it's an opportunity to learn, collaborate, and contribute to space science and exploration.",
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0So, whether you're a seasoned space enthusiast or a newcomer with a passion for discovery, SpaceApps 2025 is your chance to shine. Register today, and get ready to reach for the stars at TU Shannon's HackAthlone event. The cosmos is waiting for your brilliant ideas and solutions!",
      ],
      author: "Shaiv Mehrotra",
      date: "Aug 24, 2025",
      slug: "2",
    },
    {
      image: Space3,
      tags: [{ name: "Technology" }],
      title: "Navigating the SpaceApps Hackathon Challenges",
      summary:
        "Explore NASA's SpaceApps Challenge 2025 with 31 unique challenges across four domains: Space Exploration, Creative, Data Science, and Game Development. Tailor your cosmic journey by selecting challenges based on difficulty and your passion.",
      points: [
        "Are you gearing up for SpaceApps Athlone 2025 and wondering how to find the perfect team to tackle NASA's latest cosmic challenges?",
        "You’re in the right place!",
        "This guide will walk you through strategies and support available at the hackathon to help you form your dream team, join an existing one, or even embark on a solo space adventure.",
        <strong
          className="text-hackathone-font-rocket-red"
          key={"item-${index}"}
        >
          1. Team Size Flexibility
        </strong>,
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0One of the great aspects of SpaceApps Athlone is the flexibility in team sizes. Whether you’re flying solo or collaborating with up to five others, the hackathon encourages diverse teams with fresh ideas.",
        "You can form a team of 1 to 6 participants, allowing for a wide range of collaborations.",
        <strong
          className="text-hackathone-font-rocket-red"
          key={"item-${index}"}
        >
          2. Solo or Team Participation
        </strong>,
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0At SpaceApps Athlone, you have the freedom to choose how you want to participate. Dive into the challenges on your own, or team up with fellow space enthusiasts to combine skills and ideas.",
        <strong
          className="text-hackathone-font-rocket-red"
          key={"item-${index}"}
        >
          3. Registering Your Team
        </strong>,
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0If you decide to form a team, the team leader will need to register it on the SpaceApps platform. This step will create a hub for your collective efforts, making it easier to stay organized and focused.",
        <strong
          className="text-hackathone-font-rocket-red"
          key={"item-${index}"}
        >
          4. Team Joining Opportunities
        </strong>,
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Not up for leading a team? No problem! Team joining typically starts in late September, when registered teams become visible on the SpaceApps platform. Browse through the teams and join one that aligns with your interests and goals.",
        <strong
          className="text-hackathone-font-rocket-red"
          key={"item-${index}"}
        >
          5. Dedicated Chat Platform
        </strong>,
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0SpaceApps Athlone offers a designated chat platform, making it easy to connect with other participants. Whether you’re building a team, discussing challenges, or forming alliances, this platform is an essential resource.",
        <strong
          className="text-hackathone-font-rocket-red"
          key={"item-${index}"}
        >
          6. Seek Organizers’ Assistance
        </strong>,
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0If you’re feeling uncertain about how to find or create a team, don’t hesitate to reach out to the organizing team. They’re there to help you navigate the hackathon’s landscape and ensure you have a stellar experience.",
        <strong
          className="text-hackathone-font-rocket-red"
          key={"item-${index}"}
        >
          7. Cross-College Collaboration
        </strong>,
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0SpaceApps encourages diverse teams! Collaborate with participants from different colleges and universities, fostering cross-institutional cooperation and bringing a variety of perspectives to your team.",
        <strong
          className="text-hackathone-font-rocket-red"
          key={"item-${index}"}
        >
          8. Inclusion of Online Participants
        </strong>,
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Space knows no boundaries, and neither does SpaceApps Athlone! Online participants are welcome to form or join teams, ensuring the hackathon transcends geographical limitations and brings together talent from all over the world.",
        <strong
          className="text-hackathone-font-rocket-red"
          key={"item-${index}"}
        >
          9. Engage in Pitchfest
        </strong>,
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0At the start of the hackathon, don’t miss the Pitchfest event. Team leaders will take the stage to share their challenge goals, project ideas, and the kind of talent they’re looking for. It’s the perfect opportunity to find like-minded individuals to join your team.",
        <strong
          className="text-hackathone-font-rocket-red"
          key={"item-${index}"}
        >
          10. Icebreaking Sessions
        </strong>,
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Immediately following the Pitchfest, get ready for the icebreaking session. This is your chance to socialize, network, and meet potential teammates. Your cosmic crew could be just a conversation away!",
        <strong
          className="text-hackathone-font-rocket-red"
          key={"item-${index}"}
        >
          11. Color-Coded ID Cards
        </strong>,
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0To make team formation even easier, participants will receive color-coded ID cards. These stickers will represent your domain or expertise, helping others quickly identify your skills and interests. In SpaceApps Athlone 2025, forming teams, joining forces, and networking are key to your cosmic journey. Whether you’re a seasoned participant or a first-timer, there are countless opportunities to connect, collaborate, and embark on this extraordinary adventure together.",
        "Get ready to meet your cosmic crew and take on the universe!",
        "Join us from October 4th to 6th, 2025, at TU Shannon.",
        "Ignite your creativity, innovate with technology, and explore the cosmos.",
        "See you there! 🚀🌌 #SpaceApps2025 #TeamFormation #CosmicCrew #HackAthlone",
      ],
      author: "Shaiv Mehrotra",
      date: "Aug 24, 2025",
      slug: "3",
    },
    {
      image: Space4,
      tags: [{ name: "Technology" }],
      title: "Seven Reasons to Choose Space Apps Athlone",
      summary:
        "Are you ready to embark on an incredible journey of innovation and discovery at Space Apps Athlone 2025? The countdown has started, and we’re excited to reveal the amazing opportunities waiting for you at this year’s hackathon. From access to NASA’s Open Data to the chance to win a trip to witness a rocket launch, Space Apps Athlone is packed with possibilities to ignite your creativity and take your career to new heights.",
      points: [
        <strong
          className="text-hackathone-font-rocket-red"
          key={"item-${index}"}
        >
          1. NASA’s Open Data: Fuel Your Imagination
        </strong>,
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Space Apps Athlone gives participants exclusive access to NASA’s Open Data. Imagine having the vast resources of NASA—satellite imagery, astronomical data, and a treasure trove of cosmic information—right at your fingertips. With this wealth of data, the possibilities are as limitless as the universe itself. Whether you’re creating a cutting-edge app or conducting groundbreaking research, NASA’s Open Data is your launchpad to success.",

        <strong
          className="text-hackathone-font-rocket-red"
          key={"item-${index}"}
        >
          2. Networking and Collaboration: Connect with the Best
        </strong>,
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0One of the biggest advantages of participating in Space Apps Athlone is the chance to network and collaborate with industry leaders, experts, and researchers. You’ll have the opportunity to connect with some of the brightest minds in aerospace and technology, forging valuable connections that could open doors to exciting future opportunities.",

        <strong
          className="text-hackathone-font-rocket-red"
          key={"item-${index}"}
        >
          3. State-of-the-Art Facilities: 48 Hours of Innovation
        </strong>,
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0For 48 exhilarating hours, you’ll have access to the TU Shannon Engineering Building—a hub of innovation and creativity. Here, you can work closely with your team in an environment designed to spark inspiration and innovation. It’s the perfect setting for brainstorming, prototyping, and turning your visionary ideas into reality.",

        <strong
          className="text-hackathone-font-rocket-red"
          key={"item-${index}"}
        >
          4. Hackshop, Hacklab, and Mentorship: Your Toolkit for Success
        </strong>,
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0At Space Apps Athlone, we’re committed to helping you succeed. Our Hackshop is stocked with a variety of hardware, electronics, and materials to bring your projects to life. The Hacklab offers space to tackle challenges related to hardware, electronics, mechanical engineering, and material science. Plus, you’ll have access to mentorship from experienced professionals who will guide you every step of the way.",

        <strong
          className="text-hackathone-font-rocket-red"
          key={"item-${index}"}
        >
          5. Meals & Beverages: Stay Energized
        </strong>,
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0We know that innovation requires fuel, so we provide meals and beverages throughout the 48-hour hackathon. Stay energized and focused as you work towards your goals. Whether it’s a midnight snack or a quick coffee break, we’ve got you covered.",

        <strong
          className="text-hackathone-font-rocket-red"
          key={"item-${index}"}
        >
          6. Prizes, Awards, and More: Reach for the Stars
        </strong>,
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Space Apps Athlone offers participants the chance to win cash prizes, awards, and exclusive hackathon merchandise. But the excitement doesn’t stop there. The grand prize is a fully funded trip to NASA to witness a rocket launch in person—an experience that’s truly out of this world!",

        <strong
          className="text-hackathone-font-rocket-red"
          key={"item-${index}"}
        >
          7. Portfolio Boost: Elevate Your Career
        </strong>,
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Participating in Space Apps Athlone is not just about the competition; it’s about gaining valuable experience that can set you apart in the job market. Add this prestigious hackathon to your portfolio and showcase your skills, teamwork, and problem-solving abilities to future employers and collaborators.",

        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Space Apps Athlone is more than just an event—it’s a launchpad for your dreams and aspirations. With NASA’s Open Data, top-notch facilities, mentorship, and incredible prizes, you have everything you need to succeed. Join us in exploring the cosmos, pushing the boundaries of technology, and making history at Space Apps Athlone 2025. Your journey to the stars begins here!",
      ],
      author: "Shaiv Mehrotra & Sneha",
      date: "Sep 3, 2025",
      slug: "4",
    },
    {
      image: Space5,
      tags: [{ name: "Technology" }],
      title:
        "Hacking the Night Away: Unveiling the Thrills of SpaceApps Athlone 2025",
      summary:
        "Are you ready to embark on a journey of innovation, sleepless nights, and boundless camaraderie? Look no further than SpaceApps Athlone 2025, a hackathon experience that will leave you exhilarated and inspired. Picture a weekend filled with coding, problem-solving, and networking with like-minded individuals from around the globe, all set against the backdrop of NASA’s International Space Apps Challenge.",
      points: [
        <strong
          className="text-hackathone-font-rocket-red"
          key={"item-${index}"}
        >
          Hackathon Fever: More Than Just Coding
        </strong>,
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Hackathons like SpaceApps Athlone are a breed of their own, where participants, fondly called hackers, gather to create, innovate, and push their limits. It’s an electrifying atmosphere where ideas come to life, and dreams turn into projects. Whether you’re engrossed in lines of code or passionately crafting innovative solutions, this hackathon is for you.",

        <strong
          className="text-hackathone-font-rocket-red"
          key={"item-${index}"}
        >
          The All-Nighter
        </strong>,
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Imagine this: it’s midnight, and you’re deep into your project, surrounded by fellow hackers intensely working on their own. Cups of coffee and energy drinks are scattered across the tables, fueling the night’s creativity. Sleep may become a distant memory, but the adrenaline keeps you going, whether you’re coding or applying your unique skills to other aspects of the project.",

        <strong
          className="text-hackathone-font-rocket-red"
          key={"item-${index}"}
        >
          Teamwork Makes the Dream Work
        </strong>,
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Hackathons are as much about collaboration as they are about competition. You’ll find yourself part of a diverse team, each member bringing unique skills to the table. Together, you’ll tackle challenges, brainstorm solutions, and create something incredible. It’s a bonding experience like no other, where coding and non-coding talents unite to achieve common goals.",

        <strong
          className="text-hackathone-font-rocket-red"
          key={"item-${index}"}
        >
          Global Connections
        </strong>,
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0In the world of hackathons, geographical borders fade away. SpaceApps Athlone is your chance to connect with fellow hackers from different corners of the world. Discuss ideas, share experiences, and make lifelong friends. This hackathon’s global reach mirrors the likes of PennApps and HackMIT, making it one of the most significant and prestigious hackathons worldwide, proudly hosted by NASA.",

        <strong
          className="text-hackathone-font-rocket-red"
          key={"item-${index}"}
        >
          Eating, Sleeping, and Hacking
        </strong>,
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0At SpaceApps Athlone, the line between work and leisure blurs. You’ll see hackers working with laptops perched on makeshift desks, cozy corners occupied by brainstorming teams, and maybe even a hackathon-inspired pillow fort. Seasoned hackers often come prepared with sleeping bags, ensuring they can grab a few hours of rest before diving back into their code or project tasks.",

        <strong
          className="text-hackathone-font-rocket-red"
          key={"item-${index}"}
        >
          The SpaceApps Experience
        </strong>,
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Imagine all of this taking place against the backdrop of NASA’s International Space Apps Challenge, the biggest hackathon in the world. SpaceApps Athlone is a global event that challenges participants to solve real-world problems with the help of NASA’s open data. It’s an opportunity to make a tangible impact on issues ranging from space exploration to climate change.",

        <strong
          className="text-hackathone-font-rocket-red"
          key={"item-${index}"}
        >
          Why SpaceApps Athlone?
        </strong>,
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0SpaceApps Athlone shares the spirit of innovation with renowned hackathons like PennApps and HackMIT. It’s a hub of creativity, learning, and collaboration. Participants don’t just code; they shape the future.",

        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0As the countdown to SpaceApps Athlone 2025 begins, get ready to immerse yourself in an unforgettable hackathon experience. It’s a whirlwind of creativity, camaraderie, and project development that you won’t want to miss. So, mark your calendars, pack your bags (don’t forget that sleeping bag!), and get set to hack the night away. Join us from October 5th and 6th, 2025, at TU Shannon. Let’s reach for the stars together! 🚀🌌",

        "#SpaceApps2025 #HackAthlone #InnovationUnleashed",
      ],
      author: "Shaiv Mehrotra",
      date: "Sep 3, 2025",
      slug: "5",
    },
    {
      image: Space6,
      tags: [{ name: "Technology" }],
      title:
        "Decoding the SpaceApps Challenge 2025: How Projects Soar to Victory",
      summary:
        "As you gear up for the exhilarating journey of SpaceApps Athlone 2025, you might be curious about how your project will be judged and what criteria will guide the selection of the winners. We’ve established a transparent and comprehensive judging process to ensure that every participant understands what it takes to achieve stellar success.",
      points: [
        <strong
          className="text-hackathone-font-rocket-red"
          key={"item-${index}"}
        >
          Understanding the Judging Process
        </strong>,
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Before diving into the specific criteria, let’s clarify the overall judging process. At SpaceApps Athlone, fairness and equity are at the core of how we recognize the brilliance of each project. Here’s a breakdown of how the judging unfolds:",

        <strong key={"item-${index}"}>1. Challenge Domains:</strong>,
        " \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0The hackathon covers various challenge domains, each focusing on different aspects of space exploration and technology. Teams compete within these domains, ensuring that projects are evaluated within a context that considers their unique themes and objectives.",
        <strong key={"item-${index}"}>2. Selection of Top Teams</strong>,
        " \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0In each challenge domain, top-performing teams are selected based on the number of participants within that domain. This ensures that projects are assessed within the framework of their specific domains, promoting diversity and fairness.",
        <strong key={"item-${index}"}>3. Choosing the Winners</strong>,
        " \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0From the top teams within each challenge domain, the ultimate winners are chosen. This careful process ensures that excellence is recognized within each domain, offering a level playing field for all teams.",

        <strong
          className="text-hackathone-font-rocket-red"
          key={"item-${index}"}
        >
          The Core Judging Criteria
        </strong>,
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Now, let’s delve into the heart of the matter—the judging criteria. While we won’t reveal the exact scoring details, these criteria offer a clear roadmap for your project’s evaluation. They are designed to provide a holistic assessment, covering various dimensions to recognize technical expertise, creativity, and innovation.",

        <strong key={"item-${index}"}>• Impact</strong>,
        " \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0We assess how your project can make a significant difference. Does it tackle a critical problem in an inventive way? Will it inspire and benefit a large audience?",
        <strong key={"item-${index}"}>• Creativity</strong>,
        " \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Innovation is at the core of SpaceApps. We look for projects that bring fresh, imaginative approaches to the challenges. Are you pushing the boundaries of what’s possible?",
        <strong key={"item-${index}"}>• Validity</strong>,
        " \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Does your solution hold up scientifically? Is it feasible in the real world? We ensure that projects are built on a strong foundation.",
        <strong key={"item-${index}"}>• Relevance</strong>,
        " \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Is your project directly responsive to the challenge it was submitted for? How complete, technically feasible, and user-friendly is your solution?",
        <strong key={"item-${index}"}>• Presentation</strong>,
        " \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Communication is key. We evaluate how effectively your team tells the story of your project. Can you clearly and persuasively explain the challenge, the solution, and its importance?",

        <strong
          className="text-hackathone-font-rocket-red"
          key={"item-${index}"}
        >
          Celebrating Diversity and Inclusion
        </strong>,
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0SpaceApps Athlone is all about celebrating diversity and innovation in all its forms. Our judging criteria are crafted to provide an inclusive platform where every team can shine. Whether you’re engineering cutting-edge software, crafting inspiring artwork, or devising ingenious solutions, our criteria ensure that your project is evaluated fairly and comprehensively.",

        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Whether you’re a technical genius, a creative visionary, or a blend of both, know that these criteria are designed to assess projects in their entirety. The SpaceApps Challenge 2025 is about pushing boundaries, unleashing creativity, and embracing the spirit of exploration. Your journey to the stars begins here, and our judging process is your roadmap to cosmic recognition.",

        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0As we approach the event, stay tuned for more updates. In the meantime, keep fueling your imagination, sharpening your skills, and preparing to launch your project into the cosmic arena of SpaceApps Athlone 2025. This is a journey like no other, and together, we’ll make it truly stellar! 🚀🌌",

        "At SpaceApps Athlone, every idea has the potential to change the world, and our judging process ensures that every spark of genius is acknowledged and celebrated! 🌟🌠 #SpaceApps2025 #CosmicRecognition #JudgingCriteria #HackAthlone",
      ],
      author: "Shaiv Mehrotra",
      date: "Sep 4, 2025",
      slug: "6",
    },
    {
      image: Space7,
      tags: [{ name: "Technology" }],
      title:
        "Navigating Your Way to NASA SpaceApps Challenge at TU Shannon in Athlone",
      summary:
        "Ready to embark on an exciting journey of innovation and exploration? The NASA SpaceApps Challenge is coming to TU Shannon in Athlone, and it is an event you won’t want to miss. This year’s challenge offers participants the option to join in person or remotely, but we highly recommend attending in person to fully immerse yourself in the hackathon experience. Imagine brainstorming with your team, coding through the night, and collaborating with like-minded space enthusiasts—all under one roof. To help you get there, we’ve put together a handy guide on how to reach TU Shannon’s engineering building from major cities like Dublin, Limerick, Cork, and Galway.",
      points: [
        <strong
          className="text-hackathone-font-rocket-red"
          key={"item-${index}"}
        >
          Getting There: Your Options
        </strong>,
        "There are three major ways to reach TU Shannon: by bus, train, or driving. Let’s explore these options to make your journey as smooth as possible.",

        <strong
          className="text-hackathone-font-rocket-red"
          key={"item-${index}"}
        >
          1. Taking the Bus: Your Best Bet
        </strong>,
        "From Dublin, Limerick, Cork, or Galway: Several bus services connect these cities to Athlone, including Citylink, Aircoach, and Bus Éireann.",
        <table
          className="table-auto border-collapse rounded-3xl border-2 border-gray-700 bg-[#8F8F8F1A]/50 backdrop-blur-md"
          key={"item-${index}"}
        >
          <tbody key={"item-${index}"}>
            <tr key={"item-${index}"}>
              <td
                className="rounded-l-lg border border-gray-700 p-4"
                key={"item-${index}"}
              >
                Dublin to Athlone
              </td>
              <td
                className="rounded-r-lg border border-gray-700 p-4"
                key={"item-${index}"}
              >
                The 763 (Timetable) and 706/706X (Timetable) routes are ideal.
              </td>
            </tr>
            <tr key={"item-${index}"}>
              <td className="border border-gray-700 p-4" key={"item-${index}"}>
                Galway to Athlone
              </td>
              <td className="border border-gray-700 p-4" key={"item-${index}"}>
                Use the 706/706X (Timetable).
              </td>
            </tr>
            <tr key={"item-${index}"}>
              <td className="border border-gray-700 p-4" key={"item-${index}"}>
                Limerick to Athlone
              </td>
              <td className="border border-gray-700 p-4" key={"item-${index}"}>
                The Route 72 (Timetable) is available.
              </td>
            </tr>
            <tr key={"item-${index}"}>
              <td className="border border-gray-700 p-4" key={"item-${index}"}>
                Cork to Athlone
              </td>
              <td className="border border-gray-700 p-4" key={"item-${index}"}>
                Travel via Galway using Route 51 (Timetable) or via Dublin with
                Route 704X (Timetable).
              </td>
            </tr>
          </tbody>
        </table>,
        "Final Steps: Buses drop you off at a central location in Athlone. From there, follow signs leading to TU Shannon’s engineering building.",
        "Pro tip: Book your bus tickets in advance to save both time and money, especially since it’s a weekend event!",

        <strong
          className="text-hackathone-font-rocket-red"
          key={"item-${index}"}
        >
          2. Opt for the Train: Comfortable and Budget-Friendly
        </strong>,
        <table
          className="table-auto border-collapse rounded-3xl border-2 border-gray-700 bg-[#8F8F8F1A]/50 backdrop-blur-md"
          key={"item-${index}"}
        >
          <tbody>
            <tr key={"item-${index}"}>
              <td className="border border-gray-700 p-4" key={"item-${index}"}>
                From Major Cities
              </td>
              <td className="border border-gray-700 p-4" key={"item-${index}"}>
                Irish Rail offers train services to Athlone from cities like
                Dublin, Limerick, and Galway.
              </td>
            </tr>
            <tr key={"item-${index}"}>
              <td className="border border-gray-700 p-4" key={"item-${index}"}>
                Booking
              </td>
              <td className="border border-gray-700 p-4" key={"item-${index}"}>
                Pre-book your tickets here{" "}
                <a
                  className="hover:text-red-500"
                  href="https://www.irishrail.ie/"
                  key={"item-${index}"}
                >
                  https://www.irishrail.ie/
                </a>{" "}
                for a comfortable journey.
              </td>
            </tr>
            <tr key={"item-${index}"}>
              <td className="border border-gray-700 p-4" key={"item-${index}"}>
                From the Train Station
              </td>
              <td className="border border-gray-700 p-4" key={"item-${index}"}>
                The station is approximately 3 kilometers from TU Shannon’s
                engineering building. Consider taking a cab or bus (Route ATH1
                or A1) from the station to the venue.
              </td>
            </tr>
          </tbody>
        </table>,

        <strong
          className="text-hackathone-font-rocket-red"
          key={"item-${index}"}
        >
          3. Driving: Flexibility and Convenience
        </strong>,
        "• Travel by Car: Enjoy the flexibility of driving to Athlone, with ample parking available at TU Shannon’s engineering building.",
        "• Navigation: Use Google Maps to find the best route to TU Shannon.",

        <strong
          className="text-hackathone-font-rocket-red"
          key={"item-${index}"}
        >
          In Conclusion
        </strong>,
        "Remember, you’re not alone in this journey! Volunteers will be on hand to assist you if you face any issues. The NASA SpaceApps Challenge at TU Shannon in Athlone promises to be an unforgettable experience. Whether you’re traveling from Dublin, Limerick, Cork, Galway, or any other city, you have several convenient transportation options at your disposal. Plan ahead, book your tickets in advance, and get ready to embark on a journey of innovation, collaboration, and exploration. We can’t wait to see you there!",

        "Join us from October 5th and 6th, 2025, at TU Shannon. Let’s reach for the stars together! 🚀🌌",
        "#SpaceApps2025 #HackAthlone",
      ],
      author: "Shaiv Mehrotra",
      date: "Sep 5, 2025",
      slug: "7",
    },
    {
      image: Space8,
      tags: [{ name: "Technology" }],
      title:
        "Navigating the SpaceApps Hackathon Challenges: A Guide to Choosing Your Path",
      summary:
        "Are you prepared to embark on a stellar journey of creativity, data analysis, game development, and space exploration? The NASA SpaceApps Challenge 2025 has arrived, bringing with it a constellation of exciting challenges. With 31 unique challenges across four diverse domains, it’s time to plot your course among the stars. In this blog, we’ll guide you on how to select the perfect challenge for your adventure.",
      points: [
        "A Universe of Domains: Diverse Challenges Await",

        <strong
          className="text-hackathone-font-rocket-red"
          key={"item-${index}"}
        >
          The SpaceApps Hackathon 2025 presents a wide array of challenges
          spread across various domains:
        </strong>,

        "• Space Exploration: Delve into the mysteries of the cosmos, unravel celestial phenomena, and tackle real-world challenges related to space travel.",
        "• Creative: Tap into your artistic side with challenges that invite storytelling, visualizations, and content creation focused on space and science.",
        "• Data Science: Immerse yourself in data analytics and visualization, uncovering insights from space-related datasets to contribute to groundbreaking discoveries.",
        "• Game Development: For gaming enthusiasts, these challenges let you create interactive experiences and educational games centered around space and science themes.",
        "• Climate: Address challenges focused on climate science, sustainability, and environmental awareness, making a tangible impact on our planet.",
        "• Art: Combine science and creativity by taking on challenges that encourage artistic expressions inspired by space and scientific concepts.",
        "• Open Science: Dive into open science projects, contributing to collaborative research and discoveries.",

        <strong
          className="text-hackathone-font-rocket-red"
          key={"item-${index}"}
        >
          Difficulty Levels: Tailored to Your Experience
        </strong>,

        "Each challenge comes with a difficulty level to help you find the one that matches your skills and experience:",

        "• Beginner: Perfect for those new to the field or looking to get started. These challenges often include step-by-step guidance.",
        "• Intermediate: For participants with some experience who seek a moderate challenge that requires a bit more expertise.",
        "• Advanced: Designed for seasoned experts, these challenges pose complex problems that demand deep knowledge and innovative solutions.",

        <strong
          className="text-hackathone-font-rocket-red"
          key={"item-${index}"}
        >
          How to Choose Your Challenge
        </strong>,

        "With so many challenges to explore, how do you select the right one? Here’s a guide:",

        "1. Register: Start by registering for the SpaceApps Hackathon. Once registered, you’ll have access to the full list of challenges.",
        "2. Explore: Take your time to read through the challenge descriptions, understanding the problem statement, goals, and expected outcomes.",
        "3. Filter by Domain: Focus on the domain that aligns with your interests and skills—whether it’s space exploration, creative, data science, or game development.",
        "4. Filter by Difficulty: Select a challenge based on your expertise. Beginners should start with easier challenges to build confidence.",
        "5. Follow Your Passion: Choose a challenge that truly excites you. Passion drives creativity, so pick one that resonates with your interests.",
        "6. Team or Solo: Decide if you want to work solo or with a team. Some challenges may require diverse skills, making teamwork essential.",
        "7. Expand Your Horizons: Don’t limit yourself—explore multiple challenges across different domains and difficulty levels to broaden your experience.",

        "By following these steps, you’ll be well-equipped to select a challenge that aligns with your skills, passions, and goals. Remember, the SpaceApps Hackathon isn’t just a competition—it’s an opportunity to learn, collaborate, and contribute to space science and exploration.",

        "Whether you’re a budding astronomer or a seasoned space enthusiast, there’s a challenge waiting for you. Gear up for your cosmic journey at the SpaceApps Hackathon 2025, and may the stars guide your path.",
      ],
      author: "Shaiv Mehrotra",
      date: "Sep 6, 2025",
      slug: "8",
    },
    {
      image: Space9,
      tags: [{ name: "Technology" }],
      title:
        "How Hackathons Fuel Personal Growth and Prepare You for Life's Challenges",
      summary:
        "Hackathons are not just about coding and competition; they are transformative experiences that mold individuals into resilient, innovative thinkers ready to tackle real-world challenges. Whether you're a seasoned developer or a newcomer to the tech scene, participating in a hackathon like SpaceApps Athlone can significantly impact your personal growth and readiness for future endeavors.",
      points: [
        <strong
          className="text-hackathone-font-rocket-red"
          key={"item-${index}"}
        >
          Embracing the Challenge
        </strong>,

        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Hackathons immerse participants in an intensive, fast-paced environment where creativity and problem-solving skills are put to the test. The challenges presented often require thinking outside the box, collaborating effectively within a team, and managing time under pressure. These experiences nurture adaptability and the ability to thrive in dynamic situations—essential qualities in both professional and personal life.",

        <strong
          className="text-hackathone-font-rocket-red"
          key={"item-${index}"}
        >
          Learning through Collaboration
        </strong>,

        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0One of the most valuable aspects of hackathons is the opportunity to collaborate with diverse individuals—engineers, designers, domain experts, and more—who bring unique perspectives to the table. Teamwork not only enhances technical skills but also fosters interpersonal communication, empathy, and leadership qualities. These collaborative efforts mirror real-world project dynamics, where success hinges on collective innovation and mutual support.",

        <strong
          className="text-hackathone-font-rocket-red"
          key={"item-${index}"}
        >
          Rapid Prototyping and Innovation
        </strong>,

        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0At hackathons, participants often move swiftly from ideation to prototype development. This rapid iteration cycle cultivates a mindset of experimentation and risk-taking. Iterative problem-solving teaches resilience in the face of setbacks and the importance of persistence—a trait crucial for navigating challenges in any professional field.",

        <strong
          className="text-hackathone-font-rocket-red"
          key={"item-${index}"}
        >
          Networking and Mentorship
        </strong>,

        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Hackathons provide unparalleled networking opportunities with industry professionals, mentors, and potential employers. Engaging with experienced mentors not only enhances technical skills but also offers insights into career pathways and industry trends. Building a network of peers and mentors can open doors to future collaborations, job opportunities, and continued learning beyond the hackathon.",

        <strong
          className="text-hackathone-font-rocket-red"
          key={"item-${index}"}
        >
          Confidence and Presentation Skills
        </strong>,

        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Presenting a project to judges and peers at the culmination of a hackathon requires clear communication and the ability to articulate complex ideas concisely. This experience boosts confidence in public speaking and enhances presentation skills—valuable assets in job interviews, client meetings, and professional conferences.",

        <strong
          className="text-hackathone-font-rocket-red"
          key={"item-${index}"}
        >
          Personal Reflection and Growth
        </strong>,

        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Beyond technical skills and career benefits, hackathons encourage personal reflection and growth. Participants often discover new passions, expand their horizons, and gain a deeper understanding of their strengths and areas for development. These self-discoveries foster a growth mindset and a lifelong commitment to learning and innovation.",

        <strong
          className="text-hackathone-font-rocket-red"
          key={"item-${index}"}
        >
          Conclusion
        </strong>,

        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Participating in a hackathon like SpaceApps Athlone is not just about coding—it's about embracing challenges, collaborating with diverse teams, innovating rapidly, and growing personally and professionally. The skills and experiences gained from hackathons prepare individuals to navigate the complexities of the modern world, equipping them with resilience, creativity, and a passion for continuous improvement.",
      ],
      author: "Shaiv Mehrotra",
      date: "Sep 8, 2025",
      slug: "9",
    },
    {
      image: Space10,
      tags: [{ name: "Technology" }],
      title:
        "Mastering SpaceApps Athlone: Tips for a Stellar Hackathon Experience",
      summary:
        "Hackathons are not just about coding and competition; they are transformative experiences that mold individuals into resilient, innovative thinkers ready to tackle real-world challenges. Whether you're a seasoned developer or a newcomer to the tech scene, participating in a hackathon like SpaceApps Athlone can significantly impact your personal growth and readiness for future endeavors.",
      points: [
        <strong
          className="text-hackathone-font-rocket-red"
          key={"item-${index}"}
        >
          Team Up: Collaborate for Galactic Success
        </strong>,

        "• Break the Ice:",
        " \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0As you step into the hackathon, take the initiative to engage with your fellow participants. Use ice-breakers, pitch a small idea, or showcase your skills. It’s all about making connections and finding like-minded space enthusiasts.",

        "• Pre-Hackathon Team Formation:",
        "  \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0If you already have a team in mind or want to form one before the event, go for it! Collaborating with a diverse group can amplify your problem-solving capabilities.",

        "• Leverage Your Proficiencies: ",
        " \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Once in a team, identify your strengths and contribute accordingly. Whether it’s coding, design, research, or presentation skills, take on a role that aligns with your talents.",

        <strong
          className="text-hackathone-font-rocket-red"
          key={"item-${index}"}
        >
          Network: Forge Cosmic Connections
        </strong>,

        "• Engage with Fellow Participants:",
        "  \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Hackathons are more than just coding marathons; they’re opportunities to build connections that can last a lifetime. Engage with fellow participants, discuss project ideas, and share your experiences. These interactions can lead to valuable collaborations.",

        "• Connect with Mentors: ",
        " \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Seek guidance from mentors who can offer insights, technical expertise, and advice on problem-solving. Their experience can be invaluable in steering your project in the right direction.",

        "• Expand Your LinkedIn Universe: ",
        " \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Don’t miss the chance to grow your professional network. During the hackathon, connect with people on LinkedIn, and send personalized messages sharing your experiences and the connections you’ve forged.",

        <strong
          className="text-hackathone-font-rocket-red"
          key={"item-${index}"}
        >
          Solution Demo: Shine with Your Innovation
        </strong>,

        "• Showcase Your Solution: ",
        " \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0When presenting your project, take the opportunity to highlight the innovation behind your solution. Whether it’s a working prototype, a practical demo, or a simulation, a visually compelling presentation can leave a lasting impression.",

        "• Proof of Concept:",
        "  \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Aim to develop a proof of concept. Having an institution validate the value of your proposed solution can add credibility and impact to your project.",

        <strong
          className="text-hackathone-font-rocket-red"
          key={"item-${index}"}
        >
          Time Management: Hackathon Hours Are Precious
        </strong>,

        "• Manage Your Time Effectively: ",
        " \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Time flies during a hackathon. Prioritize tasks, set realistic goals, and allocate time wisely. Stay organized to ensure you make the most of every coding minute.",

        <strong
          className="text-hackathone-font-rocket-red"
          key={"item-${index}"}
        >
          Final Presentations: Shine Bright on Stage
        </strong>,

        "• Perfect Your Pitch:",
        "  \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0As the hackathon concludes, practice your pitch rigorously. Plan the timing of your presentation carefully, and remember that not everyone on your team needs to speak. Use a structured approach to organize your thoughts early in the hack.",

        <strong
          className="text-hackathone-font-rocket-red"
          key={"item-${index}"}
        >
          Seek SME Validation: Tap into Mentor Resources
        </strong>,

        "• Utilize Mentor Hours: ",
        " \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Don’t hesitate to leverage mentor hours to consult with experts in your project’s field. Their feedback and guidance can be instrumental in refining your solution.",

        <strong
          className="text-hackathone-font-rocket-red"
          key={"item-${index}"}
        >
          Hackshop: Secure Your Components Early
        </strong>,

        "• Battling for Resources:",
        "  \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0In a hackathon where electronic components are limited, especially those in high demand, it’s essential to secure them as soon as possible. Visit the Hackshop early to avoid potential bottlenecks.",

        <strong
          className="text-hackathone-font-rocket-red"
          key={"item-${index}"}
        >
          Ethical Considerations: The Universal Code of Conduct
        </strong>,

        "• Uphold Ethical Standards: ",
        " \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Remember to maintain ethical standards throughout the hackathon. Respect your teammates, mentors, and fellow participants. Be inclusive, collaborative, and always prioritize the integrity of your work.",

        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0As you embark on your hackathon journey at SpaceApps Athlone 2025, keep these tips in mind. They’ll not only enhance your experience but also elevate the impact of your projects. Get ready to ignite your creativity, innovate with technology, and explore new horizons. We can’t wait to see your aspirations come to life!",
      ],
      author: "Shaiv Mehrotra",
      date: "Sep 9, 2025",
      slug: "10",
    },
    // Add this to the blogs array
    {
      image: Space3, // You'll need to import an appropriate image
      tags: [{ name: "Technology" }],
      title:
        "Why Your First Hackathon Will Change How You Think About Everything",
      summary:
        "Most people think hackathons are just about coding fast and winning prizes. The reality is much more interesting. Discover how 48 hours of problem-solving can transform your approach to challenges, collaboration, and innovation.",
      points: [
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Most people think hackathons are just about coding fast and winning prizes. The reality is much more interesting. Sure, you'll build something cool in 48 hours. But the real transformation happens in ways you don't expect.",

        <strong
          className="text-hackathone-font-rocket-red"
          key="learn-pressure"
        >
          You Learn to Think Under Pressure
        </strong>,
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Hackathons flip normal learning completely. You have 48 hours to understand a problem, learn new tools, work with strangers, and build something that works. When you successfully solve a climate monitoring challenge using NASA satellite data you'd never seen before, you realize your brain is more capable than you thought. Tight deadlines suddenly don't feel impossible anymore.",

        <strong
          className="text-hackathone-font-rocket-red"
          key="real-collaboration"
        >
          You Discover Real Collaboration
        </strong>,
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0At HackAthlone, you might team up with a climate scientist, a graphic designer, and a policy student to tackle agricultural challenges. None of you could solve the problem alone, but together you create something none of you imagined individually. This changes how you approach every future team project. You start looking for diverse perspectives instead of similar skillsets.",

        <strong className="text-hackathone-font-rocket-red" key="stop-fearing">
          You Stop Fearing the Unknown
        </strong>,
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Most hackathon success comes from figuring things out as you go. You'll learn APIs you've never used, work with unfamiliar datasets, and build interfaces for users you're just starting to understand. This teaches you that not knowing something isn't a problem—it's just temporary. You stop saying 'I don't know how to do that' and start saying 'I don't know how to do that yet.'",

        <strong
          className="text-hackathone-font-rocket-red"
          key="problems-differently"
        >
          You See Problems Differently
        </strong>,
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0After experiencing how teams break down challenges like space debris tracking into manageable pieces, you apply the same approach everywhere. That intimidating research project becomes a collection of smaller, solvable questions.",

        <strong
          className="text-hackathone-font-rocket-red"
          key="build-resilience"
        >
          You Build Resilience
        </strong>,
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Your first attempt at analyzing satellite data will probably fail. Your presentation might have technical difficulties. This is normal. What's surprising is how quickly you bounce back. When everyone's experiencing failure and iteration, you develop resilience. You learn to fail fast, learn quickly, and try again.",

        <strong
          className="text-hackathone-font-rocket-red"
          key="real-innovation"
        >
          You Understand Real Innovation
        </strong>,
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Media shows innovation as sudden breakthroughs by isolated geniuses. Hackathons reveal it's actually messy collaboration, lots of iteration, and smart combinations of existing tools. At HackAthlone, innovation might mean connecting agricultural satellite data with weather APIs to help farmers make irrigation decisions. Not revolutionary technology—just practical problem-solving.",

        <strong className="text-hackathone-font-rocket-red" key="ambiguity">
          You Get Comfortable With Ambiguity
        </strong>,
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'Design a tool to help farmers adapt to climate change' could mean dozens of things. Part of the challenge is figuring out what problem to solve, not just how to solve it. This comfort with unclear requirements becomes incredibly valuable in professional settings.",

        <strong className="text-hackathone-font-rocket-red" key="communicate">
          You Learn to Communicate Simply
        </strong>,
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Hackathons force you to present complex projects in just a few minutes. You learn to start with the problem, not the technology. You practice explaining technical concepts to non-technical people. These communication skills help everywhere you need to convince someone your idea matters.",

        <strong className="text-hackathone-font-rocket-red" key="connections">
          The Long-Term Impact
        </strong>,
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0The real value isn't what you build in 48 hours—it's how the experience changes your approach to everything after. You become confident tackling unfamiliar challenges. You get better at diverse teamwork. You develop resilience. You communicate complex ideas clearly. These skills compound over time. Every challenging project becomes easier because you've proven you can figure things out.",

        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Stop overthinking it. You don't need to be an expert programmer or have the perfect team. You just need curiosity about solving problems and willingness to learn quickly. The confidence you gain from succeeding under pressure will change how you approach every future challenge.",

        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0HackAthlone 2025 takes place October 3-5. Registration is open now.",
      ],
      author: "Shaiv Mehrotra",
      date: "Aug 31, 2025",
      slug: "15",
    },
    // Add this to the blogs array
    {
      image: Space5, // You'll need to choose an appropriate image
      tags: [{ name: "Technology" }],
      title: "You Don't Need to Code to Win at Space Apps (And Here's Proof)",
      summary:
        "Think NASA's hackathon is only for programmers? Think again! Discover why storytellers, designers, and big-picture thinkers are essential for creating solutions that truly matter. Learn how non-technical skills can be the key to hackathon success.",
      points: [
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\"I can't join Space Apps. I'm not technical enough.\" We hear this every year at HackAthlone. People think NASA's hackathon is only for computer science students and engineers. They assume you need years of programming experience to contribute. They're completely wrong.",

        <strong
          className="text-hackathone-font-rocket-red"
          key="real-challenge"
        >
          The Real Challenge Isn't Coding
        </strong>,
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Here's what most people don't understand: the hardest part of space challenges usually isn't the programming. It's figuring out what problem to solve, how to present the solution, and why it matters. Take climate monitoring. Sure, you need someone who can work with satellite data. But you also need someone who understands which climate impacts matter to farmers, how to design interfaces that scientists will actually use, and how to explain findings to policymakers. The coding might take 6 hours. Everything else takes the other 42 hours.",

        <strong className="text-hackathone-font-rocket-red" key="team-needs">
          What Teams Actually Need
        </strong>,
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0If you're smart enough to be interested in space challenges, you're technical enough for Space Apps. The question is what other skills you bring that programmers desperately need:",
        "• User Research: Understanding who will use the solution and what they need",
        "• Design: Making complex data understandable and actionable",
        "• Communication: Explaining why the solution matters",
        "• Project Management: Keeping teams focused under pressure",
        "• Domain Knowledge: Understanding agriculture, climate, policy, or other areas",
        "• Strategy: Figuring out how solutions could actually be implemented",
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0These skills are often more valuable than programming ability in a 48-hour hackathon.",

        <strong
          className="text-hackathone-font-rocket-red"
          key="successful-projects"
        >
          What Successful Projects Look Like
        </strong>,
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Based on successful Space Apps projects:",
        "• Agricultural Solutions: Win because teams understand farmers' real challenges and design interfaces that work for people with limited tech access.",
        "• Climate Tools: Succeed when someone knows which climate data matters to different users and how to visualize it clearly.",
        "• Space Debris Solutions: Need people who understand policy implications and can design interfaces for mission controllers.",
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0The pattern? Technical skills get you a working prototype. Everything else determines whether it actually solves a problem people care about.",

        <strong
          className="text-hackathone-font-rocket-red"
          key="how-contribute"
        >
          How to Contribute Without Coding
        </strong>,
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0During the weekend:",
        "• Research the problem while developers set up infrastructure",
        "• Design user interfaces and experience flows",
        "• Create compelling presentations",
        "• Handle project management and coordination",
        "• Develop implementation strategies",
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Technical contribution without coding:",
        "• Use tools like Figma for design or Airtable for data management",
        "• Work with NASA datasets using Excel or Google Sheets",
        "• Handle documentation, testing, and user research",

        <strong className="text-hackathone-font-rocket-red" key="diverse-teams">
          Why Diverse Teams Win
        </strong>,
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Here's what experienced participants know: diverse teams consistently outperform all-technical teams. When everyone has the same background, they tend to build technically impressive solutions that no one actually needs. Mixed teams ask different questions, catch usability issues early, and present their work more compellingly.",

        <strong className="text-hackathone-font-rocket-red" key="getting-ready">
          Getting Ready
        </strong>,
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0If you're joining HackAthlone without programming experience:",
        "• Learn the landscape: Read about space challenges and NASA priorities",
        "• Develop basic tech literacy: Understand what's possible with data and modern tools",
        "• Practice rapid prototyping: Learn Figma, Canva, or PowerPoint for quick mockups",
        "• Study successful projects: Analyze what made them compelling beyond technical implementation",
        "• Know your value: Be confident about your unique perspective",

        <strong className="text-hackathone-font-rocket-red" key="bottom-line">
          The Bottom Line
        </strong>,
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Space Apps isn't really about space. It's about using space data to solve problems that affect people on Earth. That requires understanding people, not just technology. If you can research user needs, design clear interfaces, manage projects, or think strategically about implementation, you have skills that every serious team needs.",

        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0HackAthlone registration opens soon. Check our social media for exact dates.",
      ],
      author: "Shaiv Mehrotra",
      date: "Aug 31, 2025",
      slug: "11",
    },
    // Add this to the blogs array in page.tsx
    {
      image: Space2, // Choose appropriate space image
      tags: [{ name: "Technology" }],
      title: "Your First Space Hackathon: What Nobody Tells You (But Should)",
      summary:
        "The honest guide to making the most of your 48 hours at HackAthlone. Discover the insider tips, real challenges, and crucial preparation steps that no one talks about but every participant should know.",
      points: [
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0So you've decided to register for HackAthlone. You're probably excited, maybe a little nervous, and definitely wondering what you've gotten yourself into. Good news: you're about to have one of the most intense and rewarding weekends of your life. Here's what you actually need to know.",

        <strong className="text-hackathone-font-rocket-red" key="before-arrive">
          Before You Arrive
        </strong>,
        "• Pack like you're camping. Bring a sleeping bag, pillow, and comfortable clothes for 48 hours. Yes, people actually sleep there during the overnight format.",
        "• Download everything beforehand. Get your software, accounts, and tools set up before arriving. The wifi will be packed with participants downloading datasets.",
        "• Eat well. TU Shannon provides F&B throughout, but your eating schedule is about to become random. Start the weekend well-nourished.",

        <strong
          className="text-hackathone-font-rocket-red"
          key="team-formation"
        >
          Team Formation Reality
        </strong>,
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Team formation is organized chaos, and that's normal.",
        "• Don't overthink your pitch. Just say what interests you and what skills you bring. The real connections happen in conversations afterward.",
        "• Look for enthusiasm over credentials. Someone genuinely excited about climate monitoring but new to satellite data might be better than a bored expert.",
        "• Teams of 4-5 work best based on past HackAthlone experience.",

        <strong
          className="text-hackathone-font-rocket-red"
          key="choosing-challenge"
        >
          Choosing Your Challenge
        </strong>,
        "• Pick problems you care about. You'll spend 48 hours on this challenge. If it doesn't fascinate you, those hours will drag.",
        '• Remember the theme: "Learn, Launch, Lead." Focus on developing skills, transforming NASA data into solutions, and leading innovation.',

        <strong className="text-hackathone-font-rocket-red" key="reality">
          The 48-Hour Reality
        </strong>,
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Expect energy waves: high enthusiasm initially, fatigue mid-way, then final-push adrenaline. Use the early energy for planning. Support each other during the grind. Be amazed at what you accomplish in the final hours.",

        <strong className="text-hackathone-font-rocket-red" key="nasa-data">
          Working with NASA Data
        </strong>,
        "• Start simple. NASA datasets are overwhelming. Basic analysis beats complex processing you don't understand.",
        "• Document everything. Sleep-deprived you will forget decisions. Keep notes on your approach and reasoning.",
        "• Use TU Shannon's resources. Professional labs, 3D printers, and VR/AR headsets are available. Plan how they could enhance your solution.",

        <strong className="text-hackathone-font-rocket-red" key="presentation">
          Presentation Tips
        </strong>,
        "• Practice your pitch. You have limited time to explain 48 hours of work.",
        "• Tell a story. Problem → why it matters → your solution → impact. Save technical details for questions.",
        "• Prepare for tech failures. Have screenshots and backup plans when demos break.",

        <strong className="text-hackathone-font-rocket-red" key="success">
          What Success Looks Like
        </strong>,
        "• Winning isn't everything. The best experiences come from solving interesting problems, learning skills, and making connections.",
        "• Focus on real impact. NASA experts judge for solutions that could make a difference. Simple tools addressing important problems beat complex systems solving nothing.",
        "• Document your journey. Photos, notes, and code help you remember and build on the experience.",

        <strong className="text-hackathone-font-rocket-red" key="after-weekend">
          After the Weekend
        </strong>,
        "• Follow up with your team. Some of the best outcomes happen weeks after the event.",
        "• Submit properly. Projects get judged by NASA and space agency experts for 10 global awards.",
        "• Apply what you learned. Rapid prototyping, leadership, and problem-solving skills transfer everywhere.",

        <strong className="text-hackathone-font-rocket-red" key="why-matters">
          Why This Matters
        </strong>,
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Space hackathons aren't really about space. They're about discovering what you're capable of when constraints are tight, stakes are real, and everyone around you is pushing limits.",
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0You'll leave knowing you can learn under pressure, lead technical projects, and contribute to solutions that matter to humanity. That confidence is worth more than any prize.",
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Registrations are opening soon..",
      ],
      author: "Shaiv Mehrotra",
      date: "Aug 31, 2025",
      slug: "12",
    },
    // Add this to the blogs array
    {
      image: Space1, // Choose appropriate space image
      tags: [{ name: "Technology" }],
      title: "Why HackAthlone Should Be Your Next Weekend Plan",
      summary:
        "Seven reasons why this space hackathon is worth your time (and might change your career). Get exclusive access to NASA data, professional equipment, expert mentorship, and career-changing opportunities all in one transformative weekend.",
      points: [
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Thinking about joining HackAthlone 2025? Here's what you actually get when you spend a weekend solving space challenges with NASA data.",

        <strong className="text-hackathone-font-rocket-red" key="real-data">
          1. Real NASA Data, Not Practice Problems
        </strong>,
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0You'll work with the same satellite imagery, climate data, and space observations that NASA scientists use for actual missions. Want to analyze solar storms or track deforestation? The data's there. Most people pay thousands for courses with less comprehensive datasets than what you'll use in a weekend.",

        <strong
          className="text-hackathone-font-rocket-red"
          key="expert-network"
        >
          2. People Who Actually Know What They're Talking About
        </strong>,
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Forget awkward networking events. You'll naturally connect with climate scientists, aerospace engineers, and space industry professionals while solving real problems together. When you're stuck on satellite data processing at 2 AM, having an actual NASA researcher available to help is pretty valuable.",

        <strong className="text-hackathone-font-rocket-red" key="pro-equipment">
          3. Professional Equipment You Can't Access Elsewhere
        </strong>,
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0TU Shannon provides professional labs, 3D printers, and VR/AR equipment like Meta Quest and HoloLens headsets. Building climate visualizations? Use the VR setup. Need prototypes? The 3D printers and electronics lab are available. Most makerspaces charge membership fees for equipment this advanced.",

        <strong className="text-hackathone-font-rocket-red" key="real-support">
          4. Support That Actually Helps
        </strong>,
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Mentorship comes from people who've built similar solutions professionally. Academic mentors understand research. Industry mentors know real applications. Plus, meals, beverages, workspace, and technical resources are provided for 48 hours.",

        <strong
          className="text-hackathone-font-rocket-red"
          key="worthy-problems"
        >
          5. Problems Worth Solving
        </strong>,
        '\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Instead of building another social media app, you\'re tackling climate change, space exploration, and agricultural sustainability. The 2025 theme "Learn, Launch, Lead" connects to real NASA priorities. Past Space Apps projects have been adopted by governments and used in actual space missions.',

        <strong className="text-hackathone-font-rocket-red" key="recognition">
          6. Recognition That Opens Doors
        </strong>,
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Global winners get invited to NASA facilities for rocket launches. But even participating gives you portfolio material that stands out. Employers notice NASA data experience. Graduate schools value interdisciplinary team experience. All projects become open-source contributions to global research.",

        <strong className="text-hackathone-font-rocket-red" key="unique-skills">
          7. Skills You Can't Learn in Classrooms
        </strong>,
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0HackAthlone teaches working under pressure, learning rapidly, leading diverse teams, and communicating complex ideas simply. You'll master new technical tools in hours and coordinate with people from different backgrounds. After leading a technical project from concept to presentation in 48 hours, regular deadlines feel manageable.",

        <strong className="text-hackathone-font-rocket-red" key="reality-check">
          The Reality Check
        </strong>,
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0It's an intense 48 hours. You'll be tired and occasionally frustrated around hour 30. But that's where growth happens. The teams that have the most fun balance ambition with realistic goals. You're not going to revolutionize space exploration, but you might build something genuinely useful.",

        <strong className="text-hackathone-font-rocket-red" key="value-prop">
          What This Actually Gets You
        </strong>,
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Investment: One weekend\nValue: Premium datasets, professional equipment, expert mentorship, space industry networking, portfolio enhancement, skill development",
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Most bootcamps charging thousands don't provide this level of real-world experience.",
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Don't overthink whether you're \"qualified enough.\" Diverse teams consistently outperform homogeneous technical teams. Whether you're interested in coding, design, research, or just curious about space challenges, there's a valuable role for you.",
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0HackAthlone 2025: October 3-5. Registration opens soon..",
      ],
      author: "Shaiv Mehrotra",
      date: "Aug 31, 2025",
      slug: "13",
    },
    // Add this to the blogs array
    {
      image: Space4,
      tags: [{ name: "Technology" }],
      title:
        "The Science Behind 'Learn, Launch, Lead': What NASA's 2025 Theme Really Means",
      summary:
        "When NASA announced 'Learn, Launch, Lead' as their 2025 Space Apps Challenge theme, it wasn't just placing cool sounding words together. This theme reflects how breakthrough space technology gets developed and why the old way isn't working.",
      points: [
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0When NASA announced \"Learn, Launch, Lead\" as their 2025 Space Apps Challenge theme, it wasn't just placing cool sounding words together. This theme reflects how breakthrough space technology gets developed and why the old way isn't working.",

        <strong className="text-hackathone-font-rocket-red" key="learn-means">
          What "Learn" Really Means
        </strong>,
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Forget everything you know about learning from textbooks and lectures. NASA noticed something interesting about how astronauts pick up complex skills. They don't spend years studying theory before touching real equipment. They learn by working on actual problems where mistakes have consequences.",
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Space Apps follows this approach. You won't learn Python from a tutorial and then wonder what to do with it. Instead, you'll learn Python because you need to analyze real satellite data this weekend to solve a climate monitoring challenge.",
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0At HackAthlone, people consistently tell us they learned more in 48 hours than in entire university courses. Why? Because you're not learning for a test. You're learning to solve something that matters.",

        <strong className="text-hackathone-font-rocket-red" key="launch-means">
          What "Launch&quot; Actually Looks Like
        </strong>,
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0This isn't about rockets (though that would be cool). It's about getting from idea to working solution incredibly fast.",
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Here's how it works: You have an idea Friday evening. By Sunday afternoon, you have a working prototype that uses real NASA data and could actually help solve the problem you chose.",
        '\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Sounds impossible? SpaceX proved that "fast and good enough" often beats "slow and perfect." They didn\'t build better rockets than NASA. They built adequate rockets much faster. At HackAthlone, you\'ll use the same approach with TU Shannon\'s professional equipment and real NASA datasets.',
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0The goal isn't perfection. It's building something that works and could make a difference.",

        <strong className="text-hackathone-font-rocket-red" key="lead-means">
          What "Lead" Means for You
        </strong>,
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0This might be the most important part. NASA realizes that waiting for people to get 20 years of experience before leading projects doesn't work anymore. Space challenges are too urgent.",
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0So they're flipping the script. At Space Apps, you can lead technical decisions on your first day. You can propose solutions to problems that NASA scientists are actually working on. You can coordinate a diverse team under pressure.",
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Many people leave having made more complex technical decisions than their day jobs involve. HackAthlone's 48-hour format gives you even more leadership opportunities than standard weekend events.",

        <strong className="text-hackathone-font-rocket-red" key="why-works">
          Why This Approach Works
        </strong>,
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Traditional aerospace moves slowly because it has to get everything right the first time. But most innovation problems don't require that level of perfection initially. They need good solutions quickly, then iteration.",
        '\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0The "Learn, Launch, Lead" cycle builds on itself. You learn new skills to tackle a challenge. You launch a solution that creates real impact. You lead a team to tackle bigger problems. Then you learn from that experience and launch even more ambitious projects.',

        <strong className="text-hackathone-font-rocket-red" key="october-means">
          What This Means for October
        </strong>,
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0If you join HackAthlone this year, you won't just be participating in a hackathon. You'll be experiencing NASA's new approach to innovation firsthand.",
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0You'll learn skills you need in real-time. You'll launch solutions using professional equipment and real space data. You'll lead technical decisions that could influence actual space missions.",
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0The question isn't whether you're qualified. It's whether you're ready to jump in and start solving problems that matter.",
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Registration are open..",
      ],
      author: "Shaiv Mehrotra",
      date: "Aug 31, 2025",
      slug: "14",
    },
  ];
  const blog = blogs.find((b) => b.slug === slug);
  const currentIndex = blogs.findIndex((b) => b.slug === slug);
  const prevIndex = (currentIndex - 1 + blogs.length) % blogs.length;
  const nextIndex = (currentIndex + 1) % blogs.length;

  const prevBlog = blogs[prevIndex];
  const nextBlog = blogs[nextIndex];

  if (!blog) {
    return <div>Blog not found</div>;
  }
  return (
    <div className="relative min-h-screen bg-black text-slate-50">
      <ShootingStars />
      <StarsBackground />
      <div className="relative z-10 py-[12px] sm:py-[24px]">
        <NavbarDemo />
        {/* laptop view */}
        <div className="mx-24 my-16 hidden lg:block">
          <div className="flex flex-row items-start justify-start gap-10 pt-12">
            {/* Back to Blogs tooltip - slides in from left */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Tooltip text="Back">
                <IconButton
                  size="small"
                  color="primary"
                  onClick={handleBack}
                  className="mb-4 mr-4 hidden text-white hover:text-hackathone-font-rocket-red lg:block"
                  edge="start"
                  sx={{
                    fontSize: "4rem",
                    height: "3rem",
                    width: "3rem",
                  }}
                  aria-label="back to home"
                >
                  <svg
                    width="40"
                    height="40"
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
            </motion.div>

            <div>
              {/* Blog title - fades in from top */}
              <motion.h2
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                className="mb-4 font-hackathoneSFProDisplay text-4xl font-bold text-white md:text-5xl"
              >
                {blog.title}
              </motion.h2>

              {/* Blog author - fades in from top */}
              <motion.p
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                className="mb-10 mt-2 font-hackathoneSFProDisplay text-hackathone-font-rocket-red"
              >
                {blog.author} - {blog.date}
              </motion.p>
            </div>
          </div>

          {/* Blog image - fades in */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative h-[500px] w-full overflow-hidden rounded-lg"
          >
            <Image
              src={blog.image}
              alt="Blog Image"
              layout="fill"
              objectFit="cover"
              objectPosition="top"
              className="rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70" />
          </motion.div>
          <div className="font-hackathoneCabinetGrotesk">
            <p className="mt-8 text-justify text-lg text-slate-50 md:text-xl">
              {blog.summary}
            </p>
            <br />
            <ul className="list-none space-y-8">
              {blog.points.map((point, index) => (
                <li
                  key={`event-point-${index}`}
                  className="text-justify text-lg text-slate-50"
                >
                  {typeof point === "string" ? point.trim() : point}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile view */}
        <div className="mx-8 my-12 flex flex-col lg:hidden">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Tooltip text="Back">
              <IconButton
                size="large"
                color="primary"
                onClick={handleBack}
                className="mb-8 mr-4 text-white hover:text-hackathone-font-rocket-red"
                edge="start"
                sx={{
                  fontSize: "4rem",
                  height: "3.5rem",
                  transition:
                    "transform 0.3s ease-in-out, color 0.3s ease-in-out",
                  width: "3.5rem",
                  "&:hover": {
                    transform: "scale(1.2)",
                  },
                }}
                aria-label="Back"
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Image
              src={blog.image}
              width={1200}
              height={1200}
              className="mb-8 size-auto rounded-lg"
              alt="Blog Image"
            />
          </motion.div>

          <div className="font-hackathoneCabinetGrotesk">
            <motion.h2
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="mb-4 text-4xl font-semibold text-slate-50 md:text-5xl"
            >
              {blog.title}
            </motion.h2>

            <motion.p
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
              className="mb-10 mt-2 text-base text-hackathone-font-rocket-red md:text-2xl"
            >
              {blog.author} - {blog.date}
            </motion.p>

            <p className="mt-8 text-justify text-base text-slate-50 md:text-lg">
              {blog.summary}
            </p>
            <br />
            <ul className="list-none space-y-8">
              {blog.points.map((point, index) => (
                <li
                  key={`event-point-${index}`}
                  className="text-justify text-slate-50"
                >
                  {typeof point === "string" ? point.trim() : point}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mx-24 my-12 grid grid-cols-2 gap-8 max-md:mx-8">
          {/* Previous Blog */}
          <div
            className="flex cursor-pointer flex-row items-center gap-4 rounded-lg pr-10 transition-all duration-500 ease-in-out hover:translate-x-2 max-md:flex-col max-md:pr-0 lg:hover:shadow-[-4px_0px_2px_-2px_rgba(255,255,255,1)]"
            onClick={() => router.push(`/blogs/${prevBlog.slug}`)}
          >
            <Image
              src={prevBlog.image}
              width={300}
              height={200}
              className="rounded-lg"
              alt={prevBlog.title}
            />
            <div>
              <h1 className="text-sm text-gray-400 max-md:text-xs">Previous</h1>
              <p className="text-lg font-semibold max-md:text-sm">
                {prevBlog.title}
              </p>
            </div>
          </div>

          {/* Next Blog */}
          <div
            className="flex cursor-pointer flex-row-reverse items-center gap-4 rounded-lg pr-10 text-right transition-all duration-500 ease-in-out hover:-translate-x-2 max-md:flex-col max-md:pr-0 max-md:text-right lg:hover:shadow-[4px_0px_2px_-2px_rgba(255,255,255,1)]"
            onClick={() => router.push(`/blogs/${nextBlog.slug}`)}
          >
            <Image
              src={nextBlog.image}
              width={300}
              height={200}
              className="rounded-lg"
              alt={nextBlog.title}
            />
            <div>
              <h1 className="text-sm text-gray-400 max-md:text-xs">Next</h1>
              <p className="text-lg font-semibold max-md:text-sm">
                {nextBlog.title}
              </p>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default BlogPage;
