package com.hyg.im.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.hyg.im.mapper.ProductMapper;
import com.hyg.im.model.Product;
import com.hyg.im.service.ProductService;



@Service
@Transactional  //此处不再进行创建SqlSession和提交事务，都已交由spring去管理了。
public class ProductServiceImpl implements ProductService {
	
	@Resource
	private ProductMapper mapper;

	@Override
	public int findProductListCount() {
		return mapper.findProductListCount();
	}

	@Override
	public List<Product> findProductList(Map map) {
		return mapper.findProductList(map);
	}

	@Override
	public int deleteByPrimaryKey(Integer ID) {
		return mapper.deleteByPrimaryKey(ID);
	}

	@Override
	public int insert(Product record) {
		return mapper.insert(record);
	}

	@Override
	public int insertSelective(Product record) {
		return mapper.insertSelective(record);
	}

	@Override
	public Product selectByPrimaryKey(Integer ID) {
		return mapper.selectByPrimaryKey(ID);
	}

	@Override
	public int updateByPrimaryKeySelective(Product record) {
		return mapper.updateByPrimaryKeySelective(record);
	}

	@Override
	public int updateByPrimaryKey(Product record) {
		return mapper.updateByPrimaryKey(record);
	}


}
