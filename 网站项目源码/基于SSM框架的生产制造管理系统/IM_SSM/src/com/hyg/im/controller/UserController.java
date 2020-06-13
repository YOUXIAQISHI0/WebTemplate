package com.hyg.im.controller;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.hyg.im.common.BaseController;
import com.hyg.im.model.User;
import com.hyg.im.service.UserService;

@Controller
//@RequestMapping("/user")
public class UserController extends BaseController{

	@Autowired
	private UserService userService;
	
	/**
	 * 检查用户登录
	 * @param request
	 * @return
	 */
	@RequestMapping("/checkLogin")
	public ModelAndView checkLogin(HttpServletRequest request,HttpServletResponse response){
		ModelAndView mav = new ModelAndView();  
        mav.setViewName("/login.jsp"); //返回的文件名  
        
		 Map<String, Object> map = new HashMap<String,Object>();
		String loginName = request.getParameter("loginName");
		String pwd = request.getParameter("pwd");
		System.out.println("--loginName--"+loginName);
		System.out.println("--pwd--"+pwd);
		map.put("loginName", loginName);
		map.put("password", pwd);
		int checkResult = userService.checkLogin(map) ; 
//		RequestDispatcher rd = request.getRequestDispatcher("/main.jsp");
		if(checkResult == 0 ){
			mav.addObject("msg","用户名或者密码错误！");  
//			request.setAttribute("msg", "用户名或者密码错误！");
			return mav;
		}else{
			request.getSession().setAttribute("userName", loginName);
			Cookie cookie = new Cookie("userName" , loginName) ;
			cookie.setMaxAge(60*60*24*30);
			response.addCookie(cookie);
			
			 mav.setViewName("/main.jsp"); //返回的文件名  
			return mav;
		}
		
		
	}
	
	/**
	 * 用户注销
	 * @param request
	 * @return
	 */
	@RequestMapping("/logout")
	public ModelAndView logout(HttpServletRequest request,HttpServletResponse response){
		ModelAndView mav = new ModelAndView();  
        mav.setViewName("/login.jsp"); //返回的文件名  
        
        request.getSession().removeAttribute("userName");
        
        return mav;
		
	}
	
	
	/**
	 * 查询用户列表
	 * @param request
	 * @return
	 */
	@RequestMapping("/findUserList")
	public ModelAndView findUserList(HttpServletRequest request,HttpServletResponse response){
		ModelAndView mav = new ModelAndView();  
        mav.setViewName("/jsp/user/user_list.jsp"); //返回的文件名  
        
        super.pagination.setTotal(userService.findUserListCount());
        super.initPagination(pagination, request);
        
        
        String pageNo = request.getParameter("pageNo");
		String pageSize = request.getParameter("pageSize");
		
		Map map=new HashMap();
		map.put("pageNo", pagination.getPageNo());
		map.put("pageSize", pagination.getPageSize());

        List<User> userList = userService.findUserList(map);

        mav.addObject("userList", userList);
        mav.addObject("pagination", pagination);

        return mav;
     
		
		
	}
	
	/**
	 * 跳转到添加或编辑用户页面
	 * @param request
	 * @return
	 */
	@RequestMapping("/toAddOrEditUser")
	public ModelAndView toAddOrEditUser(HttpServletRequest request,HttpServletResponse response){
		ModelAndView mav = new ModelAndView();  
        mav.setViewName("/jsp/user/user_handle.jsp"); //返回的文件名  
        
        String motion = request.getParameter("motion");
        String userId = request.getParameter("userId");

        if (null!=motion&&motion.length()>0) {
            if (motion.equals("add")) {
                mav.addObject("user", null);
            } else if (motion.equals("edit") &&null!=userId&&userId.length()>0) {
                Map<String, Object> paramMap = new HashMap<String, Object>();
                paramMap.put("ID", userId);
                User user = userService.selectByPrimaryKey(Integer.parseInt(userId));
                if (user != null) {
                	mav.addObject("user", user);
                }
            }
        }

    

        return mav;
     
		
		
	}
	
	
	
	/**
	 * 添加或编辑用户
	 * @param request
	 * @return
	 */
	@RequestMapping("/addOrEditUser")
	public ModelAndView addOrEditUser(HttpServletRequest request,HttpServletResponse response, String motion){
		ModelAndView mav = new ModelAndView();  
        mav.setViewName("forward:/findUserList"); //返回的文件名  
        

        String userId = request.getParameter("userId");
        String userCode = request.getParameter("userCode");
        String loginName = request.getParameter("loginName");
        String userName = request.getParameter("userName");
        String sex = request.getParameter("sex");
        String birthday = request.getParameter("birthday");
        String idNum = request.getParameter("idNum");
        String nation = request.getParameter("nation");
        String married = request.getParameter("married");
        String hireDate = request.getParameter("hireDate");
        String postion = request.getParameter("postion");
        String job = request.getParameter("job");
        String email = request.getParameter("email");
        String deptName = request.getParameter("deptName");
        String mobile = request.getParameter("mobile");
        String description = request.getParameter("description");


        if (null!=userCode&&userCode.length()>0) {
            User user = new User();
            if (motion.equals("edit") && null!=userId&&userId.length()>0) {
                user.setID(Integer.parseInt(userId));
            }
            user.setUserCode(userCode);
            user.setLoginName(loginName);
            user.setUserName(userName);
            user.setSex(sex);
            
            try {
            	
            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");  
            Date date = sdf.parse(birthday==null||birthday.length()==0 ? "1900-01-01" : birthday);  
            
            Date date2 = sdf.parse(hireDate==null||hireDate.length()==0? "1900-01-01" : hireDate);  
            
            user.setBirthday(date);
            user.setIDNum(idNum);
            user.setNation(nation);
            user.setMarried(married);
            user.setHireDate(date2);
            user.setPosition(postion);
            user.setJob(job);
            user.setEmail(email);
            user.setDeptName(deptName);
            user.setMobile(mobile);
            user.setDescription(description);



            
            if (motion.equals("add")) {
                userService.insertSelective(user);
            } else if (motion.equals("edit")) {
                userService.updateByPrimaryKey(user);
            }


            } catch (Exception e) {
                e.printStackTrace();
            }


        }



        return mav;
     
		
		
	}
	
	/**
     * 人员离职
     *
     * @param request
     * @param response
     */
	@RequestMapping("/dismission")
    private ModelAndView dismission(HttpServletRequest request, HttpServletResponse response) {
		ModelAndView mav = new ModelAndView();  
        mav.setViewName("forward:/findUserList"); //返回的文件名  
        
        String userId = request.getParameter("userId");
        if (null!=userId&&userId.length()>0) {
            User user = new User();
            user.setStatus(Byte.parseByte("1"));
            user.setID(Integer.parseInt(userId));
            userService.updateByPrimaryKeySelective(user);
        }
        return mav;
    }
	
	
	
	
}
