package com.techpro.project.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.techpro.project.entity.OrderTable;
import com.techpro.project.exception.OrderTableNotFoundException;
import com.techpro.project.repository.OrderTableRepository;
import com.techpro.project.service.OrderTableService;

import java.util.List;

@CrossOrigin("*")
@RestController
public class OrderTableController {

    private final OrderTableService orderTableService;

    @Autowired
    public OrderTableController(OrderTableService orderTableService) {
        this.orderTableService = orderTableService;
    }

    @Autowired
    private OrderTableRepository orderTableRepository;

    /**
     * Saves an order table.
     *
     * @param newOrder The OrderTable object to be saved.
     * @return The saved OrderTable object.
     */
    @PostMapping("/saveOrderTable")
    OrderTable saveOrderTable(@RequestBody OrderTable newOrder) {
        return orderTableRepository.save(newOrder);
    }

    /**
     * Retrieves a list of all order tables.
     *
     * @return A list of all order tables.
     */
    @GetMapping("/getAllOrders")
    List<OrderTable> getAllOrders() {
        return orderTableRepository.findAll();
    }

    /**
     * Retrieves an order table by its ID.
     *
     * @param id The ID of the order table to retrieve.
     * @return The retrieved OrderTable object.
     * @throws OrderTableNotFoundException if the order table with the given ID is not found.
     */
    @GetMapping("/orderTable/{id}")
    OrderTable getOrderDetailsById(@PathVariable Integer id) {
        return orderTableRepository.findById(id)
                .orElseThrow(() -> new OrderTableNotFoundException(id));
    }

    /**
     * Deletes an order table by its ID.
     *
     * @param id The ID of the order table to delete.
     * @return A success message if the order table is deleted successfully.
     * @throws OrderTableNotFoundException if the order table with the given ID is not found.
     */
    @DeleteMapping("/orderTable/{id}")
    String deleteOrderTable(@PathVariable Integer id) {
        if (!orderTableRepository.existsById(id)) {
            throw new OrderTableNotFoundException(id);
        }
        orderTableRepository.deleteById(id);
        return "OrderTable with ID " + id + " has been deleted successfully";
    }

    /**
     * Updates an order table by its ID.
     *
     * @param newOrderTable The updated OrderTable object.
     * @param id            The ID of the order table to update.
     * @return The updated OrderTable object.
     * @throws OrderTableNotFoundException if the order table with the given ID is not found.
     */
    @PutMapping("/orderTable/{id}")
    OrderTable updateOrderTable(@RequestBody OrderTable newOrderTable, @PathVariable Integer id) {
        return orderTableRepository.findById(id).map(order -> {
            order.setOrderDate(newOrderTable.getOrderDate());
            return orderTableRepository.save(order);
        }).orElseThrow(() -> new OrderTableNotFoundException(id));
    }

    /**
     * Retrieves the ID of the latest order table.
     *
     * @return The ID of the latest order table.
     */
    @GetMapping("/latestOrderId")
    public int getLatestOrderTableId() {
        return orderTableService.getLatestOrderTableId();
    }

}

