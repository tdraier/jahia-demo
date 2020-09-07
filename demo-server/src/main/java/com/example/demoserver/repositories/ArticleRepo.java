package com.example.demoserver.repositories;

import com.example.demoserver.model.Article;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ArticleRepo extends ReactiveCrudRepository<Article, Long> {
}
