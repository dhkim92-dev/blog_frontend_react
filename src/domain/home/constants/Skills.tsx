import { IntroduceContents, IntroduceProps } from "../component/IntroductionList"

const webBackend : IntroduceContents = {
	main : "Web Backend",
	subs : [
		"Spring boot 3.x(JVM): JPA, QueryDSL, Spring Security etc...",
		"FastAPI(Python), have experiences developed A.I prediction services",
		"NestJS & Express(NodeJS),  developed Socket.IO server and Authentication service"
	]
}

const database : IntroduceContents = {
	main : "Database",
	subs : [
		"MySQL - Exoerience with VOD service (AWS RDB)",
		"PostgreSQL - Experience with BEMS, Authentication service and personal homepage",
		"Redis - Main purpose was cache, but have experience phone verification and event fan-out",
	]
}

const cloudService : IntroduceContents = {
	main : "Cloud Service",
	subs : [
		"AWS EC2, EKS, Lambda, RDS, Elemental Media Converter etc...",
		"Auth0 - Used it as authentication server and Back office"
	]
}

const infrastructure : IntroduceContents = {
	main : "Infrastructure",
	subs : [
		"Kubernetes - Used it for BEMS & VOD Service System",
		"Jenkins - Used it for Test Automation & Deployment for my Team, with GitLab",
		"Terraform - Used it to manage EKS nodes Cloudfront and S3"
	]
}

const graphics : IntroduceContents = {
	main : "Graphics",
	subs : [
		"GPGPU optimization using OpenCL, CUDA, and Vulkan",
		"Scalar Fields & Cloud point Surface Reconstruction"
	]
}

const Skills : IntroduceProps = {
	title : "Skills",
	contents : [webBackend, database, cloudService, infrastructure, graphics]
}



export default Skills