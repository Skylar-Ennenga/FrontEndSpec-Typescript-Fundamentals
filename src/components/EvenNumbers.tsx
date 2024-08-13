import React from 'react'

const EvenNumbers = () => {

    const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    const filterNumbers = (numbers: number[]): number[] => {
        return numbers.filter((number) => number % 2 === 0)
    }

  return (
    <div>
      {filterNumbers(numbers).map((number, index) => (
        <p key={index}>{number}</p>))}
    </div>
  )
}

export default EvenNumbers
