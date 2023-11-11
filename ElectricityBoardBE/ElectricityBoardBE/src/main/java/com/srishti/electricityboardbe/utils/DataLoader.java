package com.srishti.electricityboardbe.utils;

import com.opencsv.CSVReader;
import com.opencsv.exceptions.CsvValidationException;
import com.srishti.electricityboardbe.entity.Applicant;
import com.srishti.electricityboardbe.service.ApplicantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.io.*;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

@Component
public class DataLoader {

    @Autowired
    private ApplicantService applicantService;

    public void onInit(){
        try {
            InputStream inputStream = getClass().getClassLoader().getResourceAsStream("electricity_board_case_study.csv");
            InputStreamReader inputStreamReader = new InputStreamReader(inputStream);
            CSVReader reader = new CSVReader(inputStreamReader);
            String[] next = reader.readNext();

            while ((next = reader.readNext()) != null){
                Applicant applicant = new Applicant();
                DateTimeFormatter formatter = DateTimeFormatter.ofPattern("d-M-yy");

                applicant.setId(Integer.parseInt(next[0]));
                applicant.setApplicantName(next[1]);
                applicant.setGender(next[2]);
                applicant.setDistrict(next[3]);
                applicant.setState(next[4]);
                applicant.setPincode(Integer.parseInt(next[5]));
                applicant.setOwnership(next[6]);
                applicant.setGovtIdType(next[7]);
                applicant.setIdNumber((long) Double.parseDouble(next[8]));
                applicant.setCategory(next[9]);
                applicant.setLoadApplied(Integer.parseInt(next[10]));
                applicant.setApplicationDate(LocalDate.parse(next[11], formatter));
                if(!next[12].isEmpty())
                    applicant.setApprovalDate(LocalDate.parse(next[12], formatter));
                applicant.setModifiedDate(LocalDate.parse(next[13], formatter));
                applicant.setStatus(next[14]);
                applicant.setReviewerId(Integer.parseInt(next[15]));
                applicant.setReviewerName(next[16]);
                applicant.setReviewerComments(next[17]);

                applicantService.saveApplicant(applicant);
            }
        }
        catch (FileNotFoundException e){
            e.printStackTrace();
        } catch (CsvValidationException | IOException e) {
            throw new RuntimeException(e);
        }
    }
}
