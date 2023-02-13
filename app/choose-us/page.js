import InnerPageHero from "../(components)/globals/InnerPageHero";
import AboutHero from "../(components)/globals/AboutHero";
import OurPojects from "../(components)/globals/OurProjects";
import Stats from "../(components)/globals/Stats";
export default async function Page() {
  return (
    <>
      <InnerPageHero title={"Why Choose us"} />
      <AboutHero />
      <OurPojects />
      <Stats />
    </>
  );
}
