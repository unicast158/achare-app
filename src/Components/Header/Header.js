import React from 'react';
import {Grid} from "@material-ui/core";


const Header = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={6} md={8} style={{display:"flex"}}>
                <img height={37} src={'https://achareh.ir/images/achareh-type-logo-new.png'} alt={"achare-logo"}/>

            </Grid>
            <Grid item xs={6} md={4}>
                <p>s2</p>
            </Grid>
        </Grid>
    );
};

export default Header;