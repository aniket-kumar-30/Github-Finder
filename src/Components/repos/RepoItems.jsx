import { FaEye, FaStar, FaUtensils, FaInfo, FaLink } from 'react-icons/fa'
import PropTypes from 'prop-types'
function RepoItems({ repo }) {
    const {
        name,
        description,
        html_url,
        open_issues,
        stargazers_count,
        watchers_count,
        fork,
    } = repo
    return (
        <div className="card rounded-md shadow-lg bg-base-800 hover:bg-gray-900">
            <div className="card-body">
                <h3 className="mb-2 text-xl font-semibold">
                    <a href={html_url}>
                        <FaLink className='inline mr-2' />{name}
                    </a>
                </h3>
                <p className="mb-2">{description}</p>
                <div>
                    <div className="mr-2 badge badge-info badge-lg">
                        <FaEye className='mr-2' />{watchers_count}
                    </div>
                    <div className="mr-2 badge badge-success badge-lg">
                        <FaStar className='mr-2' />{stargazers_count}
                    </div>
                    <div className="mr-2 badge badge-error badge-lg">
                        <FaInfo className='mr-2' />{open_issues}
                    </div>
                    <div className="mr-2 badge badge-info badge-lg">
                        <FaUtensils className='mr-2' />{fork}
                    </div>
                </div>
            </div>
        </div>
    )
}

RepoItems.propTypes = {
    repo: PropTypes.object.isRequired,
}

export default RepoItems