/* eslint-disable @next/next/no-img-element */
import React from "react";

const LoaderComp = (): JSX.Element => {
	return (
		<div
			className="d-flex align-items-center justify-content-center"
			style={{ height: "100vh" }}
		>
			<div>
				<img src="/images/loader.svg" alt="loader" />
				<p className="text-center">Getting ready...</p>
			</div>
		</div>
	);
};

export default LoaderComp;
