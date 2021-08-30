/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useQuery } from "@apollo/client";
import { GET_ARTICLES_BY_CATEGORY } from "apollo/queries/articleQuery";
import { ArticlesAtom } from "atoms/ArticlesAtom";
import {
	default as Advertisement,
	default as AdvertisementLandScape,
} from "components/Advertisement";
import ArticleNewsComp from "components/articles/home/ArticleNewsComp";
import CultureComp from "components/articles/home/CultureComp";
import EducationComp from "components/articles/home/EducationComp";
import EntertainmentComp from "components/articles/home/EntertainmentComp";
import MagazinAd from "components/articles/home/MagazinAd";
import SubscribeComp from "components/articles/home/SubscribeComp";
import ChoiceModalComp from "components/ChoiceModal";
import Cookies from "js-cookie";
import ArticleLayout from "Layout/ArticleLayout";
import { NextPage } from "next";
import { Fragment, useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { IArticle } from "types/interface";
import {
	CultureCover,
	EducationCover,
	EntertainmentCover,
	getCultureCover,
	getEducationCover,
	getEntertainmentCover,
	getMagazineCover,
	getNewsCover,
	MagazineCover,
	NewsCover,
} from "utils/homeUtils";

interface IProps {
	news: {
		articles: IArticle[] | null;
		cover: NewsCover | null;
	} | null;
	magazine: {
		cover: MagazineCover | null;
		articles: IArticle[] | null;
	} | null;
	entertainment: {
		cover: EntertainmentCover | null;
		articles: IArticle[] | null;
	} | null;
	education: {
		cover: EducationCover | null;
		articles: IArticle[] | null;
	} | null;
	culture: {
		cover: CultureCover | null;
		articles: IArticle[] | null;
	} | null;
}

const Home: NextPage<IProps> = ({
	news,
	magazine,
	entertainment,
	education,
	culture,
}): JSX.Element => {
	const [show, setShow] = useState(Boolean(!Cookies.get("consent")));
	const setArticles = useSetRecoilState(ArticlesAtom);

	useQuery(GET_ARTICLES_BY_CATEGORY, {
		variables: { slug: "culture-and-tourism" },
		onCompleted: (data) => console.log(data),
		onError: (err) => console.log(err),
	});

	const handleHide = () => {
		Cookies.set("consent", "true");
		setShow(false);
	};

	useEffect(() => {
		if (news?.articles?.length) {
			setArticles(news?.articles);
		}
	}, []);

	if (!news)
		return (
			<div
				className="d-flex align-items-center justify-content-center"
				style={{ height: "100vh" }}
			>
				<div>
					<img src="/images/loader.svg" />
					<p className="text-center">Getting ready...</p>
				</div>
			</div>
		);
	return (
		<Fragment>
			<ChoiceModalComp show={show} onHide={handleHide} />
			<ArticleLayout>
				<Wrapper className="article-home">
					<Advertisement />
					<ArticleNewsComp
						cover={news?.cover}
						articles={news?.articles as IArticle[]}
					/>
					<div className="line bg-warning my-5 container"></div>
					<MagazinAd cover={magazine?.cover} />
					<EntertainmentComp
						cover={entertainment?.cover}
						articles={entertainment?.articles as IArticle[]}
					/>
					<EducationComp cover={education?.cover as EducationCover} />
					<CultureComp
						cover={culture?.cover as CultureCover}
						articles={culture?.articles as IArticle[]}
					/>
					<SubscribeComp />
					<div className="my-5">
						<AdvertisementLandScape />
					</div>
				</Wrapper>
			</ArticleLayout>
		</Fragment>
	);
};

const Wrapper = styled.div``;

export default Home;

export const getStaticProps = async (): Promise<{
	props: IProps;
}> => {
	try {
		const news = await getNewsCover();
		const entertainment = await getEntertainmentCover();
		const education = await getEducationCover();
		const culture = await getCultureCover();
		const magazine = await getMagazineCover();
		return {
			props: {
				news,
				entertainment,
				education,
				culture,
				magazine,
			},
		};
	} catch (error) {
		console.log(error);
		return {
			props: {
				news: null,
				entertainment: null,
				education: null,
				culture: null,
				magazine: null,
			},
		};
	}
};
