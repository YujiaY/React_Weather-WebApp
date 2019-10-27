import React from "react";
import Chip from "@material-ui/core/Chip";

function Error(props) {
  return (
    <div className="flex-centered">
      {
        (props.errorType === 'notFoundError') &&
        <Chip
        label = "City Not Found in Australia. Please try again."
        color = "primary"
        />
      }
      {
        (props.errorType === 'otherError') &&
        <Chip
          label = "Something maybe the network went wrong. Please try again."
          color = "secondary"
        />
      }
    </div>
  )
}

export default Error;
