package com.techpro.project.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.techpro.project.entity.OrderDetails;
import com.techpro.project.exception.OrderDetailsNotFoundException;
import com.techpro.project.repository.OrderDetailsRepository;

import org.springframework.web.bind.annotation.RequestBody;
import java.util.List;


@CrossOrigin("*")
@RestController
public class OrderDetailsController {
    @Autowired
    private OrderDetailsRepository orderDetailsRepository;

    @PostMapping("/saveOrderDetails")
    OrderDetails saveOrderDetails(@RequestBody OrderDetails orderDetails){
        return orderDetailsRepository.save(orderDetails);
    }
    
    @GetMapping("/getAllOrderDetails")
    List<OrderDetails> getAllOrderDetails(){
        return orderDetailsRepository.findAll();
    }

    @GetMapping("/orderDetals/{id}")
    OrderDetails getOrderDetailsById(@PathVariable Integer id){
        return orderDetailsRepository.findById(id).orElseThrow(()-> new OrderDetailsNotFoundException(id));
    }
}
