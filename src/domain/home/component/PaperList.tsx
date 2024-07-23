interface PaperProps {
	link : string;
	title : string;
};

interface PaperListProps {
    data : PaperProps[]
}

const Paper : React.FC<PaperProps> = (props : PaperProps) => {
    return (
        <li> <a href = {props.link}> {props.title} </a> </li>
    )
}

const PaperList : React.FC<PaperListProps> = (props : PaperListProps) => {
	return (
		<div>
			<h3>Papers</h3>
			<ul className='Paper'>
				{props.data.map((data, index)=>{
					return (
						<Paper key = {'paper-'+index} title={data.title} link={data.link} />
					)
				})}
			</ul>
	</div>
	)
}


export type {PaperProps, PaperListProps}
export {Paper, PaperList}