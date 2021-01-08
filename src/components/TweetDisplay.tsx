import { Tweet as TweetComponent } from "./Tweet";
import { Tweet } from "../domain/tweet";

const a = new Tweet("aaa", "bbb");
const b = new Tweet("ccc", "ddd");
const tweetList = [a, b];

export const TweetDisplay = () => {
  return (
    <div>
      {tweetList.map((tweet, index) => {
        return <TweetComponent key={index} tweet={tweet}></TweetComponent>;
      })}
    </div>
  );
};
