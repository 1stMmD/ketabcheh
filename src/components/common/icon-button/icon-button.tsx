type props = {
    Icon : React.FC<{className : string}>,
    onClick ?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

function IconButton({
    Icon,
    onClick
} : props) {
  return (
    <button
    onClick={onClick}
    className='
    p-3
    bg-white
    rounded-[8px]
    outline-[1px]
    outline
    outline-[#E1E3EA]
    '>
        <Icon
        className='
        w-[24px]
        fill-primary-dark
        '
        />
    </button>
  )
}

export default IconButton