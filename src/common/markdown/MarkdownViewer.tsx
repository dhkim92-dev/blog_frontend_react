import { Viewer } from "@toast-ui/react-editor";
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
// import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import '../../domain/board/view/article-viewer/css/article-viewer.css'
import React, { useEffect } from 'react';
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
import { renderLatexAll } from "./plugins/LatexPlugin";
import katex from 'katex'
import 'katex/dist/katex.min.css';

interface MarkdownViewerProps{
	contents : string | undefined
}

const MarkdownViewer : React.FC<MarkdownViewerProps> = ({contents} : MarkdownViewerProps)=>{


	useEffect(()=>{
		highlightAll()
	},[])


	return (
		<div>
			<Viewer initialValue={renderLatexAll(contents as string)}
				referenceDefinition={true}
				plugins={[[codeSyntaxHighlight, {highlighter : Prism}]]}
			/>
		</div>
	)
}

export default MarkdownViewer;
