import { Card, Col, Row, Button, Text } from "@nextui-org/react";

export const Card2 = () => (

    <Card css={{ w: "100%", h: "400px" }}>
        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
            <Col>
                <Text size={12} weight="bold" transform="uppercase" color="white">
                    Atlantic Financial
                </Text>

            </Col>
        </Card.Header>
        <Card.Body css={{ p: 0 }}>
            <Card.Image
                src="https://cdn.discordapp.com/attachments/1040716536341594190/1049529182813687819/Screenshot_at_Dec_05_22-34-09.png"
                objectFit="cover"
                width="100%"
                height="100%"
                alt="Relaxing app background"
            />
        </Card.Body>
        <Card.Footer
            isBlurred
            css={{
                position: "absolute",
                bgBlur: "#0f111466",
                borderTop: "$borderWeights$light solid $gray800",
                bottom: 0,
                zIndex: 1,
            }}
        >
            <Row>
                <Col>
                    <Row>
                        <Col span={3}>
                            <Card.Image
                                src="https://cdn.discordapp.com/attachments/1040716536341594190/1049529360576688169/Screenshot_at_Dec_05_22-34-46.png"
                                css={{ bg: "black", br: "50%" }}
                                height={40}
                                width={40}
                                alt="icon"
                            />
                        </Col>
                        <Col>
                            <Text css={{ paddingLeft: '5px' }} color="#d1d1d1" size={12} >
                                Frontend Developer
                            </Text>
                            <Text weight='bold'css={{ paddingLeft: '5px' }} color="#d1d1d1" size={9} >
                                Atlantic (HS) Financial  

                            </Text>

                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Row justify="flex-end">
                        <a href="https://www.atlantic-financial.net/en" target='_blank'>
                            <Button
                                flat
                                auto
                                rounded
                                css={{ color: "#94f9f0", bg: "#94f9f026" }}
                            >
                                <Text
                                    css={{ color: "inherit" }}
                                    size={12}
                                    weight="bold"
                                    transform="uppercase"
                                >
                                    View
                                </Text>
                            </Button>
                        </a>
                    </Row>
                </Col>
            </Row>
        </Card.Footer>
    </Card>
);
