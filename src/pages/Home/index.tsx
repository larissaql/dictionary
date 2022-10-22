import { useEffect, useState } from "react"
import WordCard from "../../components/WordCard"
import Words from "../../models/Words"
import DictionaryService from "../../service/DictionaryService"
import { Container, FilterInput } from "./styles"


    const Home = () => {
        const [words, setWords] = useState<Words[]>([])
        const [filter, setFilter] = useState('')
        const [wordsLoaded] = useState(false)
        const dictionaryService = new DictionaryService()
    
    const loadWords = async () => { 
       
       const results = await dictionaryService.loadWords(filter)
       setWords(results)

    }
    useEffect(() => {
       loadWords()
     }, [filter])

    
     return(
        <Container>
            {!wordsLoaded && 
              <>
                <FilterInput placeholder='Type a word' value = {filter} onChange={(e) => setFilter(e.target.value)} />
                {words.length > 0 && (
                    words.map((w) => <WordCard word={w} key={w.name} /> )
                )}
              </>
            }
            {wordsLoaded && <p>Loading...</p>}
        </Container>
     )
}

export default Home
