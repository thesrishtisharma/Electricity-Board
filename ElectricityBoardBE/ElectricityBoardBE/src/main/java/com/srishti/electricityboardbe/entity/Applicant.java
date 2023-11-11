package com.srishti.electricityboardbe.entity;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Data
public class Applicant {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "ID")
    private int id;

    @Column(name = "Applicant_Name")
    private String applicantName;

    @Column(name = "Gender")
    private String gender;

    @Column(name = "District")
    private String district;

    @Column(name = "State")
    private String state;

    @Column(name = "Pincode")
    private int pincode;

    @Column(name = "Ownership")
    private String ownership;

    @Column(name = "GovtID_Type")
    private String govtIdType;

    @Column(name = "ID_Number")
    private long idNumber;

    @Column(name = "Category")
    private String category;

    @Column(name = "\"Load_Applied (in KV)\"")
    private int loadApplied;

    @Column(name = "Date_of_Application")
    private LocalDate applicationDate;

    @Column(name = "Date_of_Approval")
    private LocalDate approvalDate;

    @Column(name = "Modified_Date")
    private LocalDate modifiedDate;

    @Column(name = "Status")
    private String status;

    @Column(name = "Reviewer_ID")
    private int reviewerId;

    @Column(name = "Reviewer_Name")
    private String reviewerName;

    @Column(name = "Reviewer_Comments")
    private String reviewerComments;
}
