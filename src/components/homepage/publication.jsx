import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "./styles/publication.css";

const my_name = "Runze Zhang";

const AuthorList = (props) => {
	const {authors} = props;
	const author_list = authors.split(my_name);
	if(author_list.length === 1){
		return <div><span className="homepage-publication-author-bold">{my_name}</span>{author_list[0]}</div>;
	}
	else{
		return <div>{author_list[0]}<span className="homepage-publication-author-bold">{my_name}</span>{author_list[1]}</div>;
	}
}



const Publication = (props) => {
	const { title, abstract, authors, time, address, conference, link } = props;


	let read_paper_button;
	if(link != '../publications/'){
		read_paper_button = <Link to={link}>
							Read Paper{" "}
							<FontAwesomeIcon
								style={{ fontSize: "10px" }}
								icon={faChevronRight}
							/>
						</Link>
	} else {
		read_paper_button = <div></div>
	}

	return (
		<React.Fragment>
			<div className="homepage-article">
				<div className="homepage-article-content">
					<div className="homepage-article-conf">
						|&nbsp;&nbsp;&nbsp;{conference}
					</div>
					<div className="homepage-article-title">{title}</div>
					<div className="homepage-article-author">
						<AuthorList authors={authors} />
					</div>
					<div className="homepage-article-link">
						{read_paper_button}
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Publication;
