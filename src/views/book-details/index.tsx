import Button from '../../components/common/button/button'
import { PersianNumber } from '../../helpers/persian-number'
import { BackArrow, BookmarkStroke } from '../../svg/icons'
import Description from './description'
import Information from './information'

function BookDetails() {
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
            backgroundImage : `url("https://newcdn.fidibo.com/images/books/135684_11806_normal.jpg?width=200")`
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
                <button
                className='
                p-3
                bg-white
                rounded-[8px]
                outline-[1px]
                outline
                outline-[#E1E3EA]
                '>
                    <BackArrow
                    className='
                    w-[24px]
                    fill-primary-dark
                    '
                    />
                </button>

                <button
                className='
                p-3
                bg-white
                rounded-[8px]
                outline-[1px]
                outline
                outline-[#E1E3EA]
                '>
                    <BookmarkStroke
                    className='
                    w-[24px]
                    fill-primary-dark
                    '
                    />
                </button>
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
            src="https://newcdn.fidibo.com/images/books/135684_11806_normal.jpg?width=200"
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
            '>
            قدرت شروع ناقص
            </h1>

            <h3
            className='
            text-[16px]
            text-primary-dark/50
            '>
            اثر جمیز کلییر
            </h3>

            <Button>
                {`خرید | ${PersianNumber(140000)} `}
            </Button>
        </div>

        <Description/>

        <Information/>

    </div>
  )
}

export default BookDetails