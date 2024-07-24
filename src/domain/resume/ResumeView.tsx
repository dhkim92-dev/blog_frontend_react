import { Col, Container, Row } from "react-bootstrap"
import Photo from "./component/Photo"
import { PaperList } from "./component/PaperList"
import { papers } from "./constants/Papers"
import '../../common/css/introduction.css'
import IntroducePage from "./component/IntroductionList"
import { introduces } from "./constants/Introduce"

const ResumeView : React.FC = ()  => {

    return (
		<div>
			<Container className = "Introduce">  
				<Row>
					<Col sm={12} md = {12} xl={12}>
						<div className = 'Introduce-Column'>
							<IntroducePage pages={introduces}></IntroducePage>
						</div>
					</Col>
				</Row>
				<hr/>
				<Row>
					<PaperList data={[...papers.data]}/>
				</Row>
			</Container>

		</div>
    )
}

export default ResumeView