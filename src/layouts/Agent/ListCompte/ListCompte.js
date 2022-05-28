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
    {id: 1, typeCompte: 'morale', cin: '10505547', email: "mohamed@yopmail.com"},
    {id: 2, typeCompte:'professionnel',cin: '10505507', email: "rana@gmail.com"},
    {id: 3, typeCompte: 'morale', cin: '10505505', email: "ahmed@gmail.com"},
    {id: 4, typeCompte: 'morale', cin: '09550504', email: "eslem@gmail.com"},
    {id: 5, typeCompte: 'morale', cin: '02550554', email: "siryne@gmail.com"},

];
const columns = [
        {field: 'id', headerName: 'ID', width: 100},
        {field: 'typeCompte', headerName: 'Type Compte', width: 200},
        {field: 'cin', headerName: 'Cin', width: 250},
        {
            field: 'email',
            headerName: 'Email',
            sortable: false,
            width: 350
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
function ListCompte() {
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
                                List Des Comptes Bancaires
                            </Typography>

                            <TableList rows={rows} columns={columns}/>
                        </Box>
                    </Grid>
                </Grid>
            </MDBox>

        </DashboardLayout>
    )
}

export  default  ListCompte