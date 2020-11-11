import React, { Component } from "react";
import './homepage.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Homepage extends Component {
    constructor() {
        super();
        this.state = {
            name: "React"
        };
    }
    render() {
        return (<div>
            <div className="about-box">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <h1>About Me</h1>
                        <div className="line">
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-12">
                    <img className="about-image" src="images/van.jpg" alt="Profile-Img" />
                    <div>
                        <p>I am a UX designer and full stack web developer who is passionate about building experiences that delight and empower users of my applications.</p>
                        <p>With over 8 years of experience in UX working with and leading small teams, I have experience designing experiences, validating decisions through testing, and release improvements to support user feedback.</p>
                        <p>I am ready to bring my strategic thinking, open mind, strong communication skills, and honest communication skills to any organization looking to improve their user touchpoints.</p>
                    </div>
                </div>
            </div>
        </div>
        )
    }

}

export default Homepage;