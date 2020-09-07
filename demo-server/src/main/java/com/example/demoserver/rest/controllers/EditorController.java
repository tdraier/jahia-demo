package com.example.demoserver.rest.controllers;

import com.example.demoserver.rest.beans.EditorDto;
import com.example.demoserver.services.EditorService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
@Slf4j
public class EditorController {

    @Autowired
    private EditorService editorService;


    @GetMapping("/user/all")
    public Flux<EditorDto> list() {
        return editorService.list();
    }

    @GetMapping("/user/search")
    public Mono<EditorDto> getEditor(@RequestParam final String userId) {
        return editorService.getEditor(userId);
    }

    @PostMapping("/user/add")
    public void add(@RequestBody final EditorDto editorDto) {
        editorService.create(editorDto);
    }

    @PutMapping("/user/edit/{id}")
    public void edit(@PathVariable("id") String id, @RequestBody final EditorDto editorDto) {
        editorService.edit(editorDto);
    }

    @DeleteMapping("/user/delete/{id}")
    public Mono<Boolean> delete(@PathVariable("id") String id) {
        return editorService.delete(id);
    }


}
