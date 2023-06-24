package com.techpro.project.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.techpro.project.entity.OrderDetails;

/**
 * The OrderDetailsRepository interface is a repository interface for managing OrderDetails entities.
 * It extends the JpaRepository interface provided by Spring Data JPA.
 */
@Repository
public interface OrderDetailsRepository extends JpaRepository<OrderDetails,Integer>{
    
}
