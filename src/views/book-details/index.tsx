import {useNavigate, useParams } from 'react-router'
import Button from '../../components/common/button/button'
import { PersianNumber } from '../../helpers/persian-number'
import { BackArrow, BookmarkStroke } from '../../svg/icons'
import Description from './description'
import Information from './information'
import { books } from '../../constants/books'
import IconButton from '../../components/common/icon-button/icon-button'

function BookDetails() {
    const navigate = useNavigate()
    const { id } = useParams()
    const book = books.filter((b) => b?.id === id)

    return (
        <div
        className='
        flex
        flex-col
        w-full
        min-h-screen
        font-[IRANSans]
        '>

            <div
            style={{
                backgroundImage : `url(${book[0].cover})`
            }}
            className='
            relative
            flex
            flex-col
            items-center
            justify-between
            p-3
            pb-0
            w-full
            h-[300px]
            bg-cover
            bg-center
            '>

                
                {/* black box on top of the background with blur  backdrop */}
                <div
                className='
                z-[0]
                absolute
                inset-0
                w-full
                h-full
                bg-black/20
                backdrop-blur-[5px]
                '
                />

                <div
                className='
                w-full
                flex
                items-center
                justify-between
                z-[2]
                '>

                    <IconButton
                    Icon={BackArrow}
                    onClick={() => {
                        navigate(-1)
                    }}
                    />

                    <IconButton
                    Icon={BookmarkStroke}
                    />
                </div>

                <img
                className='
                z-[2]
                rounded-[8px]
                w-[128px]
                aspect-[64/101]
                bg-neutral-200
                -mb-[36px]
                '
                src={book[0].cover}
                />

            </div>

            <div
            className='
            flex
            flex-col
            items-center
            w-full
            mt-[36px]
            p-3
            pb-0
            gap-[10px]
            '>
                <h1
                className='
                text-[22px]
                font-medium
                text-primary-dark
                text-center
                '>
                    {book[0].title}
                </h1>

                <h3
                className='
                text-[16px]
                text-primary-dark/50
                text-center
                '>
                    {book[0].author.join(" , ")}
                </h3>

                <Button>
                    {`خرید | ${PersianNumber(book[0].price)} `}
                </Button>
            </div>

            <Description
            value={book[0].description}
            />

            <Information
            info={{
                author : book[0].author,
                pages : book[0].pages,
                price : book[0].price,
                published_at : book[0].published_at,
                publisher : book[0].publisher
            }}
            />

        </div>
    )
}

export default BookDetails