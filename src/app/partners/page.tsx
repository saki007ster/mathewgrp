import SigninBlock from "@/components/Common/SigninBlock";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partners | Mathew Group",
  description: "Partner with us and grow your business!",
  // other metadata
};

const PartnerPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Welcome Partners !"
        description="This secure portal is designed exclusively for our partners and internal stakeholders. Log in to access important business updates, training resources, and operational tools to ensure our franchise continues to thrive. If you encounter any issues, please contact support at SJMManagement@gmail.com."
      />
      <SigninBlock />
    </>
  );
};

export default PartnerPage;
