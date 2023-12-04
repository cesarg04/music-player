import * as yup from 'yup';

const validationSchema = yup.object().shape({
  name: yup.string().required('El nombre es obligatorio'),
  email: yup.string().email('Introduce un correo electrónico válido').required('El correo electrónico es obligatorio'),
  password: yup
    .string()
    .required('La contraseña es obligatoria')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      'La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula, un número y un carácter especial.'
    ),
    username: yup.string().required("El nombre de usuario es requerido")
});

export default validationSchema;
