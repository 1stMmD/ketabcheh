import { useState } from 'react'

const maxLength = 400

type props = {
    value : string
}

function Description({
    value
} : props) {
    const [showMore , setShowMore] = useState<boolean>(false)

    return (
        <div
        className='
        relative
        flex
        flex-col
        px-3
        mt-[36px]
        gap-2
        '>
            <h4
            className='
            text-[16px]
            font-bold
            text-primary-dark
            '>
            درباره کتاب
            </h4>

            <p
            className='
            text-[16px]
            text-primary-dark/50
            overflow-hidden
            '>
                {showMore ? value : value.slice(0,maxLength)}
            </p>

            { value.length > maxLength ? <div
            className={`
            ${ showMore ? 
                `
                ` 
                : 
                `
                bg-gradient-to-t
                from-white
                to-transparent
                absolute
                bottom-0
                left-0
                ` 
            }
            
            flex
            items-center
            justify-center
            w-full
            
            p-3
            `}>

                <button
                onClick={() => {
                    setShowMore(prev => !prev)
                }}
                className='
                font-bold
                text-primary
                '>
                    {showMore ? "مشاهده کمتر" : "مشاهده بیشتر"}
                
                </button>

            </div> : <></>}
        </div>
    )
}

export default Description