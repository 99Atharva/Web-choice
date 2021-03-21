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
                    <Button variant="contained" color="inherit" className="MuiButton-root">
                        Submit
                    </Button>
                    </div>

                </diV>

                {/* Card */}

            </div>

            <div className="text">
                We Offer not just what you want but what you need
                <p>
                We all live in a world where we start the day with social media and end the day with it .  
                So what possibly could be better option than not to Promote your own brand on social media ! But we completely understand the amount of work you do to run your buisnesses , so here we are : Webchoice , to help you Engage with your customers, watch your social following grow, and increase social media results and establish your brand as an authority in your niche.
                Let Webchoice's Social Media Management experts drive your social media efforts to help increase followers, maximize brand awareness and gain revenue. Our experienced team can turn your business vision into a cohesive social persona for your brand.
                Have you ever seen Zomato's / Swiggy's social media Handles ? They have a very strong social media marketing team which makes there content relatable , funny and most Important " Marketable". Being Said that , the most Important part of today's social media marketing is memes and we are the best in buisness when it comes to memes :P .
                We have a very stong media presence in Chattisgarh ( Espicially Durg and Bhilai) with over 50k followers combining our both social media handles (Tag Both ).
                And if are still not sure about the social media marketing , watch our previous projects to build your faith in us and start a Buisness relation with us ! 

                </p>
            </div>
        </div>
    )
}

export default Services;
