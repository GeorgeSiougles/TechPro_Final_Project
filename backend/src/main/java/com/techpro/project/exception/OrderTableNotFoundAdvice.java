package com.techpro.project.exception;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;

/**
 * The OrderTableNotFoundAdvice class is a controller advice that handles the OrderTableNotFoundException.
 * It provides a custom response when an OrderTableNotFoundException is thrown.
 */
@ControllerAdvice
public class OrderTableNotFoundAdvice {

    /**
     * Exception handler method for OrderTableNotFoundException.
     * It returns a custom error message and sets the response status to 404 (NOT_FOUND).
     *
     * @param exception The OrderTableNotFoundException instance.
     * @return A Map containing the error message.
     */
    @ResponseBody
    @ExceptionHandler(OrderTableNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public Map<String, String> exceptionHandler(OrderTableNotFoundException exception) {
        Map<String, String> errorMap = new HashMap<>();
        errorMap.put("errorMessage", exception.getMessage());

        return errorMap;
    }

}
