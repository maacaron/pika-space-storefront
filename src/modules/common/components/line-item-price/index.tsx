import { HttpTypes } from '@medusajs/types'
import { clx } from '@medusajs/ui'

import { getPercentageDiff } from '@lib/util/get-precentage-diff'
import { convertToLocale } from '@lib/util/money'

type LineItemPriceProps = {
  item: HttpTypes.StoreCartLineItem | HttpTypes.StoreOrderLineItem
  style?: 'default' | 'tight'
  currencyCode: string
}

const LineItemPrice = ({ item, style = 'default', currencyCode }: LineItemPriceProps) => {
  const { total, original_total } = item
  const originalPrice = original_total
  const currentPrice = total
  const hasReducedPrice = currentPrice < originalPrice

  return (
    <div className='flex flex-col gap-x-2 text-ui-fg-subtle items-end'>
      <div className='text-left'>
        <span className='text-white' data-testid='product-price'>
          {convertToLocale({
            amount: currentPrice,
            currency_code: currencyCode,
          })}
        </span>
      </div>
    </div>
  )
}

export default LineItemPrice
