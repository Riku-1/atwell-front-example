import { Button, TextField } from "@material-ui/core";
import React from "react";
import { formatDate } from "../../utils/formatter";
import "./DatePicker.css";

type DatePickerProps = {
  start: Date;
  end: Date;
  onChangeStart: Function;
  onChangeEnd: Function;
  onClick: Function;
};

export class DatePicker extends React.Component<DatePickerProps> {
  render() {
    return (
      <div className="date-picker">
        <form className="test" noValidate>
          <TextField
            id="start"
            label="start"
            type="date"
            onChange={(e) => {
              this.props.onChangeStart(e.target.value);
            }}
            defaultValue={formatDate(this.props.start)}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="end"
            label="end"
            type="date"
            onChange={(e) => {
              this.props.onChangeEnd(e.target.value);
            }}
            defaultValue={formatDate(this.props.end)}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <div className="update-button">
            <Button
              onClick={() => {
                this.props.onClick(this.props.start, this.props.end);
              }}
              type="button"
              variant="outlined"
              size="small"
            >
              update
            </Button>
          </div>
        </form>
      </div>
    );
  }
}
