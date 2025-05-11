import { HttpTypes } from '@medusajs/types'
import { Container, Heading, Text } from '@medusajs/ui'

import { paymentInfoMap } from '@lib/constants'
import { convertToLocale } from '@lib/util/money'

type PaymentDetailsProps = {
  order: HttpTypes.StoreOrder
}

const PaymentDetails = ({ order }: PaymentDetailsProps) => {
  const payment = order.payment_collections?.[0].payments?.[0]
  console.log('🚀 ~ PaymentDetails ~ paymentInfoMap:', payment?.provider_id)
  return (
    <div>
      <Heading level='h2' className='flex flex-row my-6'>
        Szczegóły płatności
      </Heading>
      <div>
        {payment && (
          <>
            <div className='flex items-start gap-x-1 w-full'>
              <div className='flex flex-col w-1/3'>
                <Text className='txt-medium-plus text-ui-fg-base mb-1'>Operator:</Text>
                <Text className='txt-medium text-blueGray' data-testid='payment-method'>
                  {paymentInfoMap[payment.provider_id].title}
                </Text>
              </div>
              <div className='flex flex-col w-2/3'>
                <Text className='txt-medium-plus text-ui-fg-base mb-1'>
                  {payment.provider_id === 'pp_system_default' ? 'Do zapłaty' : 'Opłacono'}:
                </Text>
                <div className='flex gap-2 txt-medium text-ui-fg-subtle items-center'>
                  <Container className='flex items-center h-7 w-fit p-2 bg-ui-button-neutral-hover'>
                    {paymentInfoMap[payment.provider_id].icon}
                  </Container>
                  <Text className='text-blueGray' data-testid='payment-amount'>
                    <span className='text-pika-100'>{`${convertToLocale({
                      amount: payment.amount,
                      currency_code: order.currency_code,
                    })}`}</span>
                    {payment.provider_id !== 'pp_system_default' && (
                      <>
                        {' '}
                        -{' '}
                        {`${new Date(payment.created_at ?? '').toLocaleDateString('pl-PL', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit',
                        })}`}
                      </>
                    )}
                  </Text>
                </div>
              </div>
            </div>
            <div className='flex items-start gap-x-1 w-full mt-4'>
              <div className='flex flex-col w-2/3'>
                <Text className='txt-medium-plus text-ui-fg-base mb-1'>Numer konta:</Text>
                <div className='flex gap-2 flex-col txt-medium text-ui-fg-subtle'>
                  <Text className='text-blueGray' data-testid='payment-amount'>
                    51 1140 2004 0000 3002 8078 8934 (mBank)
                  </Text>
                  <Text className='text-blueGray' data-testid='payment-amount'>
                    macaron.labs Marcin Kasperski
                  </Text>
                  <Text className='text-blueGray' data-testid='payment-amount'>
                    Proszę dokonać płatności w ciągu 3 dni roboczych. Po tym czasie zamówienie
                    zostanie anulowane.
                  </Text>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default PaymentDetails
