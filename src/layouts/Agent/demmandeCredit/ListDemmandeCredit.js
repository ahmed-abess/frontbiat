import React from 'react';
import DashboardNavbar from "../../../examples/Navbars/DashboardNavbar";
import Typography from "@mui/material/Typography";
import DashboardLayout from "../../../examples/LayoutContainers/DashboardLayout";
import MDBox from "../../../components/MDBox";
import { red,green } from '@mui/material/colors';
import {Clear,Check} from "@mui/icons-material";
import {
    Box,
    Grid,
    IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer, TableFooter,
    TableHead, TablePagination,
    TableRow, useTheme
} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import {KeyboardArrowLeft, KeyboardArrowRight} from "@mui/icons-material";
import TableList from "../../../components/Table";


const rows = [
    {id: 1, typeCredit: 'credit immo', montant: '190000', client: "elouaer rana"},
    {id: 2, typeCredit: 'credit auto', montant: '30000', client: "ahmed ben abdallah"},
    {id: 3, typeCredit: 'credit conso', montant: '3000', client: "ouesleti eslem"},
    {id: 4, typeCredit: 'credit immo', montant: '220000', client: "melki siryne"},
    {id: 5, typeCredit: 'credit immo', montant: '210000', client: "Daenerys "},
    {id: 6, typeCredit: 'credit conso', montant: "11000", client: "Andros@gmail.com"},
    {id: 7, typeCredit: 'credit conso', montant: '15000', client: "Ferrara@gmail.com"},
    {id: 8, typeCredit: 'credit auto', montant: '25000', client: "Rossini@gmail.com"},
    {id: 9, typeCredit: 'credit auto', montant: '40000', client: "Rossini@gmail.com"},
];
const columns = [
        {field: 'id', headerName: 'ID', width: 100},
        {field: 'typeCredit', headerName: 'Type de credit', width: 250},
        {field: 'montant', headerName: 'Montant', width: 250},
        {
            field: 'client',
            headerName: 'Demmander par',
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
                    <IconButton aria-label="delete" disabled color="primary"  size="medium">
                        <Clear sx={{ color: red[300] }}/>
                    </IconButton>
                    <IconButton aria-label="delete" disabled color="primary"  size="medium">
                        <DeleteIcon sx={{ color: red[500] }}/>
                    </IconButton>
                </>
            )
        }
    ]
;



function ListCredit() {

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
                                    List Des Demmandes Credits
                                </Typography>

                                <TableList rows={rows} columns={columns}/>
                            </Box>
                        </Grid>
                    </Grid>
                </MDBox>
            </DashboardLayout>
        </>
    )
}

export default ListCredit