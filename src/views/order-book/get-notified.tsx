import { useState } from 'react'
import SelectInput from '../../components/select-input/select-input'
import TextInput from '../../components/common/text-input/text-input'
import Button from '../../components/common/button/button'

type props = {
    onSubmit : () => void
}

function GetNotified({
    onSubmit
} : props) {
    const [data , setData] = useState({
        type : "",
        value : ""
    })

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
                اطلاع رسانی
            </h3>

            <div
            className="
            flex
            flex-col
            gap-2
            ">
                <SelectInput
                label='طریقه اطلاع رسانی'
                value={(select_labels[(data.type as "sms" | "email")])}
                values={Object.values(select_labels)}
                setValue={(v : string) => {
                    setData(prev => ({
                        ...prev,
                        type : Object.entries(select_labels).filter(item => item[1] === v)[0][0]
                    }))
                }}
                />

                { data.type ? <TextInput
                required
                label={labels[(data.type as "sms" | "email")]}
                value={data.value}
                setValue={(v : string) => {                    
                    setData(prev => ({
                        ...prev,
                        value : v
                    }))
                }}
                /> : ""}
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

const select_labels = {
    "sms" : "از طریق اس ام اس",
    "email" : "از طریق ایمیل",
}