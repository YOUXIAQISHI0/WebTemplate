package com.hyg.im.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.hyg.im.mapper.WorkshopMapper;
import com.hyg.im.model.Workshop;
import com.hyg.im.service.WorkshopService;



@Service
@Transactional  //此处不再进行创建SqlSession和提交事务，都已交由spring去管理了。
public class WorkshopServiceImpl implements WorkshopService {
	
	@Resource
	private WorkshopMapper mapper;

	@Override
	public int findWorkshopListCount() {
		return mapper.findWorkshopListCount();
	}

	@Override
	public List<Workshop> findWorkshopList(Map map) {
		return mapper.findWorkshopList(map);
	}

	@Override
	public int deleteByPrimaryKey(Integer ID) {
		return mapper.deleteByPrimaryKey(ID);
	}

	@Override
	public int insert(Workshop record) {
		return mapper.insert(record);
	}

	@Override
	public int insertSelective(Workshop record) {
		return mapper.insertSelective(record);
	}

	@Override
	public Workshop selectByPrimaryKey(Integer ID) {
		return mapper.selectByPrimaryKey(ID);
	}

	@Override
	public int updateByPrimaryKeySelective(Workshop record) {
		return mapper.updateByPrimaryKeySelective(record);
	}

	@Override
	public int updateByPrimaryKey(Workshop record) {
		return mapper.updateByPrimaryKey(record);
	}


}
