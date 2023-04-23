import SearchInput from "../../components/search-input/search-input"
import { Profile } from "../../svg/icons"
import { KetabchehLogo } from "../../svg/ketabcheh-logo"

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
    </div>
  )
}

export default Home