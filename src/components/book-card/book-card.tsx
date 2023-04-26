import { Link } from 'react-router-dom'
import { PersianNumber } from '../../helpers/persian-number'
import { UserTick } from '../../svg/icons'

type props = {
    info : {
        title :string,
        author : string[],
        publisher : string,
        price : number,
        cover : string,
        id : string
    }
}

function BookCard({
    info : {author,price,publisher,title, cover ,id}
} : props) {
  return (
    <Link
    to={`/book/${id}`}
    className='
    relative
    w-full
    flex
    gap-3
    '>

        <img
        src={cover}
        className="
        rounded-[8px]
        w-[128px]
        aspect-[64/101]
        bg-neutral-200
        "
        />  

        <div
        className='
        flex
        justify-between
        flex-col
        w-full
        max-w-full
        overflow-hidden
        min-h-full
        '>
            <div
            className='
            flex
            flex-col
            gap-2
            text-primary-dark
            '>
                <h3
                className='
                text-[14px]
                overflow-hidden
                text-ellipsis
                '>
                    {title}
                </h3>

                <h4
                className='
                text-[10px]
                overflow-hidden
                whitespace-nowrap
                text-ellipsis
                '>
                    {author.join(" , ")}
                </h4>

                <p
                className='
                text-[10px]
                '>
                انتشارات :‌ {publisher} 
                </p>
            </div>

            <div
            className='
            flex
            flex-wrap
            items-center
            justify-between
            '>

                <span
                className='
                flex
                items-center
                justify-center
                gap-2
                overflow-hidden
                '>

                    <UserTick
                    className='
                    stroke-success
                    w-[17px]
                    '
                    />

                    <p
                    className='
                    text-[10px]
                    text-success
                    text-ellipsis
                    overflow-hidden
                    whitespace-nowrap
                    '>
                    اماده تحویل
                    </p>

                </span>

                <p
                className='
                text-primary
                text-[16px]
                text-ellipsis
                overflow-hidden
                whitespace-nowrap
                '>
                    {PersianNumber(price)}
                </p>
                
            </div>
        </div>

    </Link>
  )
}

export default BookCard