import { useEffect, useState } from "react"
import "./css/resume.css"
import { ResumeProfile } from "./component/ResumeProfile"
// import kr from "./data/resume-kr.json"
// import en from "./data/resume-en.json"
import { ResumeHighlight } from "./component/ResumeHighlight"
import ResumeTechStack from "./component/ResumeTechStack"
import { ResumeEducation } from "./component/ResumeEducation"
import ResumeProfessionalExperience from "./component/ResumeProfessionalExperience"
import ResumeSideProjects from "./component/ResumeSideProjects"
import ResumeInterest from "./component/ResumeInterest"
import ResumePublication from "./component/ResumePublication"
import ResumeReference from "./component/ResumeReference"
import { krData, enData } from "./data/dtypes"

type ResumeData = typeof krData

const ResumeView : React.FC = ()  => {
	const [theme, setTheme] = useState<string>("resume-light")
	const [isDark, setIsDark] = useState<boolean>(false)
	const [isEn, setIsEn] = useState<boolean>(false)
	const [data, setData] = useState<ResumeData>(krData)

	useEffect(() => {
		if(isEn) {
			setData({...enData})
		}else{
			setData({...krData})
		}
	}, [isEn])

	useEffect(()=>{
		if(isDark === true) {
			setTheme("resume-dark")
		}else{
			setTheme("resume-light")
		}
	}, [isDark])

    return (
		<div className={theme}>
			<ResumeProfile {...data.profile}/>
			<ResumeHighlight highlights = {data.highlight}/>
			<ResumeTechStack data={data.skills}/>
			<ResumeEducation data={data.education}/>
			<ResumeProfessionalExperience data={data.professional}></ResumeProfessionalExperience>
			<ResumeSideProjects data = {data.sideProjects}/>
			<ResumeInterest data = {data.interestedIn}/>
			<ResumePublication data = {data.publications}/>			
			<ResumeReference data = {data.collaborators}/>
			<button onClick={()=>{setIsDark(!isDark)}}> theme change </button>
			<button onClick={()=>{setIsEn(!isEn)}}> language change </button>
		</div>
    )
}

export default ResumeView