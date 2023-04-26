import { useState } from "react"
import CheckInput from "../../components/check-input/check-input"
import ChipInput from "../../components/chip-input/chip-input"
import Button from "../../components/common/button/button"
import TextInput from "../../components/common/text-input/text-input"
import SelectInput from "../../components/select-input/select-input"

type props = {
  onSubmit : () => void
}

function Information({
  onSubmit
} : props) {
  const [data , setData] = useState({
    name : "",
    author : "",
    category : "",
    publisher : "",
    keywords : ["سلام"],
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
    pb-6
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
          value={data.name}
          setValue={(v : string) => {
            setData(prev => ({
              ...prev,
              name : v
            }))
          }}
          label="نام کتاب"
          required
          />

          <TextInput
          value={data.author}
          setValue={(v : string) => {
            setData(prev => ({
              ...prev,
              author : v
            }))
          }}
          label="نام نویسنده"
          required
          />

          <SelectInput
          value={data.category}
          label={"انتخاب دسته بندی"}
          setValue={(v: string) => {
            setData(prev => ({
              ...prev,
              category : v
            }))
          }}
          values={["درسی","رمان","تاریخی","علمی"]}
          />

          <TextInput
          value={data.publisher}
          setValue={(v : string) => {
            setData(prev => ({
              ...prev,
              publisher : v
            }))
          }}
          label="انتشارات"
          />

          <ChipInput
          deleteValue={(i : number) => {
            setData(prev => {
              const clone = [...prev.keywords]
              clone.splice(i , 1)
              return({
                ...prev,
                keywords : clone
              })
            })
          }}
          label="کلمات کلیدی"
          value={data.keywords}
          setValue={(v : string) => {
            setData(prev => ({
              ...prev,
              keywords : [...prev.keywords, v]
            }))
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
            onClick={() => {
              onSubmit()
            }}
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