import Button from "../../components/common/button/button"
import ProviderButton from "../../components/common/provider-button/provider-button"
import { Google } from "../../svg/providers"

function Boarding() {
  return (
    <div
    className="
    relative
    flex
    flex-col
    min-h-screen
    px-3
    font-[IRANSans]
    gap-[32px]
    ">

        <img
        className="
        mt-[35px]
        "
        src="boarding.png"
        />

        <div
        dir="rtl"
        className="
        flex
        flex-col
        gap-4
        text-center
        mt-[60px]
        font-normal
        ">
            <h1
            className="
            text-[26px]
            font-medium
            ">
            کتابچه ؛‌ سفارش آنلاین کتاب 
            </h1>

            <p>
            کتابچه یک پلتفرم آنلاین برای سفارش کتاب های مختلف از جمله کتاب های کمیاب است .
            <br/>
            تمرکز اصلی این پلتفرم روی تهیه کتاب برای کاربران خود میباشد
            </p>
        </div>

        <div
        className="
        mt-[auto]
        mb-[34px]
        flex
        flex-col
        gap-2
        ">
            <div
            className="
            font-light
            grid
            grid-cols-2
            gap-5
            ">

                <Button>
                    ثبت نام
                </Button>

                <Button>
                    ورود
                </Button>

            </div>

            <div
            className="
            flex
            items-center
            gap-2
            ">
                <span
                className="
                bg-[#F0F2F5]
                h-[1px]
                w-full
                "/>
                    
                <p
                className="
                text-[#A8AEC2]
                text-[12px]
                ">
                    یا
                </p>

                <span
                className="
                bg-[#F0F2F5]
                h-[1px]
                w-full
                "/>

            </div>

            <ProviderButton
            Icon={Google}
            >
                Google
            </ProviderButton>
        </div>

    </div>
  )
}

export default Boarding