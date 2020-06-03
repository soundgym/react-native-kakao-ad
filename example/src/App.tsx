import React, { useEffect } from 'react'
import RNKakaoAd, { Counter } from 'react-native-kakao-ad'

const App = () => {
  useEffect(() => {
    console.log(RNKakaoAd)
  })

  return <Counter />
}

export default App
