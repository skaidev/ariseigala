/* eslint-disable @next/next/no-img-element */
import { useQuery } from "@apollo/client";
import { GET_ADS_1 } from "apollo/queries/articleQuery";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const AdvertisementLandScape = (): JSX.Element => {
	const [images, setImages] = useState([]);
	const [image, setImage] = useState("");
	const [count, setCount] = useState(0);

	useQuery(GET_ADS_1, {
		onCompleted: (data) => {
			const newData = data?.ads1s.map(
				(d: { image: { url: string } }) => d.image?.url,
			);
			setImages(newData);
		},
		onError: (err) => console.log(err),
	});

	useEffect(() => {
		const interval = setInterval(() => {
			setImage(images[count]);
			console.log(count, images.length);
			if (images.length - 1 > count) {
				setCount(count + 1);
			} else {
				setCount(0);
			}
		}, 10000);
		return () => clearInterval(interval);
	});
	// console.log(currentImage);
	return (
		<AdvertisementWrapper>
			<section className="container ">
				{image && <img src={image} alt="ads" className="ads landscape" />}
			</section>
		</AdvertisementWrapper>
	);
};

export default AdvertisementLandScape;

const AdvertisementWrapper = styled.div`
	section {
		max-height: 15rem;
		width: 100%;
		/* min-height: 16rem; */
		/* position: relative; */
		img {
			width: 100%;
			/* position: absolute; */
		}
	}
`;

export const AdvertisementPortrait = (): JSX.Element => {
	return (
		<AdvertisementPortraitWrapper className="container">
			<img src="/images/ads-2.png" alt="ads" className="ads portraite" />
		</AdvertisementPortraitWrapper>
	);
};

const AdvertisementPortraitWrapper = styled.div`
	width: 100%;
	max-width: 13rem;
	height: inherit;
`;
