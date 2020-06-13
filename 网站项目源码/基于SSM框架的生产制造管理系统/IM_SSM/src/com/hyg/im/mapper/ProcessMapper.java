package com.hyg.im.mapper;

import java.util.List;
import java.util.Map;

import com.hyg.im.model.Process;
import com.hyg.im.model.Product;

public interface ProcessMapper {
    int deleteByPrimaryKey(Integer ID);

    int insert(Process record);

    int insertSelective(Process record);

    Process selectByPrimaryKey(Integer ID);

    int updateByPrimaryKeySelective(Process record);

    int updateByPrimaryKey(Process record);
    
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

	Process selectProcessById(int parseInt);
    
}