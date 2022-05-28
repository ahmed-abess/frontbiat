import * as React from 'react';
import reportsLineChartData from "../../dashboard/data/reportsLineChartData";
import DashboardNavbar from "../../../examples/Navbars/DashboardNavbar";
import DashboardLayout from "../../../examples/LayoutContainers/DashboardLayout";
import {Box, Dialog, FormControl, Grid, IconButton, InputLabel, MenuItem, Select} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import {green, red} from "@mui/material/colors";
import {Check, Info} from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import TableList from "../../../components/Table";
import MDBox from "../../../components/MDBox";
import Button from "@mui/material/Button";
import {Form} from "react-bootstrap";
import TextField from "@mui/material/TextField";
import {gouvernorats as gov} from "../../../data";
import {useForm} from "react-hook-form";


const rows = [
    {id: 1, lastName: 'salah', firstName: 'mohamed', email: "mohamed@yopmail.com"},
    {id: 2, lastName: 'ali', firstName: 'asma', email: "asma@gmail.com"},
    {id: 3, lastName: 'ameur', firstName: 'eslem', email: "eslem@gmail.com"},

];
const columns = [
        {field: 'id', headerName: 'ID', width: 100},
        {field: 'firstName', headerName: 'Nom', width: 250},
        {field: 'lastName', headerName: 'Prenom', width: 250},
        {
            field: 'email',
            headerName: 'Email',
            sortable: false,
            width: 300
        },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 200,
            renderCell: (params) => (

                <>
                    <IconButton aria-label="delete" disabled color="primary"  size="medium">
                        <Check sx={{ color: green[300] }}/>
                    </IconButton>
                    <IconButton aria-label="delete" size="medium">
                    <DeleteIcon sx={{color: red[500]}}/>
                </IconButton>
                    <IconButton aria-label="delete" size="medium">
                        <Info color="info" />
                    </IconButton>
                </>
            )
        }
    ]
;
function ListAgents() {
    const { sales, tasks } = reportsLineChartData;
    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    function valuetext(value) {
        return value;
    }

    const onSubmit = data => {

        console.log(data)
    };

    return (
        <DashboardLayout>
            <DashboardNavbar />

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
                                minHeight: "400px"
                            }}
                        >
                            <Typography component="h1" variant="h4" style={{marginBottom: "20px"}}>
                                List Des Agents
                            </Typography>
                            <Box sx={{
                                marginTop: 2,
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                float:"right",
                                marginBottom:3

                            }}>
                                <Button onClick={handleOpen} variant="contained" style={{borderRadius:'15px',marginRight:'40px', color:"#ffff"}}>Ajouter un Agent</Button>
                            </Box>
                            <TableList rows={rows} columns={columns}/>
                        </Box>
                    </Grid>
                </Grid>
            </MDBox>
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
                        marginBottom:"40px",
                        paddingTop:"20px "
                    }}
                >

                    <Typography component="h1" variant="h5" style={{marginBottom:"20px"}}>
                        Ajouter Un Agent
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
                                    {...register("firstName")}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="prenom"
                                    label="Prenom"
                                    name="prenom"

                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email"
                                    name="email"

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

                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Gouvernarat</InputLabel>
                                    <Select
                                        required
                                        name="gouvernarat"
                                        sx={{height: "50px !important"}}
                                        select
                                        id="gouvernarat"

                                    >
                                        {gov.map((option) => (
                                            <MenuItem key={option.name} value={option.name}>
                                                {option.name}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="telephone"
                                    label="Telephone"
                                    type="text"
                                    id="telephone"

                                />
                            </Grid>
                            <Grid item xs={12}>
                                <InputLabel htmlFor="component-error">Date De naissance</InputLabel>
                                <TextField
                                    required
                                    fullWidth
                                    name="dateNaissance"
                                    required
                                    type="date"
                                    id="dateNaissance"

                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="nationnalite"
                                    required
                                    type="text"
                                    label="Nationnalite"
                                    id="nationnalite"

                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Situation</InputLabel>
                                    <Select

                                        fullWidth
                                        name="situation"
                                        label="situation"
                                        sx={{height: "50px !important"}}
                                        id="situation"

                                    >
                                        <MenuItem key='celibateaire' value='celibateaire'>
                                            celibateaire
                                        </MenuItem><MenuItem key='marié' value='marié'>
                                        marié
                                    </MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>

                                <TextField
                                    required
                                    fullWidth
                                    name="cin"
                                    required
                                    type="text"
                                    id="cin"
                                    label="CIN"

                                />
                            </Grid> <Grid item xs={12}>

                            <TextField
                                required
                                fullWidth
                                name="payeNaissance"
                                required
                                type="text"
                                id="payeNaissance"
                                label="Pay De Naissance"
                            />
                        </Grid>


                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{mt: 3, mb: 2, color:"#ffff"}}
                        >
                            Confirmer
                        </Button>

                    </Form>
                </Box>
            </Dialog>
        </DashboardLayout>
    )
}

export  default  ListAgents