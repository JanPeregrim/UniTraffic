package com.example.unitraffic_api.controller;

import com.example.unitraffic_api.entity.Camera;
import com.example.unitraffic_api.entity.Record;
import com.example.unitraffic_api.service.CameraService;
import com.example.unitraffic_api.service.RecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.context.WebApplicationContext;

import javax.transaction.Transactional;

@Controller
@RequestMapping(path = "/api")
@Scope(WebApplicationContext.SCOPE_SESSION)
public class CameraController {
    @Autowired
    private CameraService cameraService;

    @PostMapping(path = "/cameras")
    public String addCamera(@RequestBody Camera camera) {
        cameraService.addCamera(camera);
        return "Camera added";
    }
}
