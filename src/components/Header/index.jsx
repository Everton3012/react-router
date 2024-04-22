
import { Link } from 'react-router-dom'

export default function Header(){
  return(
    <header>
      <h2>Header da Pagina</h2><br/>
      <Link to="/contato" >Contatos</Link>
    </header>
  )
}