import React from 'react'
import '../Styles/ResultSection.scss'
import ResultCards from './ResultCards'

const arr = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]

const ResultSection = () => {
  return (
    <div className='ResultSection'>
        <h1>Random</h1>
        <div className="results">
            {
                arr.map((a, i)=>(
                    <ResultCards key={i} />
                ))
            }
        </div>
    </div>
  )
}

export default ResultSection