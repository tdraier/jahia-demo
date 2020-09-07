package com.example.demoserver.rest.beans;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class EditorDto {

    private String userId;
    private String role;
}
