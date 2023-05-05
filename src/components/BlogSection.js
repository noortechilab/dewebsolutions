import React from "react";
import "./css/BlogSection.css";
import { Row, Col, Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
const BlogSection = () => {
  return (
    <>
      <div className="bg-blog">
        <Container>
          <section class="news-section">
            <div class="container">
              <div class="main-title-box text-center">
                <div class="small-title">News & Blog</div>
                <h2 class="big-title">Our Recent Artciles</h2>
              </div>
              <div class="row">
                {/* <!--Single Blog Start--> */}
                <div
                  class="col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay="0ms"
                >
                  <div class="news-item">
                    <div class="news_box">
                      <div class="newsimg">
                        <img
                          class="img-responsive img-blog"
                          src="https://i.ibb.co/CKNmhMX/blog1.jpg.jpg"
                          alt=""
                        />
                      </div>
                      <div class="news-content">
                        <div class="news_postdate">
                          <span class="span-blog">Jan 03, 2019</span>
                        </div>
                        <a href="#" class="a-blog">
                          <h3>The Future of Digital Marketing</h3>
                        </a>
                        <p className="p-blog">
                          Lorem ipsum dolor sit amet, cons ectet a ur elit.
                          Vestibulum necod ios suspe age a to ndisse cursus mal.
                        </p>
                        <div class="news_authorinfo">
                          <span class="span-blog">
                            <i class="fa fa-user"></i>{" "}
                            <a href="" class="a-blog">
                              Robert Tylor{" "}
                            </a>
                          </span>
                          <span class="span-blog">
                            <i class="fa fa-comment"></i>{" "}
                            <a href="" class="a-blog">
                              Comments: (2)
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!--Single Blog End-->
               <!--Single Blog Start--> */}
                <div
                  class="col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay="400ms"
                >
                  <div class="news-item active">
                    <div class="news_box">
                      <div class="newsimg">
                        <img
                          class="img-responsive img-blog"
                          src="https://i.ibb.co/m5yGbdR/blog2.jpg"
                          alt=""
                        />
                      </div>
                      <div class="news-content">
                        <div class="news_postdate">
                          <span class="span-blog">Nov 05, 2018</span>
                        </div>
                        <a href="#" class="a-blog">
                          <h3>Successful content marketing plan </h3>
                        </a>
                        <p className="p-blog">
                          Lorem ipsum dolor sit amet, cons ectet a ur elit.
                          Vestibulum necod ios suspe age a to ndisse cursus mal.
                        </p>
                        <div class="news_authorinfo">
                          <span class="span-blog">
                            <i class="fa fa-user"></i>{" "}
                            <a href="" class="a-blog">
                              Jessica keri
                            </a>
                          </span>
                          <span class="span-blog">
                            <i class="fa fa-comment"></i>{" "}
                            <a href="" class="a-blog">
                              Comments: (1)
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* {/* <!--Single Blog End--> */}
                <div
                  class="col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay="400ms"
                >
                  <div class="news-item active">
                    <div class="news_box">
                      <div class="newsimg">
                        <img
                          class="img-responsive img-blog"
                          src="https://i.ibb.co/m5yGbdR/blog2.jpg"
                          alt=""
                        />
                      </div>
                      <div class="news-content">
                        <div class="news_postdate">
                          <span class="span-blog">Nov 05, 2018</span>
                        </div>
                        <a href="#" class="a-blog">
                          <h3>Successful content marketing plan </h3>
                        </a>
                        <p className="p-blog">
                          Lorem ipsum dolor sit amet, cons ectet a ur elit.
                          Vestibulum necod ios suspe age a to ndisse cursus mal.
                        </p>
                        <div class="news_authorinfo">
                          <span class="span-blog">
                            <i class="fa fa-user"></i>{" "}
                            <a href="" class="a-blog">
                              Jessica keri
                            </a>
                          </span>
                          <span class="span-blog">
                            <i class="fa fa-comment"></i>{" "}
                            <a href="" class="a-blog">
                              Comments: (1)
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Container>
      </div>
    </>
  );
};

export default BlogSection;
