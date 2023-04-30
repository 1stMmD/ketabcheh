import { useState } from "react"
import { useNavigate } from "react-router"
import Button from "../../components/common/button/button"
import TextInput from "../../components/common/text-input/text-input"
import { Email, Password, Phone, User } from "../../svg/icons"
import { KetabchehLogo } from "../../svg/ketabcheh-logo"
import { authAxios } from "../../api/axiosAuth"

function Signup() {
    const navigate = useNavigate()
    const [data, setData] = useState({
        name : "",
        email : "",
        phone : "",
        password : ""
    })

    const [errors , setErrors] = useState({
        name : "",
        email : "",
        phone : "",
        password : "",
        main : ""
    })

    const fields = [
        {
            label : "نام و نام خانوادگی",
            Icon : User,
            value : data.name,
            setValue : (v : string) => {
                setData(prev => ({
                    ...prev,
                    name : v
                }))
            },
            error : errors.name
        },
        {
            label : "ایمیل",
            Icon : Email,
            value : data.email,
            setValue : (v : string) => {
                setData(prev => ({
                    ...prev,
                    email : v
                }))
            },
            error : errors.email
        },
        {
            label : "شماره تلفن",
            Icon : Phone,
            value : data.phone,
            setValue : (v : string) => {
                setData(prev => ({
                    ...prev,
                    phone : v
                }))
            },
            error : errors.phone
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
                let fail = false

                setErrors({
                    name : "",
                    email : "",
                    main : "",
                    password : "",
                    phone : ""
                })

                const {email, password, phone, name } = data

                if(name.length > 30){
                    if(!fail) fail = true

                    setErrors(prev => ({
                        ...prev,
                        name : "طولانی"
                    }))
                }

                if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
                    if(!fail) fail = true

                    setErrors(prev => ({
                        ...prev,
                        email : "ایمیل درست نیست"
                    }))
                }

                if(!/^(\+98|0)?9\d{9}$/.test(phone)){
                    if(!fail) fail = true

                    setErrors(prev => ({
                        ...prev,
                        phone : "شماره موبایل درست نیست"
                    }))
                }

                if(password.length < 8) {
                    if(!fail) fail = true

                    setErrors(prev => ({
                        ...prev,
                        password : "رمز وارد شده باید بیشتر از 8 کاراکتر باشد"
                    }))
                }

                if(fail) return

                
                try{
                    await authAxios.post("/sign-up", data)
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
                ثبت نام در کتابچه
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