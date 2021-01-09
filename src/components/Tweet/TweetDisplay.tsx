import React from "react";
import { Tweet as TweetComponent } from "./Tweet";
import { Tweet } from "../../domain/tweet";

type TweetDisplayProps = {
  tweetList: Tweet[];
};

export class TweetDisplay extends React.Component<TweetDisplayProps> {
  render() {
    return (
      <div>
        {this.props.tweetList.map((tweet, index) => {
          return <TweetComponent key={index} tweet={tweet}></TweetComponent>;
        })}
      </div>
    );
  }
}
