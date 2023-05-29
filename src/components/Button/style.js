import styled from 'styled-components'

export const Button = styled.button`

    width: 342px;
    height: 68px;
    background: ${ props => props.isBack ? 'rgba(255, 255, 255, 0.25)' : '#D93856' };
    flex: none;
    order: 0;
    flex-grow: 0;
    border: none;
    cursor: pointer;
    border-radius: 14px;
    display: flex;
    justify-content: center;
    align-items: center;

    font-style: normal;
    font-weight: 900;
    font-size: 17px;
    line-height: 2px;
    text-align: center;
    color: #FFFFFF;
    margin-top: 76px;
    

    &:hover {
        opacity: 0.8;
    }

    &:active{
        opacity: 0.6;
    }

`;