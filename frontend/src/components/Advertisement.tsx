import React from "react";
import styled from "styled-components";

const Advertisement = (): JSX.Element => {
	return (
		<AdvertisementWrapper>
			<section className="Advertise container py-2 w-50 mb-3 mx-auto d-flex align-items-center justify-content-center">
				<h1 className="fw-bold text-white">Adverisement</h1>
			</section>
		</AdvertisementWrapper>
	);
};

export default Advertisement;

const AdvertisementWrapper = styled.div`
	.Advertise {
		min-height: 16.375rem;
		background: url("images/Rectangle 27.png") no-repeat;
		background-size: cover;
	}
`;
