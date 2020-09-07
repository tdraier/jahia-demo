package com.example.demoserver.utils;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
@Slf4j
public class LogHelper {

    public void logAction(final String url) {
        log.info(url + " : " + LocalDateTime.now());
    }
}
