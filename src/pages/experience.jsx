import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/experience.css";

const Experience = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "projects");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Experience | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="experience" />
				<div className="content-wrapper">
					<div className="experience-logo-container">
						<div className="experience-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="experience-container">
						<div className="title experience-title">
							My Experience
						</div>

						<div className="subtitle experience-subtitle">
							Education
						</div>

                        <div className="experience-education-school">
                            <a className="experience-education-school-link" href="https//gatech.edu"  rel="noopener noreferrer">Georgia Institute of Technology</a>, Atlanta, GA, USA
                            <div className="experience-education-school-content">
                                <p>Ph.D. Candidate</p>
                                <p> School of Electrical and Computer Engineering</p>
                                <p> Spring 2021 – Present</p>
                            </div>
                        </div>
                        <div className="experience-education-school">
                            <a className="experience-education-school-link" href="https//gatech.edu"  rel="noopener noreferrer">Georgia Institute of Technology</a>, Atlanta, GA, USA
                            <div className="experience-education-school-content">
                                <p>Master of Science in Cybersecurity</p>
                                <p> School of Computer Science</p>
                                <p> Fall 2019 – Spring 2021</p>
                            </div>
                        </div>
                        <div className="experience-education-school">
                            <a className="experience-education-school-link" href="https://www.polyu.edu.hk"  rel="noopener noreferrer">The Hong Kong Ploytechnic University</a>, Hong Kong, China
                            <div className="experience-education-school-content">
                                <p>Bachelor with First Honor</p>
                                <p> School of Electronic and Information Engineering</p>
                                <p> Fall 2014 – Spring 2019</p>
                            </div>
                        </div>
                        
                        <div className="subtitle experience-subtitle">
                            Working Experience
                        </div>

                        

                        <div className="experience-education-school">
                            Meta Platforms, Inc., Bellevue, WA, USA
                            <div className="experience-education-school-content">
                                <p>Upcoming Software Engineer Intern</p>
                                <p> May 2025 - Aug. 2025</p>
                            </div>
                        </div>


                        <div className="experience-education-school">
                            Microsoft Corporation, Redmond, WA, USA
                            <div className="experience-education-school-content">
                                <p>Research Scientist Intern</p>
                                <p> May 2023 - Aug. 2023</p>
                            </div>
                        </div>

                        <div className="experience-education-school">
                            Application Technology Co. Ltd., Hong Kong, China
                            <div className="experience-education-school-content">
                                <p>Application Developer Intern</p>
                                <p> Jul. 2017 - Jun. 2018</p>
                            </div>
                        </div>

                               
                        <div className="subtitle experience-subtitle">
                            Professional Services
                        </div>

                        <div className="experience-education-school">
                        Artifact Evaluation Committee 
                            <div className="experience-education-school-content">
                                <p>USENIX Security Symposium (Security)</p>
                                <p> 2025</p>
                            </div>
                        </div>                    

                        <div className="experience-education-school">
                        Student Assistant
                            <div className="experience-education-school-content">
                                <p>IEEE Secure Development Conference (SecDev) 
                            </p>
                                <p> Oct. 2023</p>
                            </div>
                        </div>

                        <div className="experience-education-school">
                                External Conference Paper Reviewer 
                            <div className="experience-education-school-content">
                            <p>IEEE Symposium on Security and Privacy (S&amp;P) 2021 - 2025</p>
                            <p>Network and Distributed System Security Symposium (NDSS) 2021 - 2025</p>
                            <p>USENIX Security Symposium (Security) 2021 - 2023</p>
                            <p>ACM Computer and Communications Security (CCS) 2020</p>
                            <p>European Symposium on Research in Computer Security (ESORICS) 2020</p>
                            <p>Annual Computer Security Applications Conference (ACSAC) 2020, 2021</p>
                            <p>Computers &amp; Security Journal (COSE) 2022</p>
                            {/* <p>Language-Theoretic Security (LangSec) 2022</p> */}
                            {/* <p>IEEE International Conference on Trust, Privacy and Security in Intelligent Systems, and Applications (TPS), 2022</p> */}
                            <p>Research in Attacks, Intrusions, and Defenses (RAID) 2020</p>
                            {/* <p>Transactions on Information Forensics and Security (TIFS) 2020-2021</p> */}
                            {/* <p>IEEE European Symposium on Security and Privacy (Euro S&amp;P) 2021</p> */}
                            <p>Digital Forensics Research Workshop (DFRWS) 2021, 2023</p>

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

export default Experience;
