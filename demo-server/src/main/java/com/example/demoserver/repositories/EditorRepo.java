package com.example.demoserver.repositories;

import com.example.demoserver.model.Editor;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Mono;

@Repository
public interface EditorRepo extends ReactiveCrudRepository<Editor, Long> {

    Mono<Editor> findByUserId(final String userId);
}
