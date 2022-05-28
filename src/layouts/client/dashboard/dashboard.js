import React from "react";
import DashboardNavbar from "../../../examples/Navbars/DashboardNavbar";
import DashboardLayout from "../../../examples/LayoutContainers/DashboardLayout";
import {Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import MDBox from "../../../components/MDBox";
import actu1 from "../../../assets/images/actu1.jpg";
import actu2 from "../../../assets/images/actu2.jpg";
import actu3 from "../../../assets/images/actu3.jpg";
import actu4 from "../../../assets/images/actu4.jpg";
const produit=[
    {
        name:'La BIAT publie ses indicateurs d’activité trimestriels au 31 mars 2022',
        img:actu1,
        date:'08 AVR 2022'
    },
    {
        name:'L’Assemblée Générale Ordinaire de la BIAT se tiendra le 22 avril à distance',
        img:actu2,
        date:'28 FÉV 2022'
    },
    {
        name:'La BIAT soutient la 12 ème édition des Foulées du Mégara',
        img:actu3,
        date:'21 FÉV 2022'
    },
    {
        name:'La Fondation BIAT offre à ses boursiers du programme Generation Leaders la formation « Vision et projet de vie »',
        img:actu4,
        date:'15 FÉV 2022'
    }
]
const DashboardClient = () => {
    return (
        <DashboardLayout>
            <DashboardNavbar/>

            <MDBox mt={12} mb={3}>
                <Grid container spacing={3} >
                    {
                        produit.map(el=>{
                            return(
                                <>
                                    <Grid item xs={12} lg={4}>
                                        <Card sx={{ maxWidth: 345 ,maxHeight:600}}>
                                            <CardMedia
                                                component="img"
                                                height="140"
                                                image={el.img}
                                                alt="green iguana"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    {el.name}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    {el.date}
                                                </Typography>
                                            </CardContent>
                                            <CardActions>

                                                <Button size="small">Voir</Button>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                </>
                            )
                        })
                    }
                </Grid>
            </MDBox>
        </DashboardLayout>
    )
}
export default DashboardClient;