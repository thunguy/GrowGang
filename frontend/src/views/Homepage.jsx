import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import { TwitterTimelineEmbed, TwitterFollowButton } from 'react-twitter-embed';
// import { } from "../../components";

const Homepage = () => {
    return(
        <Fragment>
            <div className='container' id='banner'>
                <h1>GrowGang</h1>
                <h2>"World's First Community Garden"</h2>
            </div>

            <div className='twitter-container'>
                <div className="centerContent">
                    <div className="selfCenter standardWidth">
                        <TwitterTimelineEmbed
                            sourceType="profile"
                            screenName="growgangproper"
                            options={{height: 200}}
                            noHeader
                            noFooter
                        />
                    </div>
                </div>

                <div className="centerContent">
                    <div className="selfCenter">  
                        <TwitterFollowButton screenName="growgangproper" />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default withRouter(Homepage)