package com.techpro.project.exception;

public class PersonNotFoundException extends RuntimeException {
    public PersonNotFoundException(Integer id)
    {
        super("Could not find the person with id:" + id);
    }
    
}
