import Header from "../components/Home/Header";
import Banner from "../components/Home/Banner";
import NavBar from "../components/Home/NavBar";
import AboutSection from "../components/Home/AboutSection";
import Editors from "../components/Home/Editors";
import Articles from "../components/Home/Articles";
import Metrics from "../components/Home/Metrics";

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <NavBar />
      <AboutSection />
      <Metrics />
      <Editors />
      <Articles />
    </div>
  );
}