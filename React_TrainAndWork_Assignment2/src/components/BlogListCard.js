import React from 'react';
import { Link } from "react-router-dom";

function BlogListCard({ blog }) {
    const renderContentMedia = () => {
        return blog.image ? (
            <img src={blog.image} alt={blog.title} style={{ width: '100%', height: '280px' }} />
        ) : (
            <iframe 
                width="100%" 
                height="280"
                src={blog.video}
                frameBorder="0" 
                title="video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen />
        );
    };

    return (
        <div className="col-md-6">
            <div className="single-blog-post">
                <div className="single-blog-post__image">
                    <Link to={`/blog/${blog.slug}`}>
                        {renderContentMedia()}
                    </Link>
                </div>
                <div className="single-blog-post__content">
                    <h3 className="post-title">
                        <Link to={`/blog/${blog.slug}`}>
                            {blog.title}
                        </Link>
                    </h3>
                    <p className="post-excerpt">{blog.short_description}</p>
                    <Link to={`/blog/${blog.slug}`} className="blog-readmore-link">
                        Read more
                        <i className="fa fa-caret-right"/>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default BlogListCard;
