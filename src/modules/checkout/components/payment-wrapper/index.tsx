'use client'

import { HttpTypes } from '@medusajs/types'
import { loadStripe } from '@stripe/stripe-js'
import React from 'react'

type PaymentWrapperProps = {
  cart: HttpTypes.StoreCart
  children: React.ReactNode
}

const stripeKey = process.env.NEXT_PUBLIC_STRIPE_KEY
const stripePromise = stripeKey ? loadStripe(stripeKey) : null

const PaymentWrapper: React.FC<PaymentWrapperProps> = ({ cart, children }) => {
  const paymentSession = cart.payment_collection?.payment_sessions?.find(
    (s) => s.status === 'pending'
  )

  return <div>{children}</div>
}

export default PaymentWrapper
