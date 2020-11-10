import React from "react";

function Contact() {
    return (
        <div>

            <div className="contact-box">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <h1>Contact</h1>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="contact">
                            <form className="form-group">
                                <label for="formGroupExampleInput">Name</label>
                                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Name" />
                            </form>
                                <form className="form-group">
                                    <label for="formGroupExampleInput2">Email</label>
                                    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Email" />
                                </form>
                                    <div className="form-group">
                                        <label for="Message">Message:</label>
                                        <textarea className="form-control" rows="5" id="comment"></textarea>
                                    </div>
                                    <div>
                                        <button type="button" className="btn btn-info">Submit</button>
                                    </div>
                        </div>
                    </div>
                </div>
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-12">
                                <h1>Contact Information</h1>
                                <h5>Alex Milroy</h5>

                                <h5>Email Goes here</h5>
                                <h5>Phone number goes here</h5>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-12">
                                <h1>External Links</h1>
                            </div>
                        </div>

                        <div className="row contact-buttons">

                            <div className="col-sm-4 col-md-4 col-lg-4">
                                <div className="button-container">
                                    <button onclick="window.location.href='https://github.com/ajm5099'" target="_blank" type="button"
                                        className="btn btn-info portfolio-link-btn">Github</button>
                                </div>
                            </div>

                            <div className="col-sm-4 col-md-4 col-lg-4">
                                <div className="button-container">
                                    <button onclick="window.location.href='https://www.linkedin.com/in/alex-milroy-043aa07/'" target="_blank"
                                        type="button" className="btn btn-info portfolio-link-btn">LinkedIn</button>
                                </div>
                            </div>

                            <div className="col-sm-4 col-md-4 col-lg-4">
                                <div className="button-container">
                                    <button
                                        onclick="window.location.href='https://docs.google.com/document/d/1V-3mU7ZMWhbdGMB8du6aJgP9FGeDWHetApVFiBY4QdA/edit?usp=sharing'"
                                        target="_blank" type="button" className="btn btn-info portfolio-link-btn">Resume</button>
                                </div>
                            </div>
                        </div>


            </div>
        </div>
    )
}

export default Contact;