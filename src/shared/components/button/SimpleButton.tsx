import { Button, ButtonProps } from "@nextui-org/react"
import { FC } from "react"

interface ISimpleButtonProps extends ButtonProps {
    children?: any;
    type?: 'button' | 'reset' | 'submit';
    color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger" 
    size?: "sm" | "md" | "lg" 
}

const SimpleButton:FC<ISimpleButtonProps> = (props) => {

    const setup: ButtonProps = {
        type: props.type,
        color: props.color ?? 'primary',
        size: props.size ?? 'md',
        fullWidth: true
    }

    return (
        <Button {...setup}>
            { props.children }
        </Button>
    )
}

export default SimpleButton