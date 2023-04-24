import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import Group from "../../components/group/group"
import SearchInput from "../../components/search-input/search-input"
import { Profile } from "../../svg/icons"
import { KetabchehLogo } from "../../svg/ketabcheh-logo"
import Book from "../../components/book/book"

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
        ">

            <Group
            title="جدیدترین کتاب های کمیاب"
            url=""
            >
                <Swiper
                slidesPerView={2}
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
                </Swiper>
            </Group>

        </div>

    </div>
  )
}

export default Home