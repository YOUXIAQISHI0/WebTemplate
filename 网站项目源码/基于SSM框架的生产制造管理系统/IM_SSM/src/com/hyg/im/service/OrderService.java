package com.hyg.im.service;

import java.util.List;
import java.util.Map;

import com.hyg.im.model.Order;


public interface OrderService {


	/**
	 * 查询工序总数
	 * @param map
	 * @return
	 */
	int findOrderListCount(Map map);
	/**
	 * 查询工序列表
	 * @param map
	 * @return
	 */
	List<Order> findOrderList(Map map);
	
	
    int deleteByPrimaryKey(Integer ID);

    int insert(Order record);

    int insertSelective(Order record);

    Order selectByPrimaryKey(Integer ID);

    int updateByPrimaryKeySelective(Order record);

    int updateByPrimaryKey(Order record);
	Order selectOrderById(int parseInt);

	
}
