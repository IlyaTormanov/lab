import  React ,{ChangeEvent, useState} from "react";
export interface criteryProps{
  id:string,
  num:number
}
export interface noteBooksProps{
    id:string,
    num:number,
    model:string
}
const noteBooks:noteBooksProps[]=[]
export const critery:criteryProps[]=[]
const App: React.FC = () => {
    const [pushCritery,setPushCritery]=useState(false)

    const [f,setF]=useState("")
    const [s,setS]=useState("")
    const [fr,setFr]=useState("")
    const [four,setFour]=useState("")
    const [fs,setFS]=useState()
    const [ss,setSS]=useState()
    const [frS,setFRS]=useState()
    const [fourS,setFourS]=useState()
    const first:criteryProps={
        id:f,
        num:fs
    }
    const second:criteryProps={
        id:s,
            num:ss
    }
    const three:criteryProps={
        id:fr,
        num:frS
    }
    const fours:criteryProps={
        id:four,
        num:fourS
    }

    pushCritery&&critery.push(first,second,three,fours);

    const validate=critery.sort((a,b)=>a.num-b.num)


    const betterCritery=validate;



    const [note1,setnote1]=useState("")
    const [note2,setnote2]=useState("")
    const [note3,setnote3]=useState("")
    const [note4,setnote4]=useState("")

    const noteF:noteBooksProps={
        id:f,
        num:fs,
        model:note1

    }
    const noteS:noteBooksProps={
        id:s,
        num:ss,
        model:note2

    }

    console.log(noteBooks)
    const noteFR:noteBooksProps={
        id:fr,
        num:frS,
        model:note3

    }
    const noteFour:noteBooksProps={
        id:four,
        num:fourS,
        model:note4

    }


    const [lastSubmit,setLastSubmit]=useState(false)
    lastSubmit&&noteBooks.push(noteF,noteS,noteFR,noteFour);
  return (

   <div>
     <input onChange={(e:ChangeEvent<HTMLInputElement>)=>setF(e.target.value)}/>
       <select onChange={event => setFS(event.target.value)}>
           <option>1</option>
           <option>3</option>
           <option>5</option>
           <option>7</option>
           <option>9</option>
       </select>
     <input onChange={(e:ChangeEvent<HTMLInputElement>)=>setS(e.target.value)}/>
       <select onChange={event => setSS(event.target.value)}>
           <option>1</option>
           <option>3</option>
           <option>5</option>
           <option>7</option>
           <option>9</option>
       </select>
     <input onChange={(e:ChangeEvent<HTMLInputElement>)=>setFr(e.target.value)}/>
       <select onChange={event => setFRS(event.target.value)}>
           <option>1</option>
           <option>3</option>
           <option>5</option>
           <option>7</option>
           <option>9</option>
       </select>
     <input onChange={(e:ChangeEvent<HTMLInputElement>)=>setFour(e.target.value)}/>
       <select onChange={event => setFourS(event.target.value)}>
           <option>1</option>
           <option>3</option>
           <option>5</option>
           <option>7</option>
           <option>9</option>
       </select>
       <div onClick={()=>setPushCritery(true)}>submit</div>
        <div>
            {
                betterCritery!==undefined&&
                <>
                    {validate.map(i=><div>{i.id[3]}</div>)}

            </>
                }
        </div>
       <div>
            <input onChange={event => setnote1(event.target.value)}/>
           <input onChange={event => setnote2(event.target.value)}/>
           <input onChange={event => setnote3(event.target.value)}/>
           <input onChange={event => setnote4(event.target.value)}/>
       </div>
            <div onClick={()=>setLastSubmit(true)}>end this</div>
       {noteBooks.map(i=>
           <>
           <div key={i.id}>{i.id}</div>
               <div>{i.model}</div>
           </>
       )}
   </div>
  );
}

export default App;
