import AboutOne from "@/components/homes/about/AboutOne";
import Header from "@/components/homes/headers/Header";
import PersonalInfo from "@/components/homes/personalInfo/PersonalInfo";

import MenuTwo from "@/components/homes/menus/MenuTwo";

export const metadata = {
  title: "PWTeam",
  description:
    "Welcome to my portfolio! I'm Pannawit Krutnak (Team), a passionate developer specializing in mobile and web applications. Explore my projects and experience.",
};

export default function Home1() {
  return (
    <>
      <div className="page-wrapper home-1" id="home-1">
        <Header />
        <div className="container z-index-3">
          <div className="row">
            <PersonalInfo />
            <AboutOne />
            <MenuTwo />
          </div>
        </div>
      </div>
    </>
  );
}
