import { Welcome } from "./components/Welcome/Welcome"
import { Content } from "./components/Content/Content"

export default function App() {
  return (<div className='snap-center snap-mandatory'>
    <Welcome />
    <Content />
  </div>
  )
}
