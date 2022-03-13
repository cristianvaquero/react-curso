import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function Tarjeta() {
  return (
    
    <Card className="text-center">
        <Card.Header className="text-primary fw-bold">Card</Card.Header>
        <Card.Body>
            <Card.Title className="text-muted">Special title treatment</Card.Title>
            <Card.Text className="text-muted">With supporting text below as a natural lead-in to additional content.</Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
    </Card>

  )
}

export default Tarjeta

