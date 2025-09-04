import { HttpTypes } from '@medusajs/types'
import { clx } from '@medusajs/ui'

import { convertToLocale } from '@lib/util/money'

type LineItemUnitPriceProps = {
  item: HttpTypes.StoreCartLineItem | HttpTypes.StoreOrderLineItem
  style?: 'default' | 'tight'
  currencyCode: string
}

const LineItemUnitPrice = ({ item, style = 'default', currencyCode }: LineItemUnitPriceProps) => {
  const { total, original_total } = item
  const hasReducedPrice = total < original_total

  const percentage_diff = Math.round(((original_total - total) / original_total) * 100)

  return (
    <div className='flex flex-col text-blueGray justify-center h-full'>
      <span data-testid='product-unit-price'>
        {convertToLocale({
          amount: total / item.quantity,
          currency_code: currencyCode,
        })}
      </span>
    </div>
  )
}

export default LineItemUnitPrice
