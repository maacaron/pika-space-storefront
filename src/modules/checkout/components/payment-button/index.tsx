'use client'

import { HttpTypes } from '@medusajs/types'
import { Button } from '@medusajs/ui'
import React, { useState } from 'react'

import { isManual } from '@lib/constants'
import { placeOrder } from '@lib/data/cart'

import ErrorMessage from '../error-message'

type PaymentButtonProps = {
  cart: HttpTypes.StoreCart
  'data-testid': string
  disabled: boolean
  isLoading: boolean
}

const PaymentButton: React.FC<PaymentButtonProps> = ({
  cart,
  'data-testid': dataTestId,
  disabled,
  isLoading,
}) => {
  const notReady =
    !cart ||
    !cart.shipping_address ||
    !cart.billing_address ||
    !cart.email ||
    (cart.shipping_methods?.length ?? 0) < 1

  const paymentSession = cart.payment_collection?.payment_sessions?.[0]

  switch (true) {
    case isManual(paymentSession?.provider_id):
      return <ManualTestPaymentButton notReady={notReady} data-testid={dataTestId} />
    default:
      return <Button disabled={disabled}>Wybierz metodę płatności</Button>
  }
}

const ManualTestPaymentButton = ({ notReady }: { notReady: boolean }) => {
  const [submitting, setSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const onPaymentCompleted = async () => {
    await placeOrder()
      .catch((err) => {
        setErrorMessage(err.message)
      })
      .finally(() => {
        setSubmitting(false)
      })
  }

  const handlePayment = () => {
    setSubmitting(true)

    onPaymentCompleted()
  }

  return (
    <>
      <Button
        disabled={notReady}
        isLoading={submitting}
        onClick={handlePayment}
        size='large'
        data-testid='submit-order-button'
        className='bg-pika-40 hover:bg-pika-100 text-black'
      >
        Złóż zamówienie z obowiązkiem zapłaty
      </Button>
      <ErrorMessage error={errorMessage} data-testid='manual-payment-error-message' />
    </>
  )
}

export default PaymentButton
