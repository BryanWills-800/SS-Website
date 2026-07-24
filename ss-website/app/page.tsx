import AboutUs from "../components/AboutUs";
import Greetings from "../components/Greetings";

export default function Home() {
  return (
    <main>
      <Greetings ariaLabel="Silicon Society introduction" />
      <AboutUs />
    </main>
  );
}

