import React from 'react';
import "./Services.css";
import Button from "@material-ui/core/Button";

function Services() {
    return (
        <div className="service">
            <h1>Services</h1>
            <div className="container">
                {/* Card */}

                <diV className="plan_box">
                   
                    <div className="head">
                       <h3>Pricing Starts At</h3>
                       <p>₹ 120 <span>/ Post</span></p>
                    </div>
                   
                    <div className="features">
                        <ul>
                            <li>
                                x
                            </li>
                            <li>
                                y
                            </li>
                            <li>
                                z
                            </li>
                        </ul>
                    </div>
                   
                    <div className="btn">
                    <Button variant="contained" color="secondary">
                        Submit
                    </Button>
                    </div>

                </diV>

                {/* Card */}

            </div>
        </div>
    )
}

export default Services;
