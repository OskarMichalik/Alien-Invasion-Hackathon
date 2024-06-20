import Banner from "./components/home/Banner";
import Article from "./components/home/articleContent/Article";

export default function Home() {
  return (
    <div className="homeDiv">
      <Banner />
      <Article />
    </div>
  );
}
