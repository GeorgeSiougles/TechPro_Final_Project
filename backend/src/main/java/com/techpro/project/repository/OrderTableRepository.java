package com.techpro.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.techpro.project.entity.OrderTable;

@Repository
public interface OrderTableRepository extends JpaRepository<OrderTable,Integer>{
    
}
