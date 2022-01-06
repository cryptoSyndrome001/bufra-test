import React, {FC} from "react";
import {Link} from "react-router-dom";

const UtilityLinks: FC = () => {
    return (
        <>
            <div className="privacy-link">
                <Link to="/privacy-policy" className="link body-sb">Privacy Policy</Link>
                <span className="dot">•</span>
                <Link to="/terms-of-service" className="link body-sb">Terms of Service</Link>
            </div>
        </>
    )
}

export default UtilityLinks
