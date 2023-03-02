import React from 'react'
import Person from './Person'

function NameList() {
    // const names = ['Mumo', 'Ndanu', 'Kevin']
    // const nameList =  names.map(name => <h1>{name}</h1>)
    const persons = [
        {
            id: 1,
            fname: 'Mumo',
            age: 23,
            skill: 'React'
        },
        {
            id: 2,
            fname: 'Ndanu',
            age: 22,
            skill: '.NET'
        },
        {
            id: 3,
            fname: 'Kevin',
            age: 24,
            skill: 'PHP'
        }
    ]
    const personList = persons.map(person => <Person key={person.id} person={person} /> )
  return (
    <div>
        {
            personList
            //nameList
            //names.map(name => <h1>{name}</h1>)
        }
    </div>
  )
}

export default NameList