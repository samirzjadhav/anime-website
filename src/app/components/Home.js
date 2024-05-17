import React from "react";

const home = () => {
  return (
    <div>
      <section className="home" id="home">
        <div className="swiper home-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div
                className="box "
                style={{ background: "url(./home-img-1.jpg) no-repeat" }}
              >
                <div className="content">
                  <h3>Kakegurui</h3>
                  <p>
                    High roller Yumeko Jabami plans to clean house at Hyakkaou
                    Private
                    <br />
                    Academy, a school where students are evaluated solely on
                    their
                    <br />
                    gambling skills.
                  </p>
                  <a href="#" className="btn">
                    Download
                  </a>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div
                className="box second"
                style={{ background: "url(./home-img-1.jpg)  no-repeat" }}
              >
                <div className="content">
                  <h3>DEATH NOTE</h3>
                  <p>
                    When a Japanese high schooler comes into possession of a
                    mystical
                    <br />
                    notebook, he finds he has the power to kill anybody whose
                    name he
                    <br />
                    enters in it.
                  </p>
                  <a href="#" className="btn">
                    Download
                  </a>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div
                className="box "
                style={{ background: "url(./home-img-1.jpg)  no-repeat" }}
              >
                <div className="content">
                  <h3>One-Punch Man</h3>
                  <p>
                    The most powerful superhero in the world can kill anyone
                    with one
                    <br />
                    blow. But nothing can challenge him, so he struggles with
                    ennui and
                    <br />
                    depression
                  </p>
                  <a href="#" className="btn">
                    Download
                  </a>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div
                className="box "
                style={{ background: "url(./home-img-1.jpg)  no-repeat" }}
              >
                <div className="content">
                  <h3>Naruto</h3>
                  <p>
                    Guided by the spirit demon within him, orphaned Naruto
                    learns
                    <br />
                    to harness his powers as a ninja in this anime adventure
                    series.
                  </p>
                  <a href="#" className="btn">
                    Download
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default home;
