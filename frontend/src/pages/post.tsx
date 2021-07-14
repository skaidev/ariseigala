import React from "react";                                 
import ArticleLayout from "Layout/ArticleLayout";
import NewsLetterComp from '../components/Newsletter';
import AdvertisementComp from '../components/Advertisement';
import {TitleComp, Title} from "components/Title";
import { PostGallery } from "./culture";


const PostPage = (): JSX.Element => {
    return (
        <ArticleLayout>

                <div>
                    <p></p>
                </div>

                <AdvertisementComp text='Advertisement'/>

                <main className='container mt-120'>

                    <Title title='TOUCHING LIVES AT THE GRASSROOTS' spanStyle='w-75 hr-line-yellow' className='' headingStyle='georgia fs-48'/>
                    <p className='fw-bold fs-5 ms-3'> By Emeka Alci</p>
                    <p className='fs-5 ms-3 mb-5'> May 20, 2021</p>
                    

                    <div className='container clearfix'>
                        <img src='/images/Rectangle-30.png' alt='post-image' className='w-75 col-md-4 mx-3 ms-md-3 rounded float-sm-start'/>
                        <p className='poppins'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            Nesciunt similique ut veritatis enim adipisci perspiciatis 
                            iusto quam sit deserunt? Deserunt modi dolore incidunt 
                            fuga vero labore, debitis similique repellat pariatur? Id, 
                            rem nemo cum saepe aspernatur nulla nisi beatae voluptates 
                            ipsa eligendi asperiores maiores necessitatibus, quibusdam 
                            soluta dolor consequuntur veritatis at sed fugit et optio 
                            deleniti? Eveniet numquam error consequatur sapiente in cumque. 
                            Exercitationem sit quibusdam accusantium voluptatem similique 
                            iure, cum error quia explicabo officia itaque quo commodi, 
                            adipisci officiis placeat minima molestiae nostrum perferendis 
                            corrupti ab odit at saepe fugit! Necessitatibus, quasi velit 
                            sed ad eveniet impedit debitis quos.
                            Lorem ipsum dolor sit amet consectetur 
                            adipisicing elit. Ipsa expedita nulla tenetur 
                            perferendis cupiditate inventore quidem adipisci, 
                            nam suscipit itaque veritatis, amet officiis ex 
                            animi eligendi excepturi molestiae dicta minus 
                            accusantium odit omnis in ipsum autem? Eum voluptatum 
                            et sequi iure, reprehenderit minima nihil. Quibusdam, 
                            laborum accusamus? Unde ipsum hic, reiciendis facilis 
                            velit, voluptatum iste voluptatibus error doloribus, 
                            deleniti maiores sapiente corporis! Quam qui fugiat 
                            magni nulla nemo itaque ipsum iste non nostrum, cupiditate 
                            corporis optio alias quas quis? Quod amet distinctio, 
                            recusandae quae provident ipsa numquam optio, quibusdam 
                            molestiae inventore quidem eveniet tenetur atque repellat 
                            id aliquid. Quas, expedita. 
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Dolore, sed quos aliquid delectus iure nostrum optio quasi. 
                            Voluptatum, a est! Lorem ipsum dolor sit amet consectetur 
                            adipisicing elit. Velit, incidunt, cum qui unde cupiditate 
                            eaque tempora eos exercitationem dolor ratione et? Quos 
                            alias eveniet sed quam animi nesciunt excepturi ipsum vero, 
                            reiciendis doloribus explicabo qui voluptatum fuga dolorum 
                            praesentium culpa?
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Dolore, sed quos aliquid delectus iure nostrum optio quasi. 
                            Voluptatum, a est! Lorem ipsum dolor sit amet consectetur 
                            adipisicing elit. Velit, incidunt, cum qui unde cupiditate 
                            eaque tempora eos exercitationem dolor ratione et? Quos 
                            alias eveniet sed quam animi nesciunt excepturi ipsum vero, 
                            reiciendis doloribus explicabo qui voluptatum fuga dolorum 
                            praesentium culpa?
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Dolore, sed quos aliquid delectus iure nostrum optio quasi. 
                            Voluptatum, a est! Lorem ipsum dolor sit amet consectetur 
                            adipisicing elit. Velit, incidunt, cum qui unde cupiditate 
                            eaque tempora eos exercitationem dolor ratione et? Quos 
                            alias eveniet sed quam animi nesciunt excepturi ipsum vero, 
                            reiciendis doloribus explicabo qui voluptatum fuga dolorum 
                            praesentium culpa?
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Dolore, sed quos aliquid delectus iure nostrum optio quasi. 
                            Voluptatum, a est! Lorem ipsum dolor sit amet consectetur 
                            adipisicing elit. Velit, incidunt, cum qui unde cupiditate 
                            eaque tempora eos exercitationem dolor ratione et? Quos 
                            alias eveniet sed quam animi nesciunt excepturi ipsum vero, 
                            reiciendis doloribus explicabo qui voluptatum fuga dolorum 
                            praesentium culpa?
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Dolore, sed quos aliquid delectus iure nostrum optio quasi. 
                            Voluptatum, a est! Lorem ipsum dolor sit amet consectetur 
                            adipisicing elit. Velit, incidunt, cum qui unde cupiditate 
                            eaque tempora eos exercitationem dolor ratione et? Quos 
                            alias eveniet sed quam animi nesciunt excepturi ipsum vero, 
                            reiciendis doloribus explicabo qui voluptatum fuga dolorum 
                            praesentium culpa?
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Dolore, sed quos aliquid delectus iure nostrum optio quasi. 
                            Voluptatum, a est! Lorem ipsum dolor sit amet consectetur 
                            adipisicing elit. Velit, incidunt, cum qui unde cupiditate 
                            eaque tempora eos exercitationem dolor ratione et? Quos 
                            alias eveniet sed quam animi nesciunt excepturi ipsum vero, 
                            reiciendis doloribus explicabo qui voluptatum fuga dolorum 
                            praesentium culpa?
                        </p>
                        <img src='/images/Rectangle-31.png' alt='post-image' className='w-100 my-5' />
                        <p className='lh-base'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Eligendi maxime voluptates voluptatibus iste doloremque 
                            labore numquam nihil itaque aut ullam mollitia ipsum natus 
                            eos deserunt nisi repudiandae doloribus quia quaerat, 
                            aliquam ut totam qui facere. Quis ipsam assumenda repellat 
                            saepe minus tenetur voluptatibus odit facere voluptatem commodi. 
                            Voluptate nihil voluptates itaque, aut nostrum velit aliquid 
                            dicta at amet optio quod.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Eligendi maxime voluptates voluptatibus iste doloremque 
                            labore numquam nihil itaque aut ullam mollitia ipsum natus 
                            eos deserunt nisi repudiandae doloribus quia quaerat, 
                            aliquam ut totam qui facere. Quis ipsam assumenda repellat 
                            saepe minus tenetur voluptatibus odit facere voluptatem commodi. 
                            Voluptate nihil voluptates itaque, aut nostrum velit aliquid 
                            dicta at amet optio quod.
                        </p>
                        <section className='container mt-120'>
                            <h3 className='georgia mb-5 fs-4 fw-bold'>Related</h3>
                            <PostGallery />
                        </section>
                    </div>
                </main>
                <NewsLetterComp />
        </ArticleLayout>
      )
};

export default PostPage;


