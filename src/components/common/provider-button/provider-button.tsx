type props = {
    children : React.ReactNode,
    Icon : React.FC<{className : string}>
}
const ProviderButton = ({
    children,
    Icon
} : props) => {
  return (
    <button
    className="
    flex
    items-center
    justify-center
    gap-3
    text-[14px]
    text-black
    bg-white
    py-4
    rounded-[8px]
    outline-[1px]
    outline-[#E1E3EA]
    outline
    font-[Manrope]
    ">
        <Icon
        className="
        w-[22px]
        "
        />
        {children}
    </button>
  )
}

export default ProviderButton