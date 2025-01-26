import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mathew Group | About Us",
  description: "At Mathew Group, we’re more than just a business – we’re a family dedicated to bringing people together over great food and memorable experiences.",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Us"
        description="At Mathew Group, we’re more than just a business – we’re a family dedicated to bringing people together over great food and memorable experiences."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
