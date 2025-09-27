import Person from "./person"
export default function PersonList({personList,getPerson,loading}){
    return (
        <div>
            {personList.map((person,index)=>{
                return <Person key={index} person={person} getPerson={getPerson} loading={loading} />
            })}

        </div>
    )
}