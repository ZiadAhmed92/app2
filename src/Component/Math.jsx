import React from 'react'
import math1 from '../pdf/math/math.pdf'
import math2 from '../pdf/math/مسائل محلولة(هندسه عين شمس).PDF'
import math3 from '../pdf/math/ملخص رياضيات.pdf'
import math4 from '../pdf/math/امتحانات/امتحان الميد اوتو 2022.pdf'
import math5 from '../pdf/math/امتحانات/امتحان الميد اوتو 2023.pdf'
import math6 from '../pdf/math/امتحانات/امتحان طاقه فاينال 2022.pdf'
export default function Math() {
  return (
    <div className='d-flex justify-content-center mt-5'>

<table className="table ">
  <thead className='bg-info '>
  <th className='head-main'>PDF</th>
  <th className='head-main'>Summaries</th>
  <th className='head-main'>Exams</th>
  </thead>
  <tbody>
    <tr>
      <td ><a href={math1} target='_blank'>المنهج كامل</a></td>
      <td><a href={math3} target='_blank'>ملخص رياضيات</a></td>
      <td><a href={math4}target='_blank'>امتحان الميد اوتو 2021</a></td>
    </tr>
    <tr>
      <td ><a href={math2} target='_blank'>مسائل محلولة(هندسه عين شمس)</a></td>
      <td className='text-muted'>Empty</td>
      <td><a href={math5} target='_blank'>امتحان الميد اوتو 2022</a></td>
    </tr>
    <tr>
    <td className='text-muted'>Empty</td>
      <td className='text-muted'>Empty</td>
      <td><a href={math6} target='_blank'>امتحان طاقه فاينال 2021</a></td>
    </tr>
    
   
  </tbody>
</table>
    </div>
  )
}
