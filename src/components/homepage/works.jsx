import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work Experience"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./gt_logo.png"
								alt="GeorgiaTech"
								className="work-image"
							/>
							<div className="work-title">CyFI Lab</div>
							<div className="work-subtitle">
								Research Assistant 
							</div>
							<div className="work-duration">2020 - Present</div>
						</div>

						<div className="work">
							<img
								src="./ms.png"
								alt="Microsoft"
								className="work-image"
							/>
							<div className="work-title">Microsoft</div>
							<div className="work-subtitle">
								Research Scientist Intern
							</div>
							<div className="work-duration">2023</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
