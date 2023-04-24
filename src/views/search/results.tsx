import { useState, useEffect } from 'react'
import SearchInput from '../../components/search-input/search-input'
import IconButton from '../../components/common/icon-button/icon-button'
import { BackArrow } from '../../svg/icons'
import { useNavigate, useParams } from 'react-router'

function Results() {
    const { text } = useParams()
    const [value , setValue] = useState<string>(text ?? "")
    const navigate = useNavigate()

    useEffect(() => {
        setValue(text ?? "")
    },[text])
    
    return (
        <div
        className='
        w-full
        min-h-[calc(100vh_-_56px)]
        flex
        flex-col
        p-3
        gap-4
        font-[IRANSans]
        '>

            <div
            className='
            flex
            gap-2
            '>
                <IconButton
                Icon={BackArrow}
                onClick={() => {
                    navigate(-1)
                }}
                />
                <SearchInput
                value={value}
                setValue={(v : string) => {
                    setValue(v)
                }}
                Icon={ResultsForText}
                onSubmit={(e) => {
                    e.preventDefault()
                    navigate("/search/" + value)
                }}
                />

            </div>

            <div
            className='
            relative
            flex
            items-center
            justify-center
            flex-col
            gap-2
            p-2
            rounded-[8px]
            bg-primary/10
            '>
                <p
                className='
                text-center
                text-[12px]
                '>
                کتابتو پیدا نکردی ؟ میتونیم برات تهیه کنیم !
                </p>

                <button
                className='
                p-3
                text-[10px]
                bg-primary
                text-white
                text-light
                rounded-[8px]
                '>
                سفارش کتاب
                </button>

            </div>

        </div>
    )
}

export default Results

const ResultsForText = () => (
    <span
    className={`
    text-[14px]
    whitespace-nowrap
    text-primary-dark/50
    font-medium
    `}>
        نتایج برای:
    </span>
)