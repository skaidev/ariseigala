import ArticleLayout from "Layout/ArticleLayout";
import Image from 'next/image';
import Icon from '../components/Icon';
import TitleComp from '../components/Title';
import Link from 'next/link';
import NewsLetterComp from '../components/Newsletter';
// import '../styles/articlespage.scss';

export default function Home(): JSX.Element {
  return (
    <ArticleLayout>
      <div className="container">
              <section className='advertisement_section'>
              <ul className="nav">
                {navItems.map(({ link, title }, i) => (
                  <li className="nav-item" key={i}>
                    <Link href={link}>
                      <a className="nav-link">{title}</a>
                    </Link>
                  </li>
                ))}
              </ul>
                  <div className="advertisement-content">
                     <Image src="/images/Rectangle-27.png" alt="advert-image" width={1000} height={350} />
                  </div>

                  {/* <button className="btn btn-dark">Load more articles</button> */}
              </section> 
        <div className="container article-head">
          <div className="main">
              <h1 className='serif fw-700'>Alhaji Yahaya Bello, receives man of the year.</h1>
              <Image src='/images/img1.png' alt="article-image" width="750" height='411' />
              <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque illum laboriosam 
                temporibus odio architecto accusantium voluptates totam consectetur eum officia 
                qui neque impedit modi sapiente deleniti, suscipit dolores harum. 
                Nemo dolorum veniam et repellat tempora. Corporis incidunt, aliquam accusantium, 
                aut aliquid ea quia dicta molestiae ab veritatis ipsa qui?Lorem ipsum dolor sit amet consectetur, 
                adipisicing elit. Doloremque illum laboriosam temporibus odio architecto accusantium voluptates 
                totam consectetur eum officia qui neque impedit modi sapiente deleniti, suscipit dolores harum. Ipsam? 
                Corporis incidunt, aliquam accusantium, aut aliquid ea quia dicta molestiae ab veritatis ipsa qui? Ipsam? 
                totam consectetur eum officia qui neque impedit modi sapiente deleniti, suscipit dolores harum. Ipsam? 
                Corporis incidunt, aliquam accusantium, aut aliquid ea quia dicta molestiae ab veritatis ipsa qui? Ipsam? 
              </p>
          </div>
          <aside className="articles">
            <section className='articles_section'>
              {articleItems.map(({img_path, alt, headingText, contentText}, i) => (
                <div className="articles_content" key={i}>
                  <div className="articles_img">
                      <Image src={img_path} alt={alt} width="240" height='193' />
                  </div>
                  <div className="article-text">
                     <p className='heading-text'>{headingText}</p>
                     <p>{contentText}</p>
                  </div>
              </div>
            ))}
            </section>
            <button className="btn btn-dark">Read more</button>
          </aside> 
        </div>
               

       
              <section className="latest">
                <TitleComp title='Latest' /> 
        
                    <div className="latest-post-container">
                      <div className='latest-post-content'>
                        <div className='row'>
                            {latestPosts.map(({img_path, img_alt, postExcerpt, postWriter}, i) => (
                            <div className="latest-item col-md-4" key={i}>
                                <Image src={img_path} alt={img_alt} width="300" height='231' />
                                <p> {postExcerpt} </p>
                                <p className='post-writer'>By {postWriter}</p>
                            </div>
                            ))}
                        </div>
                        <button className="btn btn-dark">Go to magazine</button>
                      </div>
                      <div className="advertisement-img-box">
                          <Image src='/images/Advert-1.png' alt="article-image" width="283" height='562' />
                      </div>
                      
                    </div>
              </section>


              <section className='entertainement'>
                <TitleComp title='Entertainment' />
                    <section className="entertainment-section">
                            <section className="entertainment-left-section">
                              <Image src='/images/Rectangle-19.png' alt="article-image" width="360" height='500' />
                              <h3 className='serif fw-700'> Lorem ipsum dolor sit amet consectetur adipisicing elit. </h3>
                            </section>
                            <section className="entertainment-right-section">
                                {entertainmentPosts.map(({path, alt, articleExcerpt}, i) => (
                                    <div className="entertainment-articles" key={i}>
                                        <Image src={path} alt={alt} width="374" height='269' />
                                        <p> {articleExcerpt} </p>
                                    </div>
                                    ))}
                            </section>
                    </section>
              </section>

              <section className="culture-tourism">
                    <TitleComp title='Culture and tourism' />
                        <div className="culture-tourism-top-section">
                            <h3 className='serif fw-700'> Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit. Quibusdam eius 
                              numquam alias? 
                            </h3>
                            <Image src='/images/Rectangle-24.png' alt="article-image" width="1200" height='650' />
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae 
                              odit laborum architecto esse autem earum ad, vitae explicabo fugit ullam 
                              fuga nesciunt quas inventore nisi pariatur omnis possimus repellat tempore 
                              ipsam dolor. Eligendi minima dolore, nostrum doloremque perferendis non illo! 
                              Iure sint, magni fugit asperiores explicabo dolorum voluptates atque optio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae 
                              odit laborum architecto esse autem earum ad, vitae explicabo fugit ullam 
                              fuga nesciunt quas inventore nisi pariatur omnis possimus repellat tempore 
                              ipsam dolor. Eligendi minima dolore, nostrum doloremque perferendis non illo! 
                              Iure sint, magni fugit asperiores explicabo dolorum voluptates atque optio. 
                            </p>
                            <button className="btn btn-light">
                              Read arcticle
                              <Icon name='ArrowRightIcon' size={20} color='#000' props/>
                            </button>
                        </div>
                        <div className="culture-tourism-bottom-section">
                          <div className="culture-tourism-content">
                                {latestPosts.map(({img_path, img_alt, postExcerpt, postWriter}, i) => (
                                <div className="latest-item" key={i}>
                                    <Image src={img_path} alt={img_alt} width="309" height='231' />
                                    <p> {postExcerpt} </p>
                                    <hr />
                                    <p className='post-writer'>By {postWriter}</p>
                                </div>
                                ))}
                          </div>
      
                          <div className="advertisement">
                                <Image src='/images/Advert-1.png' alt="article-image" width="283" height='562' />
                          </div>
                        </div>
              </section>
 
              <section className="education">
                  <TitleComp title='Education' />
                    <div className='education-content'>
                        <div className='education-content-left'>
                              <Image src="/images/Rectangle-26.png" alt="speaker_image" width={500} height={560} />
                        </div>
                        <div className='education-right-content'>
                              <div className='interview'>
                                <p>Interview</p>
                              </div>

                              <div className='topic'>
                                  <h2>The Sitdown</h2>
                                  <p>with</p>
                                  <h2>Dr. Michael Doug</h2>
                                  <p>CEO Klint Group Inc.</p>
                              </div>

                              <div className='writer'>
                                <p>By Sola Oyebanji</p>
                              </div>

                        </div>
                    </div>
              </section>
        
              <section className='posts_container'>
                  <div className='posts_grid'>
                    {latestPosts.map(({img_path, img_alt, postExcerpt, postWriter}, i) => (
                        <div className="latest-item" key={i}>
                            <Image src={img_path} alt={img_alt} width="309" height='231' />
                            <p> {postExcerpt} </p>
                            <div className="writer_box">
                              <p className='post-writer'>By {postWriter}</p>
                            </div>
                        </div>
                        ))}
                  </div>
              </section>
              <NewsLetterComp />

             
        
        </div>
     
    </ArticleLayout>
  );
}


// Data for Popular Articles
const articleItems = [
  { img_path: "/images/Frame-1.png", 
    alt: "article-image",
    headingText: "Lorem ipsum dolor sit amet.",
    contentText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eaque officia dolores. Eligendi minima dolore, nostrum doloremque."  
    },

  { img_path: "/images/Frame-2.png", 
    alt: "article-image",
    headingText: "Lorem ipsum dolor sit amet.",
    contentText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eaque officia dolores. Eligendi minima dolore, nostrum doloremque."  
    },

  { img_path: "/images/Frame-3.png", 
    alt: "article-image",
    headingText: "Lorem ipsum dolor sit amet.",
    contentText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eaque officia dolores. Eligendi minima dolore, nostrum doloremque."  
    }
];


// Data for latest post section
const latestPosts = [
  { img_path: "/images/Rectangle-8.png", 
    img_alt: "article-image",
    postExcerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae odit laborum architecto esse autem.",
    postWriter: "Sola Oyebaji"  
    },

  { img_path: "/images/Rectangle.png", 
    img_alt: "article-image",
    postExcerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae odit laborum architecto esse autem.",
    postWriter: "Sola Oyebaji"  
    },

  { img_path: "/images/Rectangle-1.png", 
    img_alt: "article-image",
    postExcerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae odit laborum architecto esse autem.",
    postWriter: "Sola Oyebaji"  
    }
];


// Data for Entertainment post section
const entertainmentPosts = [
  { path: "/images/Rectangle20.png", 
    alt: "article-image",
    articleExcerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quisquam delectus molestiae, quam nulla odit. ", 
    },

  { path: "/images/Rectangle21.png", 
    alt: "article-image",
    articleExcerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quisquam delectus molestiae, quam nulla odit. ", 
    },

  { path: "/images/Rectangle22.png", 
    alt: "article-image",
    articleExcerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quisquam delectus molestiae, quam nulla odit. ", 
    }
];


const navItems = [
  { title: "News", link: "/" },
  { title: "Culture and tourism", link: "/" },
  { title: "Education", link: "/" },
  { title: "Entertainment", link: "/" },
  { title: "Opinion", link: "/" },
  { title: "Politics", link: "/" },
  { title: "Business", link: "/" },
  { title: "Religion", link: "/" },
  { title: "Technology", link: "/" },
];