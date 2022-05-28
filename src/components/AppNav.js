import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import AppBar from "@mui/material/AppBar";
import Logo from '../assets/images/logobiat.png'
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import {Image} from "react-bootstrap";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import {Menu} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

export default function  AppNav () {
    const  handleRedirect=(e)=>{
        console.log(e.target.id)
        window.location.assign("http://localhost:3000/"+e.currentTarget.id)
    }
    return (
        <>
            <AppBar position="static" color="white">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Image
                            height="70px"
                            width="150px"
                            src={Logo}
                            alt="Third slide"
                        />

                        <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                color="inherit"
                            >
                                <MenuIcon/>
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                sx={{
                                    display: {xs: 'block', md: 'none'},
                                }}
                            >

                                <MenuItem key="home">
                                    <Typography textAlign="center">hello</Typography>
                                </MenuItem>

                            </Menu>
                        </Box>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}
                        >
                            LOGO
                        </Typography>
                        <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>

                            <Button
                                key={"home"}
                                sx={{my: 2, color: 'white', display: 'block'}}
                                id="home"
                                onClick={e=>handleRedirect(e)}
                            >
                                Acceuil
                            </Button>
                            <Button
                                key={"simulation"}
                                sx={{my: 2, color: 'white', display: 'block'}}
                                onClick={e=>handleRedirect(e)}
                                id="simulation"
                            >
                                simulation des  crédit
                            </Button>
                            <Button
                                key={"/simulation"}
                                sx={{my: 2, color: 'white', display: 'block'}}
                            >
                                nos produit
                            </Button>
                            <Button
                                key={"/simulation"}
                                sx={{my: 2, color: 'white', display: 'block'}}
                            >
                                nos services
                            </Button>
                        </Box>

                        <Box sx={{flexGrow: 0}}>


                            <Button variant="text " sx={{p: 2}} color="info">
                                <Link href="/sign-up" variant="h6" color="white"> inscription </Link>
                            </Button>
                            <Button variant="text " sx={{p: 2}} color="info">
                                <Link href="/sign-in" variant="h6" color="white"> connexion </Link>
                            </Button>


                            <Menu
                                sx={{mt: '45px'}}
                                id="menu-appbar"

                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}


                            >

                                <MenuItem>
                                    <Typography textAlign="center"></Typography>
                                </MenuItem>

                            </Menu>
                        </Box>
                    </Toolbar>
                    <div>

                    </div>
                </Container>
            </AppBar>
        </>
    )
}

