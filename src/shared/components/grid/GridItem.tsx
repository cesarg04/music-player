import { breakpointsStyles } from "@/shared/const/path/styles/breakpoints-grid.const";
import { FC, useMemo } from "react"

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

    const styles = useMemo(() => {
        let stl = [];
        if (props.sm) stl.push(breakpointsStyles.sm[props.sm] )
        if (props.md) stl.push(breakpointsStyles.md[props.md] )
        if (props.lg) stl.push(breakpointsStyles.lg[props.lg] )
        if (props.xl) stl.push(breakpointsStyles.xl[props.xl] )
        if(props.styles) stl.push(props.styles)
        return stl.join(' ')
        
    }, [props])

    return (
        <div 
            className={styles}
        >
            { props.children }
        </div>
    )
}

export default GridItem