package com.techpro.project.entity;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.transaction.Transactional;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter

/**
 * The OrderDetails class represents the details of an order in the application.
 * It contains information such as the order details ID, quantity, associated item, and order table.
 */
@Entity
@Table(name = "orderDetails")
@Data
@Transactional
public class OrderDetails {
    
    /**
     * The unique identifier of the order details.
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "orderDetailsId")
    private int orderDetailsId;
    
    /**
     * The quantity of the item in the order.
     */
    @Column(name = "quantity")
    private int quantity;
    
    /**
     * The associated item in the order.
     */
    @OneToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "itemId")
    private Item item;
    
    /**
     * The associated order table for the order details.
     */
    @OneToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "orderTableId")
    private OrderTable orderTable;
    
    // Getters and Setters are generated using Lombok's annotations
    
}
