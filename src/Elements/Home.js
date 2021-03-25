import React from 'react';
import '../Elements/Home.css';


function Home() {
    return (
       <div className="main_home"> 
           <div className="home_container">
           </div>
           <div className="greet">
                <h2>Our Greetings</h2>
           </div>
            <div className="write">
               <div ><p>The scariest moment is always just before you
               start , Let us be the one to worry about that.</p> </div>
            </div>  

            <div className="serach">
                <p>We are no Einstein of media marketing, but we sure are passionate
                    about what we do , we asure you 110% dedication specially 
                    because we at early stage of becoming someone from no-one.
                </p>
                </div> 
               
                <div className="secure">
                    <p>We understand if you are still confused whether to trust 
                        bunch of student , as mentioned above we have a goal and we are passionate about 
                        achiving it by hook or crook.
                    </p>
                </div>
        </div>
    )
}

export default Home;