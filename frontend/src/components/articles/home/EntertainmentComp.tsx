/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled from "styled-components";
import { IArticles } from "types/articles";
import TitleComp from "../TitleComp";

const EntertainmentComp = ({
	articles,
}: {
	articles: IArticles[];
}): JSX.Element => {
	return (
		<Wrapper className="section-3 container">
			<TitleComp title="Entertainment" />
			<div className="home-section-flex-wrapper d-md-flex">
				<div className="left">
					<div className="inner">
						<img src="/images/Rectangle 19.png" alt="" />
						<p className="big-head fs-3 mt-3">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
						</p>
					</div>
				</div>
				<div className="right">
					<div className="inner">
						{articles?.slice(0, 5).map((article, i) => (
							<Card key={i} article={article} />
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

export default EntertainmentComp;

const Wrapper = styled.section`
	.home-section-flex-wrapper {
		gap: 2.5rem;
		.left {
			flex: 1;
			img {
				width: 100%;
				/* max-height: 411px; */
				/* object-fit: cover; */
			}
		}
		.right {
			width: 100%;
			max-width: 18rem;
			display: none;
			.inner {
				.inner-content {
					gap: 0.5rem;
					img {
						border-radius: 1rem;
						width: 100%;
						height: 100%;
						object-fit: contain;
					}
				}
			}
			@media screen and (min-width: 999px) {
				max-width: 27rem;
				display: block;
				.inner-content {
					display: grid;
					grid-template-columns: 40% 60%;
					margin-bottom: 1rem;
				}
				@media screen and (max-width: 1199px) {
					max-width: 18rem;
					.inner-content {
						display: grid;
						grid-template-columns: 1fr;
						margin-bottom: 0;
						.small-head {
							text-align: center;
						}
					}
				}
			}
		}
	}
`;

const Card = ({ article }: { article: IArticles }) => {
	return (
		<div className="inner-content mb-4">
			<img src={article.image} className="" />
			<div className="">
				<p className="small-head">{article.title}</p>
				<p className="font-14">{article.excerpt}</p>
			</div>
		</div>
	);
};
