import "./DisplayWordDefCard.css"

export default function DisplayWordDefCard ({ wordData }) {

  const firstFiveDef = () => {
    const numOfDefs = wordData.defs.length;
    return (
      <div className="vocab-defs">
        {wordData.defs.filter((el, i) => i < 5).map((el, i)=> <div className="def"><b>{i + 1}).</b> {el}</div>)}
        {numOfDefs > 5 && `See more`}
      </div>
      )
  }
  return (
    <div className="word-def-card">
       <div  className="vocab-word">{wordData.word}</div>
       <div className="vocab-defs">{firstFiveDef()}</div>
    </div>
  )
}