import { Card, Col, Row, Button, Text } from "@nextui-org/react";
 
export const Card5 = () => (
    <Card css={{ w: "100%", h: "400px" }}>
        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
            <Col>
                <Text size={12} weight="bold" transform="uppercase" color="#ffffffdd">
                    BLOG | November 10th, 2022
                </Text>
                <Text h3 color="white">
                    What exactly <br />is web3?<br /> 

                </Text>
            </Col>
        </Card.Header>
        <Card.Body css={{ p: 0 }}>
            <Card.Image className="blur"
                src='https://i.pinimg.com/originals/de/ae/84/deae84a95d30fa0df447b1d7a4f712f5.jpg'
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
                    November 10th, 2022
                    </Text>
                    <Text color="#fff" weight="bold" size={12}>
                        What is web3?
                    </Text>
                </Col>
                <Col>
                    <Row justify="flex-end">
                        <a href="/whtisweb3">
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
                                    learn more
                                </Text>
                            </Button>
                        </a>
                    </Row>
                </Col>
            </Row>
        </Card.Footer>
    </Card>
);
