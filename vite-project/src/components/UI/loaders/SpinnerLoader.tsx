import React from 'react'
import '../../../style/css/loaders/spinnerLoader.css'

const SpinnerLoader:React.FC = () => {
  return (
    <img src='/spinnerLoader.gif' alt='loader' className='spinnerLoader'/>
  )
}

export default SpinnerLoader
