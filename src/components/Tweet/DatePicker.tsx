import React from "react";

type DatePickerState = {
  start: Date;
  end: Date;
};

export class DatePicker extends React.Component<{}, DatePickerState> {
  constructor(props: {}) {
    super(props);
    this.state = { start: new Date(), end: new Date() };
  }

  render() {
    return (
      <div>
        <button onClick={this.update}>update</button>
        <div>{this.state.start.toLocaleString()}</div>
        <div>{this.state.end.toLocaleString()}</div>
      </div>
    );
  }

  update = () => {
    this.setState({ start: new Date(), end: new Date() });
  };
}
