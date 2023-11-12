import { Input, InputProps } from "@nextui-org/react";
import { useField } from "formik";
import { ChangeEvent, ChangeEventHandler, FC, useEffect, useState } from "react";


interface ITextFieldProps extends InputProps {
    name: string;
    label?: string;
    placeholder?: string;
    size?: "lg" | "sm" | "md";
}

const TextField:FC<ITextFieldProps> = (props) => {
    const [isInvalid, setIsInvalid] = useState(false)
    const [ field, meta, helpers ] = useField(props.name)

    const handleChange = (text: string) => {
        helpers.setValue(text)
    }

    useEffect(() => {
        if (meta.touched && meta.error) {
            setIsInvalid(true)
        }else{
            setIsInvalid(false)
        }
    }, [meta])

    const setup: InputProps = {
        label: props.label,
        placeholder: props.placeholder,
        onValueChange: handleChange,
        isInvalid: isInvalid,
        errorMessage: meta.error,
        size: props.size,
        fullWidth: true,
        labelPlacement: 'outside',
        radius: 'lg',
        className: 'my-2',
    }
    return (
        <Input           
         { ...setup }
        />
    )
}

export default TextField