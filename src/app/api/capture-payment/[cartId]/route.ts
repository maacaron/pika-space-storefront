import { NextRequest, NextResponse } from 'next/server'

import { placeOrder, retrieveCart } from '@lib/data/cart'

type Params = Promise<{ cartId: string }>

export async function GET(req: NextRequest, { params }: { params: Params }) {
  const { cartId } = await params
  const { origin, searchParams } = req.nextUrl

  const cart = await retrieveCart(cartId)

  if (!cart) {
    return NextResponse.redirect(origin)
  }

  let paymentSession

  if (
    cart.payment_collection?.payment_sessions?.length &&
    cart.payment_collection?.payment_sessions?.[0]
  ) {
    paymentSession = cart.payment_collection.payment_sessions[0]
  }

  if (!paymentSession || !['authorized'].includes(paymentSession.status)) {
    return NextResponse.redirect(`${origin}/cart?step=review&error=payment_failed`)
  }

  const order = await placeOrder(cartId)

  return NextResponse.redirect(`${origin}/order/${order.id}/confirmed`)
}
