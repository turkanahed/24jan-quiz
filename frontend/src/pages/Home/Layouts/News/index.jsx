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
        <p>Popular Item in the market</p>
        <h2>Latest News</h2>
        <div className="row">
          <div className="col-4 pt-5">
            <div className="img-wrapper">
              <img src={blog1} alt="blog1" />
            </div>
            <div className="card-desc">
              <ul>
                <li>By Admin</li>
                <li><TfiCommentsSmiley /> 2 Comments</li>
              </ul>
              <a href="/">The Richland Center Shooping News and weekly shooper</a>
              <p>Let one fifth i bring fly to divided face for bearing divide unto seed. Winged divided light Forth.</p>
              <button><a href="/">Read More <MdArrowForward /></a></button>
            </div>
          </div>
          <div className="col-4 pt-5">
            <div className="img-wrapper">
              <img src={blog2} alt="blog2" />
            </div>
            <div className="card-desc">
              <ul>
                <li>By Admin</li>
                <li><TfiCommentsSmiley /> 2 Comments</li>
              </ul>
              <a href="/">The Shopping News also offers top-quality printing services</a>
              <p>Let one fifth i bring fly to divided face for bearing divide unto seed. Winged divided light Forth.</p>
              <button><a href="/">Read More <MdArrowForward /></a></button>
            </div>
          </div>
          <div className="col-4 pt-5">
            <div className="img-wrapper">
              <img src={blog3} alt="blog3" />
            </div>
            <div className="card-desc">
              <ul>
                <li>By Admin</li>
                <li><TfiCommentsSmiley /> 2 Comments</li>
              </ul>
              <a href="/">Professional design staff and efficient equipment you'll find we offer</a>
              <p>Let one fifth i bring fly to divided face for bearing divide unto seed. Winged divided light Forth.</p>
              <button><a href="/">Read More <MdArrowForward /></a></button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default News