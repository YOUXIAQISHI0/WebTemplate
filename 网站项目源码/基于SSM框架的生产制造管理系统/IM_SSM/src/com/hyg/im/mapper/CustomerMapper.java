package com.hyg.im.mapper;

import java.util.List;
import java.util.Map;

import com.hyg.im.model.Customer;

public interface CustomerMapper {
    int deleteByPrimaryKey(Integer ID);

    int insert(Customer record);

    int insertSelective(Customer record);

    Customer selectByPrimaryKey(Integer ID);

    int updateByPrimaryKeySelective(Customer record);

    int updateByPrimaryKey(Customer record);
    
    /**
   	 * 查询客户总数
   	 * @param map
   	 * @return
   	 */
   	int findCustomerListCount();
   	/**
   	 * 查询客户列表
   	 * @param map
   	 * @return
   	 */
   	List<Customer> findCustomerList(Map map);
       
    
    
}