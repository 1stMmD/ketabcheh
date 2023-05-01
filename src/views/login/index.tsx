import { useState } from "react"
import { useNavigate } from "react-router"
import Button from "../../components/common/button/button"
import TextInput from "../../components/common/text-input/text-input"
import {Password, User } from "../../svg/icons"
import { KetabchehLogo } from "../../svg/ketabcheh-logo"
import { authAxios } from "../../api/axiosAuth"

function Signup() {
    const navigate = useNavigate()
    const [data, setData] = useState({
        user : "",
        password : ""
    })

    const [errors , setErrors] = useState({
        user : "",
        password : "",
        main : ""
    })

    const fields = [
        {
            label : "شماره موبایل یا ایمیل",
            Icon : User,
            value : data.user,
            setValue : (v : string) => {
                setData(prev => ({
                    ...prev,
                    user : v
                }))
            },
            error : errors.user
        },
        {
            label : "رمز عبور",
            Icon : Password,
            value : data.password,
            setValue : (v : string) => {
                setData(prev => ({
                    ...prev,
                    password : v
                }))
            },
            error : errors.password
        },
    ]

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
            onSubmit={async (e) => {
                e.preventDefault()
                let used = ""

                setErrors({
                    user : "",
                    main : "",
                    password : "",
                })

                const {password, user } = data

                if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(user)) used = "email"

                if(/^(\+98|0)?9\d{9}$/.test(user)) used = "phone"

                if(password.length < 8) {
                    setErrors(prev => ({
                        ...prev,
                        password : "رمز وارد شده باید بیشتر از 8 کاراکتر باشد"
                    }))

                    return
                }
                
                try{
                    await authAxios.post("/auth/login", {
                        password,
                        [used] : user
                    })
                    navigate("/home")
                }
                catch(err){
                    console.log(err)
                    return
                }
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
                ورود به کتابچه
                </h1>

                <div
                className="
                flex
                flex-col
                gap-3
                ">

                    {fields.map(({label,Icon,setValue,value,error} , idx) => (
                        <TextInput
                        error={error}
                        required
                        label={label}
                        Icon={Icon}
                        setValue={setValue}
                        value={value}
                        key={idx}
                        />
                    ))}

                    <div
                    className="
                    pt-2
                    flex
                    flex-col
                    gap-1
                    ">
                        <Button>
                        ثبت نام
                        </Button>

                        { errors.main ? 
                        <p
                        className="
                        text-fail
                        text-[14px]
                        ">
                            {errors.main}
                        </p> 
                        : <></>}
                    </div>
                </div>
            </form>

        </div>
    )
}

export default Signup