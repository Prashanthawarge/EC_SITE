
import Link from "next/link";
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { AiOutlineTags } from 'react-icons/ai';
import { BiArrowBack } from 'react-icons/bi';
import { CgFileDocument } from 'react-icons/cg';
import { FaRegComment } from 'react-icons/fa';
import { FiFolder } from 'react-icons/fi';
import Loader from '../loader';
import PostBody from './blogPara';



function opportunitiesDetailsNews({}) {
  const router = useRouter();
  const value = router.query;
  const author =  value.author;
  const aboutAuthor =  value.aboutAuthor;
  const id =  value.id;
  const shortDescription = value.short_description;
  const img = value.img;
  const data = value.para;
  const tags =  value.tags;
  const title =  value.title; 
  const  [blog, setBlog] = useState('')

  const [blogApiData, setBlogApiData] = useState([]);
  const [blogImage, setBlogImage] = useState('');
  useEffect(() => {
    async function getUser() {
      try {
        const response = await fetch(
          `http://43.205.94.230/api/blogs/${id}`
        );

        if (!response.ok) {
          throw new Error(`Error! status: ${response.status}`);
        }

        const data = await response.json();
        setBlogApiData(data);
        return data;
      } catch (err) {
        console.log(err);
      }
    }

    getUser();
  }, []);
 console.log('selected blog',blogApiData)
 console.log('selected', id)


  return (
    
    <>
        {blogApiData == '' ? (
          <Loader />
        ) : (
    <div className='opportunitiesDetailsContainer'>
                  
          <div className='opportunitiesDetailsImageContainer'>
               <div className="opportunitiesDetailsImagebox">
<img 
  src={blogApiData.blog_image}
  alt="VPN Illustrasi"
></img> 
   </div>
          <div className="blogBox">
           <h1 className='mainTitle'>{blogApiData.title}</h1>
           <div className='smallBlogBox'>
             <div className='smallBlogInBox'>
             <CgFileDocument/>
            <span className='smallblogText'>{author}</span>
             </div>
             <div className='smallBlogInBox'>
             <FiFolder/>
            <span className='smallblogText'>{blogApiData.tags}</span>
             </div>
            
           </div >
           <div className='smallBlogBox'>
             <div className='smallBlogInBox'>
             <AiOutlineTags/>
            <span className='smallblogText'>{blogApiData.sub_tags}</span>
             </div>
             <div className='smallBlogInBox'>
             <FaRegComment/>
            <span className='smallblogText'>0</span>
             </div>
            
           </div>
           <div>

           </div>
           
          </div>
          </div>
       
          <div  className='opportunitiesDetailsTextboxContainer'>
          

          <div className="oppoImageTextContainer">
            <div className='opporDetailsImage'>
            <img
        
       src={blogApiData.blog_image}
       alt="VPN Illustrasi"
       layout="fill"
       objectFit="cover"
       quality={100}
       width={700}
       height={250}
       layout="responsive"
     ></img> 
            </div>

         
          </div>

          </div>
        

          <div className='opporDetailsText'>
            <PostBody content={JSON.parse(blogApiData.blog_body)[0]?.value} />
  </div>

  <div className='aboutAuthorBox'>
  <p className='aboutTheAuthor'>About the author</p>

          <h4 className='authorName'>{author}</h4>
          <p className='authorPara'>{aboutAuthor}</p>
           

          </div>


          <div className='LoginComment'>
            <Link href="/blog">
            <div className='accountButton'>
             <div className='accountButotnLogin'><BiArrowBack/> Prev</div>
            </div>
            </Link>
           

          </div>

        </div>
         )}
         </>
  )
}

export default opportunitiesDetailsNews
