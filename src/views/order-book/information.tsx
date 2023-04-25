import { useState } from "react"
import CheckInput from "../../components/check-input/check-input"
import ChipInput from "../../components/chip-input/chip-input"
import Button from "../../components/common/button/button"
import TextInput from "../../components/common/text-input/text-input"
import SelectInput from "../../components/select-input/select-input"

function Information() {
  const [data , setData] = useState({
    name : "",
    author : "",
    category : "",
    publisher : "",
    keywords : [],
    withSignature : false
  })
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
    ">
        <h3
        className="
        text-[14px]
        font-medium
        mb-2
        ">
        اطلاعات کتاب
        </h3>

        <div
        className="
        flex
        flex-col
        gap-2
        ">
          <TextInput
          label="نام کتاب"
          required
          />

          <TextInput
          label="نام نویسنده"
          required
          />

          <SelectInput/>

          <TextInput
          label="انتشارات"
          />

          <ChipInput
          deleteValue={(i : number) => {
            return
          }}
          label="کلمات کلیدی"
          value={[]}
          setValue={(v : string) => {
            return
          }}
          />

          <CheckInput
          setValue={() => {
            setData(prev => ({
              ...prev,
              withSignature : !prev.withSignature
            }))
          }}
          value={data.withSignature}
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
              ثبت اطلاعات کتاب و ادامه
            </Button>
        </div>
    </div>
  )
}

export default Information