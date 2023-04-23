type props = {
    Icon : React.FC<{className : string}>,
    label : string,
    name : string
}

function TextInput({
    Icon,
    label,
    name
} : props) {
  return (
    <div
    className="
    px-4
    py-1
    flex
    flex-row-reverse
    items-center
    rounded-[8px]
    outline
    outline-[1px]
    outline-[#8E8E93]
    stroke-[#292D32]
    fill-[#292D32]
    focus-within:outline-primary
    focus-within:stroke-primary
    focus-within:fill-primary
    focus-within:shadow-[0px_0px_0px_2px]
    focus-within:shadow-primary/30
    gap-2
    ">
        <Icon
        className="
        w-[24px]
        stroke-inherit
        "
        />
        
        <div
        className="
        relative
        w-full
        flex-shrink
        ">
            <input
            autoComplete="off"
            name={name}
            dir="rtl"
            placeholder=" "
            className="
            placeholder-shown
            peer
            w-full
            outline-none
            text-[14px]
            pt-4
            font-medium
            "
            />
            <label
            className="
            pointer-events-none
            transition-all
            absolute
            right-0
            text-[10px]
            peer-focus:top-[0px]
            peer-focus:text-[10px]
            peer-focus:translate-y-[0]
            peer-placeholder-shown:text-[14px]
            peer-placeholder-shown:top-[50%]
            peer-placeholder-shown:-translate-y-[50%]
            ">
                {label}
            </label>

        </div>

    </div>
  )
}

export default TextInput