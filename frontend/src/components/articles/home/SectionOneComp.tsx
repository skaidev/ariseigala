/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled from "styled-components";
import { articles } from "utils/fakeArticles";

const SectionOneComp = (): JSX.Element => {
	return (
		<Wrapper className="section-1 container">
			<div className="d-md-flex home-section-flex-wrapper">
				<div className="left">
					<p className="big-head">
						Alhaji Yahaya Bello, recieves man of the year.
					</p>
					<img src="/images/img1.png" className="left-big-image" />
					<div className="text-justify my-2">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
						pharetra lacinia ut varius phasellus commodo etiam tellus. Risus
						nulla quisque integer aliquam amet, venenatis. Tempor congue tempor
						enim, maecenas arcu. Senectus risus at turpis leo ut risus proin. In
						non habitant sit neque vestibulum pellentesque vestibulum placerat
						luctus. Dui faucibus elit sit rhoncus euismod. In nisi suspendisse
						adipiscing laoreet in. Et, sit felis, natoque pellentesque.
						Convallis id sodales laoreet sem nulla fermentum integer nibh ac.
						Neque, eget nisi, diam integer lectus in. Urna, eget morbi massa
						lacinia pharetra proin nisl, nibh phasellus. Risus feugiat et,
						pellentesque dui egestas purus diam in. Pretium pharetra at gravida
						consequat habitant vestibulum. Nulla quam nascetur cursus nulla
						nisl. Imperdiet arcu, odio condimentum bibendum amet quam. Sit sit
						mi leo, vel. In morbi pellentesque ornare.
					</div>
				</div>
				<div className="right">
					<div className="inner">
						{articles?.slice(0, 3).map((article, i) => (
							<div className="inner-content mb-2" key={i}>
								<img src="/images/img1.png" className="" />
								<div className="">
									<p className="small-head">Lorem ipsum dolor sit amet</p>
									<p className="font-14">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Pretium, volutpat justo consequat gravida proin. Est rutrum
										risus nisl purus lobortis egestas arcu purus.
									</p>
								</div>
							</div>
						))}
						{articles.length > 3 && (
							<div className="text-center my-3">
								<button className="btn btn-dark">Read more</button>
							</div>
						)}
					</div>
				</div>
			</div>
		</Wrapper>
	);
};

export default SectionOneComp;

const Wrapper = styled.section`
	.home-section-flex-wrapper {
		gap: 2.5rem;
		.left {
			flex: 1;
			&-big-image {
				width: 100%;
				max-height: 411px;
				/* object-fit: cover; */
			}
		}
		.right {
			width: 100%;
			max-width: 28rem;

			.inner {
				.inner-content {
					display: grid;
					gap: 0.5rem;
					img {
						border-radius: 1rem;
						width: 100%;
						height: 100%;
					}
				}
			}
			@media screen and (min-width: 999px) {
				/* display: grid; */
				max-width: 30rem;
				.inner-content {
					grid-template-columns: 40% 60%;
				}
			}
			@media screen and (max-width: 768px) {
				display: none;
			}
		}
	}
`;
