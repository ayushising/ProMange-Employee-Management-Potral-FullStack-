package com.javatechie.crud.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.javatechie.crud.example.entity.Appointment;
import com.javatechie.crud.example.entity.Employee;
import com.javatechie.crud.example.service.AppointmentService;

@CrossOrigin
@RestController
public class AppointmentController {
	@Autowired
	AppointmentService appointmentService;
	
	@PostMapping("/addAppointmentdetails")
    public Appointment addAppointmentdetails(@RequestBody Appointment apointment) {
        return appointmentService.saveAppointment(apointment);
    }

    @GetMapping("/allAppointmentdetails")
    public List<Appointment> findAllAppointmentdetails() {
        return appointmentService.getallAppointmentDetails();
    }

    @GetMapping("/Appointmentdetails/{id}")
    public Appointment findAppointmentdetailsById(@PathVariable int id) {
        return appointmentService.getAppointmentDetailsById(id);
    }

    @DeleteMapping("/deleteAppointmentdetails/{id}")
    public String deleteAppointmentdetailsById(@PathVariable int id) {
        return appointmentService.deleteAppointmentDetails(id);
    }

}
