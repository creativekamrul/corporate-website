import AboutHero from "./(components)/globals/AboutHero";
import Blog from "./(components)/globals/Blog";
import HomeHero from "./(components)/globals/HomeHero";
import OurProjects from "./(components)/globals/OurProjects";
import OurServices from "./(components)/globals/OurServices";
import OurTeam from "./(components)/globals/OurTeam";
import PricingPlan from "./(components)/globals/PricingPlan";
import Stats from "./(components)/globals/Stats";
export default async function Page() {
  return (
    <div>
      <HomeHero />
      <AboutHero />
      <OurServices />
      <PricingPlan />
      <OurProjects />
      <Stats />
      <OurTeam
        title={"Meet Our Team"}
        sub={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy "
        }
      />
      <Blog />
    </div>
  );
}
