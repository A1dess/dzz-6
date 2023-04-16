export function User ({el,setId}){

    return(
        <div>
        {el.id}
        <button onClick={() => setId(el.id)}>more info</button>
        </div>
    )
}