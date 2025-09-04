import { ArrowUpRightMini } from '@medusajs/icons'
import { Text } from '@medusajs/ui'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import InteractiveLink from '@modules/common/components/interactive-link'

import space from './space.jpg'

export const metadata: Metadata = {
  title: '404',
  description: 'Jesteś w przestrzeni między wymiarami',
}

export default function NotFound() {
  return (
    <div className='flex flex-col gap-4 items-center justify-center min-h-[calc(100vh-64px)] bg-black'>
      <h1 className='text-2xl-semi text-ui-fg-base'>
        Ups, jesteś w przestrzeni między wymiarami. Strona nie została znaleziona
      </h1>

      <Link href='/' className='flex flex-col items-center text-pika-50 hover:text-pika-100'>
        <Image src={space} alt='Space' width={500} height={500} className='mb-10' />
        Wróć na stronę główną
      </Link>
    </div>
  )
}
