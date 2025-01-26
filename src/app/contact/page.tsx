import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Mathew Group",
  description: "Get in touch with us today!",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Us"
        description="Have questions, feedback, or just want to say hello? Fill out the form below or reach out to us directly."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
