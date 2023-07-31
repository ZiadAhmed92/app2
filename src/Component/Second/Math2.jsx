import React from 'react'
import lecture1 from '../../pdf/second term/math/0.pdf'
import lecture2 from '../../pdf/second term/math/1.pdf'
import lecture4 from '../../pdf/second term/math/3.pdf'
import lecture5 from '../../pdf/second term/math/Ex.pdf'
import lecture6 from '../../pdf/second term/math/Interpolation.pdf'
import exam1 from '../../pdf/second term/math/امتحان الرياضيات فاينال 2022.pdf'
import samr1 from '../../pdf/second term/math/ملخص رياضيات 2.pdf'
export default function () {
  return (
    
    <div className='d-flex justify-content-center mt-5'>

    <table className="table ">
      <thead className='bg-info '>
      <th className='head-main'>Lectures</th>
      <th className='head-main'>Summaries</th>
      <th className='head-main'>Exams</th>
      </thead>
      <tbody>
        <tr>
          <td ><a href={lecture1} target='_blank'> Lecture 1</a></td>
          <td><a href={samr1} target='_blank'>ملخص رياضيات 2 </a></td>
          <td><a href={exam1}target='_blank'>امتحان الرياضيات فاينال 2022</a></td>
        </tr>
        <tr>
          <td ><a href={lecture2} target='_blank'>Lecture 2</a></td>
          <td className='text-muted'>Empty</td>
          <td className='text-muted'>Empty</td>        </tr>
        <tr>
        <td ><a href={lecture4} target='_blank'>Lecture 3</a></td>
          <td className='text-muted'>Empty</td>
          <td className='text-muted'>Empty</td>        </tr>
        <tr>
        <td ><a href={lecture5} target='_blank'>Lecture 4</a></td>
          <td className='text-muted'>Empty</td>
          <td className='text-muted'>Empty</td>
        </tr>
        <tr>
        <td ><a href={lecture6} target='_blank'>Lecture 5</a></td>
          <td className='text-muted'>Empty</td>
          <td className='text-muted'>Empty</td>
        </tr>
      </tbody>
    </table>
        </div>
  )
}
