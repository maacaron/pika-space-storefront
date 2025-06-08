import { NextRequest, NextResponse } from 'next/server'

import { sdk } from '@lib/config'
import { placeOrder, retrieveCart } from '@lib/data/cart'

type Params = Promise<{ cartId: string }>

export async function GET(req: NextRequest, { params }: { params: Params }) {
  console.log('🚀 ~ GET ~ params:', await params)
  const { cartId } = await params
  const { origin, searchParams } = req.nextUrl

  const cart = await retrieveCart(cartId)

  if (!cart) {
    return NextResponse.redirect(origin)
  }
  console.log('🚀 ~ GET ~ cart:', cart)
  console.log('🚀 ~ GET ~ cart:', cart.payment_collection?.payment_sessions)
  console.log('🚀 ~ GET ~ cart:', cart.payment_collection?.payment_sessions?.[0].data?.status)

  //   if (
  //     !paymentSession ||
  //     paymentSession.data.client_secret !== paymentIntentClientSecret ||
  //     !['pending', 'succeeded'].includes(redirectStatus) ||
  //     !['pending', 'authorized'].includes(paymentSession.status)
  //   ) {
  //     return NextResponse.redirect(`${origin}/cart?step=review&error=payment_failed`)
  //   }

  //   const order = await placeOrder(cartId)

  return NextResponse.redirect(`${origin}/cart?step=review&error=payment_failed`)
  //   return NextResponse.redirect(`${origin}/order/${order.id}/confirmed`)
}
