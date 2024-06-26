import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css";
// import math from "../assets/Math6.jpg";
// import openBook from "../assets/Bi5.jpg";
// import ips from "../assets/ips5.jpg";
// import pkn from "../assets/pkn5.jpg";
// import ipa from "../assets/ipa8.jpg";
import "../CSS/Homepage.css";

// css Menu mapel ada di homepage.css

const MenuMapel = () => {
  return (
    <Container fluid className="custom-container">
      <Row>
        <div className="mapelBanner"></div>
      </Row>
      <Row className="BarisMapel">
        <div className="container3">
          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={35}
            slidesPerView={"3"}
            autoplay={{
              delay: 4500,
            }}
            pagination={{ clickable: true }}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="mapelMath">
                <div className="pembungkusMath">
                  <Row className="barisPertama">
                    <Col xs={10} className="kolomPertama">
                      <p className="JudulMapel">Matematika</p>
                      <div className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, cum?</div>
                    </Col>
                    <Col className="kolomKedua">
                      <button className="tombolMath">GO</button>
                    </Col>
                  </Row>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="mapelIPA">
                <div className="pembungkusMath">
                  <Row className="barisPertama">
                    <Col xs={10} className="kolomPertama">
                      <p className="JudulMapel">IPA</p>
                      <div className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, cum?</div>
                    </Col>
                    <Col className="kolomKedua">
                      <button className="tombolMath">GO</button>
                    </Col>
                  </Row>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="mapelIPS">
                <div className="pembungkusMath">
                  <Row className="barisPertama">
                    <Col xs={10} className="kolomPertama">
                      <p className="JudulMapel">IPS</p>
                      <div className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, cum?</div>
                    </Col>
                    <Col className="kolomKedua">
                      <button className="tombolMath">GO</button>
                    </Col>
                  </Row>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="mapelBahasa">
                <div className="pembungkusMath">
                  <Row className="barisPertama">
                    <Col xs={10} className="kolomPertama">
                      <p className="JudulMapel">Bahasa Indonesia</p>
                      <div className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, cum?</div>
                    </Col>
                    <Col className="kolomKedua">
                      <button className="tombolMath">GO</button>
                    </Col>
                  </Row>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="mapelPKN">
                <div className="pembungkusMath">
                  <Row className="barisPertama">
                    <Col xs={10} className="kolomPertama">
                      <p className="JudulMapel">PKN</p>
                      <div className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, cum?</div>
                    </Col>
                    <Col className="kolomKedua">
                      <button className="tombolMath">GO</button>
                    </Col>
                  </Row>
                </div>
              </div>
            </SwiperSlide>

            {/* <SwiperSlide>
              <div className="mapel1">
                <div className="gambar">
                  <img src={ipa} alt="" />
                </div>
                <div className="text">
                  <h2>IPA</h2>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate rerum et tempore corrupti dolore saepe.</p>
                </div>
                <div className="buttonGo">
                  <a href="">Start</a>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="mapel1">
                <div className="gambar">
                  <img src={ips} alt="" />
                </div>
                <div className="text">
                  <h2>IPS</h2>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate rerum et tempore corrupti dolore saepe.</p>
                </div>
                <div className="buttonGo">
                  <a href="">Start</a>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="mapel1">
                <div className="gambar">
                  <img src={openBook} alt="" />
                </div>
                <div className="text">
                  <h2>Bahasa Indonesia</h2>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate rerum et tempore corrupti dolore saepe.</p>
                </div>
                <div className="buttonGo">
                  <a href="">Start</a>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="mapel1">
                <div className="gambar">
                  <img src={pkn} alt="" />
                </div>
                <div className="text">
                  <h2>PPKN</h2>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate rerum et tempore corrupti dolore saepe.</p>
                </div>
                <div className="buttonGo">
                  <a href="">Start</a>
                </div>
              </div>
            </SwiperSlide> */}
            {/* Add more SwiperSlides for additional subjects */}
          </Swiper>
        </div>
      </Row>
    </Container>
  );
};

export default MenuMapel;
