package com.hyg.im.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.hyg.im.mapper.OrderMapper;
import com.hyg.im.model.Order;
import com.hyg.im.service.OrderService;



@Service
@Transactional  //此处不再进行创建SqlSession和提交事务，都已交由spring去管理了。
public class OrderServiceImpl implements OrderService {
	
	@Resource
	private OrderMapper mapper;

	@Override
	public int findOrderListCount(Map map) {
		return mapper.findOrderListCount(map);
	}

	@Override
	public List<Order> findOrderList(Map map) {
		return mapper.findOrderList(map);
	}

	@Override
	public int deleteByPrimaryKey(Integer ID) {
		return mapper.deleteByPrimaryKey(ID);
	}

	@Override
	public int insert(Order record) {
		return mapper.insert(record);
	}

	@Override
	public int insertSelective(Order record) {
		return mapper.insertSelective(record);
	}

	@Override
	public Order selectByPrimaryKey(Integer ID) {
		return mapper.selectByPrimaryKey(ID);
	}

	@Override
	public int updateByPrimaryKeySelective(Order record) {
		return mapper.updateByPrimaryKeySelective(record);
	}

	@Override
	public int updateByPrimaryKey(Order record) {
		return mapper.updateByPrimaryKey(record);
	}

	@Override
	public Order selectOrderById(int parseInt) {
		return mapper.selectOrderById(parseInt);
	}


}
