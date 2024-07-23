import { useEffect, useRef, useState } from "react"
import MarkdownViewer from "../common/markdown/MarkdownViewer"
import { renderLatexAll } from "../common/markdown/plugins/LatexPlugin"
import katex from "katex"
import 'katex/dist/katex.min.css';  // KaTeX CSS 파일을 import 합니다.


export const TestView = () => {
    const ref = useRef<HTMLTextAreaElement|null>(null)
    const [toggle, setToggle] = useState<boolean>(false)

    return (
        <>
            <div>
                <textarea ref = {ref}></textarea>
                <button onClick={()=>{setToggle(!toggle)}}> toggle </button>
            </div>
            <div id="direct-render">
            </div>
            <div style={{height: "1000px", marginTop: '300px', border: "solid 3px black"}}>
                {toggle? <MarkdownViewer contents={ref.current?.value}/>: null}
            </div>
        </>
    )
}