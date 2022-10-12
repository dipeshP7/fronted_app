import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import "./assets/css/styles.css"
import Box from '@material-ui/core/Box';


const useStyles =  makeStyles({
    root: {
        //minWidth: 275,
    },
    signUpCard: {
        width: '450px',
    },
    bullet:{
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

function DisplayForm(){
    const classes = useStyles();
    return (
        
        <Grid container spacing={3}>
            <Grid item xs></Grid>
            <Grid item xs={4}>
                <Card className="div-mt-2">
                    <Box item>
                        <Typography className="fz-16">Sign Up</Typography>
                    </Box>
                    <CardContent>
                        This is Card content
                    </CardContent>
                </Card>
            </Grid>            
            <Grid item xs></Grid>
        </Grid>            
     );
}
export default DisplayForm;

