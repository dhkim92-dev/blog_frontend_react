import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { HookCallback } from '@toast-ui/editor/types/editor';
import {Editor} from '@toast-ui/react-editor';
import React, { useEffect, useRef } from 'react';
import Prism from 'prismjs'
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
import katex from 'katex'


export interface MarkdownEditorProps {
  editorRef: React.RefObject<Editor>
//   contents : string
	// onChangeContents : (value : string) => void
  onUploadImage(data : FormData) : Promise<any>;
}


const MarkdownEditor : React.FC<MarkdownEditorProps> = ({
	editorRef,
	// contents,
	// onChangeContents,
	onUploadImage
} : MarkdownEditorProps) => {

	// useEffect(()=>{
	// 	editorRef.current?.getInstance().setMarkdown(contents)
	// }, [contents])

	const uploadImageHook = (file: Blob|File, callback : HookCallback) => {
		const data: FormData = new FormData()
		data.append('file', file)
		onUploadImage(data)
		.then((res)=>{
			return res.url
		})
		.then((url)=>{
			const customImageMarkdownFormat = `<p align='center'> <img src="${url}"/> </p>`
			const editorInstance = editorRef.current?.getInstance()
			if(editorInstance) {
				const cursor = editorInstance.getSelection()
				editorInstance.replaceSelection(customImageMarkdownFormat)
			}
		})
		.catch((err)=>{
			alert("이미지 업로드 실패")
		})
	}
	
	return (
		<Editor
			ref = {editorRef}
			previewStyle='tab'
			height='600px'
			initialEditType='markdown'
			hideModeSwitch={true}
			useCommandShortcut={false}
			referenceDefinition={true}
      		hooks={{addImageBlobHook : uploadImageHook}}
			plugins={[[codeSyntaxHighlight, { highlighter: Prism}]]}
			usageStatistics= {false}
			customHTMLRenderer={{
				htmlBlock: {
					latex(node:any) {
						try {
							const html = katex.renderToString(node.literal || '', {
							  throwOnError: false
							});
			  
							return [
							  { type: 'openTag', tagName: 'div', outerNewLine: true },
							  { type: 'html', content: html },
							  { type: 'closeTag', tagName: 'div', outerNewLine: true }
							];
						  } catch (error) {
							console.error('Error rendering LaTeX:', error);
							return [{ type: 'html', content: '<div>Error rendering LaTeX</div>' }];
						  }
					}
				},
			}}
		/>
	)
}

export default MarkdownEditor;