import React from 'react'
import { useForm } from 'react-hook-form'

const CollectEmail = () => {
    const { register, handleSubmit, errors } = useForm();

    const setEmail = () => {

    }

    return (
        <form onSubmit={handleSubmit(setEmail)}>
            <lable>Email
                <input
                    name='email'
                    ref={register({ required: true })}
                />
                {errors.email && <p>We need your email to send you the pattern.</p>}
            </lable>
        </form> 
    )
}

export const CollectEmail