package com.techpro.project.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;

import com.techpro.project.entity.OrderTable;
import com.techpro.project.exception.OrderTableNotFoundException;
import com.techpro.project.repository.OrderTableRepository;

import java.util.List;

@CrossOrigin("*")
@RestController
public class OrderTableController {

     @Autowired
     private OrderTableRepository orderTableRepository;

     @PostMapping("/saveOrderTable")
     OrderTable saveOrderTable(@RequestBody OrderTable newOrder ) {
        return orderTableRepository.save(newOrder);
     }

     @GetMapping("/getAllOrders")
     List<OrderTable> getAllOrders(){
        return orderTableRepository.findAll();
     }

     @GetMapping("/orderTable/{id}")
    OrderTable getOrderDetailsById(@PathVariable Integer id){
        return orderTableRepository.findById(id).orElseThrow(()-> new OrderTableNotFoundException(id));
    }
    @DeleteMapping("/orderTable/{id}")
    String deleteOrderTable(@PathVariable Integer id){
      if(!orderTableRepository.existsById(id)){
         throw new OrderTableNotFoundException(id);
      }
      orderTableRepository.deleteById(id);
      return "OrderTable with id: " + id + " has been deleted successfully";
    }
}
