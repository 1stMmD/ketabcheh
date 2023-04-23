type props = {
    children : React.ReactNode
}
const Button = ({
    children
} : props) => {
  return (
    <button
    className="
    text-[16px]
    text-white
    bg-primary
    py-3.5
    rounded-[8px]
    ">
        {children}
    </button>
  )
}

export default Button