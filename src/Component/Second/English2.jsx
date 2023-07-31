import React from 'react'
import lec1 from '../../pdf/second term/english/lectures/الايميل.pdf'
import lec2 from '../../pdf/second term/english/lectures/المضارع البسيط.pdf'
import lec3 from '../../pdf/second term/english/lectures/المضارع المستمر.pdf'
import lec4 from '../../pdf/second term/english/lectures/المنزل.pdf'
import lec5 from '../../pdf/second term/english/lectures/المواقف(المحادثه).pdf'
import lec6 from '../../pdf/second term/english/lectures/مصطلحات تعبيرية.pdf'
import sec1 from '../../pdf/second term/english/sections/Answerkey.pdf'
import sec2 from '../../pdf/second term/english/sections/Nouns VS Adjs.pdf'
import sec3 from '../../pdf/second term/english/sections/Nouns VS Adjs2.pdf'
import sec4 from '../../pdf/second term/english/sections/technical report.pdf'
import sec5 from '../../pdf/second term/english/sections/الماضي البسيط.pdf'
import sec6 from '../../pdf/second term/english/sections/المستقبل البسيط.pdf'
import sec7 from '../../pdf/second term/english/sections/سكشن الايميل.pdf'
import sec8 from '../../pdf/second term/english/sections/سكشن المضارع البسيط.pdf'
import sec9 from '../../pdf/second term/english/sections/سكشن المضارع المستمر.pdf'
export default function English2() {
  return (
    <div className='d-flex justify-content-center mt-5'>

    <table className="table ">
      <thead className='bg-info '>
      <th className='head-main'>Lectures</th>
      <th className='head-main'>Sections</th>
      </thead>
      <tbody>
        <tr>
          <td ><a href={lec1} target='_blank'> الايميل</a></td>
          <td><a href={sec1} target='_blank'>Answerkey</a></td>
          
        </tr>
        <tr>
          <td ><a href={lec2} target='_blank'>المضارع البسيط</a></td>
          <td><a href={sec2} target='_blank'>Nouns VS Adjs</a></td>
          
        </tr>
        <tr>
          <td ><a href={lec3} target='_blank'>المضارع المستمر</a></td>
          <td><a href={sec3} target='_blank'>Nouns VS Adjs2</a></td>
          
        </tr>
        <tr>
          <td ><a href={lec4} target='_blank'>المنزل</a></td>
          <td><a href={sec4} target='_blank'>technical report</a></td>
          
        </tr>
        <tr>
          <td ><a href={lec5} target='_blank'>المواقف(المحادثه)</a></td>
          <td><a href={sec5} target='_blank'>الماضي البسيط </a></td>
        
        </tr>
        <tr>
          <td ><a href={lec6} target='_blank'>مصطلحات تعبيرية</a></td>
          <td><a href={sec6} target='_blank'>المستقبل البسيط</a></td>
        
        </tr>
        <tr>
        <td className='text-muted'>Empty</td>
          <td><a href={sec7} target='_blank'>سكشن الايميل</a></td>
          
        </tr>
        <tr>
        <td className='text-muted'>Empty</td>
          <td><a href={sec8} target='_blank' >سكشن المضارع البسيط</a></td>
          
        </tr>
        <tr>
        <td className='text-muted'>Empty</td>
          <td><a href={sec9} target='_blank'>سكشن المضارع المستمر</a></td>
          
        </tr>
     
     
      </tbody>
    </table>
        </div>
  )
}
