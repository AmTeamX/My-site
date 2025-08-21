import Header from "@/components/homes/headers/Header";
import PersonalInfo from "@/components/homes/personalInfo/PersonalInfo";

import Contact from "@/components/homes/contact/Contact";


import MenuTwo from "@/components/homes/menus/MenuTwo";
export const metadata = {
  title: "Contact | PWTeam",
  description:
    "Get in touch",
};
export default function page() {
  return (
    <>
      <div className="page-wrapper home-1" id="contact">
        <Header />
        <div className="container z-index-3">
          <div className="row">
            <PersonalInfo />
            <Contact />
            <MenuTwo />
          </div>
        </div>
      </div>
    </>
  );
}
