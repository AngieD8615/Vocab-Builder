import axios from 'axios';


const datamuseURL = "http://api.datamuse.com"

const getWordsByTopic = async (topic = "ocean") => {
  
  let wordListRes = await 
    axios.get(`${datamuseURL}/words?rel_jjb=ocean&topics=temperature&md=dpsf`)
     
    .then((res) => res.data.filter((el) => el.defs ))
  
  return wordListRes
}

export { getWordsByTopic }