import React from 'react'
import {Card, Button, Form, Row, Col, CardImg} from 'react-bootstrap'
import { CartContext } from '../CardContext'
import { useContext } from 'react'

export default function ProductCard(props) {
  const product = props.product
  const cart = useContext(CartContext)
  const productQuantity = cart.getProductQuantity(product.id)

  return (
    <Card>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text style={{fontSize: '18px', fontWeight:'600'}} className='text-warning'>${product.price / 10}</Card.Text>
        <Card.Text style={{fontSize: '14px', color: 'grey'}}>{product.color.join(', ')}</Card.Text>
        <CardImg style={{ objectFit: 'cover', height: '420px'}} className='img-fluid rounded flex-auto bg-gray'src={product.src} alt={product.name} ></CardImg>

        {productQuantity > 0 ? <>
        <Form as={Row}>
          <Form.Label className="mt-2" column="true" sm="6">In Cart: {productQuantity}</Form.Label>
          <Col sm="6" >
            <Button sm="6" className='mx-2 btn-warning mt-2' onClick={() => cart.addOneToCart(product.id)}>+</Button>
            <Button sm="6" className='mx-2 btn-warning mt-2' onClick={() => cart.removeOneFromCart(product.id)}>-</Button>
          </Col>
        </Form>
        <Button variant='danger' className='my-2 text-white mt-2' onClick={() => cart.deleteFromCart(product.id)}>Remove from cart</Button>
        </>
        :
         <Button className='mt-3 text-white' variant='warning' onClick={() => cart.addOneToCart(product.id)}>Buy</Button>}
      </Card.Body>
    </Card>
  )
}