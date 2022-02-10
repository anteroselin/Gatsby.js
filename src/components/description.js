import React, {useState} from "react"
import { Row, Col } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"

const Description = () => {
    return (
        <div className="section section-description">
            <div className="container">
                <Row className="gx-0 gy-0 justify-content-center">
                    <Col lg={6}>
                        <div className="game-card card01">
                            <div className="bg-image">
                                <StaticImage src="../assets/images/frame.png" placeholder="blurred" layout="fullWidth" />
                            </div>
                            <div className="card-title">Secured Smart Contract</div>
                            <Row className="card-descrition">
                                <Col xs={4}>
                                    <div className="card-image">
                                        <StaticImage src="../assets/images/dragon02.png" placeholder="blurred" layout="fullWidth" />
                                    </div>
                                </Col>
                                <Col xs={8}>
                                    <div className="p-3">
                                        Dragonia Land  is powered by smart contracts interconnected with each through the logic of NFT creation. All secured by Hacken.
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="game-card card02">
                            <div className="bg-image">
                                <StaticImage src="../assets/images/frame.png" placeholder="blurred" layout="fullWidth" />
                            </div>
                            <div className="card-title">Limited Collection</div>
                            <Row className="card-descrition">
                                <Col xs={4}>
                                    <div className="card-image">
                                        <StaticImage src="../assets/images/dragon-egg01.png" placeholder="blurred" layout="fullWidth" />
                                    </div>
                                </Col>
                                <Col xs={8}>
                                    <div className="p-3">
                                        Buy limited collection eggs to hatch your dragons.
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="game-card card03">
                            <div className="bg-image">
                                <StaticImage src="../assets/images/frame.png" placeholder="blurred" layout="fullWidth" />
                            </div>
                            <div className="card-title">Dragonia Paper</div>
                            <Row className="card-descrition">
                                <Col xs={4}>
                                    <div className="card-image">
                                        <StaticImage src="../assets/images/dragon-egg02.png" placeholder="blurred" layout="fullWidth" />
                                    </div>
                                </Col>
                                <Col xs={8}>
                                    <div className="p-3">
                                        Dragonia land guide to join Metaverse.
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="game-card card04">
                            <div className="bg-image">
                                <StaticImage src="../assets/images/frame.png" placeholder="blurred" layout="fullWidth" />
                            </div>
                            <div className="card-title">Battle on Blockchain</div>
                            <Row className="card-descrition">
                                <Col xs={4}>
                                    <div className="card-image">
                                        <StaticImage src="../assets/images/dragon04.png" placeholder="blurred" layout="fullWidth" />
                                    </div>
                                </Col>
                                <Col xs={8}>
                                    <div className="p-3">
                                        Fight other players in pitched 1v1 battles and choose your fighting style to win over other dragons.
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="game-card card05">
                            <div className="bg-image">
                                <StaticImage src="../assets/images/frame.png" placeholder="blurred" layout="fullWidth" />
                            </div>
                            <div className="card-title">Interbreedable dragons</div>
                            <Row className="card-descrition">
                                <Col xs={4}>
                                    <div className="card-image">
                                        <StaticImage src="../assets/images/dragon-egg03.png" placeholder="blurred" layout="fullWidth" />
                                    </div>
                                </Col>
                                <Col xs={8}>
                                    <div className="p-3">
                                        Breed your dragons and get lots of possible new combinations
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Description