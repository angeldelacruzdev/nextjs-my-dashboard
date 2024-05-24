'use client'

import { IoCartOutline } from 'react-icons/io5'
import { SimpleWidget } from './SimpleWidget'
import { useAppSelector } from '@/store/hooks'
 
export const WidgetsGrid = () => {

    const inCart = useAppSelector(state => state.counter.count)

    return (
        <div className="flex flex-wrap p-2 justify-center m-4">
            <SimpleWidget title={`${inCart}`} icon={<IoCartOutline size={70} className='text-blue-600' />} subTitle='Productos agregados' label="Contador" href='/dashboard/counter' />

        </div>
    )
}
