/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { IArticles } from "types/articles";
import { articles } from "utils/fakeArticles";

const ArticleNewsComp = (): JSX.Element => {
	return (
		<Wrapper className="section-1 container ">
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
						{articles?.slice(0, 4).map((article, i) => (
							<Card key={i} article={article} />
						))}
						{articles.length > 3 && (
							<div className="text-center my-3">
								<Link href="/articles/news">
									<a className="btn btn-dark">Read more</a>
								</Link>
							</div>
						)}
					</div>
				</div>
			</div>
		</Wrapper>
	);
};

export default ArticleNewsComp;

const Wrapper = styled.section`
	margin-top: 3rem;
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
		<Link href={`/articles/news/${article.id}`}>
			<a className="inner-content text-decoration-none text-inherit">
				<img src={article.image} className="" />
				<div className="">
					<p className="small-head">{article.title}</p>
					<p className="font-14">{article.excerpt}</p>
				</div>
			</a>
		</Link>
	);
};
