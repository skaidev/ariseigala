import { useRouter } from "next/router";
import React from "react";

const SingleArticle = (): JSX.Element => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const { query } = useRouter();
	console.log(query);
	return (
		<div>
			<h1>Single Article</h1>
		</div>
	);
};

export default SingleArticle;
