import React from 'react'
import { Navbar, Link, Avatar, Dropdown } from "@nextui-org/react";
import { Text } from "@nextui-org/react";
import Footer from './Footer'
import { NextUIProvider } from '@nextui-org/react';

const Blog = (props) => {
    const collapseItems = [
        "Return Home",

        ''
    ];
    const header = props.header
    const img = props.img
    const para = props.para
    const para2 = props.para2
    const para3 = props.para3
    const para4 = props.para4


    return (
        <NextUIProvider>
        <>

            <div className="row">


                <Navbar isBordered variant="floating">
                    <Navbar.Toggle showIn="xs" />
                    <Navbar.Brand
                        css={{
                            "@xs": {
                                w: "12%",
                            },
                        }}
                    >
                     
                            <Text b color="inherit" hideIn="xs" className='font'>
                            <a href="./" className='white'>
                                ETHAN GONSALVES
                                </a>
                            </Text>
                      
                    </Navbar.Brand>
                    <Navbar.Content
                        enableCursorHighlight
                        activeColor="warning"
                        hideIn="xs"
                        variant="highlight"
                    >
                        <Navbar.Link isActive href="./">Return Home</Navbar.Link>


                    </Navbar.Content>



                    <Navbar.Collapse disableAnimation>
                        {collapseItems.map((item, index) => (
                            <Navbar.CollapseItem
                                key={item}
                                activeColor="warning"
                                css={{
                                    color: index === collapseItems.length - 1 ? "$error" : "",
                                }}
                                isActive={index === 2}
                            >
                                <Link
                                    color="inherit"
                                    css={{
                                        minWidth: "100%",
                                    }}
                                    href="#"
                                >
                                    {item}
                                </Link>
                            </Navbar.CollapseItem>
                        ))}
                    </Navbar.Collapse>
                </Navbar>






            </div>

            <div className='blog'>
                <div className="blog--row">
                    <div className="blog--container">
                        <div className="blog--img">
                            <img src={img} alt="" />
                        </div>
                        <Text h1 css={{ paddingBottom: '20px' }}>{header}</Text>
                        <Text h4>{para}</Text>
                        <br />
                        <Text h4>{para2}</Text>
                        <br />
                        <Text h4>{para3}</Text>
                        <br />
                        <Text h4>{para4}</Text>






                    </div>
                </div>


            </div>
            <Footer />
        </>
        </NextUIProvider> 
    )
}

export default Blog