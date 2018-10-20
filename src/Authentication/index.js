import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import LoginComponent from '../Components/LoginComponent';
import ForgotPasswordComponent from '../Components/ForgotPasswordComponent';


const styles = theme => ({
    wrapper: {
        width: '100vw',
        height: '100vh',
        display: 'flex'
    }
})

class Login extends Component {

    //state of login component
    state = {
        loginTab: true,
        openDialog : false
    }

    toLoginTab = () => {
        this.setState( {
            loginTab: true
        });
    }

    toForgotPassTab = () => {
        this.setState( {
            loginTab: false
        });
    }

    handleDialogOpen = (dialogMsg, dialogTitle) => {        
        this.setState({ 
            openDialog: true,
            dialogMsg: dialogMsg,
            dialogTitle: dialogTitle
        });
    };

    setCookie = (cname, cvalue, exdays) => {
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";";
    }

    handleClose = () => {
        this.setState({ openDialog: false });
    };

    handleLogin = (phoneNo, password) => {
        this.props.setLogin();
    }

    render() {
        let { classes } = this.props;

        return (
          <div className={classes.wrapper}>
            { this.state.loginTab ? <LoginComponent handleLogin={this.handleLogin} toForgotPassTab={this.toForgotPassTab} /> : <ForgotPasswordComponent toLoginTab={this.toLoginTab} /> }
          </div>  
        );
    }
}

Login.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);