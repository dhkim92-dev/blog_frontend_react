interface IntroduceContents {
  main : String
  rightMain? : String
  subs : String[]
}

interface IntroduceProps {
  title : String
  contents : IntroduceContents[]
}

interface IntroducePageProps {
  pages : IntroduceProps[]
}

const IntroduceTab : React.FC<IntroduceContents> = (props : IntroduceContents) => {
  return (
    <div>
      <div className="introduce-tab-container">
        <h4> {props.main} </h4>
        <h5 style = {{marginLeft : "auto"}}> {props.rightMain} </h5>
      </div>
      {
        props.subs.map((sub, index) => {
          return (
            <li key = {`introduce-main-${props.main}_${index}`}>{sub}</li>
          )
        })
      }
    </div>
  )
}

const IntroduceMain : React.FC<IntroduceProps> = (props : IntroduceProps) => {
  return (
    <div>
      <h3 style = {{marginLeft : '30px'}}> {props.title} </h3>
      {
        props.contents.map((prop, index) => {
          return (
            <div key = {`intoduce-main-div-${index}`} style={{marginTop: '10px', marginLeft: "60px" }}>
              <IntroduceTab key={`introduce-main-${props.title}+-+${index}`} main = {prop.main} rightMain = {prop.rightMain} subs = {prop.subs}/>
            </div>
          )
        })
      }
    </div>
  )
}

const IntroducePage : React.FC<IntroducePageProps>  = (props : IntroducePageProps) => {
  const limit = props.pages.length
  return (
    <div>
      <h2> Introduction </h2>
      <hr/>
      {
        props.pages.map((page, index) => { 
          return (
            <div key = {`intoduce-page-div-${index}`}>
              <IntroduceMain key = {`introduce-page-${page.title}`} title={page.title} contents={page.contents}/>
              {(index != limit - 1) ?  <hr/> : null}
            </div>
          )
        })
      }
    </div>
  )
}

export type {IntroduceContents, IntroduceProps, IntroduceMain}
export default IntroducePage