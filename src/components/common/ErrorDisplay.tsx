import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React from "react";

type ErrorDisplayProps = {
  isOpen: boolean;
  message: string;
};

export class ErrorDisplay extends React.Component<ErrorDisplayProps> {
  render() {
    return (
      <div>
        <Snackbar
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          open={this.props.isOpen}
          autoHideDuration={6000}
        >
          <Alert severity="error">{this.props.message}</Alert>
        </Snackbar>
      </div>
    );
  }
}
