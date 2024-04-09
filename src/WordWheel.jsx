import { useState, useCallback, useEffect, useRef } from 'react'

function WordWheel(props) {
  let endArray = props.text;

  const [newEnd, setnewEnd] = useState(endArray[0]);
  const endIndexRef = useRef(0);

  const changeEnd = useCallback(() => {
    if (endIndexRef.current === 4) {
      setnewEnd(endArray[0])
      endIndexRef.current = 0;
    }
    else {
    setnewEnd(endArray[endIndexRef.current + 1]);
    endIndexRef.current++
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