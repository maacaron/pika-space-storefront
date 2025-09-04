import { HttpTypes } from '@medusajs/types'
import { Heading } from '@medusajs/ui'
import { cookies as nextCookies } from 'next/headers'

import CartTotals from '@modules/common/components/cart-totals'
import Items from '@modules/order/components/items'
import OrderDetails from '@modules/order/components/order-details'
import PaymentDetails from '@modules/order/components/payment-details'
import ShippingDetails from '@modules/order/components/shipping-details'

type OrderCompletedTemplateProps = {
  order: HttpTypes.StoreOrder
}

export default async function OrderCompletedTemplate({ order }: OrderCompletedTemplateProps) {
  const cookies = await nextCookies()

  const isOnboarding = cookies.get('_medusa_onboarding')?.value === 'true'

  return (
    <div className='grid grid-cols-3 gap-4 w-full h-full min-h-[calc(100vh-64px)]'>
      <div className='col-span-1 content-container pt-[128px] pb-[128px] pl-[80px] pr-[80px] bg-blueBlack'>
        <Items order={order} />
        <CartTotals totals={order} />
      </div>
      <div className='col-span-2 content-container pt-[128px] pb-[128px] pl-[80px] pr-[80px] bg-black'>
        <Heading level='h1' className='flex flex-col gap-y-3 text-ui-fg-base text-3xl mb-4'>
          <span>Dziękujemy!</span>
          <span>Twoje zamówienie zostało pomyślnie złożone.</span>
        </Heading>
        <OrderDetails order={order} />
        <hr className='mt-12 mb-12 border-divider' />
        <ShippingDetails order={order} />
        <hr className='mt-12 mb-12 border-divider' />
        <PaymentDetails order={order} />
      </div>
    </div>
  )
}
