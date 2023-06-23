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
import lombok.Setter;

@Getter
@Setter
@Data
@Transactional

@Table(name = "orderTable")
@Entity
public class OrderTable {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name = "orderTableId")
    private int orderTableId;

    @Column(name = "orderDate")
    private LocalDateTime orderDate;

    @OneToOne(cascade = CascadeType.MERGE)
    @JoinColumn( name = "personId")
    private Person person;

}
