import React from "react";
import PageLoader from "../components/pageLoader/PageLoader";
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";

const About = () => {
  return (
    <PageLoader>
      <Header />
      <PageHeader title={"About Me"} />

      <div className="about-container ">
        <div className="container-padding container mx-auto">
          <h2>HI I'M KUMAR</h2>
        </div>
      </div>
    </PageLoader>
  );
};

export default About;
