
"use client"
import { useState } from "react" /* javaspurict上でuseStateがないので関数を使えるようにした*/


type task = {
  id:number 
  title: string 
  end_date: string
  done: boolean
}


const demoTasks: task[] = [ /*デモタスク*/ 
  {
    id: 1,
    title: "牛乳を買う",
    end_date: "2021-05-31",
    done: false,
  },
  {
    id: 2,
    title: "本を読む",
    end_date: "2021-06-30",
    done: true,
  },
  {
    id: 3,
    title: "ゴミを出す",
    end_date: "2021-06-30",
    done: true,
  },
]



export default function Page(){
  const [tasks,setTasks] =useState<task[]>(demoTasks)


return (
  <div className="p-8 space-x-4"> 
    <h1 className="mb-4">TODO管理アプリ</h1>

    <form className="mb-8">
      <input type="text" name={"title"} />
      <input type="date" name={"end_date"} />
      <input type="submit" value="追加"/>

    </form>


    {tasks.map((item) =>(
      <div key={item.id}>
        <input type="checkbox" checked={item.done}/>
        <span>{item.title}</span>
        <span>{item.end_date}</span>
      </div>
     ))}
   </div>
  )
}
