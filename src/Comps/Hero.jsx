import React from 'react'
import { Text } from "@nextui-org/react";
import { FaYoutube } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';
import { CgMouse } from 'react-icons/cg';
import { Button, } from "@nextui-org/react";
import { Card, Grid, Link } from "@nextui-org/react";


const Hero = () => {
    const text =
        "Digital Craftsman (Frontend Developer / UX/UI Designer) based in Toronto, Ontario! with a passion for building beautiful interfaces and products in web3 "
    return (
        <div className="hero">
            <div className='row'>
                <div className="hero--container">


                    <Text className='font'
                        h1
                        size={22}
                        css={{
                            color: "#F5A524",
                            textAlign: "center"
                        }}
                        weight="bold"
                    >HI, I AM ETHAN</Text>
                    <Text css={{
                        textAlign: "center",
                        width: "100%",
                        maxWidth: "500px",
                        margin: "0 auto",
                        fontSize: '22px'

                    }} weight="medium">{text}

                    </Text>

                    <div className="hero--logos">
                        <a href="https://www.youtube.com/channel/UClGk_jEeCR0CIJM2MoWVHoA" target='_blank'><FaYoutube className='logo' /></a>
                        <a href="https://twitter.com/edev42" target='_blank'><FaTwitter className='logo' /></a>
                        <a href="#" target='_blank'><FaInstagram className='logo' /></a>
                        <a href="https://github.com/gonz4216" target='_blank'><FaGithubSquare className='logo' /></a>
                    </div>
                    <a href="mailto:ethgon19@gmail.com?subject = Hey, lets work together!&body = Hey Ethan!," target='_blank'>
                        <Button auto color="warning" rounded flat css={{ margin: "30px" }}>
                            Let's Chat!
                        </Button>
                    </a>

                    <Card css={{ p: "$6", mw: "640px", marginTop: '70px' }}>
                        <Card.Header>

                            <Grid.Container css={{ pl: "$6" }}>
                                <div className="flex">
                                    <img
                                        alt="logo"
                                        src="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg"
                                        width="44px"
                                        className='yt--img'
                                    />
                                    <div className="text--yt">
                                        <Text css={{ letterSpacing: '.3px' }} h2 className='font' color='#282828'>
                                            SUBSCRIBE ON
                                        </Text>
                                        <Text css={{ letterSpacing: '.3px' }} className='font' h2 color='#FF0000'>‎ YOUTUBE</Text>
                                    </div>
                                </div>

                            </Grid.Container>
                        </Card.Header>
                        <Card.Body css={{ py: "$3" }}>
                            <Text>
                                Sharing my life as a web developer, encouraging other aspiring developers like myself to take that first leap in code.


                            </Text>
                        </Card.Body>
                        <Card.Footer>
                            <a href="https://www.youtube.com/channel/UClGk_jEeCR0CIJM2MoWVHoA" target='_blank'>
                                <Button light color="error" auto css={{ color: '#FF0000' }}>
                                    Click to view channel
                                </Button>
                            </a>
                        </Card.Footer>

                    </Card>
                    <a href="#cards" className='black'><CgMouse className='logo' /></a>
                </div>
            </div>
        </div>
    )
}

export default Hero