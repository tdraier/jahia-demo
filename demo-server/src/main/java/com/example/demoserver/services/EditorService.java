package com.example.demoserver.services;

import com.example.demoserver.rest.beans.EditorDto;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface EditorService {
    Flux<EditorDto> list();

    Mono<EditorDto> getEditor(final String userId);

    void create(final EditorDto editorDto);

    void edit(final EditorDto editorDto);

    Mono<Boolean> delete(final String userId);
}
