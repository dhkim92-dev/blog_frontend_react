import { SideProject } from "../data/dtypes";
import { SectionBar } from "./SectionBar";

export interface ResumeSideProjectsProps{
    data: SideProject[]
}

export default function ResumeSideProjects({data}: ResumeSideProjectsProps) {
    return(
        <>
        <SectionBar title="SIDE PROJECTS"></SectionBar>
        <div className="container">
            {
                data.map((v,i)=>{
                    return(
                        <SideProjectBlock key={`resume-sideprojects-${i}`} {...v}/>
                    )
                })
            }
        </div>
        </>
    )
}

function SideProjectBlock({projectName, link, span, skills, tasks}: SideProject) {
    return (
        <div>
            <div className="space-between-container">
                <div className="left">
                    <li className="bold-text"> {projectName} </li>
                </div>
                <div className="right">
                    <div className="bold-text"> {span.from}-{span.to} </div>
                </div>
            </div>
            <div className="container">
                <div>
                    사용 기술: {skills.join(", ")}
                </div>

                {
                    tasks.map((v, i)=>{
                        return (
                            <li className="circle-list" key = {`resume-side-${projectName}-tasks-${i}}`}> {v} </li>
                        )
                    })
                }
            </div>
        </div>
    )
}