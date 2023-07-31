import React from 'react'
import lecture1 from '../pdf/drawing engineer/lecture drawing 1.pdf'
import lecture2 from '../pdf/drawing engineer/lecture drawing 2.pdf'
import lecture3 from '../pdf/drawing engineer/lecture drawing 3.pdf'
import lecture4 from '../pdf/drawing engineer/lecture drawing 4.pdf'
import exam1 from '../pdf/drawing engineer/امتحان الميد رسم فنى 2023.pdf'
import exam2 from '../pdf/drawing engineer/امتحان الفاينال رسم 2022.pdf'

export default function Draw() {
  return (
    <>
    <h1 className='text-center text-white it-head  p-2 '>Drawing Engineer</h1>
    <div className='main-it'>
     <a href={lecture1} className='it2' target='_blank'> المحاضرة الاولى</a>
     <a href={lecture2} className='it2' target='_blank'>المحاضرة الثانية</a>
     <a href={lecture3} className='it2' target='_blank'>المحاضرة الثالثة</a>
     <a href={lecture4} className='it2' target='_blank'>المحاضرة الرابعة</a>
     <a href={exam1} className='it2 px-3' target='_blank'>امتحان الميد رسم  2022</a>
     <a href={exam2} className='it2 ' target='_blank'>امتحان الفاينال رسم 2022</a>
 
    </div>
    
    </>
  )
}
