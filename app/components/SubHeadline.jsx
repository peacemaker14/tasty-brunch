import React from 'react'
import Card from './Card'

const title = 'How Can You Be Sure About Everything'
const tag = 'news'
const imgsrc = 'https://cdn.vox-cdn.com/thumbor/kp2RQYjI1eTdAbf_Xv2MFoNLAdw=/1600x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/9474565/jbareham_171013_2050_0030.jpg'
const preview = 'Lorem ipsum, atau ringkasnya lipsum, adalah teks standar yang ditempatkan untuk mendemostrasikan elemen grafis atau presentasi visual seperti font, tipografi'
const article = {
  title,  tag, imgsrc, preview, article
}

const SubHeadline = ({ title='Featured Article', }) => 
  <div>
    <h2 className='f-subheadline'>{title}</h2>
    <Card article={article}/>
    {/* <Card/>
    <Card/> */}
  </div>

export default SubHeadline