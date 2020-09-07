package com.example.demoserver.rest.converters;


import com.example.demoserver.model.Article;
import com.example.demoserver.rest.beans.ArticleDto;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

@Component
public class ArticleConverter implements Converter<Article, ArticleDto> {
    @Override
    public ArticleDto convert(Article article) {
        return article == null ? null : new ArticleDto(article.getId(), article.getTitle(), article.getContent(), article.getUserId());
    }
}
