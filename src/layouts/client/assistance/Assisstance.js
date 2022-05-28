import * as React from 'react';
import Container from '@mui/material/Container';

import {createTheme} from "@mui/material/styles";
import {ThemeProvider} from "@emotion/react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {Grid, InputLabel, MenuItem, Paper, Slider, SnackbarContent, TextareaAutosize} from "@mui/material";
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
                                    Prendre l'assisstance
                                </Typography>
                                <Form onSubmit={handleSubmit(onSubmit)}>


                                    <Grid item xs={12} sx={{
                                        display: 'flex',
                                        flexDirection: 'row'
                                    }}>
                                        <TextareaAutosize
                                            aria-label="empty textarea"
                                            placeholder="saisir votre message "
                                            name="message"
                                            label="message"
                                            style={{ width: "50%",marginRight:"50px",height:300 }}
                                        />

                                        <SnackbarContent
                                            message={
                                                "Hello Can i help you ? Do you need to know more about credits ! Or you need some global informations ?"
                                            }
                                           sx={{background:"#1a73e8",width:'40%',height:300, opacity:0.75}}
                                        />


                                    </Grid>


                                    <Grid item xs={12} lg={4}>
                                        <Button
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            sx={{mt: 3, mb: 2, color:"#ffff"}}
                                        >
                                            Envoyer
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