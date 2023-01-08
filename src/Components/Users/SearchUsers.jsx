import { useState, useContext } from 'react'
import GithubContext from '../../Context/Github/GithubContext'
import AlertContext from '../../Context/alert/AlertContext'
function SearchUsers() {
    const [text, setText] = useState('')
    const { users, searchUser, clearUser } = useContext(GithubContext)
    const { setAlert } = useContext(AlertContext)
    const handleChange = (e) => setText(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault()

        if (text === '') {
            setAlert('Please enter something', 'error')
        } else {
            searchUser(text)
            setText('')
        }
    }
    const handleClick = (e) => {
        e.preventDefault()
        clearUser()
    }
    return (
        <div className="
        grid grid-cols-1 xl:grid-cols-2 lg:grid-col-2 md:grid-cols-2 gap-8">
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <div className="relative">
                            <input type="text"
                                className=" w-full bg-gray-200 pr-40 text-black input input-lg"
                                placeholder="Search"
                                value={text}
                                onChange={handleChange} />
                            <button type="submit"
                                className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg">
                                Go</button>
                        </div>
                    </div>
                </form>
            </div>
            {users.length > 0 &&
                (<div>
                    <button className="btn btn-ghost btn-lg" onClick={handleClick}>Clear</button>
                </div>)
            }
        </div>
    )
}

export default SearchUsers