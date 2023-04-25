import Button from "../../components/common/button/button";

function OrderResults() {
    const result = results["success"];

    return (
        <div
        className="
        flex-shrink
        w-full
        relative
        flex
        flex-col
        text-primary-dark
        overflow-hidden
        pb-6
        ">
                <h3
                className="
                text-[14px]
                font-medium
                mb-2
                ">
                    نتایج برسی
                </h3>

                <div
                className="
                flex
                flex-col
                gap-1
                ">
                    <p
                    className={`
                    text-[14px]
                    font-normal
                    ${result.color}
                    `}>
                        {result.message}
                    </p>

                    {result.tip ? 
                    <p
                    className="
                    text-[14px]
                    text-primary-dark/80
                    ">
                        <span
                        className="
                        font-medium
                        ">
                        نکته : 
                        </span>

                        <span
                        className="
                        font-normal
                        ">
                            {" " + result.tip}
                        </span>
                    </p> 
                    :
                    <></>}
                </div>
                
                <div
                className="
                mt-4
                ">
                    <Button
                    size="sm">
                        {result.button}
                    </Button>
                </div>
        </div>
    )
}

export default OrderResults

const results = {
    "fail" : {
        message : "با عرض پوزش کتاب شما به نام “لطفا گوسفند نباشید” پیدا نشده و قابل تهیه نمیباشد .",
        color : "text-fail",
        tip : "این کتاب بعد از خرید شما در دسترس عموم قرار میگیرد",
        button : "در صورت موجود شدن خبرم کن ",
        function : () => ({})
    },
    "success" : {
        message : "کتاب شما به نام “لطفا گوسفند نباشید” با موفقیت تهیه و در فروشگاه موجود شده است .",
        color : "text-success",
        tip : "این کتاب بعد از خرید شما در دسترس عموم قرار میگیرد",
        button : "مشاهده صفحه محصول",
        function : () => ({})
    },
    "exists" : {
        message : "کتاب شما به نام “لطفا گوسفند نباشید” قبلا در فروشگاه موجود بوده و قابل تهیه .",
        color : "text-primary",
        tip : "",
        button : "مشاهده صفحه محصول",
        function : () => ({})
    }
}