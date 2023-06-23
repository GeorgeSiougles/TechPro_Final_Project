package com.techpro.project.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import com.techpro.project.entity.OrderTable;

@Service
public class OrderTableService {

    private final JpaRepository<OrderTable,Integer> orderTableRepository;

    @Autowired
    public OrderTableService(JpaRepository<OrderTable,Integer> orderTableRepository){
        this.orderTableRepository = orderTableRepository;
    }

    public Integer getLatestOrderTableId(){
        Pageable pageable = PageRequest.of(0, 1, Sort.by(Sort.Direction.DESC, "id"));
        OrderTable latestOrderTable = orderTableRepository.findAll(pageable).getContent().get(0);
        return latestOrderTable.getOrderTableId();
    }
}
