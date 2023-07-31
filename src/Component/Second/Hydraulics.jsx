import React from 'react'
import pdf1 from '../../pdf/second term/hydraulics/sections/Sec.1.pdf'
import pdf2 from '../../pdf/second term/hydraulics/sections/Sec.2.pdf'
import pdf3 from '../../pdf/second term/hydraulics/sections/Section3.pdf'
import lec1 from '../../pdf/second term/hydraulics/182OH2.0_M1_HydraulicSystem.pdf'
import lec2 from '../../pdf/second term/hydraulics/lect 1 hydraulics.pdf'
import lec3 from '../../pdf/second term/hydraulics/OH2.3Pumps.pdf'
import sumr from '../../pdf/second term/hydraulics/ملخص هيدروليك.pdf'
import exam from '../../pdf/second term/hydraulics/امتحان الهيدروليك فاينال 2021.pdf'
import lec4 from '../../pdf/second term/hydraulics/hydraulicstraining.ppt'
export default function Hydraulics() {
  return (
    <div className='d-flex justify-content-center mt-5'>

    <table className="table ">
      <thead className='bg-info '>
      <th className='head-main'>Sections</th>
      <th className='head-main'>Lectures</th>
      <th className='head-main'>Summaries</th>
      <th className='head-main'>Exams</th>
      </thead>
      <tbody>
        <tr>
          <td ><a href={pdf1} target='_blank'> سكشن 1</a></td>
          <td><a href={lec1} target='_blank'> Hydraulic System</a></td>
          <td><a href={sumr}target='_blank'> ملخص هيدروليك</a></td>
          <td><a href={exam}target='_blank'> امتحان الهيدروليك فاينال 2021 </a></td>

        </tr>
        <tr>
          <td ><a href={pdf2} target='_blank'> سكشن 2</a></td>
          <td><a href={lec2} target='_blank'>Lecture 1 hydraulics</a></td>
          <td className='text-muted'>Empty</td>
          <td className='text-muted'>Empty</td>

        </tr>
        <tr>
          <td ><a href={pdf3} target='_blank'> سكشن 3</a></td>
          <td><a href={lec3} target='_blank'>Pumps </a></td>
          <td className='text-muted'>Empty</td>
          <td className='text-muted'>Empty</td>

        </tr>
        <tr>
        <td className='text-muted'>Empty</td>
        <td ><a href={lec4} target='_blank'>Hydraulics Training</a></td>
          <td className='text-muted'>Empty</td>
          <td className='text-muted'>Empty</td>

        </tr>
       
       
      
       
     
      </tbody>
    </table>
        </div>
  )
}
