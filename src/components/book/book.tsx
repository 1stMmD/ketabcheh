import { PersianNumber } from "../../helpers/persian-number"

type props = {
    info : {
        name : string,
        author : string[],
        cover : string,
        price : number,
    }
}

function Book({
    info : { name , author , cover , price }
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
        src={cover}
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
            <h5
            className="
            whitespace-nowrap
            overflow-hidden
            text-ellipsis
            text-[14px]
            ">
                {name}
            </h5>

            <p
            className="
            text-[14px]
            text-primary
            ">
                {PersianNumber(price)}
            </p>

            <p
            className="
            text-[12px]
            "
            >
                {author.join(",")}
            </p>
        </div>
    </div>
  )
}

export default Book