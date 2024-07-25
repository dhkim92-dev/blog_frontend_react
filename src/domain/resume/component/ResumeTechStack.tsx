import { TechnologyStack } from "../data/dtypes";
import { SectionBar } from "./SectionBar";


export interface ResumeTechStackProps {
    data: TechnologyStack[]
}

export default function ResumeTechStack({data}: ResumeTechStackProps) {
    return (
        <>
        <SectionBar title="TECHNOLOGY STACKS"></SectionBar>
        {/* <div className="container"> */}
        {
            data.map((v, i)=> {
                return(
                    <TechStackBlock {...v}></TechStackBlock>
                )
            })
        }
        {/* </div> */}
        </>
    )
}

const TechStackBlock = ({name, contents}: TechnologyStack) => {
    return (
        <>
            <div className="container">
            <div className="flex-container"> 
                <div className="bold-text"> <li className="square-list-no-margin">{name} : </li></div> 
                <div style={{marginLeft: "10px"}}>{contents.join(", ")}</div>
            </div>
            </div>
        </>
    )
}