import React from 'react'
import { useForm } from 'react-hook-form'

const CollectEmail = () => {
    const { register, handleSubmit, errors } = useForm();

    const setEmail = () => {

    }

    return (
        <form onSubmit={handleSubmit(setEmail)}>
            <label>Email
                <input
                    type='email'
                    name='email'
                    ref={register({ required: true })}
                />
                {errors.email && <p>Enter your email address</p>}
                <button type="submit">Continue</button>
            </label>
        </form> 
    )
}

export default CollectEmail