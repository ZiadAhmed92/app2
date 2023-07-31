import React from 'react'
import lecture1 from '../pdf/english/lecture/complaining leture 1st year.pdf'
import lecture2 from '../pdf/english/lecture/Everyday language lec.pdf'
import lecture3 from '../pdf/english/lecture/Idiomatic Expression lect2 P&O 1.pdf'
import lecture4 from '../pdf/english/lecture/lecture 1 paragraph .pdf'
import lecture5 from '../pdf/english/lecture/lecture 1st year.pdf'
import lecture6 from '../pdf/english/lecture/lecture all programs.pdf'
import lecture7 from '../pdf/english/lecture/lecture mecha&auto 1.pdf'
import lecture8 from '../pdf/english/lecture/lecture P&O.pdf'
import lecture9 from '../pdf/english/lecture/lecture sixth week.pdf'
import lecture10 from '../pdf/english/lecture/Unit 1 - Basics - lect2 all programs 1.pdf'
import sumr from '../pdf/english/lecture/محاضرات الانجليزي.pdf'
import section1 from '../pdf/english/section/p&o 1 section.pdf'
import section2 from '../pdf/english/section/Section  0   Getting to know you.pdf'
import section3 from '../pdf/english/section/section 1st year.pdf'
import section4 from '../pdf/english/section/Section all programs.pdf'
import section5 from '../pdf/english/section/section P&O 1st year.pdf'
import section6 from '../pdf/english/section/section2 all programs 1.pdf'
import section7 from '../pdf/english/section/section2 all programs 1.pptx'
import section8 from '../pdf/english/section/section4 all programs.pdf'
import section9 from '../pdf/english/section/Section7.pdf'
import section10 from '../pdf/english/section/Unit 1 - section all programs 1.pptx'
import section11 from '../pdf/english/section/Unit 2  section.pdf'
import section12 from '../pdf/english/section/سكاشن الانجليزي.pdf'
import englis from '../pdf/english/english.docx'


export default function English() {
  return (
    <>
         <div className='d-flex justify-content-center mt-5'>

<table className="table ">
  <thead className='bg-info '>
  <th className='head-main'>Lectures</th>
  <th className='head-main'>Summaries</th>
  </thead>
  <tbody>
    <tr className='tr-table'>
      <td ><a href={lecture1} target='_blank' className='text-englis'> Complaining Lecture 1st Year</a></td>
      <td><a href={section1}target='_blank' className='text-englis'>p&o 1 section</a></td>
    </tr>

    <tr>
    <td ><a href={lecture2} target='_blank' className='text-englis'> Everyday language lec</a></td>
      <td><a href={section2} target='_blank' className='text-englis'>Section  0   Getting to know you</a></td>
    </tr>

    <tr>
    <td ><a href={lecture3} target='_blank' className='text-englis'>Idiomatic Expression lect2 P&O 1</a></td>
      <td><a href={section3} target='_blank' className='text-englis'>section 1st year</a></td>
    </tr>

    <tr>
    <td ><a href={lecture4} target='_blank' className='text-englis'>lecture 1 paragraph</a></td>
      <td ><a href={section4} target='_blank' className='text-englis'>Section all programs </a></td>
    </tr>

    <tr>
    <td >
      <a href={lecture5} target='_blank' className='text-englis'> lecture 1st year</a></td>
      <td ><a href={section5} target='_blank' className='text-englis'> section P&O 1st year</a></td>   
       </tr>

    <tr>
    <td ><a href={lecture6} target='_blank' className='text-englis'>lecture/lecture all programs</a></td>
      <td ><a href={section6} target='_blank' className='text-englis'> section2 all programs 1</a></td>
    </tr>

    <tr>
    <td ><a href={lecture7} target='_blank' className='text-englis'> lecture mecha&auto 1</a></td>
      <td ><a href={section7} target='_blank' className='text-englis'> section2 all programs 1</a></td>
    </tr>

    <tr>
    <td ><a href={lecture8} target='_blank' className='text-englis'> lecture P&O</a></td>
      <td ><a href={section8} target='_blank' className='text-englis'> section4 all programs</a></td>
    </tr>

    <tr>
    <td ><a href={lecture9} target='_blank' className='text-englis'> lecture sixth week</a></td>
      <td ><a href={section9} target='_blank' className='text-englis'>Section7</a></td>
    </tr>

    <tr>
    <td ><a href={lecture10} target='_blank' className='text-englis'>Unit 1 - Basics - lect2 all programs 1</a></td>
      <td ><a href={section10} target='_blank' className='text-englis'> Unit 1 - section all programs 1</a></td>
    </tr>
    <tr>
    <td><a href={sumr} target='_blank'> محاضرات الانجليزي</a></td>
      <td ><a href={section11} target='_blank' className='text-englis'> Unit 2  section</a></td>
    </tr>
    <tr>
    <td className='text-muted'>Empty</td>
      <td ><a href={section12} target='_blank' className='text-englis'> سكاشن الانجليزي</a></td>
    </tr>
    <tr>
    <td className='text-muted'>Empty</td>
    <td><a href={englis} target='_blank' className='text-englis'> اسالة محلولة </a></td>    </tr>
  
  </tbody>
</table>
    </div>
    </>
  )
}
