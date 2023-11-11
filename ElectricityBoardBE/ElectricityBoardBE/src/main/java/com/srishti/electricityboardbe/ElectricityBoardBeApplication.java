package com.srishti.electricityboardbe;

import com.srishti.electricityboardbe.utils.DataLoader;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
public class ElectricityBoardBeApplication implements CommandLineRunner {

    @Autowired
    private DataLoader dataLoader;

    public static void main(String[] args) {
        SpringApplication.run(ElectricityBoardBeApplication.class, args);
    }


    @Override
    public void run(String... args) throws Exception {
        dataLoader.onInit();
        System.out.println("Records successfully published to database");
    }
}
