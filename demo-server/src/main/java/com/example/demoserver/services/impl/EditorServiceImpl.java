package com.example.demoserver.services.impl;

import com.example.demoserver.model.Editor;
import com.example.demoserver.repositories.EditorRepo;
import com.example.demoserver.rest.beans.EditorDto;
import com.example.demoserver.rest.converters.EditorConverter;
import com.example.demoserver.services.EditorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
@Transactional
public class EditorServiceImpl implements EditorService {

    @Autowired
    private EditorRepo editorRepo;

    @Autowired
    private EditorConverter editorConverter;

    @Override
    public Flux<EditorDto> list() {
        return editorRepo.findAll().map(e -> editorConverter.convert(e));
    }

    @Override
    public Mono<EditorDto> getEditor(String userId) {
        return editorRepo.findByUserId(userId).map(e -> editorConverter.convert(e));
    }

    @Override
    public void create(EditorDto editorDto) {
        Editor editor = new Editor();
        editor.setUserId(editorDto.getUserId());
        editor.setRole(editorDto.getRole());
        editorRepo.save(editor).subscribe();
    }

    @Override
    public void edit(EditorDto editorDto) {
        editorRepo.findByUserId(editorDto.getUserId())
                .flatMap(e -> {
                    e.setUserId(editorDto.getUserId());
                    e.setRole(editorDto.getRole());
                    return editorRepo.save(e);
                }).subscribe();
    }

    @Override
    public Mono<Boolean> delete(String userId) {
        Editor editor = editorRepo.findByUserId(userId).blockOptional().orElse(null);
        return editorRepo.deleteById(editor == null ? null : editor.getId()).thenReturn(true);
    }
}
