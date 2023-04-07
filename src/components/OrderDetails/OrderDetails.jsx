import './OrderDetails.css'

export default function OrderDetails({ item, enterOrder, setEnterOrder }) {
    function handleDelete(evt) {
        evt.preventDefault()
        evt.target.remove()
    }

    return (
        <li className='order-form'>
            <button onClick={handleDelete}>{item.name}</button>
        </li>
    )
}