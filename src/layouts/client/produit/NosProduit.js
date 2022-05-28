import React from "react";
import DashboardLayout from "../../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../../examples/Navbars/DashboardNavbar";
import MDBox from "../../../components/MDBox";
import {Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import Logo from '../../../assets/images/logobiat.png';
const produit=[
    {
        name:'Compte Chèques',
        img:Logo,
        description:"Nous mettons à votre disposition le Compte chèques BIAT, compte à vue destiné à recevoir vos entrées d’argent et à honorer vos dépenses tout en vous permettant un suivi de vos opérations bancaires."
    },
    {
        name:'Compte Etranger en Dinars Convertibles',
        img:Logo,
        description:"Vous êtes étranger non résident en Tunisie? Vous disposez de revenus en devises et vous avez des dépenses fréquentes en Tunisie en dinars? Vous souhaitez loger vos avoirs en Tunisie et en disposer à tout moment pour régler vos dépenses locales?"
    },
    {
        name:'Carte CHABEB',
        img:Logo,
        description:"Vous souhaitez initier votre enfant à la gestion autonome de son budget? Lui permettre d’effectuer des retraits d’argent sur DAB ou/et régler ses achats avec un moyen moderne, rapide et sécurisé?"
    },
    {
        name:'Carte Technologique',
        img:Logo,
        description:"Nous êtes développeur de solutions technologiques ( sites web , applications mobiles, ……) , étudiant ou chercheur dans le domaine du web ou des TIC ( technologies de l’information et de la communication ) ?"
    }
]

const  NosProduit = () => {
    return (
        <DashboardLayout>
            <DashboardNavbar/>
            <MDBox mt={12} mb={3} >
                <Grid container spacing={3} xs={12}>
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
                                                 {el.description}
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
export default NosProduit;