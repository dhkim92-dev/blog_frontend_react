import { Children } from "react"

interface ClickableText {
	text: string
	onClick: any
    children?: any
}

export default function ClickableText({text, onClick}: ClickableText) {
	return (
		<div className="clickable-text" onClick={()=>{onClick()}}>
			{text}
		</div>
	)
}
