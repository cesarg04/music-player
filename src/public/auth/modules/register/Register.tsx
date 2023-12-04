import TextField from "@/shared/components/fields/text-field/TextField"
import GridContainer from "@/shared/components/grid/GridContainer"
import GridItem from "@/shared/components/grid/GridItem"
import { Form, Formik, FormikConfig, useFormikContext } from "formik"
import { I_Register_Fields, registerUserInitialValues } from "./util/form.util"
import validationSchema from "./util/validation"
import { Button, Image } from "@nextui-org/react"
import ImageLogo from '@assets/images/logoMusic.png'
import SimpleText from "@/shared/components/typographi/SimpleText"
import SimpleButton from "@/shared/components/button/SimpleButton"
import { registerService } from "@/shared/services/auth/register.service"
import { useEffect } from "react"

const Register = () => {
    const { useRegisterMutation } = registerService()
    const onSubmit = (values: I_Register_Fields) => {
        useRegisterMutation.mutate({
            body: { ...values }
        })
    }


    const setup: FormikConfig<I_Register_Fields> = {
        initialValues: registerUserInitialValues,
        onSubmit: (values, formikFields) => { onSubmit(values) },
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
                lg={6}
                styles="flex flex-col justify-center items-center gap-10 rounded-xl shadow-xl py-20 px-10 shadow-yellow-800	sm:col-span-12"
            >
                <SimpleText
                    size="7xl"
                    family="main"
                >
                    Music Player
                </SimpleText>
                <Image width={240} src={ImageLogo} />
            </GridItem>
            <GridItem
                sm={12}
                lg={6}
            >

                <Formik {...setup} >
                    {(formikProps) => {

                        const ctx = formikProps
                        useEffect(() => {
                            if (useRegisterMutation.isError) {

                                if (useRegisterMutation.variables?.body) {
                                    for (const item in useRegisterMutation.variables?.body) {
                                        if (useRegisterMutation.variables?.body.hasOwnProperty(item)) {

                                            if (useRegisterMutation.error.response.data.message.includes(item.trim())) {
                                                ctx.setFieldError(item, useRegisterMutation.error.response.data.message)
                                            }
                                        }
                                    }
                                }
                            }


                        }, [useRegisterMutation])

                        return (
                            <Form className={containerStyles} >
                                <SimpleText
                                    size="7xl"
                                    family="main"
                                >
                                    Register
                                </SimpleText>
                                <TextField
                                    name="name"
                                    label="Nombre completo" />
                                <TextField
                                    name="username"
                                    label="Usuario" />
                                <TextField
                                    name="email"
                                    label="Correo electronico"
                                    type="email" />
                                <TextField
                                    name="password"
                                    label="Contraseña"
                                    type="password"
                                />

                                <SimpleButton
                                    type="submit"
                                    size="md"
                                    isLoading={useRegisterMutation.isLoading}
                                >
                                    Registrar
                                </SimpleButton>
                            </Form>
                        )
                    }}
                </Formik>


            </GridItem>

        </GridContainer>

    )
}

export default Register;

const containerStyles = `flex flex-col w-full p-10 justify-center items-center rounded-xl shadow-xl gap-5 shadow-yellow-800	`