import InnerPageHero from "../(components)/globals/InnerPageHero";
import OurTeam from "../(components)/globals/OurTeam";
import Stats from "../(components)/globals/Stats";

export default async function Page() {
  return (
    <>
      <InnerPageHero title={"Our Team"} />
      <OurTeam
        title={"Meet With Our Expert Team"}
        sub={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy "
        }
      />
      <Stats />
    </>
  );
}
