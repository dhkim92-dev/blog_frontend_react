import { SectionBar } from "./SectionBar"

export interface ResumeHighlightProps {
    highlights: string[]
}

export const ResumeHighlight = ({highlights}: ResumeHighlightProps) =>{
    return (
        <>
        <SectionBar title = "HIGHLIGHTS" />
        <div className="container">
        {
            highlights.map((v, i)=>{
                return (
                    <li className="square-list" key={`resume-highlights-{i}`}>{v}</li>
                )
            })
        }
        </div>
        </>
    )
}