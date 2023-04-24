import { SearchNormal } from "../../svg/icons"

type props = {
  Icon ?: React.FC,
  onSubmit ?: (e: React.FormEvent<HTMLFormElement>) => void,
  value : string,
  setValue : (v : string) => void
}

function SearchInput({
  Icon,
  onSubmit,
  value,
  setValue
} : props) {
  return (
    <form
    onSubmit={onSubmit}
    className="
    w-full
    flex
    flex-row
    items-center
    rounded-[8px]
    px-4
    py-3
    gap-2
    outline
    outline-[1px]
    outline-[#E1E3EA]
    font-[IRANSans]
    fill-[#041C32]
    stroke-[#041C32]
    ">
      {
      Icon ? <Icon/>
        : 
      <SearchNormal
      className="
      w-[24px]
      flex-shrink-0
      "
      />}

      <input
      value={value}
      onChange={(e) => {
        setValue(e.target.value)
      }}
      name="input"
      autoComplete="off"
      placeholder="نام نویسنده ،‌ کتاب ،‌ انتشارات و..."
      className="
      text-[14px]
      w-full
      flex-shrink
      outline-none
      "
      />
    </form>
  )
}

export default SearchInput