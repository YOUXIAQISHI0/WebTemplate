package com.hyg.im.service;

import java.util.List;
import java.util.Map;

import com.hyg.im.model.User;


public interface UserService {
	
	
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
	/**
	 * 根据用户ID查询用户信息
	 * @param ID
	 * @return
	 */
	User selectByPrimaryKey(Integer ID);
    int deleteByPrimaryKey(Integer ID);

    int insert(User record);

    int insertSelective(User record);

    int updateByPrimaryKeySelective(User record);

    int updateByPrimaryKey(User record);
	
	
}
