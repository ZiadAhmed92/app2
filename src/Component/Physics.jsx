import React from 'react'
import lecture1 from '../pdf/physics/lecture physics 1.pdf'
import lecture2 from '../pdf/physics/lecture physics 2.pdf'
import lecture3 from '../pdf/physics/lecture physics 3.pdf'
import sum from '../pdf/physics/ملخص فيزياء.pdf'
import ex1 from '../pdf/physics/التجارب/1 Pendulum.docx'
import ex2 from '..//pdf/physics/التجارب/2 Hook1.docx'
import ex3 from '../pdf/physics/امتحان الفيزياء ميد 2022.pdf'
export default function Physics() {
  return (
    <div className='d-flex justify-content-center mt-5'>

<table className="table ">
  <thead className='bg-info '>
  <th className='head-main'>محاضرات</th>
  <th className='head-main'>ملخصات</th>
  <th className='head-main'>تجارب العملى</th>
  <th className='head-main'> امتحانات</th>
  </thead>
  <tbody>
    <tr>
      <td ><a href={lecture1} target='_blank'> المحاضرة الاولى</a></td>
      <td><a href={sum} target='_blank'>ملخص فيزياء </a></td>
      <td><a href={ex1}target='_blank'>Pendulum</a></td>
      <td><a href={ex3}target='_blank'>امتحان الفيزياء ميد 2022</a></td>
    </tr>
    <tr>
      <td ><a href={lecture2} target='_blank'>المحاضرة الثانية </a></td>
      <td className='text-muted'>Empty</td>
      <td><a href={ex2}target='_blank'>Hook</a></td>
      <td className='text-muted'>Empty</td>
    </tr>
    <tr>
    <td ><a href={lecture3} target='_blank'> المحاضرة الثالثة </a></td>
      <td className='text-muted'>Empty</td>
      <td className='text-muted'>Empty</td>
      <td className='text-muted'>Empty</td>
      
    </tr>
   
  </tbody>
</table>

    </div>
  )
}
