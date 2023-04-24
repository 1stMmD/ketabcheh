import BookWrapper from "../../components/book-wrapper/book-wrapper"
import Group from "../../components/group/group"
import SearchInput from "../../components/search-input/search-input"

function Library() {
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
        <SearchInput/>

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