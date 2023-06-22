package com.techpro.project.exception;

public class ItemNotFoundException extends RuntimeException{
    public ItemNotFoundException(Integer id){
        super("Could not find the item with id:" + id);
    }
    
}
