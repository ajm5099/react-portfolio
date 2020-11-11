import React, { Component } from "react";
import './portfolio.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import whaleHunter from './whale-hunter.png';
import burgerBar from './burger_bar.png';
import venu from './venu-profile-img.png';
import weatherDashboard from './weather-dashboard.png';
import dayScheduler from './day-scheduler.png';


class Portfolio extends Component {
    constructor() {
        super();
        this.state = {
            name: "React"
        };
    }
    render() {
        return (<div>
            <div className="portfolio-box">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <h1>Projects</h1>
                        <div className="line">
                        </div>
                    </div>
                </div>
                {/* Content Row 2 */}
                <div className="col-sm-12 col-md-12 col-lg-12">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <h3>Whale Hunter</h3>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <img className="portfolio-image img-fluid" src={whaleHunter} alt="whale-hunter-profile-img" />
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-8">
                            <p>Whale Hunter is a beer tracking, search engine and social media app that is built to be your go to for beer discovery. Browse our app and explore new beers to taste while learning more about new beers and the breweries that made them. Save those beers to a "six pack" for referencing later. Share your experiences with your friends and strangers by posting about your experience, sharing your created six packs, and by rating beer by using our innovative Ahab scale.</p>

                            {/* Buttons */}
                            <div className="row">
                                <div className="col-sm-12 col-md-12 col-lg-12 button-container">
                                    <button onclick="window.location.href='https://glacial-reef-81572.herokuapp.com/'" target="_blank"
                                        type="button" className="btn btn-info portfolio-link-btn">Visit Site</button>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-12 col-md-12 col-lg-12 button-container">
                                    <button onclick="window.location.href='https://github.com/ajm5099/burger_bar.git'" target="_blank"
                                        type="button" className="btn btn-info portfolio-link-btn">Git Hub</button>
                                </div>
                            </div>

                        </div>
                    </div>




                    <div className="col-sm-12 col-md-12 col-lg-12">

                        {/* Content Row 2 */}

                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-12">
                                <h3>Burger Bar</h3>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4">
                                <img className="portfolio-image img-fluid" src={burgerBar} alt="burger-bar-profile-img" />
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-8">
                                <p>The burger bar is a web application that shows off gourmet burgers you can order, and then devour the burgers when they are ready! Dont see a burger you like? You can add a new burger and have it made for you to be devoured! Burger bar uses a MYSQL database to store the burgers, and utilizes handlebars, node, express, and javascript to build the application.</p>

                                {/* Buttons */}

                                <div className="row">
                                    <div className="col-sm-12 col-md-12 col-lg-12 button-container">
                                        <button onclick="window.location.href='https://glacial-reef-81572.herokuapp.com/'" target="_blank"
                                            type="button" className="btn btn-info portfolio-link-btn">Visit Site</button>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-sm-12 col-md-12 col-lg-12 button-container">
                                        <button onclick="window.location.href='https://github.com/ajm5099/burger_bar.git'" target="_blank"
                                            type="button" className="btn btn-info portfolio-link-btn">Git Hub</button>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-sm-12 col-md-12 col-lg-12">
                            {/* Content Row 3 */}
                            <div className="row">
                                <div className="col-sm-12 col-md-12 col-lg-12">
                                    <h3>Group Project: Venu</h3>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-4">
                                    <img className="portfolio-image img-fluid" src={venu} alt="venu-profile-img" />
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-8">
                                    <p>VenU is a music-discovery website for fans of live music, for fans to discover new artists and shows. The search functionality allows you to search for a band and retrieve a performance by said band for the user to enjoy. There is also currently live broadcasts for the user to browse. In addition as a starting point there are several genres for a new user to experience what certain genres have to offer in musical styling and feeling. The videos displayed on site are populated with information about the bands provided by the AudioDB API when available.</p>

                                    {/* Buttons */}
                                    <div className="row">
                                        <div className="col-sm-12 col-md-12 col-lg-12 button-container">
                                            <button onclick="window.location.href='https://ajm5099.github.io/Music-Discovery/'" target="_blank"
                                                type="button" className="btn btn-info portfolio-link-btn">Visit Site</button>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-12 col-md-12 col-lg-12 button-container">
                                            <button onclick="window.location.href='https://github.com/ajm5099/Music-Discovery.git'" target="_blank"
                                                type="button" className="btn btn-info portfolio-link-btn">Git Hub</button>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* Content Row 4 */}
                            <div className="row">
                                <div className="col-sm-12 col-md-12 col-lg-12 project-container">
                                    <h3>Weather Dashboard</h3>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-4">
                                    <img className="portfolio-image img-fluid" src={weatherDashboard} alt="weather-profile-img" />
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-8">
                                    <p>The weather dashboard is a place users can go to view the current weather, and 5 day extended forecast for any city they search for. The program will also save cities the user searched for in a list, for quick recall. The project makes extensive use of the open weather API for its data source, and uses AJAX requests to pull in up to date weather data.</p>

                                    {/* Buttons */}
                                    <div className="row">
                                        <div className="col-sm-12 col-md-12 col-lg-12 button-container">
                                            <button onclick="window.location.href='https://ajm5099.github.io/Weather-Forecast/'" target="_blank"
                                                type="button" className="btn btn-info portfolio-link-btn">Visit Site</button>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-12 col-md-12 col-lg-12 button-container">
                                            <button onclick="window.location.href='https://github.com/ajm5099/Weather-Forecast.git'" target="_blank"
                                                type="button" className="btn btn-info portfolio-link-btn">Git Hub</button>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* Content Row 5 */}
                            <div className="row">
                                <div className="col-sm-12 col-md-12 col-lg-12 project-container">
                                    <h3>Day planner</h3>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-4">
                                    <img className="portfolio-image img-fluid" src={dayScheduler} alt="day-profile-img" />
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-8">
                                    <p>The day planner is a lightweight javascript program that allows a user to plan their day. The application will accept and save inputs for each one hour time block, retaining them even after the browser is closed so suers can return to the page later and not lose any information. The application makes use of moment.js t oget the current time, and style each time row according to if its in the past, is the current time, or is in the future.</p>

                                    {/* Buttons */}
                                    <div className="row">
                                        <div className="col-sm-12 col-md-12 col-lg-12 button-container">
                                            <button onclick="window.location.href='https://ajm5099.github.io/Day-planner/'" target="_blank"
                                                type="button" className="btn btn-info portfolio-link-btn">Visit Site</button>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-12 col-md-12 col-lg-12 button-container">
                                            <button onclick="window.location.href='https://github.com/ajm5099/Day-planner.git'" target="_blank"
                                                type="button" className="btn btn-info portfolio-link-btn">Git Hub</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Portfolio;