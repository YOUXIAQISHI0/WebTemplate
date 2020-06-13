package com.hyg.im.service;

import java.util.List;
import java.util.Map;

import com.hyg.im.model.Customer;


public interface CustomerService {


	/**
	 * 查询设备总数
	 * @param map
	 * @return
	 */
	int findCustomerListCount();
	/**
	 * 查询设备列表
	 * @param map
	 * @return
	 */
	List<Customer> findCustomerList(Map map);
	
	
    int deleteByPrimaryKey(Integer ID);

    int insert(Customer record);

    int insertSelective(Customer record);

    Customer selectByPrimaryKey(Integer ID);

    int updateByPrimaryKeySelective(Customer record);

    int updateByPrimaryKey(Customer record);

	
}
