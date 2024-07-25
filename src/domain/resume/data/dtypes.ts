import krData from "./resume-kr.json"
import enData from "./resume-en.json"

export type TechnologyStack = typeof krData.skills[0]

export type Education = typeof krData.education[0]

export type Career = typeof krData.professional[0]

const projects = krData.professional[0].projects[0]

export type Project = typeof projects

export type SideProject = typeof krData.sideProjects[0]

export type InteretedIn = typeof krData.interestedIn

export type Publication = typeof krData.publications[0]

export type Reference = typeof krData.collaborators[0]

export {krData, enData}