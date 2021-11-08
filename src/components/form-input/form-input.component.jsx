import React from 'react';
import './form-input.styles.scss';

const FormInput = ({handleCahnge, label, ...otherProps})=>(
<div className='group'>
    <input className='form-input' type="text" onChange={handleCahnge} {...otherProps} />

   { label ?
    (<label className={`${otherProps.value.length ? 'shrink': ''} form-input-label`  } htmlFor="">
        {label}
        </label>)
    :null}

</div>
)
export default FormInput;