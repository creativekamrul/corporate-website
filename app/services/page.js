import InnerPageHero from "../(components)/globals/InnerPageHero";
import OurService from "../(components)/globals/OurServices";
import PricingPlan from "../(components)/globals/PricingPlan";
import Stats from "../(components)/globals/Stats";
import OurReviews from "../(components)/globals/OurReviews";
export default async function Page() {
  return (
    <>
      <InnerPageHero title={"Our Services"} />
      <OurService />
      <PricingPlan />
      <OurReviews />
      <Stats />
    </>
  );
}
