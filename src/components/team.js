import React, {useState} from "react"
import { Row, Col } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Team = () => {
    return (
        <div className="section section-team">
            <div className="container text-center p-4">
                <h1>Dragonia Land Team</h1>
                <p className="team-desc fs-sm mt-3 mb-4">
                    CryptoDragons is a unique project built around the Ethereum blockchain. We’ve created a Metaverse where dragons can breed, battle on Arena, earn Ethereum, and more. In CryptoDragons Metaverse advanced art and high-end technology meet each other.
                </p>
                <Row className="gy-3 justify-content-center align-items-bottom">
                    <Col md={4}>
                        <div className="team-member">
                            <StaticImage src="../assets/images/dragon01.png" placeholder="blurred" width={240}/>
                            <div className="name mt-2">İsim soyad</div>
                            <div className="position mt-1">Founder</div>
                            <a href="https://twitter.com/smaugsnft" target="_blank" className="social-icon twitter mt-1">
                                <FontAwesomeIcon icon={["fab", "twitter"]} />
                            </a>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="team-member">
                            <StaticImage src="../assets/images/dragon02.png" placeholder="blurred" width={240}/>
                            <div className="name mt-2">İsim soyad</div>
                            <div className="position mt-1">Founder</div>
                            <a href="https://twitter.com/smaugsnft" target="_blank" className="social-icon twitter mt-1">
                                <FontAwesomeIcon icon={["fab", "twitter"]} />
                            </a>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="team-member">
                            <StaticImage src="../assets/images/dragon03.png" placeholder="blurred" width={240}/>
                            <div className="name mt-2">İsim soyad</div>
                            <div className="position mt-1">Founder</div>
                            <a href="https://twitter.com/smaugsnft" target="_blank" className="social-icon twitter mt-1">
                                <FontAwesomeIcon icon={["fab", "twitter"]} />
                            </a>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Team