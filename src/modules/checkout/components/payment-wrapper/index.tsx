'use client'

import { HttpTypes } from '@medusajs/types'
import React from 'react'

type PaymentWrapperProps = {
  cart: HttpTypes.StoreCart
  children: React.ReactNode
}

const PaymentWrapper: React.FC<PaymentWrapperProps> = ({ cart, children }) => {
  const paymentSession = cart.payment_collection?.payment_sessions?.find(
    (s) => s.status === 'pending'
  )

  return <div>{children}</div>
}

export default PaymentWrapper
