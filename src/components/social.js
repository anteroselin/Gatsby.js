import React, {useState} from "react"
import { Row, Col } from "react-bootstrap"
import SocialGroup from "./social-group"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Social = () => {
    return (
        <div className="section section-social">
            <div className="container text-center py-5">
                <h1 className="mb-4">Social media ve community</h1>                
                <h2 className="mb-2">Stay in touch</h2>
                <p className="social-desc fs-md mb-4">Join in the conversation</p>

                <Row className="gy-3">
                    <Col lg={4}>
                        <div className="social-mark telegram">
                            <div className="bar">
                                @Username
                            </div>
                            <div className="circle d-flex align-items-center justify-content-center">
                                <FontAwesomeIcon icon={["fab", "telegram-plane"]} size="3x" />
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="social-mark discord">
                            <div className="bar">
                                @Username
                            </div>
                            <div className="circle d-flex align-items-center justify-content-center">
                                <FontAwesomeIcon icon={["fab", "discord"]} size="3x" />
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="social-mark twitter">
                            <div className="bar">
                                @Username
                            </div>
                            <div className="circle d-flex align-items-center justify-content-center">
                                <FontAwesomeIcon icon={["fab", "twitter"]} size="3x" />
                            </div>
                        </div>
                    </Col>
                </Row>

                <div className="my-5">
                    <div className="fs-lg mb-3">Sign up for announcement</div>
                    <SocialGroup />
                </div>
            </div>
        </div>
    )
}

export default Social