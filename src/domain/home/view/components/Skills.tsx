import { Col, Row } from "react-bootstrap"

const majorData = [
    "spring.svg",
    "nestjs.svg",
    "aws.svg",
    "kubernetes.svg",
    "mysql.svg",
    "postgresql.svg",
    "redis.svg",
    "jenkins.png"
]

const available = [
    "fastapi.svg",
    "react.png",
    "mongodb.png",
    "kafka.svg",
    "elasticsearch.svg",
]

const SkillSet : React.FC = ()=>{

	return (
        <div className="home-view-skills">
            <div className="container">
                <h1> Skills </h1>
                <div className="skill-major">
                    <h1> Major </h1>
                </div>
                <div className='image-block'>
                    {
                        majorData.map((v, i) => {
                            return (
                                <SkillImage key = {`major-skill-image-${i}`}url={v}/>
                            )
                        })
                    }
                </div>
                <div className="skill-available">
                    <h1> Available </h1>
                </div>
                <div className='image-block'>
                    {
                        available.map((v, i) => {
                            return (
                                <SkillImage key = {`available-skill-image-${i}`}url={v}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
	)
}

interface SkillImageProps {
    url: string
}

const SkillImage : React.FC<SkillImageProps> = ({url}: SkillImageProps) => {
    return (
        <>
            <img src = {url}/>
        </>
    )
}



export default SkillSet