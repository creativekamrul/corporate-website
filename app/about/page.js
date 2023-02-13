import InnerPageHero from "../(components)/globals/InnerPageHero";
import OurTeam from "../(components)/globals/OurTeam";
import Stats from "../(components)/globals/Stats";
import AboutHero from "../(components)/globals/AboutHero";
import OurServices from "../(components)/globals/OurServices";
import PricingPlan from "../(components)/globals/PricingPlan";
import OurReviews from "../(components)/globals/OurReviews";
export default async function Page() {
  return (
    <>
      <InnerPageHero title={"About us"} />
      <AboutHero />
      <OurServices />
      <PricingPlan />
      <OurReviews />
      <OurTeam
        title={"Meet Our Team"}
        sub={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy "
        }
      />
      <Stats />
    </>
  );
}
