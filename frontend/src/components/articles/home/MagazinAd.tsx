/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled from "styled-components";

const MagazinAd = (): JSX.Element => {
	return (
		<Wrapper>
			<div className="container">
				<div className="top">
					<div className="flex-wrapper d-md-flex">
						<div className="left ">
							<div className="inner">
								<img src="/images/book.png" alt="" />
							</div>
						</div>
						<div className="right">
							<div className="inner container">
								<p className="fs-2 fw-bold">Arise Igala magazine</p>
								<p className="fs-2 fw-bold">Issue 45</p>

								<p className="serif py-3">
									Sapien sit morbi vitae nec et. Interdum etiam in morbi id
									interdum enim sit fermentum. Blandit massa lectus lacus turpis
									platea et. Accumsan aliquam at ipsum consectetur. Leo eget
									aenean dolor eget augue dignissim et consectetur massa. Ut
									velit tristique nunc diam habitasse.
								</p>
								<button className="btn btn-dark">Go to magazine</button>
							</div>
						</div>
					</div>
				</div>
				<div className="bottom"></div>
			</div>
		</Wrapper>
	);
};

export default MagazinAd;

const Wrapper = styled.div`
	background: #cbcbcb;
	min-height: 90vh;
	.top {
		padding-top: 1.5rem;
		.left {
			width: 25rem;
			background: #000;
			padding: 1rem 0;
			text-align: center;
			img {
				width: 100%;
				max-width: 15rem;
			}
		}
		.right {
			background-color: #fff;
			display: flex;
			align-items: center;
			flex: 1;
			.inner {
				text-align: center;
				padding: 0 1rem;
				/* width: 100%; */
			}
		}
	}
`;

// const Card = () => {
//     return (
//         <div className="magazinead-card">
//             <div className="inner">
//                 <img src="" alt="" />
//             </div>
//         </div>
//     )
// }
