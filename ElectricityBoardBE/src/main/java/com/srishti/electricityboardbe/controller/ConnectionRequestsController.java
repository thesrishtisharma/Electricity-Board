package com.srishti.electricityboardbe.controller;

import com.srishti.electricityboardbe.entity.ConnectionReqCustom;
import com.srishti.electricityboardbe.service.ApplicantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("connections")
public class ConnectionRequestsController {

    @Autowired
    private ApplicantService applicantService;

    @GetMapping("/monthly-connection-requests")
    public List<ConnectionReqCustom> monthlyConnections(){
        return applicantService.monthlyConnectionRequests();
    }
}
