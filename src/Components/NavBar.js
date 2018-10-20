import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    Toolbar: {
        display: "flex",
        justifyContent: "space-between"
    }
})

class NavBar extends Component {
    state = {
        openDrawer: false
    }

    handleMenuClick = () => {
        this.setState({
            openDrawer: true
        });
    };

    handleClickAway = () => {
        this.setState({
            openDrawer: false
        });
    };

    render() {
        let { classes } = this.props;
        
        return (
            <AppBar position="fixed">
                <Toolbar variant="dense" className={classes.Toolbar}>
                    <Typography variant="subheading" color="inherit" className={classes.grow}>
                        <Button component={Link} style={{color: 'white'}} to="/">E - Safety</Button>
                    </Typography>
                </Toolbar>
            </AppBar>
        )
    }
}

NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);