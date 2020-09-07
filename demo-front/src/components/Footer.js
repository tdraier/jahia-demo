import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Copyright from './Copyright';

const styleHelper = require('../styles/StylesHelper.js');



export default function Footer(props) {
  const classes = styleHelper.footerStyle();
  const {description} = props;

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          {description}
        </Typography>
        <Copyright />
      </Container>
    </footer>
  );
}

Footer.propTypes = {
  description: PropTypes.string
};