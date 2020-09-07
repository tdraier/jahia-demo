package com.example.demoserver.rest.controllers;

import com.example.demoserver.rest.beans.ArticleDto;
import com.example.demoserver.services.ArticleService;
import com.example.demoserver.utils.LogHelper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.time.LocalDateTime;

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
    public void add() {
        logHelper.logAction("/article/add");
    }

    @PutMapping("/artricle/edit/{id}")
    public void edit(@PathVariable("id") String id) {
        logHelper.logAction("/article/edit/" + id);
    }

    @DeleteMapping("/article/delete/{id}")
    public void delete(@PathVariable("id") String id) {
        logHelper.logAction("/article/delete/" + id);
    }
}
