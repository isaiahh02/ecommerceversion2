import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faInstagram
} from "@fortawesome/free-bands-svg-icons";

<a href="https://www.instagram.com/learnbuildteach"
    className="instagram-social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
    </a>

export default function SocialFollow() {
    return (
        <div class="social-container">
            <h3>Social Follow</h3>
        </div>
    );
}