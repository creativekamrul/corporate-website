import InnerPageHero from "../(components)/globals/InnerPageHero";
import Stats from "../(components)/globals/Stats";
import ContactForm from "../(components)/globals/ContactForm";
export default async function Page() {
  return (
    <>
      <InnerPageHero title={"Contact us"} />
      <ContactForm />
      <Stats />
    </>
  );
}
