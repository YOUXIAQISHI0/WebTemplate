package com.hyg.im.mapper;

import java.util.List;
import java.util.Map;

import com.hyg.im.model.Order;
import com.hyg.im.model.Product;

public interface OrderMapper {
    int deleteByPrimaryKey(Integer ID);

    int insert(Order record);

    int insertSelective(Order record);

    Order selectByPrimaryKey(Integer ID);

    int updateByPrimaryKeySelective(Order record);

    int updateByPrimaryKey(Order record);
    
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

	Order selectOrderById(int parseInt);
    
}