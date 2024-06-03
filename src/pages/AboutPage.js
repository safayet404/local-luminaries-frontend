import React, { Profiler } from "react";
import CommonBanner from "../components/CommonBanner";
import AboutBanner from "../components/AboutBanner";
import Team from "../components/Team";
import Blog from "../components/Blog";

const AboutPage = () => {
  return (
    <div>
      <CommonBanner title="About Page" subTitle="Home | About" />
      <AboutBanner />
      <Team />
      <Blog />
    </div>
  );
};

export default AboutPage;
