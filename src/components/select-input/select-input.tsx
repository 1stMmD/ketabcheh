import { useState } from 'react'
import { BackArrow } from '../../svg/icons'

type props = {
    label : string,
    values : string[],
    value : string,
    setValue : (v : string) => void
}

function SelectInput({
    label,
    setValue,
    value,
    values
} : props) {
    const [show , setShow] = useState<boolean>(false)

    return (
        <div
        className='
        flex
        flex-col
        gap-2
        '>
            <div
            onClick={() => {
                setShow(prev => !prev)
            }}
            className="
            px-4
            py-3
            flex
            flex-row
            items-center
            justify-between
            rounded-[8px]
            border
            border-[#8E8E93]
            stroke-[#292D32]
            fill-[#292D32]
            focus-within:border-primary
            focus-within:stroke-primary
            focus-within:fill-primary
            focus-within:shadow-[0px_0px_0px_2px]
            focus-within:shadow-primary/30
            gap-2
            ">
                <p
                className='
                text-typography
                text-[14px]
                font-medium
                whitespace-nowrap
                overflow-hidden
                text-ellipsis
                '>
                    {value ? value : label}
                </p>

                <BackArrow
                className={`
                transition-transform
                w-[24px]
                fill-primary-dark
                ${show ? "-rotate-90" : "rotate-90"}
                `}
                />
            </div>
        
            {show ? <div
            className='
            flex
            flex-col
            p-3
            rounded-[8px]
            shadow-lg
            border
            border-[#8E8E93]
            z-[10]
            bg-white
            '>
                {values.map((item, idx , list) => (
                    <>
                        <div
                        onClick={() => {
                            setValue(item)
                            setShow(false)
                        }}
                        key={item}
                        className='
                        flex
                        items-center
                        justify-between
                        '>
                            <p
                            className='
                            text-[12px]
                            text-typography
                            '>
                                {item}
                            </p>

                            <span
                            className={`'
                            w-[15px]
                            aspect-square
                            rounded-full
                            ${item === value ? "bg-primary" : ""}
                            outline
                            outline-[1px]
                            outline-primary
                            '`}>

                            </span>
                        </div>

                        { idx < list.length - 1 ? <span
                        key={idx}
                        className='
                        w-full
                        h-[1px]
                        bg-neutral-200
                        my-3
                        '
                        /> : ""}
                    </>
                ))}
            </div> : <></>}
        </div>
    )
}

export default SelectInput
