import { colsStyles, rowStyles } from "@/shared/const/path/styles/grid-cols.const";
import { FC, useMemo } from "react";
import {  alignItemsStyles, justifyItemsStyles, justifyStyles } from "./util/grid.styles";

interface IGridContainerProps {
    cols?: number;
    rows?: number;
    children?: any;
    gap?: number;
    justifyContent?: 'normal' | 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly' | 'stretch';
    alignItems?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
    styles?: string;
    justifyItems?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
}

const GridContainer: FC<IGridContainerProps> = (props) => {

    const styles = useMemo(() => {
        let stlArr = []
        if (props.cols) stlArr.push(colsStyles[props.cols])
        if (props.rows) stlArr.push(rowStyles[props.rows])
        if (props.justifyContent) stlArr.push(justifyStyles[props.justifyContent])
        if (props.justifyItems) stlArr.push(justifyItemsStyles[props.justifyItems])
        if (props.alignItems) stlArr.push(alignItemsStyles[props.alignItems])
        if (props.styles) stlArr.push(props.styles)
        console.log(stlArr);
        return stlArr.join(' ')
    }, [props])

    return (
        <div className={
            `   w-full grid px-8 ${ styles }
            `} >
            {props.children}
        </div>
    )
}

export default GridContainer;