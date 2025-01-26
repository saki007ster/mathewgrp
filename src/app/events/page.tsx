import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Event | Mathew Group",
  description: "Explore our upcoming events and stay tuned for exciting deals!",
  // other metadata
};

const EventPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Events"
        description="Stay Tuned for Exciting Events and Deals!"
      />
    </>
  );
};

export default EventPage;
