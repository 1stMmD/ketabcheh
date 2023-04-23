import { KetabchehLogo } from "../../svg/ketabcheh-logo"

function Signup() {
  return (
    <div
    className="
    min-w-screen
    w-full
    flex
    flex-col
    px-3
    ">

        <div
        className="
        flex
        items-center
        justify-center
        gap-6
        ">

            <p
            className="
            text-[31px]
            font-bold
            font-[Kalameh]
            ">
                کتابچه
            </p>

            <KetabchehLogo
            className="
            w-[81px]
            "
            />

        </div>

    </div>
  )
}

export default Signup