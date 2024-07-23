import React from "react";

interface PDFViewerInterface{
	url : string;
};

const PDFViwer : React.FC<PDFViewerInterface> = ({url} : PDFViewerInterface) => {
	const viewerUrl ="https://docs.google.com/viewer?url=your_url_to_pdf&embedded=true";
	return (
		<object data={url} type="application/pdf" style = {{width: '100%', height : '100vh'}}>
			<iframe src={viewerUrl}></iframe>
		</object>
	)
}

const ResumeView = ()=>{
	const cvFilePath : string = process.env.REACT_APP_MEDIA_URL+process.env.REACT_APP_CV_FILE_NAME
	return (
		<div style={{marginTop: "80px"}}>
			<PDFViwer url={cvFilePath}></PDFViwer>
		</div>
	)
}

export default ResumeView;