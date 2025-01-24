import React from 'react'
import articles from '../../Articles/Articles'
import { useParams } from 'react-router-dom';
import '../Article/Article.css'
import { Link } from 'react-router-dom';

const Article = () => {
    let { articleID } = useParams();
    return (
        <>
            {window.scrollTo(0, 0)}
            <div className="container-fluid p-5">
                <div className="row">
                    <div className="col-sm-8">
                        {
                            articles.map((e, i) => {
                                if (e.id === Number(articleID)) {
                                    return <div key={i} className='main-article-card'>
                                        <h3 className='my-2'>{e.title}</h3>
                                        <p className='my-1 lh-lg'>{e.shortDiscription}</p>
                                        <p className='fw-bolder'>Date: {e.date}</p>
                                        <div className="article-image" style={{backgroundImage:`url(${e.image})`}}>
                                        </div>
                                        <p className='my-3 lh-lg'>{e.discription}</p>
                                    </div>
                                }
                                else {
                                    return null
                                }
                            })
                        }
                    </div>
                    <div className="col-sm-4">
                        <h4 className='text-center heading-border w-75'>Related Articles</h4>
                        {
                            articles.map((e, i) => {
                                return <div key={i} className='my-3 w-75 mx-auto article-card'>
                                    <div className="imgdiv" style={{backgroundImage:`url(${e.image})`}}>
                                       
                                    </div>
                                    <div className="content">
                                    <Link to={`/article/${e.id}`}><h6 className='my-2'>{e.title}</h6></Link>
                                    {/* <p>{e.discription}</p> */}
                                    </div>
                                </div>
                            })
                        }
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Article
