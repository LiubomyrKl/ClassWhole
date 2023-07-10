import React from 'react';
import {IInputProps} from "@/hoc/withInputLogic";
import classes from "./FormInput.module.scss";
import cx from 'classnames';

interface IFormInputProps extends IInputProps{
    success?: boolean;
}

const FormInput = ({
    label,
    placeholder,
    errorOverrideMessage,
    error,
    register,
    name,
    success = false,
}:IFormInputProps) => {

    const inputClasses = cx(classes.formInput, {
        'error': classes.error,
        'success': classes.success,
    })

    return (
        <div className={classes.formInputWrapper}>
            {label && <label className={classes.formInputLabel}>{label}</label>}
            <input
                name={name}
                {...register}
                placeholder={placeholder}
                className={inputClasses}
            />
            <span className='errorMessage'>{error && (errorOverrideMessage || error.message)}</span>
        </div>
    );
};

export default FormInput;