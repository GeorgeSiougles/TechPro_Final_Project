package com.techpro.project.entity;



import java.time.LocalDateTime;

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
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Data
@Transactional
@NoArgsConstructor

@Table(name = "orderTable")
@Entity
public class OrderTable {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "personId")
    private int personId;

    @Column(name = "orderDate")
    private LocalDateTime orderDate;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn( name = "fk_id")
    private OrderDetails orderDetails;

}
