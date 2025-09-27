export default function Person({person,getPerson,loading}){
    return(
        <>
        <h1>get person details</h1>
        {loading && <p>Loading...</p>}

        {person && !loading && (
        <div>
        <h2>Person Details</h2>
            <ul>
            <li>First Name: {person.firstName}</li>
            <li>Last Name: {person.lastName}</li>
            <li>Email: {person.email}</li>
            <li>Phone Number: {person.phoneNumber}</li>
        </ul>
        </div>)}
        <button onClick={() => getPerson(10)}>Get new Person</button>

        </>
    )
    
}