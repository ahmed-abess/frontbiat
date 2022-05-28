import React from 'react';
import DashboardNavbar from "../../../examples/Navbars/DashboardNavbar";
import Typography from "@mui/material/Typography";
import DashboardLayout from "../../../examples/LayoutContainers/DashboardLayout";
import MDBox from "../../../components/MDBox";
import {Box, Grid, IconButton} from "@mui/material";
import {red} from '@mui/material/colors';
import DeleteIcon from '@mui/icons-material/Delete';
import {Info} from "@mui/icons-material";
import DataTable from "../../../components/Table";


const rows = [
    {id: 1, lastName: 'elouaer', firstName: 'rana', email: "rana@yopmail.com"},
    {id: 2, lastName: 'ben abdallah', firstName: 'ahmed', email: "ahmed@gmail.com"},
    {id: 3, lastName: 'ouesleti', firstName: 'eslem', email: "eslem@gmail.com"},
    {id: 4, lastName: 'melki', firstName: 'siryne', email: "siryne@gmail.com"},
    {id: 5, lastName: 'Targaryen', firstName: 'Daenerys', email: "Daenerys@gmail.com"},
    {id: 6, lastName: 'Melisandre', firstName: null, email: ""},
    {id: 7, lastName: 'Clifford', firstName: 'Ferrara', email: ""},
    {id: 8, lastName: 'Frances', firstName: 'Rossini', email: ""},
    {id: 9, lastName: 'Roxie', firstName: 'Harvey', email: ""},
];
const columns = [
    {field: 'id', headerName: 'ID', width: 100},
    {field: 'firstName', headerName: 'Nom', width: 200},
    {field: 'lastName', headerName: 'Prenom', width: 200},
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

            <><IconButton aria-label="delete" size="large">
                <DeleteIcon sx={{color: red[500]}}/>
            </IconButton>
                <IconButton aria-label="delete" size="large">
                    <Info color="info" />
                </IconButton>
            </>
)
}
]
;

function AjoutClient() {

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
                                    minHeight: "400px"
                                }}
                            >
                                <Typography component="h1" variant="h4" style={{marginBottom: "20px"}}>
                                    List Des Client
                                </Typography>
<DataTable rows={rows} columns={columns}/>

                            </Box>
                        </Grid>
                    </Grid>
                </MDBox>
            </DashboardLayout>
        </>
    )
}

export default AjoutClient