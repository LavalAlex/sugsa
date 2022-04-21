import React from 'react'
import Button from '../utils/Button'

export default function ButtonFloat (props) {
  const { Icono } = { ...props }
  return (
    <Button
      {...props}
      style={{
        position: 'fixed',
        display: 'flex',
        flexDirection: 'column',
        bottom: '1rem',
        right: '1rem'
      }}
    >
      <Icono />
    </Button>
  )
}
