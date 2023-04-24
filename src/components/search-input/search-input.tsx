import { SearchNormal } from "../../svg/icons"

function SearchInput() {
  return (
    <div
    className="
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
      <SearchNormal
      className="
      w-[24px]

      "
      />

      <input
      placeholder="نام نویسنده ،‌ کتاب ،‌ انتشارات و..."
      className="
      text-[14px]
      w-full
      flex-shrink
      outline-none
      "
      />
    </div>
  )
}

export default SearchInput