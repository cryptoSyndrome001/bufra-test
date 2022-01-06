import React, {FC} from "react";
import CallToAction from "../components/CallToAction";

const TermsOfService: FC = () => {
    return (
        <>
            <div className="terms-of-services-dark">
                <div className="container-fluid">
                    <div className="head-otr">
                        <h2 className="heading-h2 heading">Terms of Service</h2>
                    </div>
                    <span className="line"/>
                    <div className="wrapper">
                        <p className="desc para body-m">
                            This Privacy Policy document contains types of information that is collected
                            and recorded by Website Name and how we use it.
                        </p>
                        <p className="desc para body-m">
                            If you have additional questions or require more information about our Privacy
                            Policy, do not hesitate to contact us through email at contact@Ethoz.com
                        </p>
                        <p className="desc body-m">
                            This privacy policy applies only to our online activities and is valid for visitors to our
                            website with regards to the information that they shared and/or collect in Website Name.
                            This policy
                            is not applicable to any information collected offline or via channels other than this
                            website.
                        </p>
                        <h3 className="heading-h3 head">Consent</h3>
                        <p className="desc body-m">
                            By using our website, you hereby consent to our Privacy Policy and agree to its terms.
                        </p>
                        <h3 className="heading-h3 head">Information We Collect</h3>
                        <p className="desc para body-m">
                            The personal information that you are asked to provide, and the reasons why you
                            are asked to provide it, will be made clear to you at the point we ask you to
                            provide your personal information.
                        </p>
                        <p className="desc para body-m">
                            If you contact us directly, we may receive additional information about you such as your
                            name, email address, phone number, the contents of the message and/or attachments you may
                            send us, and any other information you may choose to provide.
                        </p>
                        <p className="desc body-m">
                            When you register for an Account, we may ask for your contact information, including items
                            such as name, company name, address, email address, and telephone number.
                        </p>
                        <h3 className="heading-h3 head">Log Files</h3>
                        <p className="desc body-m">
                            Website Name follows a standard procedure of using log files. These files log visitors when
                            they visit websites. All hosting companies do this and a part of hosting services'
                            analytics.
                            The information collected by log files include internet protocol (IP) addresses, browser
                            type,
                            Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the
                            number of clicks. These are not linked to any information that is personally identifiable.
                            The purpose of the information is for analyzing trends, administering the site, tracking
                            users'
                            movement on the website, and gathering demographic information.
                        </p>
                        <h3 className="heading-h3 head">Cookies And Web Beacons</h3>
                        <p className="desc body-m">
                            Like any other website, Website Name uses ‘cookies'. These cookies are used to store
                            information
                            including visitors' preferences, and the pages on the website that the visitor accessed or
                            visited.
                            The information is used to optimize the users' experience by customizing our web page
                            content
                            based on visitors' browser type and/or other information.
                        </p>
                        <h3 className="heading-h3 head">Children's Information</h3>
                        <p className="desc para body-m">
                            Another part of our priority is adding protection for children while using the internet.
                            We encourage parents and guardians to observe, participate in, and/or monitor and
                            guide their online activity.
                        </p>
                        <p className="desc body-m">
                            Website Name does not knowingly collect any Personal Identifiable Information from children
                            under the age of 13. If you think that your child provided this kind of information on our
                            website, we strongly encourage you to contact us immediately and we will do our best efforts
                            to promptly remove such information from our records.
                        </p>
                    </div>
                </div>
            </div>
            <CallToAction/>
        </>
    )
}

export default TermsOfService
