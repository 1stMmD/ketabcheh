type props = {
    className : string
}

export const User = ({
    className
} : props) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.7701 14.9296L18.1693 16.0471C18.8573 17.9735 17.4291 20 15.3836 20H8.61639C6.57085 20 5.14275 17.9735 5.83074 16.0471L6.22988 14.9296C6.26637 14.8274 6.34563 14.7462 6.44691 14.7072C10.0213 13.3324 13.9787 13.3324 17.5531 14.7072C17.6544 14.7462 17.7336 14.8274 17.7701 14.9296Z" stroke-width="2" stroke-miterlimit="10"/>
        <circle cx="12" cy="7" r="4" stroke-width="2" stroke-miterlimit="10"/>
    </svg>

)