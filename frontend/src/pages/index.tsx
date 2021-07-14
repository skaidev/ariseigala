/* eslint-disable @next/next/no-img-element */
import ArticleLayout from "Layout/ArticleLayout";
import styled from "styled-components";

export default function Home(): JSX.Element {
  return (
    <ArticleLayout>
      <MainArticleWrapper className="container">
        <section className="section-1 py-2 w-75 mb-3 mx-auto d-flex align-items-center justify-content-center">
          <h1 className="fw-bold text-white">Adverisement</h1>
        </section>
        <section className="section-2 py-3 mb-4">
          <div className="section-2-container text-justify d-flex flex-column flex-md-row">
            <div className="left text-justify">
              <p>Alhaji Yahaya Bello, recieves man of the year.</p>
              <div
                className="position-relative overflow-hidden"
                style={{ minHeight: "411px" }}
              >
                <img
                  loading="lazy"
                  src="images/Rectangle 4.png"
                  alt=""
                  className="w-100 h-100 position-absolute"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <p className="p-0 lh-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
                pharetra lacinia ut varius phasellus commodo etiam tellus. Risus
                nulla quisque integer aliquam amet, venenatis. Tempor congue
                tempor enim, maecenas arcu. Senectus risus at turpis leo ut
                risus proin. In non habitant sit neque vestibulum pellentesque
                vestibulum placerat luctus. Dui faucibus elit sit rhoncus
                euismod. In nisi suspendisse adipiscing laoreet in. Et, sit
                felis, natoque pellentesque. Convallis id sodales laoreet sem
                nulla fermentum integer nibh ac. Neque, eget nisi, diam integer
                lectus in. Urna, eget morbi massa lacinia pharetra proin nisl,
                nibh phasellus. Risus feugiat et, pellentesque dui egestas purus
                diam in. Pretium pharetra at gravida consequat habitant
                vestibulum. Nulla quam nascetur cursus nulla nisl. Imperdiet
                arcu, odio condimentum bibendum amet quam. Sit sit mi leo, vel.
                In morbi pellentesque ornare.
              </p>
            </div>
            <div className="right">
              <div className="row mb-3 row-cols-1 g-4">
                {num.slice(7).map((e) => (
                  <div className="col" key={e}>
                    <div className="card py-0 d-flex flex-row">
                      <div className="card-img">
                        <img loading="lazy" src="images/Frame 1.png" alt="" />
                      </div>
                      <div className="card-body p-0 ps-1">
                        <p className="card-title fw-bold p-0 fs-5">
                          Lorem ipsum dolor sit amet
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Pretium, volutpat justo consequat gravida proin.
                          Est rutrum risus nisl purus lobortis egestas arcu
                          purus.
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="btn btn-dark mx-auto d-block px-4 py-2">
                Read more
              </button>
            </div>
          </div>
        </section>
        <section className="section-3 py-3 mb-4">
          <div className="d-flex mb-3 align-items-center justify-content-center">
            <div className="line-thin w-25  p-0 bg-dark"></div>
            <h4 className="mx-5 fw-bold fs-1 georgia">Latest</h4>
            <div className="line-thin w-25  bg-dark"></div>
          </div>
          <div className="section-3-container d-flex flex-column flex-md-row">
            <div className="left">
              <div className="row mb-3 row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                {num.slice(7).map((e) => (
                  <div className="col" key={e}>
                    <div className="card border-0">
                      <img
                        loading="lazy"
                        src="images/Frame 1.png"
                        alt=""
                        className="card-img w-100"
                      />
                      <div className="card-body p-0 py-2">
                        <p className="p-0 mb-3">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Tellus dui maecenas bibendum feugiat
                        </p>
                        <div className="line mb-3 bg-warning w-75 pt-1"></div>
                        <span className="d-inline-block">By Sola Oyebanji</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="btn btn-dark d-block mx-auto px-4 py-2">
                Go to magazine
              </button>
            </div>
            <div className="right">
              <p className="p-0 fw-bold fs-1">Advertisement</p>
            </div>
          </div>
        </section>
        <section className="section-4 py-3 mb-4">
          <div className="d-flex mb-4 align-items-center justify-content-center">
            <div className="line-thin w-25  p-0 bg-dark"></div>
            <h4 className="mx-5 fw-bold fs-1 georgia">Entertainment</h4>
            <div className="line-thin w-25  bg-dark"></div>
          </div>
          <div className="section-4-container d-flex flex-column flex-md-row">
            <div className="left overflow-hidden">
              <div className="img">
                <img loading="lazy" src="images/Rectangle 19.png" alt="" />
              </div>
              <p className="georgia fs-2 p-0 fw-bold">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="right">
              {num.slice(7).map((e) => (
                <div
                  className="entertainment-card mb-3 d-flex flex-column flex-md-row"
                  key={e}
                >
                  <div className="entertainment-card-left">
                    <img loading="lazy" src="images/Rectangle 20.png" alt="" />
                  </div>
                  <div className="entertainment-card-right">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Luctus ornare arcu dui lacus.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </MainArticleWrapper>
    </ArticleLayout>
  );
}

const MainArticleWrapper = styled.div`
  .section-1 {
    min-height: 16.375rem;
    background: red;
  }
  .section-2 {
    &-container {
      gap: 3rem;
      .left {
        flex: 0.6;
      }
      .right {
        flex: 0.4;
      }
    }
  }
  .section-3 {
    &-container {
      gap: 3rem;
      .left {
        flex: 0.75;
      }
      .right {
        flex: 0.25;
        min-height: 35.125rem;
        position: relative;
        background: red;
        overflow: hidden;
        background: url("images/Rectangle 16.png") no-repeat;
        background-size: cover;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        word-break: break-all;
      }
    }
  }
  .section-4 {
    &-container {
      gap: 3rem;
      .left {
        flex: 0.5;
        .img {
          min-height: 40rem;
          position: relative;
          overflow: hidden;
          img {
            position: absolute;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }
      .right {
        flex: 0.5;
        gap: 1rem;
        .entertainment-card {
          gap: 1rem;
          &-left {
            flex: 0.5;
            min-height: 13rem;
            position: relative;
            overflow: hidden;
            img {
              position: absolute;
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
          &-right {
            flex: 0.5;
          }
        }
      }
    }
  }
`;

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
