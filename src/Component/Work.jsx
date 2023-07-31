import React from 'react'
import work1 from '../pdf/wprkshop/lecture workshop 1.pdf'
import work2 from '../pdf/wprkshop/lecture workshop  2.pdf'
import work3 from '../pdf/wprkshop/lecture workshop 3.pdf'
import work4 from '../pdf/wprkshop/lecture workshop 4.pdf'
import work5 from '../pdf/wprkshop/lecture Workshops 5.pdf'
import work6 from '../pdf/wprkshop/sheet workshop .pdf'
import work7 from '../pdf/wprkshop/امتحان الميد اساسيات ورش 2023.pdf'
import work8 from '../pdf/drawing engineer/امتحان الفاينال رسم 2022.pdf'
export default function Work() {
  return (
    <div className='d-flex justify-content-center mt-5'>

<table className="table ">
  <thead className='bg-info '>
  <th className='head-main'>Lectures</th>
  <th className='head-main'>Sheets</th>
  <th className='head-main'>Exams</th>
  </thead>
  <tbody>
    <tr>
      <td ><a href={work1} target='_blank'> المحاضرة الاولى</a></td>
      <td><a href={work6} target='_blank'>شيت 1 </a></td>
      <td><a href={work7}target='_blank'>امتحان الميد اساسيات ورش 2022 </a></td>
    </tr>
    <tr>
      <td ><a href={work2} target='_blank'>المحاضرة الثانية </a></td>
      <td className='text-muted'>Empty</td>
      <td><a href={work8}target='_blank'>امتحان الفاينال اساسيات ورش 2022 </a></td>
    </tr>
    <tr>
    <td ><a href={work3} target='_blank'> المحاضرة الثالثة </a></td>
      <td className='text-muted'>Empty</td>
      <td className='text-muted'>Empty</td>
    </tr>
    <tr>
    <td ><a href={work4} target='_blank'>المحاضرة الرابعة </a></td>
      <td className='text-muted'>Empty</td>
      <td className='text-muted'>Empty</td>
    </tr>
    <tr>
    <td ><a href={work5} target='_blank'>المحاضرة الخامسة </a></td>
      <td className='text-muted'>Empty</td>
      <td className='text-muted'>Empty</td>
    </tr>
  </tbody>
</table>

    </div>
  )
}
