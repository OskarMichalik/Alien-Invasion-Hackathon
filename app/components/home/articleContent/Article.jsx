import classes from "./Article.module.css";
import LatestUpdate from "./LatestUpdate";
import History from "./History";
import SpacetecAd from "./SpacetecAd";

export default function Article() {
  return (
    <div className={classes.articleDiv}>
      <LatestUpdate />
      <History />
      <SpacetecAd />
    </div>
  );
}
