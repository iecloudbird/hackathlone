/* eslint-disable tailwindcss/no-custom-classname */
import React, { useEffect } from "react";

const TweetEmbed = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    script.charset = "utf-8";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="max-sm:mx-8" style={{ height: "400px", overflow: "auto" }}>
      <blockquote className="twitter-tweet" data-theme="dark" data-width="300">
        <p lang="en" dir="ltr">
          We are back again, 4th to 6th October, 2024.
          <br />
          Register for the biggest hackathon in the world:{" "}
          <a href="https://t.co/EwUINlnsqr">https://t.co/EwUINlnsqr</a>
          <br />
          Keep an eye on this space to learn more about HackAthone&#39;24!
          <a href="https://twitter.com/hashtag/NASA?src=hash&amp;ref_src=twsrc%5Etfw">
            #NASA
          </a>{" "}
          <a href="https://twitter.com/hashtag/NASASpace Apps?src=hash&amp;ref_src=twsrc%5Etfw">
            #NASASpace Apps
          </a>{" "}
          <a href="https://twitter.com/hashtag/NASASpace AppsChallenge?src=hash&amp;ref_src=twsrc%5Etfw">
            #NASASpace AppsChallenge
          </a>{" "}
          <a href="https://twitter.com/hashtag/NASASpace Apps2024?src=hash&amp;ref_src=twsrc%5Etfw">
            #NASASpace Apps2024
          </a>{" "}
          <a href="https://twitter.com/hashtag/NASASpace AppsChallenge24?src=hash&amp;ref_src=twsrc%5Etfw">
            #NASASpace AppsChallenge24
          </a>
        </p>
        &mdash; Space Apps Athlone (@hack_athlone){" "}
        <a href="https://twitter.com/hack_athlone/status/1823394223351050614?ref_src=twsrc%5Etfw">
          August 13, 2024
        </a>
      </blockquote>
    </div>
  );
};

export default TweetEmbed;
