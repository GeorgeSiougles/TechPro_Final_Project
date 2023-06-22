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
@Data
@Transactional

@Table(name = "orderDetails")
@Entity
public class OrderDetails {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name = "orderDetailsId")
    private int orderDetailsId;
    
    @Column(name = "quantity")
    private int quantity;

    @OneToOne(cascade = CascadeType.MERGE)
    @JoinColumn( name = "itemId")
    private Item item;
    
    @OneToOne(cascade = CascadeType.MERGE)
    @JoinColumn( name = "orderTableId")
    private OrderTable orderTable;
    
    
}
