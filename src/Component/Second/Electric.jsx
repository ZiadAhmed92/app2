import React from 'react'
import lecture1 from '../../pdf/second term/electricity/lecture 1.pdf'
import lecture2 from '../../pdf/second term/electricity/lecture 2.pdf'
import lecture3 from '../../pdf/second term/electricity/lecture 3.pdf'
import lecture4 from '../../pdf/second term/electricity/lecture 4.pdf'
import lecture5 from '../../pdf/second term/electricity/lecture 5.pdf'
import lecture6 from '../../pdf/second term/electricity/lecture 6.pdf'
import lecture7 from '../../pdf/second term/electricity/lecture 7.pdf'
import exm1 from '../../pdf/second term/electricity/امتحان الكهربا فاينال 2021.pdf'
import exm2 from '../../pdf/second term/electricity/امتحان الكهربا فاينال 2022.pdf'
import exm3 from '../../pdf/second term/electricity/امتحان الميد كهربا 2022.pdf'
import samr from '../../pdf/second term/electricity/ملخص كهرباء.pdf'

export default function Electric() {
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
         <td><a href={samr} target='_blank'>ملخص كهرباء</a></td>
         <td><a href={exm1}target='_blank'> امتحان الكهربا فاينال 2021</a></td>
       </tr>
       <tr>
          <td ><a href={lecture2} target='_blank'>Lecture 2</a></td>
         <td className='text-muted'>Empty</td>
         <td><a href={exm2} target='_blank'>امتحان الفاينال كهربا 2022</a></td>
         </tr>
       <tr>
          <td ><a href={lecture3} target='_blank'>Lecture 3</a></td>
         <td className='text-muted'>Empty</td>
         <td><a href={exm3} target='_blank'>   امتحان الكهربا ميد 2022</a></td>
         </tr>
       <tr>
          <td ><a href={lecture4} target='_blank'>Lecture 4</a></td>
         <td className='text-muted'>Empty</td>
         <td className='text-muted'>Empty</td>         </tr>
       <tr>
          <td ><a href={lecture5} target='_blank'>Lecture 5</a></td>
         <td className='text-muted'>Empty</td>
         <td className='text-muted'>Empty</td>         </tr>
       <tr>
          <td ><a href={lecture6} target='_blank'>Lecture 6</a></td>
         <td className='text-muted'>Empty</td>
         <td className='text-muted'>Empty</td>         </tr>
       <tr>
          <td ><a href={lecture7} target='_blank'>Lecture 7</a></td>
         <td className='text-muted'>Empty</td>
         <td className='text-muted'>Empty</td>         </tr>
      
     
     </tbody>
   </table>
       </div>
  )
}
