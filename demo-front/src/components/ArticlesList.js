import React, { Component } from 'react';
import Article from '../model/Article.js';
import '../styles/App.css'

const EMPTY_FIELD = 0;



var filterByField = (field, filter) => {
    return field.length !== EMPTY_FIELD && filter.includes(field)
}



class AnnuaireComp extends Component {

    state={
        id:'',
        title:'',
        content:'',
        userId:'',
        articles: []
    }

    


    addArticle = () => {
        return (<ul>{
            this.state.articles.map((article,index) => (
                    <li key={index} className="listArticleClass">
                        <label className="articleDescription">{article.getId()}</label>
                        <label className="articleDescription">{article.getTitle()}</label>
                        <label className="articleDescription">{article.getContent()}</label>
                        <label className="articleDescription">{article.getUserId()}</label>
                    </li>
            ))}
        </ul>)
    }

    render() {
        return (
            <React.Fragment>
            <div>
                <h1>Liste des agents</h1>
                <div>
                    <label className="textSearchClass" >id:</label>
                    <label className="textSearchClass" >title:</label>
                    <label className="textSearchClass" >content</label>
                    <label className="textSearchClass" >userId</label>
                </div>
                {this.addArticles()}
            </div>    
            </React.Fragment>
        )
    }
}

export default AnnuaireComp;