import React, { Component } from 'react';
// import { Route, Switch, Redirect } from 'react-router-dom';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';


const styles = theme => ({
    wrapper: {
        width: '100vw',
        display: 'flex',
    },
    button: {
        width: "100%",
    },
    grid: {
        padding: '10px'
    },
    message: {
        textAlign: 'center',
        padding: '10px'
    }
})


class DashboardRoot extends Component {

    state = {
        startAnimation: false,
        drawer: false,
        multiline: "",
        cardData: [
           [
                {
                    name: "Ambulance",
                    icon: "🚑",
                },
                {
                    name: "Police Station",
                    icon: "🚓",
                },
                {
                    name: "Fire Station",
                    icon: "🚒",
                },
           ],
           [
                {
                    name: "Disaster Management",
                    icon: "🌊",
                },
                {
                    name: "Woman's Helpline",
                    icon: "👩",
                },
                {
                    name: "Child Abuse Hotline",
                    icon: "👶",
                },
            ],
            [
                {
                    name: "Air Ambulance",
                    icon: "🛫",
                },
            ]
        ]
    }

    componentDidMount() {
        this.setState({
            startAnimation: true
        })
    }

    onDrawer = (name) => {
        this.setState({
            drawer: true,
            office: name
        });
    };

    offDrawer = () => {
        this.setState({
            drawer: false
        });
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    sendMail = () => {
        
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
                                            return (<Grid item xs style={{padding: '20px'}} onClick={() => this.onDrawer(item.name)}>
                                                <IconButton aria-label={item.name} >
                                                    {item.icon}
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
            <Drawer anchor="bottom" open={this.state.drawer} onClose={this.offDrawer}>
                <div
                    tabIndex={0}
                    role="button"
                    onClick={this.offDrawer} >
                </div>
                <div>
                    <Grid container>
                        <Grid item xs className={classes.message}>
                            <Typography variant="display1">{this.state.office}</Typography>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs className={classes.grid}>
                            <TextField
                                id="standard-multiline-flexible"
                                label="Decription"
                                multiline
                                rowsMax="4"
                                value={this.state.multiline}
                                onChange={this.handleChange('multiline')}
                                className={classes.button}
                                margin="normal" />
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs className={classes.grid}>
                            <Button variant="contained" color="primary" className={classes.button} onClick={this.sendMail}>
                                Send
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </Drawer>
          </div>
        );
    }
}

DashboardRoot.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DashboardRoot);