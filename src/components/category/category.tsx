import { Link } from "react-router-dom"

type props = {
    info : {
        title : string,
        Icon : React.FC<{className : string }>,
        url : string
    }
}

function Category({
    info : { url , Icon , title }
} : props ) {
  return (
    <Link
    to={url}
    className="
    flex
    flex-col
    items-center
    rounded-[4px]
    bg-primary/10
    relative
    font-[IRANSans]
    p-3
    gap-2
    ">
        <Icon
        className="
        w-[60%]
        aspect-square
        fill-primary
        "
        />

        <p
        className="
        text-primary
        text-[12px]
        ">
            {title}
        </p>
    </Link>
  )
}

export default Category