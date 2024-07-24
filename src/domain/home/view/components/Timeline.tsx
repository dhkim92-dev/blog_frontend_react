import { Col, Row } from "react-bootstrap"

const timelineData = [
    {
        teamName : "Team Bokki",
        span: {
            from: "2023",
            to: "202x",
        },
        skills: ["Spring Boot", "AWS EC2", "FCM", "GCP Cloud Function"],
        tasks: [
            "Develop Backend API for Bokki Application", 
            "Develop Infrastructure for Service."
        ],
        position: "Backend & Infra Engineer"
    }, {
        teamName: "Nalbi Company Inc",
        span: {
            from: "2022",
            to: "2023"
        },
        skills: ["Spring Boot", "NestJS", "Auth0", "AWS SNS, SQS, Lambda, EMC, EKS", "MongoDB", "Postgres", "Socket.IO", "Electron", "Unity"],
        tasks: ["Developed V-Tuber motion capture software backend",
              "Socket.IO based motion data communication between Unity & Electron",
              "Developed V-Tuber Shortform Platform API & Infrastructure"],
        position: "Backend & Infra Engineer"
    }, {
        teamName: "Autosemantics Inc",
        span: {
            from: "2020",
            to: "2022"
        },
        skills: ["Embeded Linux", "Tensorflow", "Python", "FastAPI", "EKS", "Lambda"],
        tasks: [
            "Developed&Operated AI based Supplier Recommendation System for MRO company",
            "Developed Building Energy Management System",
            "Developed Health Coach service backend, Android demo application",
            "Developed AI based Demand prediction for Electronic Kickboard rental company",
            "Developed DAQ Embeded Linux system for Samsung Onyang, Hwachun, Hyundai Autoever"
        ],
        position: "Senior Researcher"
    }, {
        teamName: "University of Seoul, Graphics Laboratory",
        span: {
            from: "2018",
            to: "2020"
        },
        skills: ["OpenCL", "CUDA", "C++", "Python"],
        tasks: [
            "Research about surface reconstruction algorithm",
            "Marching Tetrahedral on BCC Coordinates system"
        ],
        position: "Master's Degree course"
    }
]

export const Timeline = () => {
    return (
    <div className="home-view-timeline">
        <div className="root">
            <div className="header">
                <h1> Timeline </h1>
            </div>
                <div className="container">
                    <div className="summary">
                        <div className="box"> 
                            4+ 
                            <br></br> 
                            Years
                        </div>
                        <div className="box"> 
                            10+ 
                            <br></br>
                            Projects 
                        </div>
                        <div className="box"> Backend </div>
                    </div>
                <div className="main">
                {
                    timelineData.map((v, i)=>{
                        return (
                            <TimelineElement key = {`timeline-element-${i}`} 
                                teamName= {v.teamName}
                                span={v.span}
                                position={v.position}
                                skills={v.skills}
                                tasks={v.tasks}
                            />
                        )   
                    })
                }
                </div>
            </div>
        </div>
    </div>
    )
}

interface TimelineSummaryBox {
    data: string[]
}

interface TimelineElement {
    teamName: string,
    span: {
        from: string,
        to: string,
    },
    position: string,
    skills: string[],
    tasks: string[]
}

export const TimelineElement: React.FC<TimelineElement> = ({
    teamName, span, position, skills, tasks
}: TimelineElement) => {
    return (
        <div className="horizontal-container">
            <div className="left-cell">
                <h1> {span.from}-{span.to} </h1>
            </div>
            <div className="right-cell">
                <h1> {teamName} </h1>
                <h1> {position} </h1>
                <div> {skills.join(", ")} </div>
                {
                    tasks.map((v, i)=>{
                        return (
                            <li key={`${teamName}-task-${i}`}>
                                {v}
                            </li>
                        )
                    })
                }
            </div>
        </div>
    )
}