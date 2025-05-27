'use client'

import { RadioGroup } from '@headlessui/react'
import { CheckCircleSolid, CreditCard } from '@medusajs/icons'
import { Container, Heading, Text, clx } from '@medusajs/ui'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'

import { paymentInfoMap } from '@lib/constants'
import { initiatePaymentSession } from '@lib/data/cart'

import ErrorMessage from '@modules/checkout/components/error-message'
import PaymentContainer from '@modules/checkout/components/payment-container'

import PaymentButton from '../payment-button'

const Payment = ({
  cart,
  availablePaymentMethods,
}: {
  cart: any
  availablePaymentMethods: any[]
}) => {
  console.log('🚀 ~ availablePaymentMethods:', availablePaymentMethods)
  const activeSession = cart.payment_collection?.payment_sessions?.find(
    (paymentSession: any) => paymentSession.status === 'pending'
  )

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [redirectUri, setRedirectUri] = useState('')
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(
    activeSession?.provider_id ?? ''
  )

  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  const isOpen = searchParams.get('step') === 'payment'

  const setPaymentMethod = async (method: string) => {
    setError(null)
    setSelectedPaymentMethod(method)
  }

  const paidByGiftcard = cart?.gift_cards && cart?.gift_cards?.length > 0 && cart?.total === 0

  const paymentReady = (activeSession && cart?.shipping_methods.length !== 0) || paidByGiftcard

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams)
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )

  const handleEdit = () => {
    router.push(pathname + '?' + createQueryString('step', 'payment'), {
      scroll: false,
    })
  }

  const handleSubmit = async (paymentMethod: string) => {
    setIsLoading(true)
    try {
      const checkActiveSession = activeSession?.provider_id === selectedPaymentMethod

      if (!checkActiveSession) {
        const response = await initiatePaymentSession(cart, {
          provider_id: paymentMethod,
          data: {
            cart,
          },
        })
        setRedirectUri(
          response?.payment_collection?.payment_sessions?.[0].data?.redirectUri as string
        )
        console.log(
          '🚀 ~ Payment handleSubmit ~ redirectUri:',
          response.payment_collection.payment_sessions[0].data.redirectUri
        )
      }
    } catch (err: any) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    setError(null)
  }, [isOpen])

  return (
    <div>
      <div className='flex flex-row items-center justify-between mb-6'>
        <Heading
          level='h2'
          className={clx('flex flex-row text-3xl-regular gap-x-2 items-baseline', {
            'opacity-50 pointer-events-none select-none': !isOpen && !paymentReady,
          })}
        >
          Płatność
          {!isOpen && paymentReady && <CheckCircleSolid />}
        </Heading>
        {!isOpen && paymentReady && (
          <Text>
            <button
              onClick={handleEdit}
              className='text-ui-fg-interactive hover:text-ui-fg-interactive-hover'
              data-testid='edit-payment-button'
            >
              Edycja
            </button>
          </Text>
        )}
      </div>
      <div>
        <div className={isOpen ? 'block' : 'hidden'}>
          {!paidByGiftcard && availablePaymentMethods?.length && (
            <>
              <RadioGroup
                value={selectedPaymentMethod}
                onChange={(value: string) => {
                  setPaymentMethod(value)
                  handleSubmit(value)
                }}
              >
                {availablePaymentMethods.map((paymentMethod) => (
                  <div key={paymentMethod.id}>
                    <PaymentContainer
                      paymentInfoMap={paymentInfoMap}
                      paymentProviderId={paymentMethod.id}
                      selectedPaymentOptionId={selectedPaymentMethod}
                    />
                  </div>
                ))}
              </RadioGroup>
            </>
          )}

          {/* {paidByGiftcard && (
            <div className='flex flex-col w-1/3'>
              <Text className='txt-medium-plus text-ui-fg-base mb-1'>Payment method</Text>
              <Text className='txt-medium text-ui-fg-subtle' data-testid='payment-method-summary'>
                Gift card
              </Text>
            </div>
          )} */}

          <ErrorMessage error={error} data-testid='payment-method-error-message' />

          <div className='flex items-start gap-x-1 w-full mt-6 mb-6'>
            <div className='w-full'>
              <Text className='txt-xsmall-plus text-ui-fg-base'>
                Klikając przycisk 'Złóż zamówienie z obowiązkiem zapłaty' potwierdzasz, że
                zapoznałaś(-eś) się z naszym Regulaminem, Polityką Prywatności oraz Warunkami
                Sprzedaży i akceptujesz ich treść. Wyrażasz również zgodę na przetwarzanie Twoich
                danych osobowych w celu realizacji zamówienia.
              </Text>
            </div>
          </div>

          {/* <Button
            size='large'
            className='mt-6 bg-pika-100 text-black'
            onClick={handleSubmit}
            isLoading={isLoading}
            disabled={!selectedPaymentMethod && !paidByGiftcard}
            data-testid='submit-payment-button'
          >
            Przejdź do podsumowania
          </Button> */}
          <PaymentButton
            cart={cart}
            data-testid='submit-order-button'
            disabled={!selectedPaymentMethod && !paidByGiftcard}
            isLoading={isLoading}
            redirectUri={redirectUri}
          />

          <div className='flex items-start gap-x-1 w-full mt-6'>
            <div className='w-full'>
              <Text className='txt-xsmall text-gray-500 mb-1'>
                Płacąc akceptujesz Zasady płatności PayU
              </Text>
              <Text className='txt-xsmall text-gray-500 mb-1'>
                Administratorem Twoich danych osobowych jest PayU S.A. z siedzibą w Poznaniu
                (60-166), przy ul. Grunwaldzkiej 186. Twoje dane osobowe będą przetwarzane w celu
                realizacji transakcji płatniczej, powiadamiania Cię o statusie realizacji Twojej
                płatności, rozpatrywania reklamacji, a także w celu wypełnienia obowiązków prawnych
                ciążących na PayU.
              </Text>
            </div>
          </div>
        </div>

        <div className={isOpen ? 'hidden' : 'block'}>
          {cart && paymentReady && activeSession ? (
            <div className='flex items-start gap-x-1 w-full'>
              <div className='flex flex-col w-1/3'>
                <Text className='txt-medium-plus text-ui-fg-base mb-1'>Metoda płatności</Text>
                <Text className='txt-medium text-ui-fg-subtle' data-testid='payment-method-summary'>
                  {paymentInfoMap[activeSession?.provider_id]?.title || activeSession?.provider_id}
                </Text>
              </div>
              <div className='flex flex-col w-1/3'>
                <Text className='txt-medium-plus text-ui-fg-base mb-1'>Szczegóły płatności</Text>
                <div
                  className='flex gap-2 txt-medium text-ui-fg-subtle items-center'
                  data-testid='payment-details-summary'
                >
                  <Container className='flex items-center h-7 w-fit p-2 bg-ui-button-neutral-hover'>
                    {paymentInfoMap[selectedPaymentMethod]?.icon || <CreditCard />}
                  </Container>
                  <Text>Zostaną pokazane w kolejnych krokach</Text>
                </div>
              </div>
            </div>
          ) : paidByGiftcard ? (
            <div className='flex flex-col w-1/3'>
              <Text className='txt-medium-plus text-ui-fg-base mb-1'>Payment method</Text>
              <Text className='txt-medium text-ui-fg-subtle' data-testid='payment-method-summary'>
                Gift card
              </Text>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default Payment
