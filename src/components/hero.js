import React, {useState} from "react"
import { StaticImage } from "gatsby-plugin-image"

const Hero = () => {

    return (
        <div className="section section-hero">
            <div className="img-hero bg-image">
                <StaticImage quality={100} src="../assets/images/bg01.jpg" placeholder="blurred" layout="fullWidth" />
            </div>
            <h2 className="title-hero">
                <span className="emphasize">Buy eggs</span> to hatch your dragons, raise them then join battle to <span className="emphasize">earn rewards!</span>
            </h2>
        </div>
    )
}

export default Hero