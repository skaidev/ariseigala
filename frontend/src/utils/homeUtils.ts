import { gql } from "@apollo/client";
import { apollo } from "apollo";
import { GET_ARTICLES_BY_CATEGORY } from "apollo/queries/articleQuery";
import { IArticle, IMage } from "types/interface";

const GET_CULTURE_COVER = gql`
	{
		cultureAndTourism {
			title
			description
			image {
				url
			}
		}
	}
`;

const GET_MAGAZINE_COVER = gql`
	{
		magazineCover {
			cover {
				url
			}
			issue
			description
		}
	}
`;

const GET_ENTERTAINMENT_COVER = gql`
	{
		entertainmentCover {
			image {
				url
			}
			title
		}
	}
`;

const GET_EDUCATION_COVER = gql`
	{
		educationCover {
			image {
				url
			}
		}
	}
`;

// const GET_ARTICLES_BY_CATEGORY = gql`
// 	query ArticlesByCategory($slug: String) {
// 		articles(where: { category: { slug: $slug } }, limit: 5) {
// 			title
// 			slug
// 			image
// 			category {
// 				slug
// 			}
// 		}
// 	}
// `;

export enum CatEnum {
	News = "news",
	Culture = "culture-and-tourism",
	Entertainment = "entertainment",
	Education = "education",
}

const getCategory = async (cat: CatEnum) => {
	try {
		const { data } = await apollo.query({
			query: GET_ARTICLES_BY_CATEGORY,
			variables: { slug: cat },
		});
		const articles = data.articles;

		return articles;
	} catch (error) {
		console.log(error);
		return null;
	}
};

export const getNewsCover = async (): Promise<{
	articles: IArticle[] | null;
}> => {
	try {
		return {
			articles: await getCategory(CatEnum.News),
		};
	} catch (error) {
		console.log(error);
		return {
			articles: null,
		};
	}
};

export const getEducationCover = async (): Promise<{
	articles: IArticle[] | null;
	cover: EducationCover | null;
}> => {
	try {
		const { data } = await apollo.query({
			query: GET_EDUCATION_COVER,
		});

		return {
			cover: data?.educationCover,
			articles: await getCategory(CatEnum.Education),
		};
	} catch (error) {
		console.log(error);
		return {
			cover: null,
			articles: null,
		};
	}
};

export const getEntertainmentCover = async (): Promise<{
	articles: IArticle[] | null;
	cover: EntertainmentCover | null;
}> => {
	try {
		const { data } = await apollo.query({
			query: GET_ENTERTAINMENT_COVER,
		});

		return {
			cover: data?.entertainmentCover,
			articles: await getCategory(CatEnum.Entertainment),
		};
	} catch (error) {
		console.log(error);
		return {
			cover: null,
			articles: null,
		};
	}
};
export const getMagazineCover = async (): Promise<{
	articles: IArticle[] | null;
	cover: MagazineCover | null;
}> => {
	try {
		const { data } = await apollo.query({
			query: GET_MAGAZINE_COVER,
		});

		return {
			cover: data?.magazineCover,
			articles: null,
		};
	} catch (error) {
		console.log(error);
		return {
			cover: null,
			articles: null,
		};
	}
};

export const getCultureCover = async (): Promise<{
	articles: IArticle[] | null;
	cover: CultureCover | null;
}> => {
	try {
		const { data } = await apollo.query({
			query: GET_CULTURE_COVER,
		});
		return {
			cover: data?.cultureAndTourism,
			articles: await getCategory(CatEnum.Culture),
		};
	} catch (error) {
		console.log(error);
		return {
			cover: null,
			articles: null,
		};
	}
};

export interface NewsCover {
	title: string;
	image: IMage;
	id: string;
}
export interface MagazineCover {
	issue: string;
	cover: IMage;
	description: string;
}

export interface EntertainmentCover {
	title: string;
	image: IMage;
	id: string;
}

export interface EducationCover {
	image: IMage;
	id: string;
}

export interface CultureCover {
	title: string;
	image: IMage;
	description: string;
}
