import { Link } from "react-router-dom"

type props = {
    logo : string,
    url : string
}

function Publisher({
    logo,
    url
} : props) {
  return (
    <div
    className="
    pb-4
    ">
        <Link
        to={url}
        className="
        flex
        items-center
        relative
        p-2
        shadow-[0px_8px_12px_0]
        shadow-black/10
        "
        >
            <img
            src={logo}
            className="
            w-full
            aspect-square
            object-center
            object-contain
            "
            />
        </Link>
    </div>
  )
}

export default Publisher