import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as yup from 'yup'
import './app.css'

function App() {

  const handleClickCadastro = (values) => {
    console.log(values);
  }
  const handleClickLogin = (values) => {
    console.log(values);
  }
  

  const validationCadastro = yup.object().shape({
      email: yup.string().email('Não é um email!').required('Este campo é obrigatório!'),
      password: yup.string().min(8, 'A senha deve ter 8 caracteres!').required('Este campo é obrigatório!'),
      confirmPassword: yup.string().oneOf([yup.ref("password"), null], 'As senhas não são iguais!').required('Este campo é obrigatório!')
  })
  const validationLogin = yup.object().shape({
      email: yup.string().email('Não é um email!').required('Este campo é obrigatório!'),
      password: yup.string().min(8, 'A senha deve ter 8 caracteres!').required('Este campo é obrigatório!')
  })

  return (
    <div className='container'>
      <h1>Login</h1>
      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={handleClickLogin}
        validationSchema={validationLogin}>
        <Form className='login-form'>

          <div className='login-form-group'>
            <Field name='email' className='form-field' placeholder='Email' />
            <ErrorMessage component='span' name='email' className='form-error' />
          </div>
          <div className='login-form-group'>
            <Field name='password' className='form-field' placeholder='Senha' />
            <ErrorMessage component='span' name='password' className='form-error' />
          </div>

          <button className='button' type='submit'>Login</button>
        </Form>
      </Formik>

      <h1>Cadastro</h1>
      <Formik
        initialValues={{email: '', password: '', confirmPassword: ''}}
        onSubmit={handleClickCadastro}
        validationSchema={validationCadastro}>
        <Form className='login-form'>

          <div className='login-form-group'>
            <Field name='email' className='form-field' placeholder='Email' />
            <ErrorMessage component='span' name='email' className='form-error' />
          </div>
          <div className='login-form-group'>
            <Field name='password' className='form-field' placeholder='Senha' />
            <ErrorMessage component='span' name='password' className='form-error' />
          </div>
          <div className='login-form-group'>
            <Field name='confirmPassword' className='form-field' placeholder='Confirme sua senha...' />
            <ErrorMessage component='span' name='confirmPassword' className='form-error' />
          </div>

          <button className='button' type='submit'>Cadastrar</button>
        </Form>
      </Formik>

    </div>
  )
}

export default App
