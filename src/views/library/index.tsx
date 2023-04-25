import { useState } from "react"
import BookWrapper from "../../components/book-wrapper/book-wrapper"
import Group from "../../components/group/group"
import SearchInput from "../../components/search-input/search-input"
import { useNavigate } from "react-router"

function Library() {
  const [value , setValue] = useState<string>("")
  const navigate = useNavigate()
  return (
    <div
    className="
    w-full
    min-h-screen
    flex
    flex-col
    gap-6
    p-3
    ">
        <SearchInput
        onSubmit={(e) => {
          e.preventDefault()
          navigate(`/search/${value}`)
        }}
        value={value}
        setValue={(v : string) => {
            setValue(v)
        }}
        />

        <Group
        title="جدیدترین کتاب های کمیاب"
        url=""
        >
            <BookWrapper
            api=""
            />
        </Group>
        <Group
        title="جدیدترین کتاب های کمیاب"
        url=""
        >
            <BookWrapper
            api=""
            />
        </Group>
        <Group
        title="جدیدترین کتاب های کمیاب"
        url=""
        >
            <BookWrapper
            api=""
            />
        </Group>
    </div>
  )
}

export default Library