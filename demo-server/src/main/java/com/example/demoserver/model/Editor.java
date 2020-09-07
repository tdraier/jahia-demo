package com.example.demoserver.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Editor {

    @Id
    private Long id;
    private String userId;
    private String role;
}
