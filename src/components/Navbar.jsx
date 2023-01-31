import React from 'react'
import {Button, Container, Navbar, Modal} from 'react-bootstrap'
import { CartContext } from '../CardContext'

import { useState, useContext } from 'react'

import CartProduct from './CartProduct'

export default function NavbarComponent() {
  const cart = useContext(CartContext)
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0)

  return (
    <>
    <Navbar expand="sm" className='mb-4'>
      <Navbar.Brand href='/' style={{fontSize: '25px', fontWeight: '500'}}>OutiQuest</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className='justify-content-end'>
        <Button  className='btn-warning text-white' onClick={handleShow}>Cart ({productsCount}) items</Button>
      </Navbar.Collapse>
    </Navbar>
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Shopping Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {productsCount > 0 ? 
        <>
        <p>Items in your cart:</p>
        {cart.items.map((currentProduct, idx) => (
          <CartProduct key={idx} currentProduct={currentProduct} id={currentProduct.id} quantity={currentProduct.quantity}/>
        ))}
        <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>
        <Button className='text-white' variant="warning">Purchase Items</Button>
        </> 
        :
        <h5>There are no items in your cart</h5> }
      </Modal.Body>
    </Modal>
    </>
  )
}
