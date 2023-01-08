import { useContext } from 'react'
import Spinner from '../Layout/Spinner'
import UserItems from './UserItems'
import GithubContext from '../../Context/Github/GithubContext'
function UserLists() {
    const { users, loading } = useContext(GithubContext)

    if (!loading) {
        return (
            <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
                {users.map((user) => (
                    <UserItems id={user.id} user={user} />
                ))}
            </div>
        )
    } else {
        return (
            <Spinner />
        )
    }
}

export default UserLists