import React from "react";



function DVa(){
	// title, abstract, authors, time, address, conference
	return {
		title: "DVa: Extracting Victims and Abuse Vectors from Android Accessibility Malware",	
		description: <div></div>,
		authors: "Haichuan Xu, Mingxuan Yao, Runze Zhang, Mohamed Moustafa, Jeman Park, Brendan Saltaformaggio", 
		conference: "The 33rd USENIX Security Symposium (Security '24)",
		time: "August 2024", 
		address: "Philadelphia, PA",
		link: "https://www.usenix.org/conference/usenixsecurity24/presentation/xu-haichuan",
		paper_name: "dva_usenix24.pdf"
	}

}

function CoCo(){
	return {
		title : "Pulling Off The Mask: Forensic Analysis of the Deceptive Creator Wallets Behind Smart Contract Fraud",
		description: <div></div>,
		authors: "Mingxuan Yao, Runze Zhang, Haichuan Xu, Shih-Huan Chou, Varun Chowdhary Paturi, Amit Kumar Sikder, Brendan Saltaformaggio",
		conference :"2024 IEEE Symposium on Security and Privacy (S&P'24)",
		time: "May 2024",
		address: "San Francisco, CA",
		link: "https://ieeexplore.ieee.org/document/10646813",
		paper_name: "coco_sp24.pdf"
	}
}

function Glean(){
	return {
		title: "Hitchhiking Vaccine: Enhancing Botnet Remediation With Remote Code Deployment Reuse",
		description: <div></div>,
		authors: "Runze Zhang, Mingxuan Yao, Haichuan Xu, Omar Alrawi, Jeman Park, Brendan Saltaformaggio",
		conference: "The 32nd Annual Network and Distributed System Security Symposium (NDSS'25)",
		time: "February 2025",
		address: "San Diego, CA",
		link: "https://www.ndss-symposium.org/ndss-paper/hitchhiking-vaccine-enhancing-botnet-remediation-with-remote-code-deployment-reuse/",	
		paper_name: "echo_ndss25.pdf"
	}
}


const myPublications = [Glean, CoCo, DVa];
const myRepresentativePublications = [Glean, CoCo];
const pubs = {};
pubs.myPublications	= myPublications;
pubs.myRepresentativePublications = myRepresentativePublications;

export default pubs;
