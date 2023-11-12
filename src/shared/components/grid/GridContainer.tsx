import { FC } from "react";

interface IGridContainerProps {
    cols?: number;
    rows?: number;
    children?: any;
    gap?: number;
    justifyContent?: 'normal' | 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly' | 'stretch';
    alignItems?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
    sx?: string;
}

const GridContainer: FC<IGridContainerProps> = (props) => {
    return (
        <div className={
            `   w-full
                grid 
                grid-cols-${props.cols ?? 12}
                grid-rows-${props.rows}
                gap-${props.gap ?? '0'}
                justify-${props.justifyContent ?? 'normal'}
                items-${props.alignItems ?? 'start'}
                ${props.sx}
            `} >
            {props.children}
        </div>
    )
}

export default GridContainer;