import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React from "react";

type ErrorDisplayProps = {
  isConnectionError: boolean;
};

export class ErrorDisplay extends React.Component<ErrorDisplayProps> {
  render() {
    return (
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={this.props.isConnectionError}
        autoHideDuration={6000}
      >
        <Alert severity="error">Failed to connect to the database</Alert>
      </Snackbar>
    );
  }
}
