import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import  Publication from "../components/publications/publication";

import INFO from "../data/user";
import SEO from "../data/seo";
import myPublications from "../data/publications";

import "./styles/publications.css";

const Publications = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "publications");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Articles | ${INFO.main.title}`}</title>
				{/* <meta name="description" content={currentSEO.description} /> */}
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="publications" />
				<div className="content-wrapper">
					<div className="articles-logo-container">
						<div className="articles-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="articles-main-container">
						<div className="title articles-title">
							{INFO.publications.title}
						</div>
{/* 
						<div className="subtitle articles-subtitle">
							{INFO.publications.description}
						</div> */}

						<div className="articles-container">
							<div className="articles-wrapper">
								{myPublications.map((article, index) => (
									<div
										className="articles-article"
										key={(index + 1).toString()}
									>
										<Publication
											time={article().time}
											title={article().title}
											abstract={article().abstract}
											authors={article().authors}
											address={article().address}
											conference={article().conference}
											description={article().description}
											link={"../publications/" + article().paper_name}
										/>
									</div>
								))}
							</div>
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Publications;
