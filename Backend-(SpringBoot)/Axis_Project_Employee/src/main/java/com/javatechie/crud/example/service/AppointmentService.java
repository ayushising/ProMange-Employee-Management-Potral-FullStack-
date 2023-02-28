package com.javatechie.crud.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.javatechie.crud.example.entity.Appointment;
import com.javatechie.crud.example.entity.Manager;
import com.javatechie.crud.example.repository.AppointmentRepository;

@Service
public class AppointmentService {

	@Autowired 
	AppointmentRepository appointmentRepository;
	 public Appointment saveAppointment(Appointment appointment) {
	        return appointmentRepository.save(appointment);
	    }


	    public List<Appointment> getallAppointmentDetails() {
	        return appointmentRepository.findAll();
	    }

	    public Appointment getAppointmentDetailsById(int id) {
	        return appointmentRepository.findAppointmentdetailsById(id);
	    }

	     public String deleteAppointmentDetails(int id) {
	    	 appointmentRepository.deleteById(id);
	        return "Appointment details removed !! " + id;
	    }
}
