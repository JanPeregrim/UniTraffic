package com.example.unitraffic_api.service;

import com.example.unitraffic_api.entity.Record;

import java.sql.Timestamp;
import java.util.List;

public interface RecordService {
    void addRecord(Record record);
    List<Record> getRecords(Timestamp from, Timestamp to);
    void reset();
}
