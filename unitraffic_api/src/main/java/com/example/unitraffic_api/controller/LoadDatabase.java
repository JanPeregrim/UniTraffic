package com.example.unitraffic_api.controller;

import com.example.unitraffic_api.entity.Camera;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class LoadDatabase {
    private static final Logger log = LoggerFactory.getLogger(LoadDatabase.class);

    @Bean
    public CommandLineRunner initDatabase(CameraRepository repository) {
        return args -> {
            log.info("Preloading" + repository.save(new Camera("chodba1")));
        };
    }
}
