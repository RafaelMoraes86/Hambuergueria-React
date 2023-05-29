import React from 'react'
import { ContainerItens as Container} from './style'

function ContainerItens({children, height}){

    return <Container  height={ height}>{children}</Container>


};

export default ContainerItens