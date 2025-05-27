import { AtSymbolIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { Text, clx } from '@medusajs/ui'

import { listCategories } from '@lib/data/categories'
import { listCollections } from '@lib/data/collections'

import LocalizedClientLink from '@modules/common/components/localized-client-link'
import MedusaCTA from '@modules/layout/components/medusa-cta'

import { Logo } from '../nav/logo'

export default async function Footer() {
  const { collections } = await listCollections({
    fields: '*products',
  })
  const productCategories = await listCategories()

  return (
    <footer className='w-full'>
      <div className='content-container flex flex-col w-full'>
        <div className='flex flex-col gap-y-6 xsmall:flex-row items-start justify-between py-40'>
          <div>
            <LocalizedClientLink
              href='/'
              className='txt-compact-xlarge-plus text-ui-fg-subtle hover:text-pika-100 uppercase'
            >
              <Logo />
            </LocalizedClientLink>
          </div>
          <div className='text-small-regular gap-10 md:gap-x-16 grid grid-cols-2 sm:grid-cols-3'>
            {productCategories && productCategories?.length > 0 && (
              <div className='flex flex-col gap-y-2'>
                <span className='txt-small-plus txt-ui-fg-base mb-3'>Kategorie</span>
                <ul className='grid grid-cols-1 gap-2' data-testid='footer-categories'>
                  {productCategories?.slice(0, 6).map((c) => {
                    if (c.parent_category) {
                      return
                    }

                    const children =
                      c.category_children?.map((child) => ({
                        name: child.name,
                        handle: child.handle,
                        id: child.id,
                      })) || null

                    return (
                      <li className='flex flex-col gap-2 text-ui-fg-subtle txt-small' key={c.id}>
                        <LocalizedClientLink
                          className={clx(
                            'text-blueGray hover:text-pika-100',
                            children && 'txt-small-plus'
                          )}
                          href={`/categories/${c.handle}`}
                          data-testid='category-link'
                        >
                          {c.name}
                        </LocalizedClientLink>
                        {children && (
                          <ul className='grid grid-cols-1 ml-3 gap-2'>
                            {children &&
                              children.map((child) => (
                                <li key={child.id}>
                                  <LocalizedClientLink
                                    className='text-blueGray hover:text-pika-100'
                                    href={`/categories/${child.handle}`}
                                    data-testid='category-link'
                                  >
                                    {child.name}
                                  </LocalizedClientLink>
                                </li>
                              ))}
                          </ul>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}
            {/* {collections && collections.length > 0 && (
              <div className='flex flex-col gap-y-2'>
                <span className='txt-small-plus txt-ui-fg-base'>Kolekcje</span>
                <ul
                  className={clx('grid grid-cols-1 gap-2 text-ui-fg-subtle txt-small', {
                    'grid-cols-2': (collections?.length || 0) > 3,
                  })}
                >
                  {collections?.slice(0, 6).map((c) => (
                    <li key={c.id}>
                      <LocalizedClientLink
                        className='hover:text-pika-100'
                        href={`/collections/${c.handle}`}
                      >
                        {c.title}
                      </LocalizedClientLink>
                    </li>
                  ))}
                </ul>
              </div>
            )} */}
            <div className='flex flex-col gap-y-2'>
              <span className='txt-small-plus txt-ui-fg-base mb-3'>Nasza firma</span>
              <ul className='grid grid-cols-1 gap-y-2 text-ui-fg-subtle txt-small'>
                <li>
                  <LocalizedClientLink
                    className='text-blueGray hover:text-pika-100'
                    href='/regulamin'
                  >
                    Regulamin
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink className='text-blueGray hover:text-pika-100' href='/rodo'>
                    Polityka prywatności
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink
                    className='text-blueGray hover:text-pika-100'
                    href='/ciasteczka'
                  >
                    Polityka cookies
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink
                    className='text-blueGray hover:text-pika-100'
                    href='/dostawa'
                  >
                    Formy i czas dostawy
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink
                    className='text-blueGray hover:text-pika-100'
                    href='/reklamacje'
                  >
                    Reklamacje
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink className='text-blueGray hover:text-pika-100' href='/zwroty'>
                    Zwroty
                  </LocalizedClientLink>
                </li>
              </ul>
            </div>
            <div className='flex flex-col gap-y-2'>
              <span className='txt-small-plus txt-ui-fg-base mb-3'>Dane kontaktowe</span>
              <ul
                className={clx('grid grid-cols-1 gap-2 text-ui-fg-subtle txt-small', {
                  'grid-cols-2': (collections?.length || 0) > 3,
                })}
              >
                <li>
                  <a className='flex text-blueGray hover:text-pika-100' href='tel:785075569'>
                    <span className='w-[16px] mr-2'>
                      <PhoneIcon />
                    </span>{' '}
                    785 07 55 69
                  </a>
                </li>
                <li>
                  <a
                    className='flex text-blueGray hover:text-pika-100'
                    href='mailto:macaron.labs@gmail.com'
                  >
                    <span className='w-[16px] mr-2'>
                      <AtSymbolIcon />
                    </span>{' '}
                    macaron.labs@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='flex w-full mb-16 justify-between text-blueGray'>
          <MedusaCTA />
        </div>
      </div>
    </footer>
  )
}
