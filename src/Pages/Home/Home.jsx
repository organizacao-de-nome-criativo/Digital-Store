import { Header } from "../../Components/Header/Header";
import { Carousel } from "../../Components/Carousel/Carousel";
import { Footer } from "../../Components/Footer/Footer";
import { Featureds } from "../../Components/FeaturedSection/Featureds";
import { HighlightsSection } from "../../Components/HighlightsSection/HighlightsSection";

export function Home() {
  
  return (
    <>
      <Header/>
      <Carousel/>
      <Featureds/>
      < HighlightsSection/>
      <Footer/>
    </>
  )
}

