/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Advertisement from "components/Advertisement";
import ArticleRightView from "components/articles/ArticleRightView";

import ArticleLayout from "Layout/ArticleLayout";
import { Fragment } from "react";
import styled from "styled-components";
import { articles } from "utils/fakeArticles";
import Image from "next/image";
import TitleComp from "components/articles/TitleComp";
import PostPreviewComp from "components/articles/PostPreviewComp";
import SectionOneComp from "components/articles/home/SectionOneComp";
import EntertainmentComp from "components/articles/home/EntertainmentComp";
import CultureComp from "components/articles/home/CultureComp";
import EducationComp from "components/articles/home/EducationComp";
import SubscribeComp from "components/articles/home/SubscribeComp";

export default function Home(): JSX.Element {
	return (
		<Fragment>
			<ArticleLayout>
				<Wrapper className="article-home">
					<Advertisement />
					<SectionOneComp />
					<section className="section-2">
						<TitleComp title="latest" />
						<div className="container">
							<div className="flex-inner d-md-flex justify-content-between gap-2">
								<div className="left">
									<div className="row">
										{articles?.slice(0, 3).map((article, i) => (
											<div className="col-md-4" key={i}>
												<PostPreviewComp article={article} />
											</div>
										))}
									</div>

									<div className="my-3 text-center">
										<button className="btn btn-dark">Go to magazine</button>
									</div>
								</div>
								<div className="right">
									<div className="advert straight ">
										<h1>hi</h1>
									</div>
								</div>
							</div>
						</div>
					</section>
					<EntertainmentComp articles={articles} />
					<CultureComp />
					<EducationComp />
					<SubscribeComp />
				</Wrapper>
			</ArticleLayout>
		</Fragment>
	);
}

const Wrapper = styled.div``;
