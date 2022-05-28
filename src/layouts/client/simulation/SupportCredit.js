import * as React from 'react';
import Container from '@mui/material/Container';

import {createTheme} from "@mui/material/styles";
import {ThemeProvider} from "@emotion/react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {FormControl, Grid, InputLabel, MenuItem, Select, Slider} from "@mui/material";
import Typography from "@mui/material/Typography";
import DashboardNavbar from "../../../examples/Navbars/DashboardNavbar";
import MDBox from "../../../components/MDBox";
import DashboardLayout from "../../../examples/LayoutContainers/DashboardLayout";
import {Form, Image} from "react-bootstrap";
import Logo from "../../../assets/images/logobiat.png";
import TextField from "@mui/material/TextField";
import {gouvernorats as gov} from "../../../data";
import Link from "@mui/material/Link";
import {useForm} from "react-hook-form";

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

function SupportCredit() {
    const {register, handleSubmit, watch, formState: {errors}} = useForm();

    function valuetext(value) {
        return value;
    }

    const onSubmit = data => {

        console.log(data)
    };

    return (

        <>
            <DashboardLayout>
                <DashboardNavbar/>
                <MDBox mt={12} mb={3}>
                    <Grid container justifyContent="center">
                        <Grid item xs={12} lg={12} justifyContent="center" alignItems="center">
                            <Box
                                sx={{
                                    marginTop: 2,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    marginBottom: "40px",
                                    padding: "20px 40px",
                                    background: "#ffff",
                                    minHeight: "600px"
                                }}
                            >
                                <Typography component="h1" variant="h5" style={{marginBottom: "20px"}}>
                                    Remplire le formulaire
                                </Typography>
                                <Form onSubmit={handleSubmit(onSubmit)}>

                                    <Grid item xs={12} lg={4}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                        <Select
                                            required
                                            name="typeCredit"
                                            select
                                            id="typeCredit"
                                            sx={{height: "50px !important"}}

                                        >
                                            <MenuItem key="auto" value="auto">
                                                Credit Auto
                                            </MenuItem>
                                            <MenuItem key="Conso" value="Conso">
                                                Credit Conso
                                            </MenuItem>
                                            <MenuItem key="Immo" value="Immo">
                                                Credit Immo
                                            </MenuItem>
                                            <MenuItem key="Rachat" value="Rachat">
                                                Rachat Credit
                                            </MenuItem>

                                        </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sx={{
                                        display: 'flex',
                                        flexDirection: 'row'
                                    }}>
                                        <TextField
                                            required
                                            fullWidth
                                            name="montant"
                                            label="Montant"
                                            type="text"
                                            id="montant"
                                            sx={{width: "40%",marginRight:10}}
                                        />
                                        <TextField
                                            required
                                            fullWidth
                                            name="nbrmois"
                                            label="Nombre de mois"
                                            type="text"
                                            id="nbrmois"
                                            sx={{width: "40%"}}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sx={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        marginTop:"20px"
                                    }}>
                                        <TextField
                                            required
                                            fullWidth
                                            name="valeurProj"
                                            label="Valeur de projet"
                                            type="text"
                                            id="montant"
                                            sx={{width: "40%",marginRight:10}}
                                        />
                                        <TextField
                                            required
                                            fullWidth
                                            name="nbrmois"
                                            label="Nombre de mois"
                                            type="text"
                                            id="nbrmois"
                                            sx={{width: "40%"}}
                                        />
                                    </Grid>

                                    <Grid item xs={12} lg={4}>
                                        <Button
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            sx={{mt: 3, mb: 2}}
                                        >
                                            Inscrit
                                        </Button>
                                    </Grid>

                                </Form>
                            </Box>
                        </Grid>
                    </Grid>
                </MDBox>

            </DashboardLayout>
        </>

    );
};

export default SupportCredit;