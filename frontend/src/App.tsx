
import './App.css'
import Landing from './components/Landing'
import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './components/Auth'
import Auth from './components/Auth'

import { userAtom } from './store/atoms/user'
import { useRecoilState } from 'recoil'

function App() {

  const [user , setUser] = useRecoilState(userAtom);

  
  useEffect(()=>{
    onAuthStateChanged(auth , (user)=>{
      if(user && user.email){
        console.log("user logged in")
        setUser({
          loading : false , 
          user : {
            email : user.email
          }
        })
        


      }
      else{
        setUser({loading : false})
      }
    })
  } , [])

  if(user.loading){
    return (
      <div>Loading...</div>
      )}
  if(!(user.user?.email)){
    return (
      <div>
        <Auth/>
      </div>
      )
  }
  else{

    return (
      <>
        <Landing />
       
      </>
      )
  }

}
export default App
