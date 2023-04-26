import { PersianNumber } from "../../helpers/persian-number"

type props = {
    info : {
        publisher : string,
        author : string[],
        pages : number,
        price : number,
        published_at : string,
    }
}

function Information({
    info : { author, pages, price, published_at, publisher }
} : props) {
    const sections = [
        {
            name : "انتشارات",
            value : publisher,
            color : "text-primary"
        },
        {
            name : "نویسندگان",
            value : author.join(" , "),
            color : "text-primary"
        },
        {
            name : "تعداد صفحات",
            value : PersianNumber(pages),
            color : ""
        },
        {
            name : "قیمت",
            value : PersianNumber(price),
            color : ""
        },
        {
            name : "تاریخ نشر",
            value : published_at,
            color : ""
        },
    ]

    return (
        <div
        className="
        flex
        flex-col
        px-3
        mt-[36px]
        mb-[22px]
        gap-6
        ">
            <h4
            className='
            text-[16px]
            font-bold
            text-primary-dark
            '>
            اطلاعات کتاب
            </h4>

            <div
            className="
            rounded-[8px]
            p-4
            bg-[#F6F7F9]
            ">
                {sections.map(({name,value,color},idx , list) => (
                    <>
                        <span
                        className="
                        overflow-hidden
                        text-ellipsis
                        text-[14px]
                        flex
                        items-center
                        justify-between
                        text-primary-dark
                        gap-2
                        "
                        >
                            <p
                            className="
                            flex-shrink-0
                            text-ellipsis
                            overflow-hidden
                            whitespace-nowrap
                            ">{name}</p>

                            <p
                            className={`
                            text-ellipsis
                            overflow-hidden
                            whitespace-nowrap
                            ${color}
                            `}>
                                {value}
                            </p>
                        </span>

                        { idx < list.length - 1 ? <span
                        className="
                        flex
                        w-full
                        h-[1px]
                        bg-[#E7E9EF]
                        my-3
                        "
                        /> : <></>}
                    </>
                ))}
            </div>
        </div>
    )
}

export default Information