package com.techpro.project.exception;

public class OrderTableNotFoundException extends RuntimeException{
    public OrderTableNotFoundException(Integer id){
        super("Could not find the order table info with id: " + id);
    }
    
}
