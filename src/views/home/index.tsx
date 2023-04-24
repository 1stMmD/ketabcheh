import { Swiper, SwiperSlide } from "swiper/react"
import Group from "../../components/group/group"
import SearchInput from "../../components/search-input/search-input"
import { Profile } from "../../svg/icons"
import { KetabchehLogo } from "../../svg/ketabcheh-logo"
import Book from "../../components/book/book"
import Category from "../../components/category/category"
import { categories } from "../../constants/categories"

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
    ">
        <div
        className="
        flex
        justify-between
        mb-3
        ">
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

        </div>

    </div>
  )
}

export default Home