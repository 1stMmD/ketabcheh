import { useLocation } from "react-router"
import { Book, Home, SearchNormal, ShoppingCart } from "../../svg/icons"
import { Link } from "react-router-dom"

function NavbarMobile() {
    const location = useLocation()

    if(!show_navbar.some((path) => location.pathname.startsWith(path))) return <></>
    return (
        <>
            <nav
            className="
            flex
            items-center
            justify-evenly
            fixed
            w-full
            bottom-0
            z-[10]
            bg-[#F5F5F5]
            rounded-tr-[20px]
            rounded-tl-[20px]
            py-3
            ">
                {sections.map(({ url , Icon , title }) => {
                    const selected = location.pathname.startsWith(url)

                    return (
                        <Link
                        key={title}
                        to={url}
                        className={`
                        flex
                        justify-center
                        items-center
                        p-2
                        rounded-[10px]
                        ${selected ? "bg-primary/20 gap-2" : ""}
                        `}
                        >
                            <Icon
                            className={`
                            w-[24px]
                            ${selected ? "fill-primary" : "fill-primary-dark"}
                            `}
                            />
                            
                            <p
                            className={`
                            transition-[max-height]
                            duration-500
                            overflow-hidden
                            max-h-0
                            max-w-0
                            text-[12px]
                            font-bold
                            font-[Kalameh]
                            leading-none
                            text-primary
                            ${selected ? "max-h-[100px] max-w-[100px]" : ""}
                            `}>
                                {title}
                            </p> 
                        </Link>
                    )
                })}
            </nav>

            {/* placeholder div */}
            <div
            className="
            block
            w-full
            h-[64px]
            "/>
        </>
    )
}

export default NavbarMobile

const sections = [
    {
        title : "خانه",
        url : "/home",
        Icon : Home
    },
    {
        title : "کتابخانه",
        url : "/library",
        Icon : Book
    },
    {
        title : "جستجو",
        url : "/search",
        Icon : SearchNormal
    },
    {
        title : "سبد",
        url : "/cart",
        Icon : ShoppingCart
    },
]

const show_navbar = [
    "/home",
    "/library",
    "/search",
    "/cart",
    "/order",
    "/book",
]