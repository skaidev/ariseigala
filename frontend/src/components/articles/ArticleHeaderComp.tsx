/* eslint-disable @next/next/no-img-element */
import Logo from "components/logo/Logo";
import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useEffect } from "react";

const ArticleHeader = (): JSX.Element => {
	// const [col, setCol] = useState(false);
	const [minMenu, setMinMenu] = useState(false);
	const { query } = useRouter();
	const category = query?.category;

	useEffect(() => {
		const news = document.getElementById("news");
		if (category === undefined) {
			news.classList.add("active");
		} else if (category === "news") {
			news.classList.add("active");
		} else {
			news.classList.remove("active");
		}
		console.log(news);
	}, [category]);

	return (
		<header className="">
			<div className="container">
				<nav className="navbar border-bottom  border-3" role="navigation">
					<Link href="/">
						<a className="navbar-brand p-0" aria-label="logo">
							<Logo />
						</a>
					</Link>
					<button
						className="btn d-block d-md-none  border border-white"
						onClick={() => setMinMenu((c) => !c)}
						role="button"
						aria-label="open menu"
					>
						<i className="fas fa-bars" aria-hidden="true"></i>
					</button>
					<div className="d-none d-md-flex">
						<List className="d-flex">
							{navitems.map((item) => (
								<li className="nav-item" key={item.id}>
									<Link href={item.link}>
										<a className="nav-link ">{item.txt}</a>
									</Link>
								</li>
							))}
						</List>
					</div>
				</nav>
				{minMenu && (
					<div className="d-block d-md-none">
						<ul className="navbar-nav">
							{navitems.map((item) => (
								<li className="nav-item text-center fs-5" key={item.id}>
									<Link href={item.link}>
										<a className="nav-link ">{item.txt}</a>
									</Link>
								</li>
							))}
						</ul>
					</div>
				)}
				{/* <div className="row py-2 d-block d-lg-flex container mc  mx-auto">
					<div
						className="col d-md-none bg-gradient"
						onClick={() => setCol(!col)}
					>
						<i className="fas d-block fa-caret-square-down fs-2 "></i>
					</div>
					<div className={`col mb-2 mb-lg-0 ${col ? "" : "d-none"} d-md-flex`}>
						News
					</div>
					
				</div> */}
				<CategoryNav className="navbar justify-content-center">
					<ul className="nav">
						{categories.map((cat, i) => (
							<li className="nav-item" key={i}>
								<Link href={`/articles/${cat.link}`}>
									<a
										className={`nav-link ${
											category === cat.link ? "active" : ""
										}`}
										id={cat.link}
									>
										{cat.name}
									</a>
								</Link>
							</li>
						))}
					</ul>
				</CategoryNav>
			</div>
		</header>
	);
};

export default ArticleHeader;

const navitems = [
	{ id: 1, txt: "Television", link: "/tv" },
	{ id: 2, txt: "Magazine", link: "/magazine" },
	{ id: 3, txt: "Subscribe", link: "/subscribe" },
	{ id: 4, txt: "About Us", link: "/about" },
	{ id: 5, txt: "Contact", link: "/contact" },
];

const List = styled.ul`
	list-style: none;
`;

export const categories = [
	{ name: "News", link: "news" },
	{
		name: "Culture and tourism",
		link: "culture-and-tourism",
	},
	{ name: "Entertainment", link: "entertainment" },
	{ name: "Opinion", link: "opinion" },
	{ name: "Politics", link: "politics" },
	{ name: "Business", link: "business" },
	{ name: "Education", link: "education" },
	{ name: "Religion", link: "religion" },
	{ name: "Technology", link: "technology" },
];

const CategoryNav = styled.nav`
	.nav-link {
		&.active {
			font-weight: bold;
			transition: 0.5s ease-in-out;
		}
	}
`;
