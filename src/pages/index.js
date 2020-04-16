import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import withRoot from "../withRoot";
import Typography from "@material-ui/core/Typography";

const styles = (theme) => ({
  root: {
    height: "100vh",
  },
});

class Index extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Typography>Index page.</Typography>
      </React.Fragment>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Index));
