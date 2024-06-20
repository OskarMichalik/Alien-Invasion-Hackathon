import classes from "./Article.module.css";
import LatestUpdate from "./LatestUpdate";
import History from "./History";

export default function Article() {
  return (
    <div className={classes.articleDiv}>
      <LatestUpdate />
      <History />
    </div>
  );
}
