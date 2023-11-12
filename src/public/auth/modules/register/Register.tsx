import TextField from "@/shared/components/fields/text-field/TextField"
import GridContainer from "@/shared/components/grid/GridContainer"
import GridItem from "@/shared/components/grid/GridItem"
import { Form, Formik, FormikConfig } from "formik"
import { I_Register_Fields, registerUserInitialValues } from "./util/form.util"
import validationSchema from "./util/validation"
import { Button } from "@nextui-org/react"

const Register = () => {


    const setup:FormikConfig<I_Register_Fields> = {
        initialValues: registerUserInitialValues,
        onSubmit: (values, formikFields) => {console.log(values)},
        validationSchema: validationSchema
    }

    return (
        <GridContainer
            justifyContent="center"
            alignItems="center"
            sx="h-screen"
            // cols={1}
        >
            <GridItem
                sm={12}
                styles="w-1/2"
            >

                <Formik { ...setup } >
                    {(formikProps) => {

                        return (
                            <Form className={containerStyles} >
                                <TextField 
                                    name="name" 
                                    label="Nombre completo" />
                                <TextField 
                                    name="email" 
                                    label="Correo electronico"
                                    type="email" />
                                <TextField 
                                    name="password"
                                    label="Contraseña"
                                    type="password"
                                 />

                                 <Button type="submit" >
                                    Register
                                 </Button>
                            </Form>

                        )
                    }}
                </Formik>


            </GridItem>

        </GridContainer>

    )
}

export default Register;

const containerStyles = `flex flex-col w-full`