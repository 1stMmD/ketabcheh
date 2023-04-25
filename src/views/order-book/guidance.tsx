import Button from "../../components/common/button/button"

function Guidance() {
  return (
    <form
    className="
    flex
    flex-col
    gap-4
    text-primary-dark
    pb-6
    ">
        <h3
        className="
        text-[14px]
        font-medium
        ">
        راهنما
        </h3>

        <div
        className="
        flex
        flex-col
        gap-2
        ">
            <p
            className="
            text-[14px]
            font-light
            ">
            مجموعه کتابچه تمام تلاش خود را برای تهیه کتاب مورد نظر شما انجام میدهد ، مراحلی ک کتابچه برای تهیه کتاب برای شما طی میکند به صورت کامل در این صفحه شرح داده شده است . پس از تکمیل کردن اطلاعات کتاب و تهیه آن کتاب به دو صورت چاپی و یا آماده به شما تحویل داده میشود .
            </p>

            <div
            className="
            flex
            flex-col
            gap-1
            ">
                <h4
                className="
                font-medium
                text-[14px]
                ">
                    کتابچه چگونه کتاب ها را تهیه میکند ؟
                </h4>

                <p
                className="
                font-light
                text-[14px]
                ">
                    کتابچه با ارتباطی ک بین کتابفروشی ها ،‌ انتشارات ، توزیع کنندگان کتاب ،‌ چاپخانه ها و کتابخانه ها دارد در سریعترین زمان ممکن میتواند کتاب مورد نظر شما را تهیه یا چاپ کند .
                    در واقع روندی که برای تهیه کتاب لازم است توسط کتابچه انجام و کتاب برای شما به سرتاسر ایران ارسال میشود .
                </p>
            </div>
        </div>

        <div>
            <Button
            size="sm"
            className="
            !w-[unset]
            "
            >
            مطالعه کردم ،‌ ادامه
            </Button>
        </div>
    </form>
  )
}

export default Guidance