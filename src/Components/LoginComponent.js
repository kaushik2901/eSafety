import React from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
    Card: {
        margin: 'auto',
        textAlign: 'center',
        minWidth: '270px'
    },
    logoWrapper: {
        position: 'relative'
    },
    logo: {
        width: '70px',
        height: 'auto',
    },
    loginBtn: {
        marginTop: '20px',
        width: '200px'
    },
    forgotPasswordBtn: {
        marginTop: '20px',
        width: '200px'
    },
    textField: {
        // width: '100%'
    }
})

let LoginComponent = (props) => {
    let { classes } = props;

    return (
        <div className={classes.Card}>
            {/* <CardContent> */}
                <div className={classes.logoWrapper}>
                    <Typography variant="display1">E - Safety</Typography>
                </div>
                <div>
                    <TextField
                        id="phoneNo"
                        label="Phone Number"
                        fullWidth
                        type="Number"
                        className={classes.textField}
                        margin="normal" />
                </div>
                <div>
                    <TextField
                        id="password"
                        label="Password"
                        type="password"
                        fullWidth
                        error={false}
                        className={classes.textField}
                        margin="small" />
                </div>
                <div>
                    <Button 
                        variant="contained" 
                        className={classes.loginBtn}
                        onClick={(e) => { props.handleLogin() }}
                    >
                        Login
                    </Button>
                </div>
                <div>
                    <Button 
                        variant="flat" 
                        className={classes.forgotPasswordBtn}
                        onClick={props.toForgotPassTab}
                    >
                        Forgot Password?
                    </Button>
                </div>
            {/* </CardContent> */}
        </div>
    )
}

LoginComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginComponent);