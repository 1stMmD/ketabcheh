type props = {
    children : React.ReactNode,
    className? : string
}
const Button = ({
    children,
    className
} : props) => {
  return (
    <button
    className={`
    w-full
    text-[16px]
    text-white
    bg-primary
    py-3
    rounded-[8px]
    font-light
    ${className ?? ""}
    `}>
        {children}
    </button>
  )
}

export default Button