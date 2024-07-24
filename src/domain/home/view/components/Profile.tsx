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
                Hi, My name is Dohoon Kim. Work as Backend Engineer.
                <br/>
                I can handle 3 web backend frameworks and have CKA Certification.
                <br/>
                Also have embedded linux system skills and can handle Graphics API likes OpenGL, Vulkan, CUDA, OpenCL.
                <br/>
                Currently, I have interest in Micro service architecture on heavy traffic environment. 
                </div>
            </div> 
        </div>   
	)
}

export default Profile