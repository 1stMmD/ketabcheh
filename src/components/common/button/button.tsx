type props = {
    children : React.ReactNode,
    className? : string,
    size ?: "lg" | "sm",
    onClick ?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}
const Button = ({
    children,
    className,
    size,
    onClick
} : props) => {
  const style = sizes[size ?? "lg"]

  return (
    <button
    onClick={onClick}
    className={`
    ${style}
    text-white
    bg-primary
    rounded-[8px]
    font-light
    ${className ?? ""}
    `}>
        {children}
    </button>
  )
}

export default Button

const sizes = {
  "lg" : "text-[16px] py-3 px-5 w-full",
  "sm" : "text-[10px] p-3 px-5"
}