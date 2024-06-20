import Banner from "./components/home/Banner";
import Article from "./components/home/Article";
import SpacetecAd from "./components/home/SpacetecAd";

export default function Home() {
  return (
    <div className="homeDiv">
      <Banner />
      <Article />
      <SpacetecAd />
    </div>
  );
}
