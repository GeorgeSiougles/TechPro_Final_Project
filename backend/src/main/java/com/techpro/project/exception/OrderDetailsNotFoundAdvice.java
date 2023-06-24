package com.techpro.project.exception;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.http.HttpStatus;

/**
 * The OrderDetailsNotFoundAdvice class is a controller advice that handles the OrderDetailsNotFoundException.
 * It provides a custom response when an OrderDetailsNotFoundException is thrown.
 */
@ControllerAdvice
public class OrderDetailsNotFoundAdvice {

    /**
     * Exception handler method for OrderDetailsNotFoundException.
     * It returns a custom error message and sets the response status to 404 (NOT_FOUND).
     *
     * @param exception The OrderDetailsNotFoundException instance.
     * @return A Map containing the error message.
     */
    @ResponseBody
    @ExceptionHandler(OrderDetailsNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public Map<String, String> exceptionHandler(OrderDetailsNotFoundException exception) {
        Map<String, String> errorMap = new HashMap<>();
        errorMap.put("errorMessage", exception.getMessage());

        return errorMap;
    }

}
