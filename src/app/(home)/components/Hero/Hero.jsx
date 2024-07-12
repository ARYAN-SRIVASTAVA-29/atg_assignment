import Form from "../Form/Form";
import "./Hero.css"

export default function Hero() {
    return (
     <>
     <div className="hero-parent">
        <div className="container">

            <div className="hero">
                <div className="h-cnt">

                    <div className="h-cnt-txt">
                        <div className="h-cnt-1">
                        Explore your <span className="hb">hobby</span> or <span className="ps">passion</span>
                        </div>
                        <div className="h-cnt-2">
                            <div className="h-cnt-2-a">
                        Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities… 
                        </div>
                         <div className="h-cnt-2-b">
                         If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products,  services or events.  Hop on your hobbyhorse and enjoy the ride.
                         </div>
                        </div>
                        <div className="h-cnt-3">
                            <div className="h-i i-1">
                                <img src="../hero-1.png" />
                            </div>
                            <div className="h-i i-2">
                                <img src="../hero-2.png"/>
                            </div>
                        </div>
                    </div>

                     <div className="h-cnt-signIn">
                        <Form/>
                     </div>

                </div>
            </div>

        </div>
     </div>
     </>
    );
  }
  