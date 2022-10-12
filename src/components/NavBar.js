import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

function Header(){
    return (
        <AppBar position="static" color="default">
            <Toolbar>
                <Typography>MyApplication</Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header;