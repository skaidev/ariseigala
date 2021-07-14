import React from "react";
import Link from "next/link";
import Image from "next/image"; 
import {TitleComp} from '../components/Title';                                   
import ArticleLayout from "Layout/ArticleLayout";
import NewsLetterComp from '../components/Newsletter';
import AdvertisementComp from '../components/Advertisement';


const HeadingPostGallery = (): JSX.Element => {
    return (
            <div className="container heading_post_gallery">
                <div className="row">
                    <div className="col">
                        <div className="row" >
                            <img src={headingPosts?.[0]?.img_path} alt={headingPosts?.[0]?.img_alt} width="309" height='231' />
                            <p> {headingPosts?.[0]?.postExcerpt} </p>
                            <span></span>
                            <p className='post-writer'>By {headingPosts?.[0]?.postWriter}</p>
                        </div>
                        <div className="row">
                            <img src={headingPosts?.[1]?.img_path} alt={headingPosts?.[1]?.img_alt} width="309" height='231' />
                            <p> {headingPosts?.[1]?.postExcerpt} </p>
                            <span></span>
                            <p className='post-writer'>By {headingPosts?.[1]?.postWriter}</p>
                        </div>
                    </div>
                    <div className="col-6">
                            <img src={headingPosts?.[2]?.img_path} alt={headingPosts?.[2]?.img_alt} width="618" height='462' />
                            <p> {headingPosts?.[2]?.postExcerpt} </p>
                            <span></span>
                            <p className='post-writer'>By {headingPosts?.[2]?.postWriter}</p>
                    </div>
                    <div className="col">
                         <div className="row">
                            <img src={headingPosts?.[3]?.img_path} alt={headingPosts?.[3]?.img_alt} width="309" height='231' />
                            <p> {headingPosts?.[3]?.postExcerpt} </p>
                            <span></span>
                            <p className='post-writer'>By {headingPosts?.[3]?.postWriter}</p>
                        </div>
                        <div className="row">
                            <img src={headingPosts?.[4]?.img_path} alt={headingPosts?.[4]?.img_alt} width="309" height='231' />
                            <p> {headingPosts?.[4]?.postExcerpt} </p>
                            <span></span>
                            <p className='post-writer'>By {headingPosts?.[4]?.postWriter}</p>
                        </div>
                    </div>
                </div>    
            </div>
      )
};

export const PostGallery = (): JSX.Element => {
    return (
            <div className="container row mb-4">
                {postsGallery.map(({img_path, img_alt, postExcerpt, postWriter}, i) => (
                    <div className="col-md-3" key={i}>
                    <Image src={img_path} alt={img_alt} width="309" height='231' />
                    <p> {postExcerpt} </p>
                    <span></span>
                    <p className='post-writer'>By {postWriter}</p>
                </div>
                ))}
            </div>
      )
};




const CultureComp = (): JSX.Element => {
  return (
    <ArticleLayout>
          <main className='culture_tourism_container'>
        <TitleComp title='Culture and Tourism' />
        
        <section className='container'>
            <HeadingPostGallery />
        </section>

        <AdvertisementComp text='Advertisement' />

        <section className='container post_gallery my-6'>
            <TitleComp title='Sub-heading'/>
            <PostGallery />
            <PostGallery />
        </section>
        
        <section className='container post_gallery my-6'>
            <TitleComp title='Sub-heading' />
            <PostGallery />
            <PostGallery />
        </section>

        <AdvertisementComp text='Advertisement' />

        <section className='container post_gallery my-6'>
            <TitleComp title='Sub-heading' />
            <PostGallery />
            <PostGallery />
        </section>

        <NewsLetterComp />

        <AdvertisementComp text='Advertisement' />

    </main>
    </ArticleLayout>
  );
};

export default CultureComp;


const headingPosts = [
  { img_path: "/images/Rectangle-29.png", 
    img_alt: "article-image",
    postExcerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae odit laboru.",
    postWriter: "Emeka Alice"
  },
  { img_path: "/images/Rectangle-29-1.png", 
    img_alt: "article-image",
    postExcerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae odit laboru.",
    postWriter: "Emeka Alice"
  },
  { img_path: "/images/Rectangle-28.png", 
    img_alt: "article-image",
    postExcerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae odit laboru thre ndhjj larue nocedure styled-oditt dolor sit amet consectetur adipisicing elit dolor sit amet consectetur adipisicing elit.",
    postWriter: "Emeka Alice"
  },
  { img_path: "/images/Rectangle-29-2.png", 
    img_alt: "article-image",
    postExcerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae odit laboru.",
    postWriter: "Emeka Alice"
  },
  { img_path: "/images/Rectangle-29-3.png", 
    img_alt: "article-image",
    postExcerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae odit laboru.",
    postWriter: "Emeka Alice"
  },
]


const postsGallery = [
   { 
    img_path: "/images/Rectangle-29-4.png", 
    img_alt: "article-image",
    postExcerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae odit laborum.",
    postWriter: "Emeka Alice"  
    },

  { img_path: "/images/Rectangle-29-5.png", 
    img_alt: "article-image",
    postExcerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae odit laborum.",
    postWriter: "Emeka Alice"  
    },

  { img_path: "/images/Rectangle-29-6.png", 
    img_alt: "article-image",
    postExcerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae odit laborum.",
    postWriter: "Emeka Alice"  
    },

  { img_path: "/images/Rectangle-29-7.png", 
    img_alt: "article-image",
    postExcerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae odit laborum.",
    postWriter: "Emeka Alice"  
    }

]


