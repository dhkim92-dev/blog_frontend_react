import { Col, Row } from "react-bootstrap"

const hashTags = ["#BACKEND", "#INFRA", "#CONTAINER", "#ORCHESTRATION", "#MSA"]

const skills = ["Springboot", "NestJS", "K8S", "AWS", "FastAPI"]

const Profile : React.FC = ()=>{
	return (
        <div className="home-view-profile">
            <Row className="summary">
                <Col className="container" xs={12} sm={12} md={12} lg={8} xl={6} xxl={6}>
                        <h1>Dohoon</h1>
                        <div>
                        {
                            <span className="tag"> 
                                {hashTags.join(" ")}
                            </span>
                        }
                        </div>
                        <div>
                        {
                            skills.map((v, i) => {
                                return (
                                    <span key={`home-view-profile-skill-${i}`} className="skill">
                                        {v}
                                    </span>
                                )
                            })
                        }
                        </div>
                </Col>
                <Col xs={12} sm={12} md={12} lg={4} xl={6} xxl={6}>
                    <div className="photo-container"> 
                        <img src="dohoon-kim.png"></img>
                    </div>
                </Col>
            </Row>

            <div className='main'>
                <div className='content'>
                Welcome, I'm Dohoon Kim. 
                I've continued my four-year journey as a software developer. 
                Mainly, worked as a web backend, but also built service infrastructure.
                Recently, I'm interested in topics such as high-availability system design in massive traffic environments,
                and Domain Driven Design. Excluding the field I am working in, I also have technology for embedded systems and graphics technologies such as OpenGL and Vulkan.
                </div>
            </div> 
        </div>   
	)
}

export default Profile