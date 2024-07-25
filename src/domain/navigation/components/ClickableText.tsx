import { Children } from "react"

interface ClickableTextProps {
	text: string
	onClick: any
}

export default function ClickableText({text, onClick}: ClickableTextProps) {
	return (
		<div className="clickable-text" onClick={()=>{onClick()}}>
			{text}
		</div>
	)
}
