import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    background: theme.palette.background.paper,
  },
});

function CryptoList(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <List>
        <Divider/>
        <ListItem button>
          <ListItemText primary="Trash" />
        </ListItem>
        <Divider/>
        <ListItem button component="a" href="#simple-list">
          <ListItemText primary="Spam" />
        </ListItem>
        <Divider/>
      </List>
    </div>
  );
}

CryptoList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export const CList = withStyles(styles)(CryptoList);