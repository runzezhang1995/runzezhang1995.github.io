import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "./style/publication.css";

const my_name = "Runze Zhang";

const AuthorList = (props) => {
	const {authors} = props;
	const author_list = authors.split(my_name);
	if(author_list.length === 1){
		return <div><span className="publication-author-bold">{my_name}</span>{author_list[0]}</div>;
	}
	else{
		return <div>{author_list[0]}<span className="homepage-publication-author-bold">{my_name}</span>{author_list[1]}</div>;
	}
}




const Publication = (props) => {
	const { title, abstract, authors, time, address, conference, link, description } = props;

	let read_paper_button;
	if(link != '../publications/'){
		read_paper_button =  <div className="article-link">
		Read Paper{" "}
		<FontAwesomeIcon
			style={{ fontSize: "10px" }}
			icon={faChevronRight}
		/>
	</div>
	} else {
		read_paper_button =  <div className="article-link">
			To Be Released Soon{" "}
			</div>
	}
	return (
		<React.Fragment>
			<div className="article">
				<div className="article-left-side">
					<div className="article-date">{conference}</div>
				</div>

				<Link to={link}>
					<div className="article-right-side">
						<div className="article-title">{title}</div>
						<div className="article-authors">
							<AuthorList authors={authors} />
						</div>
						<div className="article-description">{description}</div>
						{read_paper_button}
						
					</div>
				</Link>
			</div>
		</React.Fragment>
	);
};

export default Publication;
