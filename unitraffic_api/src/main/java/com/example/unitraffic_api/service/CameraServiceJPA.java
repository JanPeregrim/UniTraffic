package com.example.unitraffic_api.service;

import com.example.unitraffic_api.entity.Camera;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;
import java.util.List;

@Transactional
public class CameraServiceJPA implements CameraService {
    @PersistenceContext
    private EntityManager entityManager;


    @Override
    public void addCamera(Camera camera) {
        entityManager.persist(camera);
    }

    @Override
    public List<Camera> getCameras() {
        return entityManager.createNamedQuery("Camera.getCameras").getResultList();
    }

    @Override
    public void reset() {
        entityManager.createNamedQuery("Camera.reset").executeUpdate();
    }
}
