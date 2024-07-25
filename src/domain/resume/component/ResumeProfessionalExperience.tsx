import { Career, Project } from "../data/dtypes";
import { SectionBar } from "./SectionBar";

export interface ResumeProfessionalExprerienceProps {
    data: Career[]
}

export default function ResumeProfessionalExperience({data}: ResumeProfessionalExprerienceProps) {
    return (
        <>
            <SectionBar title="PROFESSIONAL EXPERIENCES"></SectionBar>
            {
                data.map((v, i)=> {
                    return (
                        <ResumeCareer {...v}/>
                    )
                })
            }
        </>
    )
}

function ResumeCareer({company, span, position, projects}: Career) {
    return (
        <div className="container">
            <div className="space-between-container">
                <div className="left"> 
                    <div className="bold-text">{company} </div>
                </div>
                <div className="right"> 
                    <div className="bold-text">
                        {span.from}-{span.to} 
                    </div>
                </div>
            </div>
            <div className="space-between-container">
                <div className="left"></div>
                <div className="right">
                    <div className=" bold-text">
                        {position}
                    </div>
                </div>
            </div>

            <div className="container">
                {
                    projects.map((v, i)=>{
                        return (
                            <ResumeCareerProject key={`resume-career-{${company}-projects-${i}}`} {...v}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

function ResumeCareerProject({name, link, span, skills, tasks}: Project) {
    return (
        <>
            <div className="bold-text">
            <div className="space-between-container">
                <div className="left">
                    <li className="square-list-no-margin"> {name} </li>
                </div>
                <div className="right">
                    {span.from}-{span.to}
                </div>
                </div>
            </div>
            <div className="container">
            <div>
                {
                    tasks.map((v, i)=>{
                        return (
                            <li className="circle-list"> {v} </li>
                        )
                    })
                }
            </div>
            </div>
        </>
    )
}