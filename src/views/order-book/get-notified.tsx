import { useState } from 'react'
import SelectInput from '../../components/select-input/select-input'
import TextInput from '../../components/common/text-input/text-input'
import Button from '../../components/common/button/button'

function GetNotified() {
    const [data , setData] = useState({
        type : "sms",
        value : ""
    })

    return (
        <form
        className="
        flex-shrink
        w-full
        relative
        flex
        flex-col
        text-primary-dark
        overflow-hidden
        ">
            <h3
            className="
            text-[14px]
            font-medium
            mb-2
            ">
                اطلاع رسانی
            </h3>

            <div
            className="
            flex
            flex-col
            gap-2
            ">
                <SelectInput/>

                <TextInput
                required
                label={labels[data.type]}
                value={data.value}
                setValue={(v : string) => {
                    setData(prev => ({
                        ...prev,
                        value : v
                    }))
                }}
                />
            </div>
            
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
                    ثبت اطلاعات تماس و ادامه
                </Button>
            </div>

        </form>
    )
}

export default GetNotified

const labels = {
    "sms" : "شماره تلفن خود را وارد کنید",
    "email" : "ایمیل خود را وارد کنید"
}