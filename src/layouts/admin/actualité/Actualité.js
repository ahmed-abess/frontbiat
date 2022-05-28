import * as React from 'react';
import reportsLineChartData from "../../dashboard/data/reportsLineChartData";
import DashboardNavbar from "../../../examples/Navbars/DashboardNavbar";
import DashboardLayout from "../../../examples/LayoutContainers/DashboardLayout";
import {
    Box,
    Dialog,
    FormControl,
    Grid,
    IconButton,
    InputLabel,
    MenuItem,
    Select,
    TextareaAutosize
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import {green, red} from "@mui/material/colors";
import {Check, Info,Edit} from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import TableList from "../../../components/Table";
import MDBox from "../../../components/MDBox";
import Button from "@mui/material/Button";
import {Form} from "react-bootstrap";
import TextField from "@mui/material/TextField";
import {gouvernorats as gov} from "../../../data";
import {useForm} from "react-hook-form";
import actu1 from "../../../assets/images/actu1.jpg";
import actu2 from "../../../assets/images/actu2.jpg";
import actu3 from "../../../assets/images/actu3.jpg";
import actu4 from "../../../assets/images/actu4.jpg";


const rows = [
    {
        id:1,
        titre:'La BIAT publie ses indicateurs d’activité trimestriels au 31 mars 2022',
        date:'08 AVR 2022'
    },
    {
        id:2,
        titre:'L’Assemblée Générale Ordinaire de la BIAT se tiendra le 22 avril à distance',
        date:'28 FÉV 2022'
    },
    {
        id:3,
        titre:'La BIAT soutient la 12 ème édition des Foulées du Mégara',
        date:'21 FÉV 2022'
    },
    {
        id:4,
        titre:'La Fondation BIAT offre à ses boursiers du programme Generation Leaders la formation « Vision et projet de vie »',
        date:'15 FÉV 2022'
    }

];
const columns = [
        {field: 'id', headerName: 'ID', width: 70},
        {field: 'titre', headerName: 'Titre', width: 750},
        {field: 'date', headerName: 'Date', width: 200},
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
                        <Edit color="info" />
                    </IconButton>
                </>
            )
        }
    ]
;
function Actualite() {
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
                                <Button onClick={handleOpen} variant="contained" style={{borderRadius:'15px',marginRight:'40px', color:"#ffff"}}>Ajouter une Actualité</Button>
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
                        Ajouter Une Actualité
                    </Typography>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={12}>
                                <TextField

                                    name="titre"
                                    required
                                    fullWidth
                                    id="titre"
                                    label="Titre"
                                    autoFocus
                                    {...register("titre")}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Paragraph</InputLabel>
                                <TextareaAutosize
                                    aria-label="empty textarea"
                                    name="paragraph"
                                    label="Paragraph"
                                    variant="outlined"
                                    style={{ width: "100%",height:200,borderRadius:"5px",border:"1px solid #d5d5d5",color:"#9d9d9d" }}
                                />
                                </FormControl>

                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    variant="outlined"
                                    component="label"
                                    color="primary"
                                    sx={{color:"#389dff"}}
                                >
                                    Upload Image
                                    <input
                                        type="file"
                                        hidden
                                    />
                                </Button>
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

export  default  Actualite