import Banner from "./components/home/Banner";
import Article from "./components/home/articleContent/Article";
import Tips from "./components/home/tips/Tips";

export default function Home() {
  return (
    <div className="homeDiv">
      <Banner />
      <Tips />
      <Article />
    </div>
  );
}
