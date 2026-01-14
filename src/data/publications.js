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

function CoSeC(){
	return {
		title: "Identifying Incoherent Search Sessions: Search Click Fraud Remediation Under Real-World Constraints",
		description: <div></div>,
		authors: "Runze Zhang, Ranjita Pai Sridhar, Mingxuan Yao, Zheng Yang, David Oygenblik, Haichuan Xu, Vacha Dave, Cormac Herley, Paul England, Brendan Saltaformaggio",
		conference: "2025 IEEE Symposium on Security and Privacy (S&P'25)",
		time: "May 2025",
		address: "San Francisco, CA",
		link: "../publications/",	
		paper_name: "cosec_sp25.pdf"
	}
}

function COINDEF(){
	return {
		title: "COINDEF: A Comprehensive Code Injection Defense for the Electron Framework",
		description: <div></div>,
		authors: "Zheng Yang, Simon Chung, Jizhou Chen, Runze Zhang, Brendan Saltaformaggio, Wenke Lee",
		conference: "2025 IEEE Symposium on Security and Privacy (S&P'25)",
		time: "May 2025",
		address: "San Francisco, CA",
		link: "../publications/",	
		paper_name: "coindef_sp25.pdf"
	}
}

function Sombra(){
	return {
		title: "Lock the Door But Keep the Window Open: Extracting App-Protected Accessibility Information from Browser-Rendered Websites",
		description: <div></div>,
		authors: " Haichuan Xu, Runze Zhang, Mingxuan Yao,David Oygenblik, Yizhi Huang, Jeman Park, Brendan Saltaformaggio",
		conference: "The 32nd ACM Conference on Computer and Communications Security (CCS'25)",
		time: "October 2025",
		address: "Taipei, Taiwan",
		link: "../publications/",	
		paper_name: "sombra_ccs25.pdf"
	}
}

function Mai(){
	return {
		title: "Achieving Zen: Combining Mathematical and Programmatic Deep Learning Model Representations for Attribution and Reuse",
		description: <div></div>,
		//David Oygenblik (Georgia Institute of Technology) <davido@gatech.edu> Dinko Dermendzhiev (Georgia Institute of Technology) <dermendzhiev@gatech.edu> Filippos Sofias (Georgia Institute of Technology) <fsofias3@gatech.edu> Mingxuan Yao (Georgia Institute of Technology) <mingxuanyao@gatech.edu> Haichuan Xu (Georgia Institute of Technology) <haichuanxu@gatech.edu> Runze Zhang (Georgia Institute of Technology) <runze.zhang@gatech.edu> Jeman Park (Kyung Hee University) <jeman@khu.ac.kr> Amit Kumar Sikder (Iowa State University) <aksikder@iastate.edu> Brendan Saltaformaggio (Georgia Institute of Technology) <brendan@ece.gatech.edu>
		authors: "David Oygenblik, Dinko Dermendzhiev, Filippos Sofias, Mingxuan Yao, Haichuan Xu, Runze Zhang, Jeman Park, Amit Kumar Sikder, Brendan Saltaformaggio",
		conference: "The 33rd Annual Network and Distributed System Security Symposium (NDSS'26)",
		time: "February 2026",
		address: "San Diego, CA",
		link: "../publications/",	
		paper_name: ""
	}
}

function Fira(){
	return {
		title: "FIRA: Enabling Automatic Forensic Investigation of Unmanned Aerial Vehicles",
		descripion: <div></div>,
		authors: "Yizhi Huang, David Oygenblik, Runze Zhang, Mingxuan Yao, Muhammad Ibrahim, Burak Sahin, Haichuan Xu, Saman Zonouz, Brendan Saltaformaggio",
		conference: "The 35th USENIX Security Symposium (Security '26)",
		time: "August 2026",
		address: "Baltimore, MD",
		link: "../publications/",	
		paper_name: ""
	}
}




const myPublications = [Glean, CoSeC , Sombra, CoCo, DVa, COINDEF];
const myRepresentativePublications = [CoSeC, Glean];
const pubs = {};
pubs.myPublications	= myPublications;
pubs.myRepresentativePublications = myRepresentativePublications;

export default pubs;
