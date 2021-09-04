/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { EducationCover } from "utils/homeUtils";
import TitleComp from "../TitleComp";

const EducationComp = ({ cover }: { cover: EducationCover }): JSX.Element => {
	return (
		<Wrapper className="container">
			<TitleComp title="Education" />
			<Link href="/articles/education">
				<a className="text-inherit text-decoration-none">
					<img
						src={cover?.image?.url}
						alt="Education"
						className="banner-image"
					/>
				</a>
			</Link>

			{/* <div className="mt-5">
				<div className="row">
					{articles.slice(0, 3).map((article, i) => (
						<div className="col-md-4" key={i}>
							<PostPreviewComp article={article} />
						</div>
					))}
				</div>
			</div>

			<div className="my-4 text-center">
				<button className="btn btn-outline-dark fw-bold">Load More</button>
			</div> */}
		</Wrapper>
	);
};

export default EducationComp;
const Wrapper = styled.section`
	.banner-image {
		width: 100%;
		max-height: 45.8rem;
		object-fit: cover;
	}
`;
