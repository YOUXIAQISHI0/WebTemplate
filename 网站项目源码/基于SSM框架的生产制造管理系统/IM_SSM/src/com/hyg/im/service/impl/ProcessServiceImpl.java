package com.hyg.im.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.hyg.im.mapper.ProcessMapper;
import com.hyg.im.model.Process;
import com.hyg.im.service.ProcessService;



@Service
@Transactional  //此处不再进行创建SqlSession和提交事务，都已交由spring去管理了。
public class ProcessServiceImpl implements ProcessService {
	
	@Resource
	private ProcessMapper mapper;

	@Override
	public int findProcessListCount() {
		return mapper.findProcessListCount();
	}

	@Override
	public List<Process> findProcessList(Map map) {
		return mapper.findProcessList(map);
	}

	@Override
	public int deleteByPrimaryKey(Integer ID) {
		return mapper.deleteByPrimaryKey(ID);
	}

	@Override
	public int insert(Process record) {
		return mapper.insert(record);
	}

	@Override
	public int insertSelective(Process record) {
		return mapper.insertSelective(record);
	}

	@Override
	public Process selectByPrimaryKey(Integer ID) {
		return mapper.selectByPrimaryKey(ID);
	}

	@Override
	public int updateByPrimaryKeySelective(Process record) {
		return mapper.updateByPrimaryKeySelective(record);
	}

	@Override
	public int updateByPrimaryKey(Process record) {
		return mapper.updateByPrimaryKey(record);
	}

	@Override
	public Process selectProcessById(int parseInt) {
		return mapper.selectProcessById(parseInt);
	}


}
