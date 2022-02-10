import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Partner = () => {
    return (
        <div className="section section-partner">
            <div className="container text-center p-5">
                <h1 className="mb-4">Partners & Investors</h1>
                <div className="d-flex align-items-center justify-content-around flex-wrap">
                    <StaticImage src="../assets/images/partner01.jpg" className="m-2" />
                    <StaticImage src="../assets/images/partner02.jpg" className="m-2" />
                    <StaticImage src="../assets/images/partner03.jpg" className="m-2" />
                    <StaticImage src="../assets/images/partner04.jpg" className="m-2" />
                    <StaticImage src="../assets/images/partner05.jpg" className="m-2" />
                    <StaticImage src="../assets/images/partner06.jpg" className="m-2" />
                    <StaticImage src="../assets/images/partner07.jpg" className="m-2" />
                    <StaticImage src="../assets/images/partner08.jpg" className="m-2" />
                    <StaticImage src="../assets/images/partner09.jpg" className="m-2" />
                    <StaticImage src="../assets/images/partner10.jpg" className="m-2" />
                    <StaticImage src="../assets/images/partner11.jpg" className="m-2" />
                </div>
            </div>
        </div>
    )
}

export default Partner