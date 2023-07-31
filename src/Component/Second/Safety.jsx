import React from 'react'
import lec1 from '../../pdf/second term/safety/lec 1 safety.pdf'
import lec2 from '../../pdf/second term/safety/New Microsoft Word Document.docx'
export default function Safety() {
  return (
    <>
    <h1 className='text-center text-white it-head'>Safety</h1>
    <div className='main-it'>
     <a href={lec1} className='it2' target='_blank'>Lecture 1</a>
     <a href={lec2} className='it2 px-4' target='_blank'>Report</a>
 
    </div>
    <h1 className='text-center text-white'>ليس للمادة امتحانات سواء ميد او فاينال<br/>  يكتفي بعمل ريبورت فقط</h1>
    </>
  )
}
