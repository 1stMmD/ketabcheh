type props = {
    Icon ?: React.FC<{className : string}>,
    label : string,
    required ?: boolean,
    value : string,
    setValue : (v : string) => void,
    error? : string,
}

function TextInput({
    Icon,
    label,
    required = false,
    setValue,
    value,
    error
} : props) {
  return (
    <div
    className="
    flex
    flex-col
    gap-1
    ">
        <div
        className={`
        px-4
        py-1
        flex
        flex-row
        items-center
        rounded-[8px]
        border
            ${ error ? 
            `border-fail
            stroke-fail
            fill-fail
            ` 
            : 
            `border-[#8E8E93]
            stroke-[#292D32]
            fill-[#292D32]`
            }
        focus-within:border-primary
        focus-within:stroke-primary
        focus-within:fill-primary
        focus-within:shadow-[0px_0px_0px_2px]
        focus-within:shadow-primary/30
        gap-2
        `}>
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
                value={value}
                onChange={(e) => {
                    setValue(e.target.value)
                }}
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
                top-[0px]
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

        { error ? 
        <p
        className="
        text-fail
        text-[14px]
        ">
            {error}
        </p>
        : <></>}
    </div>
  )
}

export default TextInput