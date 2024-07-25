import { Publication } from "../data/dtypes";
import { SectionBar } from "./SectionBar";

export interface ResumePublicationProps {
    data: Publication[]
}

export default function ResumePublication({data}: ResumePublicationProps) {
    return (
        <>
        <SectionBar title="PUBLICATIONS"></SectionBar>
        <div className="container">
            {
                data.map((v, i)=>{
                    return(
                        <PublicationBlock key={`resume-publication-${i}`} {...v}></PublicationBlock>
                    )
                })
            }
        </div>
        </>
    )
}

function PublicationBlock({title, link}: Publication) {
    return (
        <>
            <li className="squared-list">
                <a href={link}>  {title} </a>
            </li>
        </>
    )
}
