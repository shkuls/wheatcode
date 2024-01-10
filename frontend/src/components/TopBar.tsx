

const pages = [
    {
        title : "About" , 
        link : "/about"
    } , 
    {
        title : "Activity" , 
        link : "/activity"
    } , 
    {
        title : "Problems" , 
        link : "/problems"
    } , 
    {
        title : "Leaderboard" , 
        link : "/leaderboard"
    }

]

export default function TopBar(props : {title : string}) {
  return (
    <div className="w-[90%]  bg-black flex flex-col  p-7 m-auto">
      <h1 className='text-white text-9xl font font-extrabold mb-10 ml-10'>{props.title}</h1>
      <ul className='flex flex-row justify-evenly'>
        {
            pages.map((page , index)=>
                
                    <li key={index}>
                        <a className='text-white' href={page.link}>{page.title}</a>
                    
                    </li>

                
            )
        }
      </ul>
        
      
    </div>
  )
}
