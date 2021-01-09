import React from "react";
import { DatePicker } from "./DatePicker";
import { TweetDisplay } from "./TweetDisplay";

export class TweetContainer extends React.Component {
  render() {
    return (
      <div>
        <DatePicker />
        <TweetDisplay />
      </div>
    );
  }
}
