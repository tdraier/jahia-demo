package com.example.demoserver.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Article {

    @Id
    private Long id;
    private String title;
    private String content;
    private String userId;
}
