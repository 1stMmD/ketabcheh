import { useState } from 'react'
import SearchInput from '../../components/search-input/search-input'
import { categories } from '../../constants'
import { BackArrow } from '../../svg/icons'
import { useNavigate } from 'react-router'

function Search() {
    const [value, setValue] = useState<string>("")
    const navigate = useNavigate()

    return (
        <div
        className='
        w-full
        min-h-[calc(100vh_-_56px)]
        flex
        flex-col
        p-3
        gap-6
        font-[IRANSans]
        '>
            <SearchInput
            value={value}
            setValue={(v : string) => {
                setValue(v)
            }}
            onSubmit={(e) => {
                e.preventDefault()
                navigate("/search/" + value)
            }}
            />

            <div
            className='
            flex
            flex-col
            '>
                {categories.map(({Icon, title},idx , list) => (
                    <>
                        <div
                        key={title + idx}
                        className='
                        flex
                        justify-between
                        items-center
                        cursor-pointer
                        '>
                            <div
                            className='
                            flex
                            items-center
                            justify-center
                            gap-3
                            '>
                                <Icon
                                className='
                                w-[30px]
                                fill-primary
                                '
                                />

                                <p
                                className='
                                text-primary
                                text-[12px]
                                '>
                                    {title}
                                </p>
                            </div>

                            <BackArrow
                            className='
                            fill-primary
                            w-[24px]
                            rotate-180
                            '
                            />
                        </div>

                        { idx < list.length - 1 ?
                        <span
                        key={idx + title}
                        className='
                        my-2
                        w-full
                        h-[1px]
                        bg-primary/10
                        '
                        /> : <></>}
                    </>
                ))}
            </div>
        </div>
    )
}

export default Search