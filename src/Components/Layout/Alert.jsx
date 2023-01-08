import AlertContext from "../../Context/alert/AlertContext"
import { useContext } from 'react'

function Alert() {
    const { alert } = useContext(AlertContext)
    return alert !== null && (
        <p className="flex items-start mb-4 space-x-2 text-xl font-semibold">{alert.msg}</p>
    )
}

export default Alert