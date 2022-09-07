import { format, parseISO } from 'date-fns';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Loader from '../loader/index';

const FeatureNewsDetails = ({}) => {
  const [blogApiData, setBlogApiData] = useState([]);
  const [blogImage, setBlogImage] = useState('');
  useEffect(() => {
    async function getUser() {
      try {
        const response = await fetch(
          ' http://43.205.94.230/api/blogs'
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
  console.log(blogApiData);

  return (
    <div className="homeMainContainer">
      <div className="homeContainer ">
        {blogApiData == '' ? (
          <Loader />
        ) : (
          <div className="newsmainContaier">
            {blogApiData &&
              blogApiData.map((blog, id) => {
                const date = parseISO(blog.created_date);

                return (
                  <Link
                    key={blog.id}
                    href={{
                      pathname: '/blogReadMore',
                      query: {
                        author: blog.author.name,
                        aboutAuthor: blog.author.about_author,
                        shortDescription: blog.short_description,
                        id: blog.id,
                        img: blog.blog_image,
                        para: blog.blog_body,
                        tags: blog.tags,
                        title: blog.title,
                      },
                    }}
                  >
                    <div className="newsCardContainer">
                      <div className="cardboxContainer">
                        <div className="cardLeft">
                          <div className="cardLeftImage">
                            <div
                              style={{
                                height: '97%',
                                backgroundColor: '#000000',
                                overflow: 'hidden',
                              }}
                            >
                              <img
                                alt="img"
                                src={blog?.blog_image}
                                width="60px"
                                referrerPolicy="no-referrer"
                                height="45px"
                                className="blogImg"
                              />
                            </div>
                          </div>
                          <div className="cardLeftText">
                            <time>{format(date, 'LLLL	d, yyyy')}</time>
                            <h1>{blog.title}</h1>
                            <pre
                className="blogPara"
                style={{ fontFamily: 'jost', whiteSpace: 'pre-wrap' }}
                dangerouslySetInnerHTML={{
                  __html: JSON.parse(blog.short_description)[0]?.value,
                }}
              />
                          </div>
                        </div>
                      </div>
                      <div className="cardBottom">
                        <h1 style={{ cursor: 'pointer' }}>Read more </h1>
                      </div>
                    </div>
                  </Link>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
};

export default FeatureNewsDetails;
