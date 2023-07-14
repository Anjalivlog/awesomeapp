import React from 'react'

export const TableDetails = () => {
      const data= [
        {
            id: 1,
            name: 'PRODUCT CODE',
            detail: '02A'
        },
        { 
            is: 2,
            name: 'DIMENSIONS',
            detail: '15cm x 10cm x 25cm (W x D x H)'
        },
        {  
            id: 3,
            name: 'LIGHT FITTING',
            detail: 'Antique brass finish, switched lampholder with 1 x BC/B22 bulb, max 60 watt'
        },
        {
            id: 4,
            name: 'FLEX',
            detail: 'Dark brown twisted silk'
        },
        {
            id: 5,
            name: 'WEIGHT',
            detail: '3.5kg'
        },
        { 
            id: 6,
            name: 'LEAD TIME',
            detail: 'Available for immediate shipping'
        },
      ]

  return (
    <div>
        <table>
            <tbody>
                {
                    data.map((val,i) => 
                    <tr key={val.id} className={i % 2 === 0 ? 'row-even' : 'row-odd'}>
                        <td>{val.name}</td>
                        <td>{val.detail}</td>
                    </tr>)
                }
            </tbody>
        </table>
    </div>
  )
}
