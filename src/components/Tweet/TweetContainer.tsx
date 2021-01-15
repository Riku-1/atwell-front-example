import { Container } from "@material-ui/core";
import React from "react";
import { fetchTweets } from "../../api";
import { Tweet } from "../../domain/tweet";
import { DatePicker } from "./DatePicker";
import { ErrorDisplay } from "./ErrorDisplay";
import { TweetDisplay } from "./TweetDisplay";

type TweetContainerState = {
  start: Date;
  end: Date;
  tweetList: Tweet[];
  isConnectionError: boolean;
};

export class TweetContainer extends React.Component<{}, TweetContainerState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      start: new Date(),
      end: new Date(),
      tweetList: [],
      isConnectionError: false,
    };
  }
  componentDidMount() {
    this.update(this.state.start, this.state.end);
  }

  render() {
    return (
      <div>
        <Container maxWidth="md">
          <DatePicker
            start={this.state.start}
            end={this.state.end}
            onChangeStart={this.setStart}
            onChangeEnd={this.setEnd}
            onClick={this.update}
          ></DatePicker>
          <TweetDisplay tweetList={this.state.tweetList} />
          <ErrorDisplay
            isConnectionError={this.state.isConnectionError}
          ></ErrorDisplay>
        </Container>
      </div>
    );
  }

  setStart = (start: Date) => {
    this.setState({ start: start });
  };

  setEnd = (end: Date) => {
    this.setState({ end: end });
  };

  update = (start: Date, end: Date) => {
    fetchTweets(start, end)
      .then((tweetList) => {
        this.setState({ tweetList: tweetList, isConnectionError: false });
      })
      .catch((err) => {
        this.setState({ tweetList: [], isConnectionError: true });
      });
  };
}
