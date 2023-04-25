import { Swiper, SwiperSlide } from "swiper/react"
import Group from "../../components/group/group"
import SearchInput from "../../components/search-input/search-input"
import { Profile } from "../../svg/icons"
import { KetabchehLogo } from "../../svg/ketabcheh-logo"
import Category from "../../components/category/category"
import { categories, publishers } from "../../constants"
import Publisher from "../../components/publisher/publisher"
import Button from "../../components/common/button/button"
import BookWrapper from "../../components/book-wrapper/book-wrapper"
import { useState } from "react"
import { useNavigate } from "react-router"

function Home() {
    const [value , setValue] = useState<string>("")
    const navigate = useNavigate()
    return (
        <div
        className="
        min-h-screen
        w-full
        flex
        flex-col
        px-3
        pt-3
        font-[IRANSans]
        ">
            <div
            className="
            flex
            justify-between
            mb-3
            ">
                <div
                className="
                flex
                items-center
                justify-center
                gap-2
                ">

                    <KetabchehLogo
                    className="
                    w-[39px]
                    "
                    />

                    <p
                    className="
                    text-[16px]
                    font-bold
                    font-[Kalameh]
                    text-primary
                    ">
                        کتابچه
                    </p>

                </div>

                <button
                className="
                p-2
                rounded-[8px]
                outline
                outline-[1px]
                outline-[#E1E3EA]
                ">
                    <Profile
                    className="
                    w-[30px]
                    "
                    />
                </button>

            </div>

            <SearchInput
            onSubmit={(e) => {
                e.preventDefault()
                navigate(`/search/${value}`)
            }}
            value={value}
            setValue={(v : string) => {
                setValue(v)
            }}
            />

            <div
            className="
            mt-4
            ">
                <img
                src="banner.png"
                className="
                w-full
                aspect-[4/2]
                "
                />
            </div>

            <div
            className="
            flex
            flex-col
            mt-[36px]
            pb-[36px]
            gap-[36px]
            ">

                <Group
                title="جدیدترین کتاب های کمیاب"
                url=""
                >
                    <BookWrapper
                    api=""
                    />
                </Group>

                <Group
                title="دسته بندی ها"
                moreTitle="همه دسته بندی ها"
                url=""
                >
                    <Swiper
                    spaceBetween={16}
                    width={96}
                    >
                    { categories.map((item , idx) => (
                        <SwiperSlide
                        key={idx}
                        >
                            <Category
                            
                            info={item}
                            />
                        </SwiperSlide>
                    ))}
                    </Swiper>
                </Group>

                <Group
                title="انتشارات"
                moreTitle="همه انتشارات"
                url=""
                >
                    <Swiper
                    className="
                    overflow-y-visible
                    "
                    spaceBetween={4}
                    width={80}
                    >
                    { publishers.map(({logo} , idx) => (
                        <SwiperSlide
                        key={idx}
                        >
                            <Publisher
                            logo={logo}
                            url=""
                            />
                        </SwiperSlide>
                    ))}
                    </Swiper>
                </Group>

            </div>

            <div
            className="
            flex
            flex-col
            items-center
            ">
                <h4
                className="
                text-[18px]
                font-bold
                text-center
                ">
                دنبال کتاب کمیاب و خاص هستی ؟
                </h4>

                <h5
                className="
                mt-2
                mb-3
                text-[12px]
                font-medium
                text-center
                text-black/50
                ">
                تو کتابچه میتونی خرید و تهیه کتاب های خودت رو به ما بسپاری !
                </h5>
                
                <Button
                className="
                p-3
                !w-[min(146px_,_100%)]
                ">
                سفارش کتاب
                </Button>

                <img
                src="3d-casual-life-searching-for-idea.png"
                className="
                w-[70%]
                mt-[28px]
                mb-[36px]
                "
                />
            </div>

        </div>
    )
}

export default Home