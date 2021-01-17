import React from "react";
import { Tweet as TweetDomain } from "../../domain/tweet";
import "./Tweet.css";

type TweetProps = {
  tweet: TweetDomain;
};

export class Tweet extends React.Component<TweetProps> {
  render() {
    return (
      <div className="tweet">
        <div>{this.props.tweet.comment}</div>
        <div className="created-at">
          {this.props.tweet.createdAt.toLocaleString()}
        </div>
      </div>
    );
  }
}
