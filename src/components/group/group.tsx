import { Link } from "react-router-dom"
import { Arrow } from "../../svg/icons"
import "swiper/css"

type props = {
    children : React.ReactNode,
    title : string,
    url : string
}

function Group({
    children,
    title,
    url
} : props) {
  return (
    <div
    dir="rtl"
    className="
    flex
    flex-col
    gap-1
    font-[IRANSans]
    ">
        <div
        className="
        flex
        flex-row
        items-center
        justify-between
        ">
            <h3
            className="
            font-medium
            text-primary-dark
            ">
                {title}
            </h3>

            <Link
            className="
            flex
            flex-row
            gap-1
            "
            to={url}>
                <span
                className="
                text-primary
                text-[12px]
                font-normal
                ">
                    بیشتر
                </span>

                <Arrow
                className="
                w-[20px]
                fill-primary
                "
                />
            </Link>
        </div>

        <div
        className="
        flex
        overflow-auto
        gap-4
        ">
            {children}
        </div>
    </div>
  )
}

export default Group