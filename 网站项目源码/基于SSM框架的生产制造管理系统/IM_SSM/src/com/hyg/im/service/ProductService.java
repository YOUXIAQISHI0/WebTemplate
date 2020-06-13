package com.hyg.im.service;

import java.util.List;
import java.util.Map;

import com.hyg.im.model.Product;


public interface ProductService {


	/**
	 * 查询产品总数
	 * @param map
	 * @return
	 */
	int findProductListCount();
	/**
	 * 查询产品列表
	 * @param map
	 * @return
	 */
	List<Product> findProductList(Map map);
	
	
    int deleteByPrimaryKey(Integer ID);

    int insert(Product record);

    int insertSelective(Product record);

    Product selectByPrimaryKey(Integer ID);

    int updateByPrimaryKeySelective(Product record);

    int updateByPrimaryKey(Product record);

	
}
