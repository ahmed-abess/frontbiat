import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import BackGround from'../../../assets/images/IMG_20220511_232403.jpg'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {useState, useEffect} from "react";
import {gouvernorats as gov} from "../../../data";
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    InputLabel,
    MenuItem,
    Modal
} from "@mui/material";
import Logo from '../../../assets/images/logobiat.png'
import {Col, Form, Image} from "react-bootstrap";
import {useForm} from "react-hook-form";
import AppNav from "../../../components/AppNav";

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();


export default function SignUp() {
    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    const onSubmit =data => {

        console.log(data)
    };

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {

    });


    return (
        <div style={{background:'#fff',paddingBottom:'20px'}} >
        <ThemeProvider theme={theme}>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent:'center',
                width:"100%"

            }}>
            <Image

                src={Logo}
                alt="Third slide"
            />
            </div>
            <Container   component="main"  maxWidth="xs"  >

                <Box sx={{
                    marginTop: 2,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent:'space-between',
                    minHeight:'470px',
                    paddingRight:"20%",
                    paddingLeft:"20%",


                }}>
                    <Box xs={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',

                    }}>
                        <Typography component="h1" variant="h5" >Type de compte shouaité?</Typography>
                        <Box sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent:'space-between',


                        }}>

                            <Button onClick={handleOpen} variant="contained" style={{borderRadius:'15px',marginRight:'40px'}}>Morale</Button>
                            <Button  variant="contained" style={{borderRadius:'15px',marginRight:'40px'}}>Profesionnel</Button>
                        </Box>
                    </Box>
                    <Box sx={{


                    }} >
                        <Image src={BackGround}></Image>
                    </Box>


                </Box>
                <Copyright sx={{mt: 5}}/>

            </Container>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth="lg"

            >

                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width:"80%",
                        margin:"auto",
                        marginBottom:"40px"
                    }}
                >
                    <Image src={Logo}/>
                    <Typography component="h1" variant="h5" style={{marginBottom:"20px"}}>
                        Remplire le formulaire
                    </Typography>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="Donner un nom"
                                    name="nom"
                                    required
                                    fullWidth
                                    id="nom"
                                    label="Nom"
                                    autoFocus
                                    {...register("nom")}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="prenom"
                                    label="Prenom"
                                    name="prenom"
                                    {...register("prenom")}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="pseudo"
                                    label="Pseudo"
                                    name="pseudo"
                                    {...register("pseudo")}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email"
                                    name="email"
                                    {...register("email")}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Mot De Passe"
                                    type="password"
                                    id="password"
                                    {...register("password")}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="cin"
                                    label="CIN"
                                    name="cin"
                                    {...register("cin")}
                                />
                            </Grid>
                        </Grid>

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{mt: 3, mb: 2}}
                        >
                            Inscrit
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="/sign-in" variant="body2">
                                    Vous avez déjà un compte? connexion
                                </Link>
                            </Grid>
                        </Grid>
                    </Form>
                </Box>
            </Dialog>
        </ThemeProvider>
        </div>
    );
}