import { useState } from 'react'
import ChipInput from '../../components/chip-input/chip-input'
import TextInput from '../../components/common/text-input/text-input'

function OrderBook() {
    const [ value , setValue ] = useState<string[] | []>([])
    return (
        <div
        className='
        w-full
        min-h-screen
        flex
        flex-col
        p-3
        font-[IRANSans]
        '>
            <ChipInput
            deleteValue={(i : number) => {
                setValue(prev => {
                    const clone = [...prev]
                    clone.splice(i,1)
                    return clone
                })
            }}
            value={value}
            setValue={(v : string) => {
                setValue(prev => [...prev, v])
            }}
            label='کلمات کلیدی'
            />
        </div>
    )
}

export default OrderBook