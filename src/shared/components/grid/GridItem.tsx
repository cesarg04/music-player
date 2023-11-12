import { FC } from "react"

interface IGridItemProps{
    span?: number;
    sm?: number;
    lg?: number;
    md?: number;
    xl?: number;
    children?: any
    styles?: string;
}

const GridItem:FC<IGridItemProps> = (props) => {


    return (
        <div 
            className={`
            col-span-12
            ${ props.sm ? `sm:col-span-${ props.sm }` : '' }
            ${ props.md ? `md:col-span-${ props.md }` : '' }
            ${ props.lg ? `lg:col-span-${ props.lg }` : '' }
            ${ props.xl ? `xl:col-span-${ props.xl }` : '' }
            ${ props.styles ? `${ props.styles }` : '' }
            `}
        >
            { props.children }
        </div>
    )
}

export default GridItem