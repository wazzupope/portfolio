import { useState, useCallback, useEffect } from 'react'

function WordWheel(props) {
  let endArray = props.text;

  const [newEnd, setnewEnd] = useState(endArray[0]);
  let endIndex = 0;

  const changeEnd = useCallback(() => {
    if (endIndex === 4) {
      setnewEnd(props.text[0])
    }
    else {
    setnewEnd(props.text[endIndex + 1]);
    }
  }, []);

  useEffect(() => {
      const intervalID = setInterval(changeEnd, 2000);
      return () => clearInterval(intervalID);
  }, [changeEnd])

  return(
      <span>{newEnd}</span>
  )
}

export default WordWheel