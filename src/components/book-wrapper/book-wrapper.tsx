import { Swiper , SwiperSlide } from "swiper/react"
import { books } from "../../constants/books"
import Book from "../book/book"

type props = {
    api : string
}

function BookWrapper({
    api
} : props) {
  return (
    <Swiper
    spaceBetween={16}
    width={128}
    >

        {books.map(({title , author , cover , price} , idx) => (
            <SwiperSlide>
                <Book
                info={{
                    name : title,
                    author,
                    cover,
                    price,
                }}
                />
            </SwiperSlide>
        ))}

    </Swiper>
  )
}

export default BookWrapper