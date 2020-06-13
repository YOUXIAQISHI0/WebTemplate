package com.hyg.im.service;

import java.util.List;
import java.util.Map;

import com.hyg.im.model.Workshop;


public interface WorkshopService {


	/**
	 * 查询车间总数
	 * @param map
	 * @return
	 */
	int findWorkshopListCount();
	/**
	 * 查询车间列表
	 * @param map
	 * @return
	 */
	List<Workshop> findWorkshopList(Map map);
	
	
    int deleteByPrimaryKey(Integer ID);

    int insert(Workshop record);

    int insertSelective(Workshop record);

    Workshop selectByPrimaryKey(Integer ID);

    int updateByPrimaryKeySelective(Workshop record);

    int updateByPrimaryKey(Workshop record);

	
}
