package com.example.unitraffic_api.server;

import com.example.unitraffic_api.service.CameraService;
import com.example.unitraffic_api.service.CameraServiceJPA;
import com.example.unitraffic_api.service.RecordService;
import com.example.unitraffic_api.service.RecordServiceJPA;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@SpringBootApplication
@Configuration
public class UniTrafficServer {

    public static void main(String[] args) {
        SpringApplication.run(UniTrafficServer.class);
    }

    @Bean
    public CameraService cameraService() {
        return new CameraServiceJPA();
    }

    @Bean
    public RecordService recordService() {
        return new RecordServiceJPA();
    }

}
