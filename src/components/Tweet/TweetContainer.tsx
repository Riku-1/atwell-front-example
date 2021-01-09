import { Container } from "@material-ui/core";
import React from "react";
import { fetchTweets } from "../../api";
import { Tweet } from "../../domain/tweet";
import { DatePicker } from "./DatePicker";
import { TweetDisplay } from "./TweetDisplay";

type TweetContainerState = {
  start: Date;
  end: Date;
  tweetList: Tweet[];
};

export class TweetContainer extends React.Component<{}, TweetContainerState> {
  constructor(props: {}) {
    super(props);
    this.state = { start: new Date(), end: new Date(), tweetList: [] };
  }
  componentDidMount() {
    this.update();
  }

  render() {
    return (
      <div>
        <Container maxWidth="md">
          <DatePicker
            start={this.state.start}
            end={this.state.end}
            onClick={this.update}
          ></DatePicker>
          <TweetDisplay tweetList={this.state.tweetList} />
        </Container>
      </div>
    );
  }

  update = () => {
    const start = new Date();
    const end = new Date();
    fetchTweets(start, end)
      .then((res) => {
        console.log(res);
        this.setState({ start: start, end: end, tweetList: res });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
