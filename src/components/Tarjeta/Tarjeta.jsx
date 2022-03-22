import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function Tarjeta() {
  return (
    
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://tecnotronicos.com/wp-content/uploads/2020/11/xiaomi-auriculares-inalambricos-bluetooth-redmi-airdots-tws-d_nq_np_656332-mla31193985706_062019-f1-6ba9da3a21fa317f5e15947467742246-640-0.jpg" />
      <Card.Body>
        <Card.Title style={{color: 'Black' }}>Auriculares Xiaomi Mi Earbuds Basic 2 Bluetooth</Card.Title>
        <Card.Text style={{ color: 'Red'}}>
          $3.999
        </Card.Text>
        <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card>

  )
}

export default Tarjeta

