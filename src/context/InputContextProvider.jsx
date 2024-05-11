import React, {useState} from 'react'
import inputContext from './context'

const InputContextProvider = ({children}) => {
  const [data, setData] = useState('');
  return (
    <inputContext.Provider value={{data, setData}}>
      {children}
    </inputContext.Provider>
  )
}

export default InputContextProvider