import React from 'react'
import pdf1 from '../../pdf/second term/engines/all course.pdf'
import sumr1 from '../../pdf/second term/engines/Summaries/lecture engine 1.docx'
import sumr2 from '../../pdf/second term/engines/Summaries/lecture engine 2.docx'
import sumr3 from '../../pdf/second term/engines/Summaries/lecture engine 3.docx'
import sumr4 from '../../pdf/second term/engines/Summaries/lecture engine 4.docx'
import sumr5 from '../../pdf/second term/engines/Summaries/lecture engine 5.docx'
import sumr6 from '../../pdf/second term/engines/Summaries/lecture engine6.docx'
import sumr7 from '../../pdf/second term/engines/Summaries/lecture engine 7.docx'
import sumr8 from '../../pdf/second term/engines/Summaries/lecture engune 8.docx'
import sumr9 from '../../pdf/second term/engines/Summaries/lecture engine9.docx'
import sumrAll from '../../pdf/second term/engines/Summaries/engines.docx'
import ans from '../../pdf/second term/engines/Summaries/حل امتحان الفاينال محركات 2022.docx'
import exam from '../../pdf/second term/engines/امتحانات/امتحان المحركات 2021.pdf'
import exam2 from '../../pdf/second term/engines/امتحانات/امتحان المحركات ميد 2022.pdf'
import sec1 from '../../pdf/second term/engines/sections/4_5890727974960893696.pdf'
import sec2 from '../../pdf/second term/engines/sections/4_5890727974960893697.pdf'
import sec3 from '../../pdf/second term/engines/sections/4_5890727974960893698.pdf'
import sec4 from '../../pdf/second term/engines/sections/Engines - 4.pdf'
import sec5 from '../../pdf/second term/engines/sections/Engines - 5.pdf'
export default function Engines() {
  return (
    <div className='d-flex justify-content-center mt-5'>

    <table className="table ">
      <thead className='bg-info '>
      <th className='head-main'>Sections</th>
      <th className='head-main'>Summaries</th>
      <th className='head-main'>Exams</th>
      </thead>
      <tbody>
        <tr>
          <td ><a href={pdf1} target='_blank'>المنهج كامل</a></td>
          <td><a href={sumr1} target='_blank'>lec 1</a></td>
          <td><a href={exam}target='_blank'>امتحان الفاينال محركات 2021</a></td>
        </tr>
        <tr>
          <td ><a href={sec3} target='_blank'> سكشن 1</a></td>
          <td><a href={sumr2} target='_blank'>lec 2 </a></td>
          <td><a href={ans}target='_blank'>حل امتحان الفاينال 2021 </a></td>
        </tr>
        <tr>
          <td ><a href={sec2} target='_blank'> سكشن 2</a></td>
          <td><a href={sumr3} target='_blank'>lec 3 </a></td>
          <td><a href={exam2}target='_blank'>امتحان الميد محركات  2022</a></td>
        </tr>
        <tr>
          <td ><a href={sec1} target='_blank'> سكشن 3.</a></td>
          <td><a href={sumr4} target='_blank'> lec 4</a></td>
          <td className='text-muted'>Empty</td>
        </tr>
        <tr>
          <td ><a href={sec4} target='_blank'> سكشن 4</a></td>
          <td><a href={sumr5} target='_blank'>lec 5 </a></td>
          <td className='text-muted'>Empty</td>
        </tr>
        <tr>
          <td ><a href={sec5} target='_blank'> سكشن 5</a></td>
          <td><a href={sumr6} target='_blank'>lec 6 </a></td>
          <td className='text-muted'>Empty</td>
        </tr>
        <tr>
        <td className='text-muted'>Empty</td>
          <td><a href={sumr7} target='_blank'>lec 7 </a></td>
          <td className='text-muted'>Empty</td>
        </tr>
        <tr>
        <td className='text-muted'>Empty</td>
          <td><a href={sumr8} target='_blank'> lec 8</a></td>
          <td className='text-muted'>Empty</td>
        </tr>
        <tr>
        <td className='text-muted'>Empty</td>
          <td><a href={sumr9} target='_blank'>lec 9 </a></td>
          <td className='text-muted'>Empty</td>
        </tr>
        <tr>
        <td className='text-muted'>Empty</td>
          <td><a href={sumrAll} target='_blank'>ملخص للمنهج كامل</a></td>
          <td className='text-muted'>Empty</td>
          
        </tr>
     
      </tbody>
    </table>
        </div>
  )
}
