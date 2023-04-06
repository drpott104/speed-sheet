export default function MenuItems({ item }) {
    function handleDelete(evt) {
        console.log(evt, 'delete this')
    }

    return (
        <li>
            {item.name}
            <button onClick={handleDelete}>X</button>
        </li>
    )
}