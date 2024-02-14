package com.example.unitraffic_api.controller;

import com.example.unitraffic_api.entity.Camera;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CameraRepository extends JpaRepository<Camera, Long> {
}
