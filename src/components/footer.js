import React from "react"
import {Row, Col} from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
    return (
        <footer className="footer text-center">
			<div className="container pt-5">
				<Row className="gy-3">
					<Col lg={4} className="text-center">
						<h3 className="heading mb-3">Dragonia Land</h3>

						<p className="mt-4 text-sm opacity-8 pr-lg-4 text-desc">
							Dragonia Land
						</p>
						<div className="mt-4">
							
							<a href="#" target="_blank" className="social-icon">
								<FontAwesomeIcon icon={["fab", "telegram"]} />
							</a>
							
							<a href="#" target="_blank" className="social-icon">
								<FontAwesomeIcon icon={["fab", "twitter"]} />
							</a>
							<a href="#" target="_blank" className="social-icon">
								<FontAwesomeIcon icon={["fab", "github"]} />
							</a>
							<a href="#" target="_blank" className="social-icon">
								<FontAwesomeIcon icon={["fab", "discord"]} />
							</a>
							<a href="#" target="_blank" className="social-icon">
								<FontAwesomeIcon icon="envelope" />
							</a>

						</div>
					</Col>
					<Col lg={4} sm={6}>
						<h6 className="heading mb-3">Useful Links</h6>
						<ul className="list-unstyled text-desc">
							<li>
								<a href="#">
									Buy Dragonia Land Token
								</a>
							</li>
							<li>
								<a href="#">
									Roadmap
								</a>
							</li>
							<li>
								<a href="#">
									WhitePaper English
								</a>
							</li>
							<li>
								<a href="#">
									WhitePaper Chinese
								</a>
							</li>
						</ul>
					</Col>
					<Col lg={4} sm={6}>
						<h6 className="heading mb-3">About Dragonia Land </h6>
						<ul className="list-unstyled text-desc">
						
							<li>
								<a href="https://bscscan.com/token/0x6bfd576220e8444ca4cc5f89efbd7f02a4c94c16">
									BSCSCAN
								</a>
							</li>
							<li>
								<a href="#">
									Global Community
								</a>
							</li>
							<li>
								<a href="#">
									Chinese Community
								</a>
							</li>
						</ul>
					</Col>
				</Row>
				<div className="divider-fade py-4"></div>
				<div className="row align-items-center justify-content-center pb-4">
					<div className="col-md-6">
						<div className="copyright text-sm text-start text-desc text-center">
							© 2022 <a href="" className="fw-bold text-white" target="_blank">Dragonia Land</a>. All rights reserved
						</div>
					</div>
				</div>
			</div>
		</footer>
    );
  };
  
  export default Footer;
  