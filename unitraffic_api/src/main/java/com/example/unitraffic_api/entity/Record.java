package com.example.unitraffic_api.entity;

import jdk.jfr.Name;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.UUID;

@Entity
@NamedQuery(name = "Record.reset",
            query = "delete from Record")
public class Record {
    @Id
    @GeneratedValue
    private UUID id;
    private Timestamp time;
    @ManyToOne(targetEntity = Camera.class)
    @JoinColumn(name = "camera_id", referencedColumnName = "id")
    private UUID cameraId;
    private int numberOfPeople;

    public Record(UUID id, Timestamp time, UUID camera, int numberOfPeople) {
        this.id = id;
        this.time = time;
        this.cameraId = camera;
        this.numberOfPeople = numberOfPeople;
    }

    public Record() {

    }

    public UUID getId() {
        return id;
    }

    public Timestamp getTime() {
        return time;
    }

    public int getNumberOfPeople() {
        return numberOfPeople;
    }

    public UUID getCameraId() {
        return cameraId;
    }

}
