import { Tweet as TweetDomain } from "../domain/tweet";
import "./Tweet.css";

type TweetProps = {
  tweet: TweetDomain;
};

export const Tweet = (props: TweetProps) => {
  return (
    <div>
      <div>{props.tweet.comment}</div>
      <div className="created-at">{props.tweet.createdAt}</div>
    </div>
  );
};
