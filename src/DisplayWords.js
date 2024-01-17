import { useEffect, useState } from "react"
import { getWordsByTopic } from "./utils/wordService"
import DisplayWordDefCard from "./DisplayWordDefCard"

export default function DisplayWords () {
  const [words, setWords] = useState()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchWords() {
      let res = await getWordsByTopic()
      await setWords(res)
      setIsLoading(false)
    } 
    fetchWords()
  }, [])
  
  
  return (
    <section className="word-def-container"> 
      {isLoading && <div className="isLoading">loading</div>}
      <div className="display-words-and-def"> 
        {!isLoading && words.map(el => <DisplayWordDefCard wordData={el} key={el.score}/> )}
      </div>
    </section>
  )
}