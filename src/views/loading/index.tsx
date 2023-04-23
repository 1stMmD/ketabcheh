import { Cloud1, Cloud2, Cloud3, Cloud4, Cloud5, Cloud6 } from "../../svg/clouds"
import { KetabchehLogo } from "../../svg/ketabcheh-logo"

function Loading() {
  return (
    <div
    className='
    flex
    items-center
    justify-center
    relative
    w-full
    h-screen
    bg-primary
    bg-[url("loading-background.png")]
    bg-center
    bg-blend-soft-light
    '>

        <KetabchehLogo
        className="
        w-[81px]
        "
        />

        <span
        dir="rtl"
        className="
        absolute
        flex
        items-center
        justify-center
        bottom-[100px]
        w-[min(213px_,_90%)]
        bg-white/60
        text-[17px]
        py-3
        rounded-[.5rem]
        font-[Kalameh]
        "
        >
            در حال بارگیری...
        </span>

        {
            clouds.map(({
                Component,
                position,
                width,
                rotate
            }) => (
                <Component
                className={`
                absolute
                ${position}
                ${rotate}
                ${width}
                `}
                />
            ))
        }

    </div>
  )
}

export default Loading

const clouds = [
    {
        Component : Cloud1,
        position : "top-[68px] right-[10vw]",
        width : "w-[110px]",
        rotate : "-rotate-[1.77deg]"
    },
    {
        Component : Cloud2,
        position : "top-[151px] left-[5vw]",
        width : "w-[114px]",
        rotate : "rotate-[1.77deg]"
    },
    {
        Component : Cloud3,
        position : "right-[5vw] top-[180px]",
        width : "w-[98px]",
        rotate : "-rotate-[1.77deg]"
    },
    {
        Component : Cloud4,
        position : "left-[12vw] bottom-[231px]",
        width : "w-[110px]",
        rotate : "-rotate-[1.77deg]"
    },
    {
        Component : Cloud5,
        position : "right-[5vw] bottom-[142px]",
        width : "w-[114px]",
        rotate : "rotate-[1.77deg]"
    },
    {
        Component : Cloud6,
        position : "left-[4.5vw] bottom-[109px]",
        width : "w-[98px]",
        rotate : "rotate-[1.77deg]"
    },
]