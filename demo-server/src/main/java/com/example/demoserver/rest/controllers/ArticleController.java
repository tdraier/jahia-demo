package com.example.demoserver.rest.controllers;

import com.example.demoserver.rest.beans.ArticleDto;
import com.example.demoserver.services.ArticleService;
import com.example.demoserver.utils.LogHelper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
@Slf4j
public class ArticleController {


    @Autowired
    private ArticleService articleService;

    @Autowired
    private LogHelper logHelper;

    @GetMapping("/article/all")
    public Flux<ArticleDto> list() {
        logHelper.logAction("/article/all");
        return articleService.list();
    }

    @GetMapping("/article/search")
    public Mono<ArticleDto> getArticle(@RequestParam final Long id) {
        return articleService.getArticle(id);
    }

    @PostMapping("/article/add")
    public Mono<Void> add(@RequestBody final ArticleDto articleDto) {
        logHelper.logAction("/article/add");
        return articleService.create(articleDto);
    }

    @PutMapping("/artricle/edit/{id}")
    public void edit(@PathVariable("id") String id, @RequestBody final ArticleDto articleDto) {
        logHelper.logAction("/article/edit/" + id);
        articleService.edit(articleDto);
    }

    @DeleteMapping("/article/delete/{id}")
    public Mono<Boolean> delete(@PathVariable("id") Long id) {
        logHelper.logAction("/article/delete/" + id);
        if (id != null) return articleService.delete(id);
        else return Mono.justOrEmpty(false);
    }
}
