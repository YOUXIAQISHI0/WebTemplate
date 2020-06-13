package com.hyg.im.service;

import java.util.List;
import java.util.Map;

import com.hyg.im.model.Process;


public interface ProcessService {


	/**
	 * 查询工序总数
	 * @param map
	 * @return
	 */
	int findProcessListCount();
	/**
	 * 查询工序列表
	 * @param map
	 * @return
	 */
	List<Process> findProcessList(Map map);
	
	
    int deleteByPrimaryKey(Integer ID);

    int insert(Process record);

    int insertSelective(Process record);

    Process selectByPrimaryKey(Integer ID);

    int updateByPrimaryKeySelective(Process record);

    int updateByPrimaryKey(Process record);
	Process selectProcessById(int parseInt);

	
}
