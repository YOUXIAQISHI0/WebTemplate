package com.hyg.im.mapper;

import java.util.List;
import java.util.Map;

import com.hyg.im.model.User;

public interface UserMapper {

	int deleteByPrimaryKey(Integer ID);

    int insert(User record);

    int insertSelective(User record);

    User selectByPrimaryKey(Integer ID);

    int updateByPrimaryKeySelective(User record);

    int updateByPrimaryKey(User record);
	
	/**
	 * 检查用户登录
	 * @param map
	 * @return
	 */
	int checkLogin(Map<String, Object> map);
	
	/**
	 * 查询用户总数
	 * @param map
	 * @return
	 */
	int findUserListCount();
	/**
	 * 查询用户列表
	 * @param map
	 * @return
	 */
	List<User> findUserList(Map map);
	
}
