package com.srishti.electricityboardbe.entity;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ConnectionRequests {
    private int year;
    private int month;
    private long count;
}
