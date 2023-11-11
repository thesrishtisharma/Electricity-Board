package com.srishti.electricityboardbe.controller;

import com.srishti.electricityboardbe.entity.Applicant;
import com.srishti.electricityboardbe.entity.ConnectionReqCustom;
import com.srishti.electricityboardbe.service.ApplicantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("api")
public class ApplicantController {

    @Autowired
    private ApplicantService applicantService;

    @GetMapping("/all-applicants")
    public List<Applicant> findAllApplicants(){
        return applicantService.findAll();
    }

    @GetMapping("/applicant-details")
    public ResponseEntity<?> findApplicantById(@RequestParam("id") int id) {
        Optional<Applicant> temp = applicantService.findById(id);
        if (temp.isPresent())
            return ResponseEntity.ok(temp);
        return ResponseEntity.notFound().build();
    }

    @GetMapping("/applicants/filter")
    public List<Applicant> filterByDate(@RequestParam("startDate") String start, @RequestParam("endDate") String end){
        return applicantService.findByApplicationDateRange(LocalDate.parse(start), LocalDate.parse(end));
    }

    @PutMapping("/modify-connection")
    public ResponseEntity<?> modifyConnectionRequest(@RequestBody Applicant applicant){
        return applicantService.modifyConnectionRequest(applicant);
    }
}
