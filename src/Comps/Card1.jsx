import { Card, Col, Row, Button, Text } from "@nextui-org/react";

export const Card1 = () => (
    <Card css={{ w: "100%", h: "400px" }}>
        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
            <Col>
                <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                    CURRENTLY WORKING @
                </Text>
                <Text h3 color="black">

                </Text>
            </Col>
        </Card.Header>
        <Card.Body css={{ p: 0 }}>
            <Card.Image
                src="https://cdn.discordapp.com/attachments/1040716536341594190/1049524134054469642/Screenshot_at_Dec_05_22-13-17.png"
                width="100%"
                height="100%"
                objectFit="cover"
                alt="Card example background"
            />
        </Card.Body>
        <Card.Footer
            isBlurred
            css={{
                position: "absolute",
                bgBlur: "#ffffff66",
                borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                bottom: 0,
                zIndex: 1,
            }}
        >
            <Row>
                <Col>
                    <Text color="#fff" size={12}>
                        Frontend Developer
                    </Text>
                    <Text color="#fff" weight="bold" size={12}>
                        Egeez Inc.
                    </Text>
                </Col>
                <Col>
                    <Row justify="flex-end">
                        <a href="https://egeez.com/" target='_blank'>
                            <Button flat auto rounded color="secondary" css={{
                                backgroundColor: '#1f5cf7'
                            }}>
                                <Text
                                    css={{ color: "white" }}
                                    size={12}
                                    weight="bold"
                                    transform="uppercase"
                                >
                                    Learn More
                                </Text>
                            </Button>
                        </a>
                    </Row>
                </Col>
            </Row>
        </Card.Footer>
    </Card>
);
