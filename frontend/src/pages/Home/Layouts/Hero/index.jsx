import React from 'react'
import { HeroContainer } from './style'
import heroImg from "./../../../../assets/images/hero-img.png";

const Hero = () => {
    return (
        <HeroContainer>
            {/* <div className="container"> */}
                <div className="row">
                    <div className="col-3" style={{backgroundColor:"#384aeb", height:"675px", width:"600px"}}></div>
                    <div className="col-3">
                        <img src={heroImg} alt="heroImg" />
                    </div>
                    <div className="col-6">
                        <h4>Shop is fun</h4>
                        <h1>BROWSE OUR <br /> PREMIUM PRODUCT</h1>
                        <p>Us which over of signs divide dominion deep fill bring they're meat beho upon own earth without morning over third. Their male dry. They are great appear whose land fly grass.</p>
                        <button>Browse Now</button>
                    </div>
                </div>
            {/* </div> */}
        </HeroContainer>
    )
}

export default Hero