import React from 'react'
import { Button as ButtonOder} from './style'


function Button({children, ...props}){

    return <ButtonOder {...props}>{children}</ButtonOder>
};

export default Button