import React from 'react'
import sheet1 from '../pdf/information technology/sheets/Sheet _1 Information Technology.pdf'
import sheet2 from '../pdf/information technology/sheets/Sheet _2  Information Technology.pdf'
import sheet3 from '../pdf/information technology/sheets/Sheet _3 Information Technology.pdf'
import sheet4 from '../pdf/information technology/sheets/Sheet 4 I T.pdf'
import sheet5 from '../pdf/information technology/sheets/Sheet 5 I T.pdf'
import sheet6 from '../pdf/information technology/sheets/Sheet  6 I T.pdf'
import sheet7 from '../pdf/information technology/sheets/Sheet 7 I T.pdf'
export default function It() {
  return (
    <>
    <h1 className='text-center text-white it-head'>Information Technology</h1>
    <div className='main-it'>
     <a href={sheet1} className='it2' target='_blank'>Sheet 1</a>
     <a href={sheet2} className='it2' target='_blank'>Sheet 2</a>
     <a href={sheet3} className='it2' target='_blank'>Sheet 3</a>
     <a href={sheet4} className='it2' target='_blank'>Sheet 4</a>
     <a href={sheet5} className='it2' target='_blank'>Sheet 5</a>
     <a href={sheet6} className='it2' target='_blank'>Sheet 6</a>
     <a href={sheet7} className='it2' target='_blank'>Sheet 7</a>
    </div>
    </>
  )
}
