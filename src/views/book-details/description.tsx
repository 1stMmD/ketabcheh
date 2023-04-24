import { useState } from 'react'

const maxLength = 400

const desc = `
قدرت شروع ناقص چندبار شده که به‌خاطر احساس ناکافی بودن یا آماده نبودن شرایط، از انجام کاری که مد نظرتان بوده منصرف شده‌اید؟ کتاب قدرت شروع ناقص: جستارهایی درباره بهتر انجام دادن کارها (The Power of Imperfect Starts)، یک اثر فوق‌العاده است که به شما نشان می‌دهد انتظار برای ایده‌آل شدن شرایط، یک انتظار بیهوده است. با این تفکر، از انجام دادن کارهایی که دوست دارید، دور می‌شوید. شما باید با وجود کامل نبودن، آماده نبودن صد در صدی شرایط و پشت کردن به باورِ یک شروع خوب، کارهایی که دوست دارید را انجام دهید؛ وگرنه هیچ‌وقت دیگر انجام‌شان نخواهید داد. به این موقعیت، قدرت شروع ناقص می‌گویند.
کتاب قدرت شروع ناقص به نویسندگی جیمز کلییر، یکی از بهترین کتاب‌های روانشناسی است که درباره بهتر انجام دادن کارها صحبت می‌کند. این اثر شما را از خطر وسواس برای شروع کارها آشنا می‌کند و اعتقاد دارد که یک شروع ناقص، بهتر از شروع نکردن است. بسیاری از افراد به‌خاطر ترس از کامل نبودن و ایده‌آل نبودن شرایط، همیشه انجام دادن کارها را به تعویق می‌اندازند. آن‌ها در وسواس‌های خود غرق می‌شوند و میلِ انجام کارها را فراموش می‌کنند. اما تصورات ایده‌آل‌گرایانه، نمی‌تواند شما را به اهداف‌تان برساند؛ چرا که هنوز به سراغ انجام کارهای‌تان نرفته‌اید.`

function Description() {
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
                {showMore ? desc : desc.slice(0,maxLength)}
            </p>

            { desc.length > maxLength ? <div
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