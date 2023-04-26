import { useNavigate } from "react-router"
import Button from "../../components/common/button/button"
import TextInput from "../../components/common/text-input/text-input"
import { Email, Password, Phone, User } from "../../svg/icons"
import { KetabchehLogo } from "../../svg/ketabcheh-logo"

function Signup() {
    const navigate = useNavigate()
    
    return (
        <div
        className="
        min-h-screen
        w-full
        flex
        flex-col
        items-center
        font-[IRANSans]
        ">

            <div
            className="
            flex
            items-center
            justify-center
            gap-6
            mt-4
            ">

                <KetabchehLogo
                className="
                w-[81px]
                "
                />

                <p
                className="
                text-[31px]
                font-bold
                font-[Kalameh]
                text-primary
                ">
                    کتابچه
                </p>

            </div>

            <img
            src="auth.png"
            className="
            w-[60vw]
            my-[38px]
            "
            />

            <form
            onSubmit={(e) => {
                e.preventDefault()
                navigate("/home")
            }}
            className="
            w-full
            mt-[auto]
            rounded-tl-[20px]
            rounded-tr-[20px]
            shadow-[0px_-28px_82px_0]
            shadow-black/5
            px-3
            pb-5
            ">
                <h1
                className="
                w-full
                text-center
                text-[26px]
                my-4
                font-medium
                ">
                ثبت نام در کتابچه
                </h1>

                <div
                className="
                flex
                flex-col
                gap-3
                ">
                
                    <TextInput
                    Icon={User}
                    label="نام و نام خانوادگی"
                    />
                    <TextInput
                    Icon={Email}
                    label="ایمیل"
                    />
                    <TextInput
                    Icon={Phone}
                    label="شماره تلفن"
                    />
                    <TextInput
                    Icon={Password}
                    label="رمز عبور"
                    />

                    <div
                    className="
                    pt-2
                    ">
                        <Button>
                        ثبت نام
                        </Button>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default Signup