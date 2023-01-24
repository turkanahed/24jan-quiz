import React from 'react'
import { Container } from './style'
import parallax from "./../../../../assets/images/parallax-bg.png"

const Shopping = () => {
    return (
        <Container>
            <div className="img-wrapper">
                <img src={parallax} alt="parallax" />
            </div>
            <div className="content">
                <h3>Up To 50% Off</h3>
                <h4>Winter Sale</h4>
                <p>Him she'd let them sixth saw light</p>
                <button>Shop Now</button>
            </div>
        </Container>
    )
}

export default Shopping