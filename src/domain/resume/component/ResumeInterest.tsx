import { SectionBar } from "./SectionBar";

export interface ResumeInterestProps {
    data: string[]
}

export default function ResumeInterest({data}: ResumeInterestProps) {
    return (
        <>
            <SectionBar title="INTERESTED IN"></SectionBar>
            <div className="container">
                {
                    data.map((v, i)=> {
                        return (
                            <li key = {`resume-intereted-in-${i}`} className="square-list">{v}</li>
                        )
                    })
                }
            </div>
        </>
    )
}