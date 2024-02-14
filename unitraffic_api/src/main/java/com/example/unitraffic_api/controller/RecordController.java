package com.example.unitraffic_api.controller;

import com.example.unitraffic_api.entity.Record;
import com.example.unitraffic_api.service.CameraService;
import com.example.unitraffic_api.service.RecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.WebApplicationContext;

@org.springframework.stereotype.Controller
@RequestMapping("/api/records")
@Scope(WebApplicationContext.SCOPE_SESSION)
public class RecordController {
    @Autowired
    private CameraService cameraService;

    @Autowired
    private RecordService recordService;

    @PostMapping
    public void addService(@RequestBody Record record) {
        recordService.addRecord(record);
    }
}
