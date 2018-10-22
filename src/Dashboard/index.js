import React, { Component } from 'react';


import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Home from '@material-ui/icons/Home';
import Search from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import NavBar from '../Components/NavBar';
import DashboardRoot from './DashboardRoot';
import SearchTab from './Search';
import Profile from './Profile';

const styles = theme => ({
    wrapper: {
        paddingTop: '56px',
        paddingBottom: '56px',
    },
    BottomNavigation: {
        position: 'fixed',
        bottom: '0px',
        left: '0px',
        right: '0px'
    }
})

const navBarItems = [
    {
        name: 'Home',
        path: '/Dashboard/',
        icon: Home
    },
    {
        name: 'Search',
        path: '/Dashboard/Search/',
        icon: Search
    },
    {
        name: 'Profile',
        path: '/Dashboard/Profile',
        icon: AccountCircle
    }
];

class Dashboard extends Component {

    state = {
        currBottomNavValue: 0
    }

    handleBottomNavChange = (event, value) => {
        console.log(value);
        
        this.setState({ currBottomNavValue : value });
    };

    render() {
        let { classes } = this.props;
        let { currBottomNavValue } = this.state;

        return (
          <div className={classes.wrapper}>
            {/* Insert Navbar here */}
            <NavBar />
            { this.state.currBottomNavValue === 0 ? <DashboardRoot /> : ""}
            { this.state.currBottomNavValue === 1 ? <SearchTab /> : ""}
            { this.state.currBottomNavValue === 2 ? <Profile setLogout={this.props.setLogout} /> : ""}
                
                
            <BottomNavigation
                value={currBottomNavValue}
                onChange={this.handleBottomNavChange}
                className={classes.BottomNavigation}
                showLabels >
                {
                    navBarItems.map( (item, index) => (
                        <BottomNavigationAction key={index} label={item.name} icon={<item.icon />}>
                            {/* <NavLink to={item.path} /> */}
                        </BottomNavigationAction>
                    ))
                }
            </BottomNavigation>
          </div>  
        );
    }
}

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);