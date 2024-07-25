import { Header } from "../../Components/Header/Header";
import { Carousel } from "../../Components/Carousel/Carousel";
import { Footer } from "../../Components/Footer/Footer";
import { Featureds } from "../../Components/FeaturedSection/Featureds";
import { HighlightsSection } from "../../Components/HighlightsSection/HighlightsSection";
import { CardSection } from "../../Components/CardSection/CardSection";

export function Home() {
  return (
    <>
      <Header />
      <Carousel />
      <HighlightsSection />
      <CardSection/>
      <Featureds/>
      <Footer/>
    </>
  );
}
