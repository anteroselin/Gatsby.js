import React, {useState} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SocialGroup = () => {
    return (
        <>
            <a href="https://twitter.com/smaugsnft" target="_blank" className="social-icon twitter">
                <FontAwesomeIcon icon={["fab", "twitter"]} />
            </a>
            <a href="https://discord.gg/v7ZmDYsQ" target="_blank" className="social-icon discord">
                <FontAwesomeIcon icon={["fab", "discord"]} />
            </a>
            <a href="https://t.me/smaugscommunity" target="_blank" className="social-icon telegram">
                <FontAwesomeIcon icon={["fab", "telegram-plane"]} />
            </a>
        </>
    )
}

export default SocialGroup