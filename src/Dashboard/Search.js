import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import SearchIcon from '@material-ui/icons/Search';

// import Card from '@material-ui/core/Card';

const styles = theme => ({
    search: {
        textAlign: 'center',
        margin: 'auto',
        top: '0px',
        left: '0px',
        right: '0px',
        padding: '10px'
    },

    card: {
        margin: '10px'
    },
})

class SearchTab extends Component {

    state = {
        data: [
            {
                name: "Invincible NGO",
                add: "308, 3rd Floor, University Plaza, Ahmedabad, Gujarat 380015",
                contact: "090994 00699",
                image: "https://picsum.photos/300/?random&dd=" + Math.random()
            },
            {
                name: "SDCT (NGO)",
                add: " G-1 Mangaldeep Apartment, Satellite, Ahmedabad, Gujarat 380015",
                contact: "079 4030 3095",
                image: "https://picsum.photos/300/?random&dd=" + Math.random()
            },
            {
                name: "Upanishad",
                add: "Shop-22, F-block,Titanium City Center, Ahmedabad, Gujarat 380015",
                contact: "079 2673 3487",
                image: "https://picsum.photos/300/?random&dd=" + Math.random()
            },

        ]
    };
    
    render() {
        let { classes } = this.props;
        

        return (
            <div>
                <div className={classes.search}>
                    <Input
                        id="search"
                        style={{width: '100%'}}
                        startAdornment={
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        } />
                </div>
                <div>
                    {
                        this.state.data.map((data, index) => (
                            <Card className={classes.card}>
                                <Grid container>
                                    <Grid item xs>
                                        <CardContent className={classes.content}>
                                            <Typography variant="headline">
                                                {data.name}
                                            </Typography>
                                            <br />
                                            <Typography variant="subtitle1" color="textSecondary">
                                               {data.contact}
                                            </Typography>
                                            <br />
                                            <Typography variant="subtitle1" color="textSecondary">
                                               {data.add}
                                            </Typography>
                                        </CardContent>
                                    </Grid>
                                    <Grid item xs>
                                        <img src={"https://picsum.photos/300?random&dd=" + Math.random() } style={{width: '100%', height: 'auto', margin: 'auto'}} alt={data.name} />
                                    </Grid>
                                </Grid>
                            </Card>
                        ))
                    }
                </div>
            </div>
        );
    }
}

SearchTab.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchTab);