package com.hyg.im.mapper;

import java.util.List;
import java.util.Map;

import com.hyg.im.model.Workshop;

public interface WorkshopMapper {
    int deleteByPrimaryKey(Integer ID);

    int insert(Workshop record);

    int insertSelective(Workshop record);

    Workshop selectByPrimaryKey(Integer ID);

    int updateByPrimaryKeySelective(Workshop record);

    int updateByPrimaryKey(Workshop record);
    
    /**
	 * 查询设备总数
	 * @param map
	 * @return
	 */
	int findWorkshopListCount();
	/**
	 * 查询设备列表
	 * @param map
	 * @return
	 */
	List<Workshop> findWorkshopList(Map map);
    
}