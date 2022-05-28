import * as React from 'react';
import Container from '@mui/material/Container';
import AppNav from "../components/AppNav";
import {createTheme} from "@mui/material/styles";
import {ThemeProvider} from "@emotion/react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {Slider} from "@mui/material";
import Typography from "@mui/material/Typography";

const theme = createTheme();
const marks = [

    {
        value: 25000,
        label: '25 MD',
    },
];
const mois = [

    {
        value: 60,
        label: '60 mois',
    },
];
function Simulation() {

    function valuetext(value) {
        return value;
    }
    return (
        <Container style={{background: "#fff"}}>
            <AppNav/>
            <ThemeProvider theme={theme}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: "100%",
                    marginTop: "50px",
                    minHeight:"550px",
                    paddingBottom:'20px'
                }}>
                    <Box sx={{
                        marginTop: 2,
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}>
                        <Button variant="contained" style={{marginRight: '40px'}}>Credit auto</Button>
                        <Button variant="contained" style={{marginRight: '40px'}}>Credit conso</Button>
                        <Button variant="contained" style={{marginRight: '40px'}}>Credit IMMO</Button>
                        <Button variant="contained">Rachet credit</Button>

                    </Box>
                    <Box style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: "80px",
                        width:"60%"
                    }}>
                        <Typography component="p" >Montant demandé:</Typography>
                        <Slider
                            aria-label="Temperature"
                            defaultValue={0}
                            getAriaValueText={valuetext}
                            color="primary"
                            valueLabelDisplay="auto"
                            marks={marks}
                            max="25000"
                        />
                    </Box>
                    <Box style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: "50px",
                        width:"60%"
                    }}>
                        <Typography component="p" >durée de remboursement:</Typography>
                        <Slider
                            aria-label="Temperature"
                            defaultValue={0}
                            getAriaValueText={valuetext}
                            color="primary"
                            valueLabelDisplay="auto"
                            marks={mois}
                            max={60}
                        />
                    </Box>
                    <Button variant="outlined" style={{marginTop: '40px'}}>lancer la simulation</Button>
                </div>

            </ThemeProvider>


        </Container>
    );
};

export default Simulation;