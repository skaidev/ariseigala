/* eslint-disable @next/next/no-img-element */
import MagazineLayout from "Layout/MagazineLayout";
import Link from "next/link";
import React, { useState } from "react";
import Tilt from "react-better-tilt";
const Index = (): JSX.Element => {
   const options = {
      scale: 1,
      max: 3,
      reverse: true,
   };
   const [ads, setAds] = useState(true);
   return (
      <MagazineLayout>
         <div>
            <main>
               <section className="bg-dark first-wrapper py-2 text-white">
                  <div className="container mb-2 first-main d-flex flex-column-reverse flex-md-row align-items-md-center">
                     <div className="left">
                        <h1 className="fw-bold mb-3 fs-1 georgia">
                           Lorem ipsum dolor sit amet.
                        </h1>
                        <p className="poppins fs-5 mb-4 p-0 ">
                           Lorem ipsum dolor sit amet, consectetur adipiscing
                           elit. Egestas in vivamus nisi non vivamus etiam
                           tincidunt nec aliquam. Adipiscing purus a tincidunt
                           faucibus felis mattis elementum massa
                        </p>
                        <button className="btn poppins border text-white border-2 px-5 fs-5 d-block py-3">
                           Buy Issue
                        </button>
                     </div>
                     <div className="right">
                        {/* @stormzy22 */}

                        <Tilt {...options}>
                           <img src="/images/book.png" alt="" />
                        </Tilt>
                     </div>
                  </div>
                  <div className="container">
                     <span className="d-block mb-2 text-center ">
                        More issues
                     </span>
                     <i className="d-block text-center fas fa-chevron-down fa-2x fw-bold"></i>
                  </div>
               </section>
               <section className="py-5 ">
                  <div className="container">
                     <h1 className="mb-5 fw-bold">January: New Releases</h1>
                     <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
                        {Card.map((card) => (
                           <div
                              className="col"
                              key={card}
                              data-aos="zoom-in-up"
                           >
                              <Link href="/magazine/single">
                                 <a className="text-decoration-none text-inherit">
                                    <div className="card  border-0 h-100">
                                       <img
                                          src="./images/book.png"
                                          alt=""
                                          className="card-img"
                                       />
                                       <div className="card-body">
                                          <p className="card-title mb-2 fw-bold text-center fs-4">
                                             Issue 60
                                          </p>
                                          <p className="text-center fs-5 georgia">
                                             January 06,2021
                                          </p>
                                       </div>
                                    </div>
                                 </a>
                              </Link>
                           </div>
                        ))}
                     </div>
                  </div>
               </section>
               {ads && (
                  <section className="ads py-4" data-aos="zoom-in-up">
                     <div className="container ads_ position-relative">
                        <i
                           className="fas fa-times-circle fw-light fa-3x position-absolute rounded-circle"
                           onClick={() => {
                              setAds(false);
                           }}
                        ></i>
                        <img src="/images/ads.png" alt="" draggable={false} />
                     </div>
                  </section>
               )}
               <section className="py-5 ">
                  <div className="container">
                     <h1 className="mb-5 fw-bold">February: New Releases</h1>
                     <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
                        {Card.map((card) => (
                           <div
                              className="col"
                              data-aos="zoom-in-up"
                              key={card}
                           >
                              <Link href="/magazine/single">
                                 <a className="text-decoration-none text-inherit">
                                    <div className="card  border-0 h-100">
                                       <img
                                          src="./images/book.png"
                                          alt=""
                                          className="card-img"
                                       />
                                       <div className="card-body">
                                          <p className="card-title mb-2 fw-bold text-center fs-4">
                                             Issue 60
                                          </p>
                                          <p className="text-center fs-5 georgia">
                                             January 06,2021
                                          </p>
                                       </div>
                                    </div>
                                 </a>
                              </Link>
                           </div>
                        ))}
                     </div>
                  </div>
               </section>
               <div className="d-flex mb-5 justify-content-center py-2">
                  <button className="btn border-2 border-dark px-4 fw-bold py-2">
                     Load More
                  </button>
               </div>
            </main>
         </div>
      </MagazineLayout>
   );
};

export default Index;
const Card = [1, 2, 3, 4, 5, 6, 7, 8];
