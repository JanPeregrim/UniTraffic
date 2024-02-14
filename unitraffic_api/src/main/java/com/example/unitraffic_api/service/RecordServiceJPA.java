package com.example.unitraffic_api.service;

import com.example.unitraffic_api.entity.Record;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;
import java.sql.Timestamp;
import java.util.List;

@Transactional
public class RecordServiceJPA implements RecordService {
    @PersistenceContext
    private EntityManager entityManager;


    @Override
    public void addRecord(Record record) {
        entityManager.persist(record);
    }

    @Override
    public List<Record> getRecords(Timestamp from, Timestamp to) {
        return null;
    }

    @Override
    public void reset() {
        entityManager.createNamedQuery("Record.reset").executeUpdate();
    }
}
