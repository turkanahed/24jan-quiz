import React from 'react'
import { Container } from './style'
import blog1 from "../../../../assets/images/blog1.png"
import blog2 from "../../../../assets/images/blog2.png"
import blog3 from "../../../../assets/images/blog3.png"
import { TfiCommentsSmiley } from "react-icons/tfi";
import { MdArrowForward } from "react-icons/md";

const News = () => {
  return (
    <Container>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <p>Popular Item in the market</p>
            <h2>Latest News</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <div className="img-wrapper">
              <img src={blog1} alt="blog1" />
            </div>
            <div className="card-desc">
              <ul>
                <li>By Admin</li>
                <li><TfiCommentsSmiley />2 Comments</li>
              </ul>
              <a href="/">The Richland Center Shooping News and weekly shooper</a>
              <p>Let one fifth i bring fly to divided face for bearing divide unto seed. Winged divided light Forth.</p>
              <a href="/">Read More <MdArrowForward /></a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default News