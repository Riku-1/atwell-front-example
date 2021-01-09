import React from "react";
import { Tweet as TweetComponent } from "./Tweet";
import { Tweet } from "../domain/tweet";
import { fetchTweets } from "../api";

type TweetDisplayState = {
  tweetList: Tweet[];
};

export class TweetDisplay extends React.Component<{}, TweetDisplayState> {
  constructor(props: {}) {
    super(props);
    this.state = { tweetList: [] };
  }

  componentDidMount() {
    fetchTweets()
      .then((res) => {
        return this.setState({ tweetList: res });
      })
      .catch((err) => {
        console.log(err);
        throw new err();
      });
  }

  render() {
    return (
      <div>
        {this.state.tweetList.map((tweet, index) => {
          return <TweetComponent key={index} tweet={tweet}></TweetComponent>;
        })}
      </div>
    );
  }
}
