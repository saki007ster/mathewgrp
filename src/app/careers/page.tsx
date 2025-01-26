import Breadcrumb from "@/components/Common/Breadcrumb";
import SectionTitle from "@/components/Common/SectionTitle";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | Mathew Group",
  description: "Join the Mathew Group family and help us bring people together over great food and memorable experiences.",
  // other metadata
};

const CareerPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Careers"
        description="Our team is dedicated to delivering exceptional customer experiences. Join us and help us bring people together over great food and memorable experiences."
      />

      <section className="pb-[80px] pt-[80px]">
        <div className="container">

          <SectionTitle width="100%"
            title="Join Our Team !"
            paragraph="Are you passionate about delivering exceptional customer experiences? Do you thrive in a dynamic and friendly environment? At Mathew Group, we’re always looking for dedicated individuals to join our team. Explore exciting opportunities across our Dunkin’ Donuts and Buffalo Wild Wings locations."
            mb="44px"
          />
        </div>
      </section>
    </>
  );
};

export default CareerPage;
