import styled from 'styled-components'



export const Container = styled.div`
    background-color: black;
    background-size: cover;
    display: flex;
    align-items: center;        
    flex-direction: column;
    gap: 25px;
    

`;


export const Image = styled.img`
    margin-top: 11px

`;


export const Client = styled.li`

    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 342px;
    height: 101px;
    background: rgba(255, 255, 255, 0.25);
    border-radius: 14px;
    margin-top: 16px;
    

    button {
        background: none;
        border: none;
        cursor: pointer;
    }
`;


export const Order = styled.p`
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
    color: #FFFFFF;

`;

export const Name = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    color: #FFFFFF;

`;