import * as React from 'react';

import Box from '@mui/material/Box';


import Container from '@mui/material/Container';

import {Carousel, Image} from "react-bootstrap";
import Image1 from '../assets/images/FB_IMG_1652308115783.jpg'
import Image2 from '../assets/images/FB_IMG_1652308090403.jpg'
import Image3 from '../assets/images/FB_IMG_1652308127373.jpg'
import AppNav from "../components/AppNav";

function Home() {


    return (
        <Container>
            <AppNav/>


            <Box>
                <Carousel>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100"
                            src={Image1}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                            className="d-block w-100"
                            src={Image3}
                            alt="Second slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                            className="d-block w-100"
                            src={Image2}
                            alt="Third slide"
                        />

                    </Carousel.Item>
                </Carousel>
            </Box>
        </Container>
    );
};

export default Home;