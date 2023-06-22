package com.techpro.project.exception;

public class OrderDetailsNotFoundException extends RuntimeException{
    public OrderDetailsNotFoundException(Integer id){
        super("Could not find the order details info with id: " + id);
    }
    
}
