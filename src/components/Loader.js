import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from "@material-ui/core/Grid";

function Loader() {
  return (

    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: '50vh' }}
    >
      <div className="flex-centered">
        <CircularProgress size = "8em"/>
      </div>


    </Grid>

  );
}

export default Loader;
