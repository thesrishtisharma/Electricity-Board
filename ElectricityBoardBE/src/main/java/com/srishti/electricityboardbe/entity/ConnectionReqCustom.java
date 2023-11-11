package com.srishti.electricityboardbe.entity;

import lombok.Data;

import java.util.List;

@Data
public class ConnectionReqCustom {

    private int name;
    private List<MonthlyRequestsCustom> series;
}
