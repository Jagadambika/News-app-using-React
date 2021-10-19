import React from "react";

function NewsArticle({ data }) {
    return (
        <div>
            <h1 className="news__title">{data.title}</h1>
            <p className="news__desc">{data.description}</p>
            <h5>We would like to thank </h5>
            <span className="news__author">{data.author} for presenting the article</span> <br />
            <span className="news__published">{data.publishedAt}</span>
            <span className="news__source">{data.source.name}</span><br/>
            <h5>Click the link below if you want to know more</h5>
            <span className="news__image" ><a href={data.url}>{data.title}-</a></span>

        </div>
    );
}

export default NewsArticle;
