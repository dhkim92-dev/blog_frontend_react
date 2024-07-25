import { Education } from "../data/dtypes"
import { SectionBar } from "./SectionBar"

export interface ResumeEducationProps {
    data: Education[]
}

export function ResumeEducation({data}: ResumeEducationProps) {
    return (
        <>
        <SectionBar title="EDUCATIONS"></SectionBar>
        {
            data.map((v, i)=>{
                return(
                    <div style={{marginBottom:'5px'}}>
                        <EducationHistoryBlock key = {`resume-education-${i}`} {...v}></EducationHistoryBlock>
                    </div>
                )
            })
        }
        </>
    )
}

export function EducationHistoryBlock({university, department, span, score, degree, contents}: Education) {
    return (
        <div className="container">
            <div className="space-between-container">
                <div className="bold-text">{university}</div>
                <div className="bold-text">{span.from}-{span.to}</div>
            </div>
            <div className="space-between-container">
                <div>{department}, {degree}</div>
                <div>CGPA : {score}</div>
            </div>

            {
                contents.map((v, i)=>{
                    return(
                        <li key = {`resume-education-${university}-contents-${i}`} className="square-list">
                            {v}
                        </li>
                    )
                })
            }
        </div>
    )
}