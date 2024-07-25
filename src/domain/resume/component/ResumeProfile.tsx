import { SectionBar } from "./SectionBar"

export interface ResumeProfileProps {
    name: string,
    phone: string,
    email: string,
    linkedin: string,
    github: string,
    address: string,
    homepage: string
}

export const ResumeProfile: React.FC<ResumeProfileProps> = ({name, phone, email, address, linkedin, github, homepage}: ResumeProfileProps)=>{
    

    return (<>
            <div className="profile">
                <h1> {name} </h1>
                <div> {address} </div>
                <div>  Mobile: {phone} | Mail: <a href={email}>{email}</a> | <a href={linkedin}> LinkedIn </a> | <a href={github}> Github </a> | <a href={homepage}> Homepage </a> </div>
            </div>
        </>
    )
}
