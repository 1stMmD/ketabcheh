import { useState, useEffect } from 'react'
import SearchInput from '../../components/search-input/search-input'
import IconButton from '../../components/common/icon-button/icon-button'
import { BackArrow } from '../../svg/icons'
import { useNavigate, useParams } from 'react-router'
import BookCard from '../../components/book-card/book-card'
import Button from '../../components/common/button/button'
import { books } from '../../constants/books'

function Results() {
    const { text } = useParams()
    const [value , setValue] = useState<string>(text ?? "")
    const navigate = useNavigate()

    const searchResult = books.filter((b) => b.title.search(text ?? "") >= 0)

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
        pb-7
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
            
            {searchResult.length ? 
            <>
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

                <div
                className='
                flex
                flex-col
                gap-4
                '>
                    {searchResult.map(({author , cover,price,publisher,title, id},idx) => (
                        <BookCard
                        info={{
                            id,
                            author,
                            cover,
                            price,
                            publisher,
                            title
                        }}
                        key={idx}
                        />
                    ))}
                </div>
            </> 
            :
            <div
            className='
            flex
            items-center
            justify-center
            my-auto
            '>
                <div
                className="
                flex
                flex-col
                items-center
                ">
                    <h4
                    className="
                    text-[18px]
                    font-bold
                    text-center
                    ">
                        کتاب پیدا نشد !
                    </h4>

                    <h5
                    className="
                    mt-2
                    mb-3
                    text-[12px]
                    font-medium
                    text-center
                    text-black/50
                    ">
                        اگه کتابی ک میخوای رو پیدا نکردی میتونی تهیه کتاب رو به ما بسپاری !
                    </h5>
                    
                    <Button
                    onClick={() => {
                        navigate("/order")
                    }}
                    className="
                    p-3
                    !w-[min(146px_,_100%)]
                    ">
                    سفارش کتاب
                    </Button>

                    <img
                    src="/3d-casual-life-searching-for-idea.png"
                    className="
                    w-[70%]
                    mt-[28px]
                    mb-[36px]
                    "
                    />
                </div>
            </div>
            }

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