import { Viewer } from "@toast-ui/react-editor";
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import React, { useEffect, useRef, useState } from 'react';
import Prism, { highlight, highlightAll } from 'prismjs'
import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-clojure';
import 'prismjs/components/prism-cpp'
import 'prismjs/components/prism-glsl'
import 'prismjs/components/prism-gradle'
import 'prismjs/components/prism-groovy'
import 'prismjs/components/prism-java'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-kotlin'
import 'prismjs/components/prism-python'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-yaml'
import 'prismjs/components/prism-http'
// import { renderLatexAll } from "./plugins/LatexPlugin";
import katex from 'katex'
import 'katex/dist/katex.min.css';
import codeSyntaxHighlightPlugin from "@toast-ui/editor-plugin-code-syntax-highlight";


export const TestView = () => {
    const ref = useRef<HTMLTextAreaElement|null>(null)
    const [toggle, setToggle] = useState<boolean>(false)
    const [contents, setContents] = useState<string>(`
  # Hello, Toast UI Editor!
  This is a dark theme viewer example with Prism syntax highlighting.
  
  \`\`\`javascript
  function helloWorld() {
    console.log('Hello, world!');
  }
  helloWorld();
  \`\`\`

  \`\`\`python
  def a() : 
        return 0
  \`\`\`
`)

    return (
        <div style = {{width: "100%", height:"100%", backgroundColor: "#0F0F0F"}}>
            <div>
                <textarea onChange={(e)=>{setContents(e.target.value)}}></textarea>
            </div>
            <div>
                <Viewer initialValue={contents}
                    theme="dark"
                    referenceDefinition={true}
                    plugins={[[codeSyntaxHighlightPlugin, {highlighter : Prism}]]}
                />
            </div>
        </div>
    )
}