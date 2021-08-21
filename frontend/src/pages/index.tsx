/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
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
import { Fragment, useState } from "react";
import styled from "styled-components";

export default function Home(): JSX.Element {
	const [show, setShow] = useState(Boolean(!Cookies.get("consent")));

	const handleHide = () => {
		Cookies.set("consent", "true");
		setShow(false);
	};
	return (
		<Fragment>
			<ChoiceModalComp show={show} onHide={handleHide} />
			<ArticleLayout>
				<Wrapper className="article-home">
					<Advertisement />
					<ArticleNewsComp />
					<div className="line bg-warning my-5 container"></div>
					<MagazinAd />
					<EntertainmentComp />
					<EducationComp />
					<CultureComp />
					<SubscribeComp />
					<div className="my-5">
						<AdvertisementLandScape />
					</div>
				</Wrapper>
			</ArticleLayout>
		</Fragment>
	);
}

const Wrapper = styled.div``;
