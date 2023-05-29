import styled from 'styled-components'

export const ContainerItens = styled.div`
    background-color: rgba(16, 15, 16, 0.8);
    padding: 25px 36px;
    border-radius: 61px 61px 0px 0px;
    
    display: flex;
    flex-direction: column;
   
    ${props => props.height &&`
        min-height: calc(100vh - 170px);
    
    ` }
`;