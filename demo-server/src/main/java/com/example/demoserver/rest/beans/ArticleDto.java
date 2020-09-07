package com.example.demoserver.rest.beans;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ArticleDto {

    private Long id;
    private String title;
    private String content;
    private String editorId;
}
