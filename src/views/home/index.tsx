import { Swiper, SwiperSlide } from "swiper/react"
import Group from "../../components/group/group"
import SearchInput from "../../components/search-input/search-input"
import { Profile } from "../../svg/icons"
import { KetabchehLogo } from "../../svg/ketabcheh-logo"
import Book from "../../components/book/book"
import Category from "../../components/category/category"
import { categories } from "../../constants/categories"
import Publisher from "../../components/publisher/publisher"
import Button from "../../components/common/button/button"

function Home() {
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

                <p
                className="
                text-[16px]
                font-bold
                font-[Kalameh]
                text-primary
                ">
                    کتابچه
                </p>

                <KetabchehLogo
                className="
                w-[39px]
                "
                />

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

        <SearchInput/>

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
                <Swiper
                width={128}
                spaceBetween={16}
                >
                    <SwiperSlide>
                        <Book/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Book/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Book/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Book/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Book/>
                    </SwiperSlide>
                </Swiper>
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
                { categories.map((item , idx) => (
                    <SwiperSlide
                    key={idx}
                    >
                        <Publisher
                        logo="data:image/png;base64,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"
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