package com.hyg.im.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.hyg.im.mapper.DeviceMapper;
import com.hyg.im.model.Device;
import com.hyg.im.service.DeviceService;



@Service
@Transactional  //此处不再进行创建SqlSession和提交事务，都已交由spring去管理了。
public class DeviceServiceImpl implements DeviceService {
	
	@Resource
	private DeviceMapper mapper;

	@Override
	public int findDeviceListCount() {
		return mapper.findDeviceListCount();
	}

	@Override
	public List<Device> findDeviceList(Map map) {
		return mapper.findDeviceList(map);
	}

	@Override
	public int deleteByPrimaryKey(Integer ID) {
		return mapper.deleteByPrimaryKey(ID);
	}

	@Override
	public int insert(Device record) {
		return mapper.insert(record);
	}

	@Override
	public int insertSelective(Device record) {
		return mapper.insertSelective(record);
	}

	@Override
	public Device selectByPrimaryKey(Integer ID) {
		return mapper.selectByPrimaryKey(ID);
	}

	@Override
	public int updateByPrimaryKeySelective(Device record) {
		return mapper.updateByPrimaryKeySelective(record);
	}

	@Override
	public int updateByPrimaryKey(Device record) {
		return mapper.updateByPrimaryKey(record);
	}


}
