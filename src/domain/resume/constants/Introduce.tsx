import { IntroduceContents, IntroduceProps } from "../component/IntroductionList";
import { Careers } from "./Careers";
import { Educations } from "./Educations";
import { Interest } from "./Interests";
import Skills from "./Skills";

const introduces : IntroduceProps[] = [
  {
    title : "Career",
    contents : Careers
  },
  {
    title : "Educations",
    contents : Educations
  },
  Skills,
  {
    title : "Interest",
    contents : Interest
  }
]


export {introduces}
