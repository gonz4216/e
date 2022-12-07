import React from 'react'
import { Button, Text } from "@nextui-org/react";

const Mentor = () => {
    return (
        <div className='mentor'>
            <div className="mentor--container">
                <div className="mentor--text">


                    <Text className='font'
                        h1
                        size={40}
                        css={{
                            textAlign: 'center',
                            color: 'white',
                            letterSpacing: '0.8px'
                        }}
                        weight="bold"
                    >
                        GET INSTANT MENTORSHIP FROM ME!
                    </Text>
                    <Text css={{
                        color: 'white',
                        textAlign: "center",
                        width: "100%",
                        maxWidth: "500px",
                        margin: "0 auto",
                        fontSize: '22px',
                        letterSpacing: '0.3px',
                        lineHeight: '30px'

                    }} weight="medium">
                        During this 1-on-1 consultation we can go over anything such as interviews, html/css/js, resume/portfolio reviews or just anything in general.
                    </Text>
                    <Text css={{
                        color: 'white',
                        textAlign: "center",
                        width: "100%",
                        maxWidth: "500px",
                        margin: "0 auto",
                        fontSize: '15px',
                        letterSpacing: '0.3px',
                        lineHeight: '30px',
                        paddingTop: '25px'

                    }} weight="medium">
                        Pick a time and date!
                    </Text>
                    <div className="buttons--mentor">
                        <a href="https://calendly.com/ethgonsalves/30min/2022-12-07T09:30:00-05:00?month=2022-12&date=2022-12-07" target='_blank'>
                        <Button  
                            flat
                            auto
                            rounded
                            css={{ color: "#94f9f0", bg: "#94f9f026",margin: '0 auto', marginTop: '30px' }}
                        >
                            <Text
                                css={{ color: "inherit", margin: '0 auto' }}
                                size={12}
                                weight="bold"
                                transform="uppercase"
                            >
                             60$ BOOK NOW
                            </Text>
                        </Button>
                        </a>
                         
                      
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mentor