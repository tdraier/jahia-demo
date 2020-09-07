package com.example.demoserver.services;

import com.example.demoserver.rest.beans.ArticleDto;
import com.example.demoserver.rest.beans.EditorDto;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface ArticleService {

    Flux<ArticleDto> list();

    Mono<ArticleDto> getArticle(final long id);

    void create(final ArticleDto articleDto);

    void edit(final ArticleDto articleDto);

    Mono<Boolean> delete(final long id);
}
