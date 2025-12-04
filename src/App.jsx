import { useEffect, useState } from 'react'
import s from './App.module.css'
import {api} from './api/api.js'
import { Card } from './assets/components/card.jsx'

function App() {
  const [data, setData] = useState([])

useEffect(() => {
  api.get(`characters/students`). then((response)=> {
    setData(response.data)
    console.log(response.data)
  }).catch((error) => {
    console.error("NÃO FOI POSSÍVEL ACESSAR A API", error)
  })
  }, [])

return(
  <>
    <h1 className={s.title}>Harry Potter Characters</h1>
    <main>
      <div style={{display:"flex", flexWrap:"wrap", gap:"20px", alignItems:"center", justifyContent:"center"}}>
     </div>
     <div className={s.wrapCards}>
      {data.map((item, index) => {
        return(
          <div key={index}>
              <Card image={item.image} name={item.name} house={item.house}/>
          </div>
        )
      })}

     </div>
    </main>
  </>
)

  
}
export default App