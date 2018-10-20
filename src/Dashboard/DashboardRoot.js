import React, { Component } from 'react';
// import { Route, Switch, Redirect } from 'react-router-dom';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import AllInbox from '@material-ui/icons/AllInbox';
import AddAlert from '@material-ui/icons/AddAlert';
import IconButton from '@material-ui/core/IconButton';
import Timer from '@material-ui/icons/Timer';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    wrapper: {
        width: '100vw',
        display: 'flex',
    }
})


class DashboardRoot extends Component {

    state = {
        startAnimation: false,
        cardData: [
           [
                {
                    name: "Ambulance",
                    icon: AddAlert,
                },
                {
                    name: "Police Station",
                    icon: AddAlert,
                },
                {
                    name: "Fire Station",
                    value: 10,
                    icon: Timer,
                    color: "alert"
                },
           ],
           [
                {
                    name: "Disaster Management",
                    icon: AllInbox,
                },
                {
                    name: "Woman's Helpline",
                    icon: AddAlert,
                },
                {
                    name: "Child Abuse Hotline",
                    icon: Timer,
                },
            ],
            [
                {
                    name: "Air Ambulance",
                    icon: AllInbox,
                },
            ]
        ]
    }

    componentDidMount() {
        this.setState({
            startAnimation: true
        })
    }

    render() {
        let { classes } = this.props;

        return (
          <div className={classes.wrapper} style={{textAlign: 'center'}}>
            <div style={{margin: 'auto'}}>
                <Grid container>
                    {
                        this.state.cardData.map(data => {
                            return (<Grid item xs={12}>
                                <Grid container >
                                    {
                                        data.map(item => {
                                            return (<Grid item xs style={{padding: '20px'}}>
                                                <IconButton aria-label={item.name}>
                                                    {<item.icon />}
                                                </IconButton>
                                                <Typography variant="caption">{item.name}</Typography>
                                            </Grid>)
                                        })
                                    }
                                </Grid>
                             </Grid>)
                        })
                    }
                </Grid>
            </div>
          </div>
        );
    }
}

DashboardRoot.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DashboardRoot);