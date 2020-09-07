import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

const styleHelper = require('../styles/StylesHelper.js');

function MainContent() {
    const classes = styleHelper.mainStyle();
    return <Container component="main" maxWidth="xs">
    <CssBaseline />
    <div className={classes.paper}>
      <Typography component="h1" variant="h5">
        Article manager app
      </Typography>
      <form className={classes.form} noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="title"
          label="Title"
          name="title"
          autoComplete="title"
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="author"
          label="Author"
          name="author"
          autoComplete="author"
        />
        <TextareaAutosize className={classes.form} aria-label="minimum height" rowsMin={5} placeholder="Content" />
        
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          add
        </Button>
        <Button
          fullWidth
          variant="contained"
          color="red"
          className={classes.cancel}
        >
          cancel
        </Button>
      </form>
    </div>
  </Container>
}

export default MainContent