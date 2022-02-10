import React, {useState} from "react"
import { StaticImage } from "gatsby-plugin-image"

const ConnectButton = () => {
    return (
        <div className="btn btn-connect">
            <StaticImage src="../assets/images/icon-wallet.png" placeholder="none" />
            <span className="ms-1">
                Connect Wallet
            </span>
        </div>
    )
}

export default ConnectButton