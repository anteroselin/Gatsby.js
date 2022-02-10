import React, {useState} from "react"
import { Row, Col } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"

const About = () => {
    return (
        <div className="section">
            <div className="bg-image">
                <StaticImage quality={100} src="../assets/images/bg02.jpg" layout="fullWidth" />
            </div>
            <div className="info-panel">
                <div className="container">
                    <Row className="gy-5 text-center align-items-center">
                        <Col xs={6}>
                            <div className="fs-md mb-3">
                                Secured Smart Contract Audit by Hacken
                            </div>
                            <StaticImage src="../assets/images/hacken.png" />
                        </Col>
                        <Col xs={6}>
                            <div className="fs-xl mb-3">
                                Powered by
                            </div>
                            <StaticImage src="../assets/images/avalanche.png" />
                        </Col>
                    </Row>
                </div>
            </div>

            <div className="about-panel">
                <div className="container">
                    <Row className="gy-4 align-items-center">
                        <Col md={7}>
                            <h1>What is Dragonia Land?</h1>
                            <p className="fs-md about-desc">
                                Dragonia Land is a crypto collectible game where
                                users can own a dragon, trade their dragons, interbreed them
                                and battle other dragons, collecting rewards and achievements
                                along the way. All of these are done on the blockchain in an
                                open, trusted and decentralized way.
                            </p>
                        </Col>
                        <Col md={5} className="text-center d-none d-md-block">
                            <StaticImage quality={100} src="../assets/images/dragon01.png" placeholder="blurred" layout="constrained" />
                        </Col>
                    </Row>
                </div>
            </div>

            <div className="token-info-panel">
                <div className="container">
                    <Row className="gy-4 align-items-center">
                        <Col md={7}>
                            <h1>Dragonia Land Token DRGL</h1>
                            <p className="fs-md token-info-desc">
                                Dragonia Land  is the token of the Dragons project and will be used in our Metaverse world.
                            </p>

                            <Row className="gy-3 fs-lg">
                                <Col xs={6}>
                                    <div className="mb-1 mb-sm-3">Total Token Supply</div>
                                    <div>50,000,000</div>
                                </Col>
                                <Col xs={6}>
                                    <div className="mb-1 mb-sm-3">Blockchain Network</div>
                                    <StaticImage src="../assets/images/avalanche.png" />
                                    <Row className="mt-1 mt-sm-3 align-items-center">
                                        <Col xl={5} xs={6}>
                                        <div className="fs-sm">Secured by</div>
                                        </Col>
                                        <Col xl={7} xs={6}>
                                            <StaticImage src="../assets/images/hacken.png" layout="fullWidth" />
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={5} className="text-center d-none d-md-block">
                            <StaticImage quality={100} src="../assets/images/dragon03.png" placeholder="blurred" layout="constrained" />
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default About