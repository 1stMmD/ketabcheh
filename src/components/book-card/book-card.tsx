import React from 'react'
import { PersianNumber } from '../../helpers/persian-number'
import { UserTick } from '../../svg/icons'

function BookCard() {
  return (
    <div
    className='
    w-full
    flex
    items-stretch
    gap-3
    '>

        <img
        src={"https://newcdn.fidibo.com/images/books/135684_11806_normal.jpg?width=200"}
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
                '>
                قدرت شروع ناقص
                </h3>

                <h4
                className='
                text-[10px]
                '>
                اثر جیمز کلییز
                </h4>

                <p
                className='
                text-[10px]
                '>
                انتشارات :‌ نشر سبز
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
                    {PersianNumber(140000)}
                </p>
                
            </div>
        </div>

    </div>
  )
}

export default BookCard