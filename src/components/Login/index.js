import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { getUser } from '../../features/Invoice/InvoiceAPI'
import { userLogin } from "../../features/Invoice/InvoiceSlice"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [errorMessage, setErrorMessage] = useState(null)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const login = (data) => {
        dispatch(getUser(data)).unwrap().then((r) => {
            if (r.Name) {
                setErrorMessage(null)
                navigate('/invoices')
            } else {
                setErrorMessage('Username or Password is invalid')
            }
        })
    }
    return <>
        <form onSubmit={handleSubmit(login)}>
            {errorMessage && <p>{errorMessage}</p>}
            <div>
                <label htmlFor="username">Username</label>
                <input type="text" id="username"
                    {...register('username', { required: 'Fill field' })} />
                <p>{errors.username?.message} </p>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" id="password"
                    {...register('password', { required: 'Fill field' })} />
                <p>{errors.password?.message} </p>
            </div>
            <div><button> Login </button></div>
        </form>
    </>
}

export default Login