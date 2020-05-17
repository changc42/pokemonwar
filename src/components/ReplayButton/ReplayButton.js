import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Typography, ButtonBase } from "@material-ui/core";
let replayButtonStyles = require("./replayButtonStyles");

function ReplayButton(props) {
  let { buttonText, onClick, classes } = props;
  return (
    <div className={classes.ReplayButton} onClick={onClick}>
      <span>
        {buttonText}
        {/* {<Typography variant="body1"></Typography>} */}
      </span>
    </div>
  );
}

export default withStyles(replayButtonStyles)(ReplayButton);
