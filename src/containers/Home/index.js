
import React from 'react'

import { Container, Image, InputLabel, Input,} from '../Home/styles'
import Icon from '../../assets/icon.svg'
import H1 from '../../components/Title'
import ContainerItens from '../../components/containerItens'
import Button from '../../components/Button'

import { useState, useRef, } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'



function App() {

  const [client, setClient] = useState([]);
  const inputOrder = useRef();
  const inputclientName = useRef();
  const history = useHistory();


  async function addNewOrder() {

    const { data: newOrder } = await axios.post("http://localhost:3001/orders", { 
      
      order: inputOrder.current.value, 
      name: inputclientName.current.value 
    });

         
    setClient([...client, newOrder ]);

  history.push('/pedidos')



  };

 
  return <Container>
    <Image alt="logo-Icon" src={Icon} />
    <ContainerItens>

      <H1>Faça seu pedido!</H1>

      <InputLabel>Pedido</InputLabel>
      <Input ref={inputOrder} placeholder="Pedido" />

      <InputLabel>Nome do Cliente</InputLabel>
      <Input ref={inputclientName} placeholder="Nome do Cliente" />

      <Button onClick={addNewOrder}>Novo Pedido</Button>

    </ContainerItens>


  </Container>


}

export default App
