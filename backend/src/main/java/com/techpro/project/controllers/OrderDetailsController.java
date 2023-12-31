package com.techpro.project.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.techpro.project.entity.OrderDetails;
import com.techpro.project.exception.OrderDetailsNotFoundException;
import com.techpro.project.repository.OrderDetailsRepository;

import java.util.List;

@CrossOrigin("*")
@RestController
public class OrderDetailsController {

    @Autowired
    private OrderDetailsRepository orderDetailsRepository;

    /**
     * Saves an order details.
     *
     * @param orderDetails The OrderDetails object to be saved.
     * @return The saved OrderDetails object.
     */
    @PostMapping("/saveOrderDetails")
    OrderDetails saveOrderDetails(@RequestBody OrderDetails orderDetails) {
        return orderDetailsRepository.save(orderDetails);
    }

    /**
     * Retrieves a list of all order details.
     *
     * @return A list of all order details.
     */
    @GetMapping("/getAllOrderDetails")
    List<OrderDetails> getAllOrderDetails() {
        return orderDetailsRepository.findAll();
    }

    /**
     * Retrieves an order details by its ID.
     *
     * @param id The ID of the order details to retrieve.
     * @return The retrieved OrderDetails object.
     * @throws OrderDetailsNotFoundException if the order details with the given ID is not found.
     */
    @GetMapping("/orderDetails/{id}")
    OrderDetails getOrderDetailsById(@PathVariable Integer id) {
        return orderDetailsRepository.findById(id)
                .orElseThrow(() -> new OrderDetailsNotFoundException(id));
    }

    /**
     * Deletes an order details by its ID.
     *
     * @param id The ID of the order details to delete.
     * @return A success message if the order details is deleted successfully.
     * @throws OrderDetailsNotFoundException if the order details with the given ID is not found.
     */
    @DeleteMapping("/orderDetails/{id}")
    String deleteOrderDetails(@PathVariable Integer id) {
        if (!orderDetailsRepository.existsById(id)) {
            throw new OrderDetailsNotFoundException(id);
        }
        orderDetailsRepository.deleteById(id);
        return "Order Details with ID " + id + " has been deleted successfully";
    }

    /**
     * Updates an order details by its ID.
     *
     * @param newOrderDetails The updated OrderDetails object.
     * @param id              The ID of the order details to update.
     * @return The updated OrderDetails object.
     * @throws OrderDetailsNotFoundException if the order details with the given ID is not found.
     */
    @PutMapping("/orderDetails/{id}")
    OrderDetails updateOrderDetails(@RequestBody OrderDetails newOrderDetails, @PathVariable Integer id) {
        return orderDetailsRepository.findById(id).map(details -> {
            details.setItem(newOrderDetails.getItem());
            details.setQuantity(newOrderDetails.getQuantity());
            return orderDetailsRepository.save(details);
        }).orElseThrow(() -> new OrderDetailsNotFoundException(id));
    }
}

