package com.example.unitraffic_api.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.NamedQuery;
import java.util.UUID;

@Entity
@NamedQuery(name = "Camera.getCameras",
            query = "select c from Camera c")
@NamedQuery(name = "Camera.reset",
            query = "delete from Camera")
public class Camera {

    @Id
    @GeneratedValue
    private int id;
    private String place;

    public Camera(int id, String place) {
        this.id = id;
        this.place = place;
    }

    public Camera(String place) {
        this.place = place;
    }

    public int getId() {
        return id;
    }

    public String getPlace() {
        return place;
    }
}
