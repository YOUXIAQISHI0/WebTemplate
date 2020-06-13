package com.hyg.im.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.hyg.im.common.BaseController;
import com.hyg.im.model.Workshop;
import com.hyg.im.service.WorkshopService;

@Controller
public class WorkshopController extends BaseController{

	@Autowired
	private WorkshopService workshopService;
	
	
	
	
	/**
	 * 查询设备列表
	 * @param request
	 * @return
	 */
	@RequestMapping("/findWorkshopList")
	public ModelAndView findWorkshopList(HttpServletRequest request,HttpServletResponse response){
		ModelAndView mav = new ModelAndView();  
        mav.setViewName("/jsp/workshop/workshop_list.jsp"); //返回的文件名  
        
        super.pagination.setTotal(workshopService.findWorkshopListCount());
        super.initPagination(pagination, request);
        
        
        String pageNo = request.getParameter("pageNo");
		String pageSize = request.getParameter("pageSize");
		
		Map map=new HashMap();
		map.put("pageNo", pagination.getPageNo());
		map.put("pageSize", pagination.getPageSize());

        List<Workshop> workshopList = workshopService.findWorkshopList(map);

        mav.addObject("workshopList", workshopList);
        mav.addObject("pagination", pagination);

        return mav;
     
		
		
	}
	
	/**
	 * 跳转到添加或编辑设备页面
	 * @param request
	 * @return
	 */
	@RequestMapping("/toAddOrEditWorkshop")
	public ModelAndView toAddOrEditUser(HttpServletRequest request,HttpServletResponse response){
		ModelAndView mav = new ModelAndView();  
        mav.setViewName("/jsp/workshop/workshop_handle.jsp"); //返回的文件名  
        
        String motion = request.getParameter("motion");
        String workshopId = request.getParameter("workshopId");

        if (null!=motion&&motion.length()>0) {
            if (motion.equals("add")) {
                mav.addObject("workshopBean", null);
            } else if (motion.equals("edit") &&null!=workshopId&&workshopId.length()>0) {
                Map<String, Object> paramMap = new HashMap<String, Object>();
                paramMap.put("ID", workshopId); 
                Workshop workshop = workshopService.selectByPrimaryKey(Integer.parseInt(workshopId));
                if (workshop != null) {
                	mav.addObject("workshop", workshop);
                }
            }
        }

    

        return mav;
     
		
		
	}
	
	
	/**
	 * 添加或编辑设备
	 * @param request
	 * @return
	 */
	@RequestMapping("/addOrEditWorkshop")
	public ModelAndView addOrEditWorkshop(HttpServletRequest request,HttpServletResponse response, String motion){
		ModelAndView mav = new ModelAndView();  
        mav.setViewName("forward:/findWorkshopList"); //返回的文件名  

        String workshopId = request.getParameter("workshopId");
        String workshopCode = request.getParameter("workshopCode");
        String workshopName = request.getParameter("workshopName");
        String description = request.getParameter("description");

        //SimpleDateFormat simpleDateFormat = new SimpleDateFormat();

        if (null!=workshopCode&&workshopCode.length()>0) {
            Workshop workshop = new Workshop();
            if (null!=motion&&motion.equals("edit") && null!=workshopId&&workshopId.length()>0) {
                workshop.setID(Integer.parseInt(workshopId));
            }
            workshop.setWorkshopCode(workshopCode);
            workshop.setWorkshopName(workshopName);
            workshop.setDescription(description);

            try {
                if (null!=motion&&motion.equals("add")) {
                    workshopService.insertSelective(workshop);
                } else if (motion.equals("edit")) {
                    workshopService.updateByPrimaryKey(workshop);
                }

            } catch (Exception e) {
                e.printStackTrace();
            }


        }


        return mav;
     
		
		
	}
	
	
	/**
	 * 删除设备
	 * @param request
	 * @return
	 */
	@RequestMapping("/delWorkshop")
	public ModelAndView delWorkshop(HttpServletRequest request,HttpServletResponse response, String motion){
		ModelAndView mav = new ModelAndView();  
        mav.setViewName("forward:/findWorkshopList"); //返回的文件名  

        String workshopId = request.getParameter("workshopId");
        if (null!=workshopId&&workshopId.length()>0) {
            try {
                workshopService.deleteByPrimaryKey(Integer.parseInt(workshopId));

            } catch (Exception e) {
                e.printStackTrace();
            }
        }


        return mav;
     
		
		
	}
	
	
	
}
