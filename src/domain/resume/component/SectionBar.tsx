
export interface SectionBarProps {
    title: string
}

export const SectionBar: React.FC<SectionBarProps> = ({title}: SectionBarProps)=>{

    return (
        <>
        <div className="section-bar">{title}</div>
        </>
    )
}