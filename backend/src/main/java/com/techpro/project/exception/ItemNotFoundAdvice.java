package com.techpro.project.exception;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.http.HttpStatus;

/**
 * The ItemNotFoundAdvice class is a controller advice that handles the ItemNotFoundException.
 * It provides a custom response when an ItemNotFoundException is thrown.
 */
@ControllerAdvice
public class ItemNotFoundAdvice {

    /**
     * Exception handler method for ItemNotFoundException.
     * It returns a custom error message and sets the response status to 404 (NOT_FOUND).
     *
     * @param exception The ItemNotFoundException instance.
     * @return A Map containing the error message.
     */
    @ResponseBody
    @ExceptionHandler(ItemNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public Map<String, String> exceptionHandler(ItemNotFoundException exception) {
        Map<String, String> errorMap = new HashMap<>();
        errorMap.put("errorMessage", exception.getLocalizedMessage());

        return errorMap;
    }

}
