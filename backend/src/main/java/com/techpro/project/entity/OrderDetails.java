package com.techpro.project.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter

@Table(name = "orderDetails")
@Entity
public class OrderDetails {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "orderId")
    private int orderId;

    @Column(name = "itemId")
    private int itemId;

    @Column(name = "quantity")
    private int quantity;
    
}
