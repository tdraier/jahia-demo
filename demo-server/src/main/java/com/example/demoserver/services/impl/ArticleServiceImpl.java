package com.example.demoserver.services.impl;

import com.example.demoserver.model.Article;
import com.example.demoserver.repositories.ArticleRepo;
import com.example.demoserver.rest.beans.ArticleDto;
import com.example.demoserver.rest.converters.ArticleConverter;
import com.example.demoserver.services.ArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
@Transactional
public class ArticleServiceImpl implements ArticleService {

    @Autowired
    private ArticleRepo articleRepo;

    @Autowired
    private ArticleConverter articleConverter;

    @Override
    public Flux<ArticleDto> list() {
        return articleRepo.findAll().map(a -> articleConverter.convert(a));
    }

    @Override
    public Mono<ArticleDto> getArticle(final long id) {
        return articleRepo.findById(id).map(a -> articleConverter.convert(a));
    }

    @Override
    public Mono<Void> create(ArticleDto articleDto) {
        Article article = new Article();
        article.setTitle(articleDto.getTitle());
        article.setContent(articleDto.getContent());
        article.setUserId(articleDto.getUserId());
        return articleRepo.save(article).then();
    }

    @Override
    public void edit(ArticleDto articleDto) {
        articleRepo.findById(articleDto.getId())
                .flatMap(a -> {
                    a.setContent(articleDto.getContent());
                    a.setTitle(articleDto.getTitle());
                    a.setUserId(articleDto.getUserId());
                    return articleRepo.save(a);
                }).subscribe();
    }

    @Override
    public Mono<Boolean> delete(long id) {
        return articleRepo.deleteById(id).thenReturn(true);
    }
}
