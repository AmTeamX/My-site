import Header from "@/components/homes/headers/Header";
import PersonalInfo from "@/components/homes/personalInfo/PersonalInfo";
import Resume from "@/components/homes/resume/Resume";

import MenuTwo from "@/components/homes/menus/MenuTwo";
export const metadata = {
  title: "Resume | PWTeam",
  description:
    "Team's past work",
};
export default function page() {
  return (
    <>
      <div className="page-wrapper home-1" id="resume">
        <Header />
        <div className="container z-index-3">
          <div className="row">
            <PersonalInfo />

            <Resume />
            <MenuTwo />
          </div>
        </div>
      </div>
    </>
  );
}
