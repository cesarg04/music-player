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
        console.log({ field: field.name, touched: meta.touched, error: meta.error });
    }, [meta])

    const setup: InputProps = {
        id: `${ props.name }-id`,
        label: props.label,
        placeholder: props.placeholder,
        onValueChange: handleChange,
        isInvalid: meta.error && meta.touched === true ? true : false,
        errorMessage: meta.touched === true ? meta.error : '',
        size: props.size,
        fullWidth: true,
        labelPlacement: 'outside',
        radius: 'lg',
        className: 'my-2 border-neutral-600',
        variant: 'bordered',
        color: 'primary',
        isClearable: true,
        
    }
    return (
        <Input           
         { ...setup }
        />
    )
}

export default TextField