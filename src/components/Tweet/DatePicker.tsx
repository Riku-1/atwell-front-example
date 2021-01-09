import React from "react";

type DatePickerProps = {
  start: Date;
  end: Date;
  onClick: Function;
};

export class DatePicker extends React.Component<DatePickerProps> {
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.props.onClick();
          }}
        >
          update
        </button>
        <div>{this.props.start.toLocaleString()}</div>
        <div>{this.props.end.toLocaleString()}</div>
      </div>
    );
  }
}
