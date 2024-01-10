import { problems } from "../store/problems.ts"
import TopBar from "./TopBar"

export default function Problems() {

  const toYt = ( link : string | undefined) : void =>{
    window.location.replace("https://www.youtube.com/watch?v=" + link)
  }
   
  return (
    <div>
        <TopBar title="Problems" /> 
        <table className="m-auto border-separate border-spacing-1 table-auto w-4/5 min-w-[400px]">
        <tr>
          <th>Title</th>
          <th>Difficulty</th>
          <th>Category</th>
          <th>Solution</th>
        </tr>
          {
            problems.map((problem , index)=>
              
                <tr key={index} className="even:bg-amber-100 odd:bg-blue-100">
                  
                  <td><a className="w-10 m-2 hover:text-blue-600" href={"/problems/" + problem.id}>{problem.title}
                    </a></td>
                  <td><p className="mx-10">{problem.difficulty}
                    </p></td>
                  <td><p className="mx-10">{problem.category}
                    </p></td>
                    
                  <td ><img src="https://cdn-icons-png.flaticon.com/256/1384/1384060.png" className="h-5 m-auto hover:scale-110" onClick={() => toYt(problem.videoId)}/></td>
                  
                </tr>
              
            )
          }
        </table>

      
    </div>
  )
}
