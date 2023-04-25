type props = {
    Icon ?: React.FC<{className : string}>,
    label : string,
    name : string,
    required ?: boolean
}

function TextInput({
    Icon,
    label,
    name,
    required = false
} : props) {
  return (
    <div
    className="
    px-4
    py-1
    flex
    flex-row
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
        {Icon ? <Icon
        className="
        w-[24px]
        stroke-inherit
        "
        /> : <></>}
        
        <div
        className="
        relative
        w-full
        flex-shrink
        ">
            <input
            required={required}
            autoComplete="off"
            name={name}
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
            flex
            items-center
            justify-center
            gap-1
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
                
                {required ?
                <span
                className="
                text-red-500
                text-[14px]
                ">
                    *
                </span> :
                <></>}
            </label>

        </div>

    </div>
  )
}

export default TextInput