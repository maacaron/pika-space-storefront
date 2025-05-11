import { Text } from '@medusajs/ui'

import Medusa from '../../../common/icons/medusa'
import NextJs from '../../../common/icons/nextjs'

const MedusaCTA = () => {
  return (
    <div className='py-4 w-full flex items-center justify-center flex-col'>
      <Text className='flex gap-x-2 txt-compact-small-plus items-center'>
        pika space &copy; 2025. Powered by
        <a href='https://www.medusajs.com' target='_blank' rel='noreferrer'>
          <Medusa fill='#9ca3af' className='fill-[#9ca3af]' />
        </a>
        &
        <a href='https://nextjs.org' target='_blank' rel='noreferrer'>
          <NextJs fill='#9ca3af' />
        </a>
      </Text>
      <Text className='flex gap-x-2 txt-compact-small-plus items-center '>
        Made with 💕 to Pokémon in Gdańsk, a city of freedom in Poland.
      </Text>
    </div>
  )
}

export default MedusaCTA
