import { useState } from 'react'

type props = {
    value : string[] | [],
    setValue : (v : string) => void,
    label : string,
    Icon ?: React.FC<{className : string}>,
    deleteValue : (i : number) => void
}

function ChipInput({
    value,
    setValue,
    label,
    Icon,
    deleteValue
} : props) {
    const [text, setText] = useState<string>("")

    return (
        <form
        onSubmit={(e) => {
            e.preventDefault()
            if(!text) return

            setValue(text)
            setText("")
            
        }}
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
            /> : ""}
            
            <div
            className="
            relative
            w-full
            flex-shrink
            ">
                <div
                className='
                peer
                flex
                items-end
                gap-1
                pt-4
                flex-wrap
                '>
                    <div
                    className='
                    flex
                    gap-2
                    flex-wrap
                    '>
                        {value.length ? value.map((item , idx) => (
                            <span
                            className='
                            rounded-sm
                            bg-primary/20
                            text-typography
                            text-[10px]
                            px-[6px]
                            py-[3px]
                            '
                            key={idx}
                            onClick={() => {
                                deleteValue(idx)
                            }}
                            >
                                {item}
                            </span>
                        )) : <></>}
                    </div>

                    <input
                    value={text}
                    onChange={(e) => {
                        setText(e.target.value)
                    }}
                    autoComplete="off"
                    className="
                    w-full
                    outline-none
                    text-[14px]
                    font-medium
                    "
                    />
                </div>

                <label
                className={`
                pointer-events-none
                transition-all
                absolute
                right-0
                text-[10px]
                translate-y-[0]
                top-[0px]
                peer-focus-within:!top-[0px]
                peer-focus-within:!text-[10px]
                peer-focus-within:!translate-y-[0]
                ${ !text && !value.length ?
                    `
                    !text-[14px]
                    !top-[50%]
                    !-translate-y-[50%]
                    `
                    :
                    ``
                }
                `}>
                    {label}
                </label>

            </div>

        </form>
    )
}

export default ChipInput