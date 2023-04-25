import { Checked, UnChecked } from "../../svg/icons"

type props = {
  value : boolean,
  setValue : () => void
}

function CheckInput({
  value,
  setValue
} : props) {
  return (
    <div
    onClick={() => {
      setValue()
    }}
    className="
    relative
    w-full
    flex
    flex-row
    items-center
    justify-between
    rounded-[8px]
    px-4
    py-3
    gap-2
    border
    border-[#8E8E93]
    font-[IRANSans]
    fill-[#041C32]
    stroke-[#041C32]
    overflow-hidden
    ">
        <p
        className='
        max-w-full
        flex-grow-0
        flex-shrink
        text-typography
        text-[14px]
        font-medium
        whitespace-nowrap
        overflow-hidden
        text-ellipsis
        '>
            امضا توسط نویسنده (در صورت امکان)
        </p>

        {value ? 
        <Checked
        className="
        flex-shrink-0
        w-[24px]
        fill-primary
        "
        /> : 
        <UnChecked
        className="
        flex-shrink-0
        w-[24px]
        fill-neutral-300
        "
        />
        }
    </div>
  )
}

export default CheckInput