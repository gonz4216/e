import { Card, Col, Row, Button, Text } from "@nextui-org/react";
import a from '../assets/Screenshot at Dec 05 23-11-14.png'
export const Card3 = () => (
    <Card css={{ w: "100%", h: "400px" }}>
        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
            <Col>
                <Text size={12} weight="bold" transform="uppercase" color="#ffffffdd">
                    BLOG | Oct 25th, 2022
                </Text>
                <Text h3 color="white">
                    NuPhy Halo65, <br /> Best programming <br /> keyboard

                </Text>
            </Col>
        </Card.Header>
        <Card.Body css={{ p: 0 }}>
            <Card.Image className="blur"
                src={a}
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
                    Oct 25th, 2022
                    </Text>
                    <Text color="#fff" weight="bold" size={12}>
                        NuPhy keyboard review
                    </Text>
                </Col>
                <Col>
                    <Row justify="flex-end">
                        <a href="/keyboardreview">
                            <Button flat auto rounded color="secondary" css={{
                                backgroundColor: '#f6945b'
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
