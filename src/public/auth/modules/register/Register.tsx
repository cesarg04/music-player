import TextField from "@/shared/components/fields/text-field/TextField"
import GridContainer from "@/shared/components/grid/GridContainer"
import GridItem from "@/shared/components/grid/GridItem"
import { Form, Formik, FormikConfig } from "formik"
import { I_Register_Fields, registerUserInitialValues } from "./util/form.util"
import validationSchema from "./util/validation"
import { Button, Image } from "@nextui-org/react"
import ImageLogo from '@assets/images/logoMusic.png'
import SimpleText from "@/shared/components/typographi/SimpleText"

const Register = () => {


    const setup: FormikConfig<I_Register_Fields> = {
        initialValues: registerUserInitialValues,
        onSubmit: (values, formikFields) => { console.log(values) },
        validationSchema: validationSchema
    }

    return (
        <GridContainer
            alignItems="center"
            styles="h-screen gap-10"
            justifyItems="center"
            justifyContent="center"
            cols={12}
        >
            <GridItem
                sm={12}
                lg={4}
                styles="flex flex-col justify-center items-center gap-10"
            >
                <SimpleText
                    size="7xl"
                    family="main"
                    color="text-red-500"
                >
                    Music Player
                </SimpleText>
                <Image width={240} src={ImageLogo} />
            </GridItem>
            <GridItem
                sm={12}
                lg={8}
            >

                <Formik {...setup} >
                    {(formikProps) => {

                        return (
                            <Form className={containerStyles} >
                                <SimpleText
                                    size="7xl"
                                    family="Inter"
                                    color="text-red-500"
                                >
                                    Register
                                </SimpleText>
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

const containerStyles = `flex flex-col w-full p-10 justify-center items-center rounded-xl shadow-xl gap-5`