import { PersianNumber } from "../../helpers/persian-number"

type props = {
    info ?: {
        name : string,
        author : string,
        cover : string,
        price : number,
    }
}

function Book({
    info
} : props) {
  return (
    <div
    dir="rtl"
    className="
    flex-shrink-0
    flex
    flex-col
    gap-1
    ">
        <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs_TwSwXB5hUoZK_vgxLlPDttdxdUUxoK1Tg&usqp=CAU"
        className="
        rounded-[8px]
        w-full
        aspect-[64/101]
        bg-neutral-200
        "
        />

        <div
        className="
        flex
        flex-col
        gap-[2px]
        ">
            <h5>
                1984
            </h5>

            <p
            className="
            text-[14px]
            text-primary
            ">
                {PersianNumber(140000)}
            </p>

            <p
            className="
            text-[12px]
            "
            >
                جورج اوریول
            </p>
        </div>
    </div>
  )
}

export default Book