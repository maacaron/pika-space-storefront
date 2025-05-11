import { HttpTypes } from '@medusajs/types'
import { Heading, Text } from '@medusajs/ui'

type ShippingDetailsProps = {
  order: HttpTypes.StoreOrder
}

const ShippingDetails = ({ order }: ShippingDetailsProps) => {
  return (
    <div>
      <Heading level='h2' className='flex flex-row my-6'>
        Szczegóły dostawy
      </Heading>
      <div className='flex items-start gap-x-8'>
        <div className='flex flex-col w-1/3' data-testid='shipping-address-summary'>
          <Text className='txt-medium text-white'>
            {order.shipping_address?.first_name} {order.shipping_address?.last_name}
          </Text>
          <Text className='txt-medium text-blueGray'>
            Wybrany Paczkomat:{' '}
            <span className='text-pika-100'>
              {order.shipping_methods?.[0]?.data?.packageMachine}
            </span>
          </Text>
          <Text className='txt-medium text-blueGray'>Telefon: {order.shipping_address?.phone}</Text>
          <Text className='txt-medium text-blueGray'>Mail: {order.email}</Text>
        </div>
      </div>
    </div>
  )
}

export default ShippingDetails
