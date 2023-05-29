
import React from 'react'

import { Container, Image, Client, Order, Name } from './styles'
import Bag from '../../assets/bag.svg'
import Trash from '../../assets/trash.svg'

import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import H1 from '../../components/Title'
import ContainerItens  from '../../components/containerItens'
import Button from '../../components/Button'


function Orders() {

  const [client, setClient] = useState([]);
  const history = useHistory();



  useEffect(() => {
    async function newClients(){
      const { data: newClient } = await axios.get("http://localhost:3001/orders");
       
      setClient(newClient);
    }   
    
    newClients();

  },[])

  async function deleteOrder(clientId) {
    
    await axios.delete(`http://localhost:3001/orders/${clientId}`);
    
    const newClient = client.filter((order) => order.id !== clientId);

    setClient(newClient);

  };
  
  function goBack() {
    history.push('/');
  }


  return <Container>
    <Image alt="logo-Bag" src={Bag} />
    <ContainerItens  height={true}>

      <H1>Pedidos</H1>
      <ul>
        {client.map((client) => (
          
          <Client key={client.id}>
            
            <Order>{client.order}</Order> - <Name>{client.name}</Name>
            
            <button onClick={() => deleteOrder(client.id)}> <img src={Trash} alt="lixeira" /> </button>
          </Client>


        ))}
      </ul>

  <Button isBack={true} onClick={goBack}>Voltar</Button>

    </ContainerItens>


  </Container>


}

export default Orders
