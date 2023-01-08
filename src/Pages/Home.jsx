import UserLists from "../Components/Users/UserLists"
import SearchUsers from "../Components/Users/SearchUsers"
function Home() {
    return (
        <>
            <SearchUsers />
            <UserLists />
        </>
    )
}

export default Home