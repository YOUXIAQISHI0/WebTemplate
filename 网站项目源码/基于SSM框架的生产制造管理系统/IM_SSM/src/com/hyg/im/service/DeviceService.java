package com.hyg.im.service;

import java.util.List;
import java.util.Map;

import com.hyg.im.model.Device;


public interface DeviceService {


	/**
	 * 查询设备总数
	 * @param map
	 * @return
	 */
	int findDeviceListCount();
	/**
	 * 查询设备列表
	 * @param map
	 * @return
	 */
	List<Device> findDeviceList(Map map);
	
	
    int deleteByPrimaryKey(Integer ID);

    int insert(Device record);

    int insertSelective(Device record);

    Device selectByPrimaryKey(Integer ID);

    int updateByPrimaryKeySelective(Device record);

    int updateByPrimaryKey(Device record);

	
}
