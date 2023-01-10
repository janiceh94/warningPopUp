

export default function AddUser(){

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text"/>
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number"/>
                <button type="submit">Add User</button>
            </form>
        </div>
    )
}