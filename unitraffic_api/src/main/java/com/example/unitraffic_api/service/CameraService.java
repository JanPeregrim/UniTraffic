package com.example.unitraffic_api.service;

import com.example.unitraffic_api.entity.Camera;

import java.util.List;

public interface CameraService {
    void addCamera(Camera camera);
    List<Camera> getCameras();
    void reset();
}
