import { LxProvider, useLexicon } from '@nitidbit/lexicon'
import './App.css'

import ostrich from './assets/noun-ostrich-2511897.svg'
import app_json from './App.json'

function App() {
  const lexicon = useLexicon(app_json)
  return (
    <div className="App">
      <LxProvider apiUpdateUrl="http://example.com/update">
        <div>
          <a href="https://thenounproject.com/creator/joerivera2000/">
            <img className="logo" src={ostrich} />
          </a>
        </div>
        <h1> { lexicon.get('title') } </h1>
        <p> { lexicon.get('blurb', {product_name: lexicon.get('product_name')} ) } </p>
      </LxProvider>
    </div>
  )
}

export default App
