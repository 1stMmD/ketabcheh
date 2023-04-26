import Button from "../../components/common/button/button"

type props = {
    onSubmit : () => void
}

function OrderConfirmation({
    onSubmit
} : props) {
  return (
    <form
    onSubmit={(e) => {
        e.preventDefault()
        onSubmit()
    }}
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
            تایید صحت کتاب
        </h3>

        <p
        className={`
        text-[14px]
        font-normal
        `}>
            در صورتی اطلاعات کتاب درست بوده و مطابق خواسته شما میباشد ،‌ مراحل تهیه کتاب را تایید و به ما جهت بهبود کیفیت خدمات کمک کنید.
        </p>

        <div
        className="
        mt-4
        ">
            <Button
            size="sm"
            className="
            !w-[unset]
            "
            >
                تایید صحت کتاب
            </Button>
        </div>
        

    </form>
  )
}

export default OrderConfirmation