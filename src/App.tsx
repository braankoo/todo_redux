import React from 'react';
import './App.css';
import Router from './Router';
import {CssBaseline, Grid, AppBar, Toolbar, Button, Paper} from "@mui/material";
import {Link} from "react-router-dom";

function App() {
    return (
        <div>
            <CssBaseline/>
            <AppBar position="relative">
                <Toolbar style={{backgroundColor: 'whitesmoke'}}>
                    <Button component={Link} to={'/todos'}>List</Button>
                    <Button component={Link} to={'/todos/create'}>Create</Button>
                </Toolbar>
            </AppBar>
            <Grid display="flex"
                  justifyContent="center"
                  alignItems="center"
                  minHeight="100vh"
                  container
            >
                <Grid item xs={10} component={Paper} sx={{p: 2}}>
                    <Router/>
                </Grid>
            </Grid>
        </div>
    );
}

export default App;
