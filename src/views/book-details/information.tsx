function Information() {
    const sections = [
        {
            name : "انتشارات",
            value : "خیلی سبز",
            color : "text-primary"
        },
        {
            name : "نویسندگان",
            value : "رمضان عباسی ،‌ میثم پریش",
            color : "text-primary"
        },
        {
            name : "تعداد صفحات",
            value : "۳۵۰",
            color : ""
        },
        {
            name : "قیمت",
            value : "۳۶,۰۰۰",
            color : ""
        },
        {
            name : "تاریخ نشر",
            value : "۱۳۹۶/۱۰/۱۵",
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
                        "
                        >
                            <p
                            className="
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