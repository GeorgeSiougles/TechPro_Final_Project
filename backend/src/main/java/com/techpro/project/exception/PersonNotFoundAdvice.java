package com.techpro.project.exception;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.http.HttpStatus;

/**
 * The PersonNotFoundAdvice class is a controller advice that handles the PersonNotFoundException.
 * It provides a custom response when a PersonNotFoundException is thrown.
 */
@ControllerAdvice
public class PersonNotFoundAdvice {

    /**
     * Exception handler method for PersonNotFoundException.
     * It returns a custom error message and sets the response status to 404 (NOT_FOUND).
     *
     * @param exception The PersonNotFoundException instance.
     * @return A Map containing the error message.
     */
    @ResponseBody
    @ExceptionHandler(PersonNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public Map<String, String> exceptionHandler(PersonNotFoundException exception) {
        Map<String, String> errorMap = new HashMap<>();
        errorMap.put("errorMessage", exception.getMessage());

        return errorMap;
    }
}
