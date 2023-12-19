import { useState } from 'react'

export default function Player({ initialName, symbol, isActive }) {
    const [playerName, setPlayerName] = useState(initialName)
    const [isEditing, setIsediting] = useState(false)
    function handleEditClick() {
        setIsediting(editing => !editing)
        console.log(isEditing)
    }

    function handleChange(event) {
        console.log(event)
        setPlayerName(event.target.value)
    }
    let editablePlayerName = <span className="player-name">{playerName}</span>

    if (isEditing) {
        editablePlayerName = <input type="text" required value={playerName} onChange={handleChange} />
    }
    console.log(`is Active is ${isActive}`)
    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
                <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
            </span>
        </li>
    )
}