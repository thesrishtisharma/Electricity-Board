package com.srishti.electricityboardbe.service;

import com.srishti.electricityboardbe.entity.Applicant;
import com.srishti.electricityboardbe.entity.ConnectionReqCustom;
import com.srishti.electricityboardbe.entity.ConnectionRequests;
import com.srishti.electricityboardbe.entity.MonthlyRequestsCustom;
import com.srishti.electricityboardbe.repository.ApplicantRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.*;

@Service
public class ApplicantService {

    @Autowired
    private ApplicantRepo applicantRepo;

    public void saveApplicant(Applicant applicant){
        applicantRepo.save(applicant);
    }

    public List<Applicant> findAll(){
        return applicantRepo.findAll();
    }

    public Optional<Applicant> findById(int id){
        return applicantRepo.findById(id);
    }

    public List<Applicant> findByApplicationDateRange(LocalDate start, LocalDate end){
        return applicantRepo.findByApplicationDate(start, end);
    }

    public ResponseEntity<?> modifyConnectionRequest(Applicant applicant){
        Optional<Applicant> temp = findById(applicant.getId());
        if (temp.isPresent()){
            System.out.println("Condition success");
            if(applicant.getApplicationDate().isEqual(temp.get().getApplicationDate()) && applicant.getGovtIdType().equals(temp.get().getGovtIdType()) && applicant.getLoadApplied() <= 200 && applicant.getIdNumber() == temp.get().getIdNumber()){
                System.out.println("Data validated");

                applicant.setId(temp.get().getId());
                applicant.setApplicationDate(applicant.getApplicationDate());
                applicant.setModifiedDate(applicant.getModifiedDate());
                applicant.setApprovalDate(applicant.getApprovalDate());
                applicant.setModifiedDate(LocalDate.now());
                applicant.setIdNumber(temp.get().getIdNumber());

                applicantRepo.save(applicant);
                return ResponseEntity.ok(applicant);
            }
            return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.notFound().build();
    }

    private HashMap<Integer, String> mapMonths(){
        HashMap<Integer, String> monthMap = new HashMap<>();
        monthMap.put(1, "January");
        monthMap.put(2, "February");
        monthMap.put(3, "March");
        monthMap.put(4, "April");
        monthMap.put(5, "May");
        monthMap.put(6, "June");
        monthMap.put(7, "July");
        monthMap.put(8, "August");
        monthMap.put(9, "September");
        monthMap.put(10, "October");
        monthMap.put(11, "November");
        monthMap.put(12, "December");
        return monthMap;
    }

    // number of connection requests in every month
    public List<ConnectionReqCustom> monthlyConnectionRequests(){
        HashMap<Integer, String> monthMap = mapMonths();
        List<ConnectionRequests> connectionRequests = this.applicantRepo.connectionRequests();
        List<ConnectionReqCustom> requests = new ArrayList<>();
        Set<Integer> years = new HashSet<>();

        connectionRequests.forEach(obj -> years.add(obj.getYear()));

        for(int year: years){
            List<MonthlyRequestsCustom> monthlyList = new ArrayList<>();
            ConnectionReqCustom reqCustom = new ConnectionReqCustom();
            reqCustom.setName(year);
            connectionRequests.forEach(
                obj -> {
                    if(obj.getYear() == year){
                        String month = monthMap.get(obj.getMonth());
                        MonthlyRequestsCustom data = new MonthlyRequestsCustom();
                        data.setName(month);
                        data.setValue(obj.getCount());
                        monthlyList.add(data);
                    }
                }
            );
            reqCustom.setSeries(monthlyList);
            requests.add(reqCustom);
        }

        return requests;
    }
}
