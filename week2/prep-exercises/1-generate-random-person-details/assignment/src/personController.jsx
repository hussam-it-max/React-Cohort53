import {useState,useEffect} from 'react';
import PersonList from './personList.jsx';

export default function PersonController(){

    const [person,setPerson]=useState(null);
    const [personList,setPersonList]=useState([]);
    const[loading,setLoading]=useState(false);

    async function getPerson(count=1){
        setLoading(true);
      const response=await fetch(`https://randomuser.me/api/?results=${count}`);
      const data=await response.json();
        const personData=data.results;
        const formattedPerson=personData.map((person)=>({
            firstName:person.name.first,
            lastName:person.name.last,
            email:person.email,
            phoneNumber:person.phone
        }));
        setPersonList(formattedPerson);
    

        setLoading(false);
    }

    useEffect(()=>{
    getPerson(10)
      
       
   

  },[]);
  return (
    <div>
        <PersonList personList={personList} getPerson={getPerson} loading={loading}/>

    </div>
  )




}