import React from 'react';
import { useNavigate, useParams } from "react-router-dom";

const PDFViewer = () => {
	
	// get pdfPath from url params
	let { slug } = useParams();


	return (
		<embed style={{width: "100%", height: "100vh"}}
		src={slug}
		type="application/pdf"
	  />
	
	);
};

export default PDFViewer;