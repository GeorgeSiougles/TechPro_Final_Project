package com.techpro.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.techpro.project.entity.OrderTable;

/**
 * The OrderTableRepository interface is a repository interface for managing OrderTable entities.
 * It extends the JpaRepository interface provided by Spring Data JPA.
 */
@Repository
public interface OrderTableRepository extends JpaRepository<OrderTable,Integer>{
    
}
