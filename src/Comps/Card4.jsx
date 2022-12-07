import { Card, Col, Row, Button, Text } from "@nextui-org/react";
import a from '../assets/Screenshot at Dec 05 23-11-14.png'
export const Card4 = () => (
    <Card css={{ w: "100%", h: "400px" }}>
        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
            <Col>
                <Text size={12} weight="bold" transform="uppercase" color="#ffffffdd">
                    BLOG | April 10th, 2022
                </Text>
                <Text h3 color="white">
                    Pros & Cons of <br />being a frontend<br />  developer

                </Text>
            </Col>
        </Card.Header>
        <Card.Body css={{ p: 0 }}>
            <Card.Image className="blur"
                src='https://images.unsplash.com/photo-1579412690850-bd41cd0af397?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1665&q=80'
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
                     April 10th, 2022
                    </Text>
                    <Text color="#fff" weight="bold" size={12}>
                        Pros & Cons of being a ...
                    </Text>
                </Col>
                <Col>
                    <Row justify="flex-end">
                        <a href="/pros&cons">
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
