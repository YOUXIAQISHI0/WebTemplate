package com.hyg.im.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.hyg.im.mapper.CustomerMapper;
import com.hyg.im.model.Customer;
import com.hyg.im.service.CustomerService;



@Service
@Transactional  //此处不再进行创建SqlSession和提交事务，都已交由spring去管理了。
public class CustomerServiceImpl implements CustomerService {
	
	@Resource
	private CustomerMapper mapper;

	@Override
	public int findCustomerListCount() {
		return mapper.findCustomerListCount();
	}

	@Override
	public List<Customer> findCustomerList(Map map) {
		return mapper.findCustomerList(map);
	}

	@Override
	public int deleteByPrimaryKey(Integer ID) {
		return mapper.deleteByPrimaryKey(ID);
	}

	@Override
	public int insert(Customer record) {
		return mapper.insert(record);
	}

	@Override
	public int insertSelective(Customer record) {
		return mapper.insertSelective(record);
	}

	@Override
	public Customer selectByPrimaryKey(Integer ID) {
		return mapper.selectByPrimaryKey(ID);
	}

	@Override
	public int updateByPrimaryKeySelective(Customer record) {
		return mapper.updateByPrimaryKeySelective(record);
	}

	@Override
	public int updateByPrimaryKey(Customer record) {
		return mapper.updateByPrimaryKey(record);
	}


}
