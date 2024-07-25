import { Reference } from "../data/dtypes";
import { SectionBar } from "./SectionBar";

export interface ResumeReferenceProps {
    data: Reference[]
}

export default function ResumeReference({data}: ResumeReferenceProps) {
    return (
        <>
        <SectionBar title="COLABORATOR & REFERENCE"></SectionBar>
        {
            data.map((v, i)=> {
                return (
                    <ReferenceBox key = {`resume-collaborator-${i}`} {...v}/>
                )
            })
        }
        </>
    )
}

function ReferenceBox({name, company, position, contact}: Reference) {
    return (
        <div className="container">
            <div className="bold-text">
            <li className="square-list"> 
                {name}
            </li>
            </div>
            <div> {company}, {position}</div>
            <div>
            {
                contact ?  <a href={contact}> {contact} </a> : null
            }
            </div>
        </div>
    )
}