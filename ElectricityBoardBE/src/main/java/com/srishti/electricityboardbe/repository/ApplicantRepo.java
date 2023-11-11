package com.srishti.electricityboardbe.repository;

import com.srishti.electricityboardbe.entity.Applicant;
import com.srishti.electricityboardbe.entity.ConnectionRequests;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Repository
public interface ApplicantRepo extends JpaRepository<Applicant, Integer> {

    Optional<Applicant> findById(Integer integer);

    @Query("SELECT a FROM Applicant a WHERE a.applicationDate BETWEEN :start AND :end")
    List<Applicant> findByApplicationDate(@Param("start") LocalDate startDate, @Param("end") LocalDate endDate);

    @Query("SELECT new com.srishti.electricityboardbe.entity.ConnectionRequests(year(a.applicationDate), month(a.applicationDate), count(a)) FROM Applicant a GROUP BY year(a.applicationDate), month(a.applicationDate)")
    List<ConnectionRequests> connectionRequests();
}
