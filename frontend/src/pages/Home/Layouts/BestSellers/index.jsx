import React from 'react'
import { Container } from './style'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./style.css";
import { Navigation } from "swiper";
import { CardContainer } from '../../../../components/Card/style';
import product1 from "../../../../assets/images/product1.png"


const BestSellers = () => {
    return (
        <Container>
            <p>Popular Item in the market</p>
            <h2>Best Sellers</h2>
            <div className="container d-flex jutify-content-between">
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    navigation={true}
                    modules={[ Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <CardContainer>
                            <div className="MyCard">
                                <div className="card-img">
                                    <img src={product1} alt="product1" />
                                </div>
                                <div className="card-desc">
                                    <p>Accessories</p>
                                    <h4>Quartz Belt Watch</h4>
                                    <h5>$150.00</h5>
                                </div>
                            </div>
                        </CardContainer>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardContainer>
                            <div className="MyCard">
                                <div className="card-img">
                                    <img src={product1} alt="product1" />
                                </div>
                                <div className="card-desc">
                                    <p>Accessories</p>
                                    <h4>Quartz Belt Watch</h4>
                                    <h5>$150.00</h5>
                                </div>
                            </div>
                        </CardContainer>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardContainer>
                            <div className="MyCard">
                                <div className="card-img">
                                    <img src={product1} alt="product1" />
                                </div>
                                <div className="card-desc">
                                    <p>Accessories</p>
                                    <h4>Quartz Belt Watch</h4>
                                    <h5>$150.00</h5>
                                </div>
                            </div>
                        </CardContainer>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardContainer>
                            <div className="MyCard">
                                <div className="card-img">
                                    <img src={product1} alt="product1" />
                                </div>
                                <div className="card-desc">
                                    <p>Accessories</p>
                                    <h4>Quartz Belt Watch</h4>
                                    <h5>$150.00</h5>
                                </div>
                            </div>
                        </CardContainer>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardContainer>
                            <div className="MyCard">
                                <div className="card-img">
                                    <img src={product1} alt="product1" />
                                </div>
                                <div className="card-desc">
                                    <p>Accessories</p>
                                    <h4>Quartz Belt Watch</h4>
                                    <h5>$150.00</h5>
                                </div>
                            </div>
                        </CardContainer>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardContainer>
                            <div className="MyCard">
                                <div className="card-img">
                                    <img src={product1} alt="product1" />
                                </div>
                                <div className="card-desc">
                                    <p>Accessories</p>
                                    <h4>Quartz Belt Watch</h4>
                                    <h5>$150.00</h5>
                                </div>
                            </div>
                        </CardContainer>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardContainer>
                            <div className="MyCard">
                                <div className="card-img">
                                    <img src={product1} alt="product1" />
                                </div>
                                <div className="card-desc">
                                    <p>Accessories</p>
                                    <h4>Quartz Belt Watch</h4>
                                    <h5>$150.00</h5>
                                </div>
                            </div>
                        </CardContainer>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardContainer>
                            <div className="MyCard">
                                <div className="card-img">
                                    <img src={product1} alt="product1" />
                                </div>
                                <div className="card-desc">
                                    <p>Accessories</p>
                                    <h4>Quartz Belt Watch</h4>
                                    <h5>$150.00</h5>
                                </div>
                            </div>
                        </CardContainer>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardContainer>
                            <div className="MyCard">
                                <div className="card-img">
                                    <img src={product1} alt="product1" />
                                </div>
                                <div className="card-desc">
                                    <p>Accessories</p>
                                    <h4>Quartz Belt Watch</h4>
                                    <h5>$150.00</h5>
                                </div>
                            </div>
                        </CardContainer>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardContainer>
                            <div className="MyCard">
                                <div className="card-img">
                                    <img src={product1} alt="product1" />
                                </div>
                                <div className="card-desc">
                                    <p>Accessories</p>
                                    <h4>Quartz Belt Watch</h4>
                                    <h5>$150.00</h5>
                                </div>
                            </div>
                        </CardContainer>
                    </SwiperSlide>
                </Swiper>
            </div>
        </Container>
    )
}

export default BestSellers