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
import com.hyg.im.common.StringUtils;
import com.hyg.im.model.Process;
import com.hyg.im.service.ProcessService;

@Controller
public class ProcessController extends BaseController{

	@Autowired
	private ProcessService processService;
	
	
	
	
	/**
	 * 查询工序列表
	 * @param request
	 * @return
	 */
	@RequestMapping("/findProcessList")
	public ModelAndView findProcessList(HttpServletRequest request,HttpServletResponse response){
		ModelAndView mav = new ModelAndView();  
        mav.setViewName("/jsp/process/process.jsp"); //返回的文件名  
        
        super.pagination.setTotal(processService.findProcessListCount());
        super.initPagination(pagination, request);
        
        
        String pageNo = request.getParameter("pageNo");
		String pageSize = request.getParameter("pageSize");
		
		Map map=new HashMap();
		map.put("pageNo", pagination.getPageNo());
		map.put("pageSize", pagination.getPageSize());

        List<Process> processList = processService.findProcessList(map);

        mav.addObject("processList", processList);
        mav.addObject("pagination", pagination);

        return mav;
		
	}
	
	
	
	
	/**
	 * 添加工序
	 * @param request
	 * @return
	 */
	@RequestMapping("/addProcess")
	public ModelAndView addOrEditProcess(HttpServletRequest request,HttpServletResponse response, String motion){
		ModelAndView mav = new ModelAndView();  
        mav.setViewName("forward:/findProcessList"); //返回的文件名  
        
		Process process = new  Process();
		String processCode = request.getParameter("processCode");
		String processName = request.getParameter("processName");
		String description = request.getParameter("description");
		Integer deviceId = StringUtils.getIntegerFromString(request.getParameter("deviceId"));
		if(StringUtils.isNotEmpty(processCode)){
			 process.setProcessCode(processCode);
		}
		if(StringUtils.isNotEmpty(processName)){
			process.setProcessName(processName);
		}
		if(StringUtils.isNotEmpty(description)){
			process.setDescription(description);
		}
		if( deviceId > 0 ){
			process.setDeviceId(deviceId);
		}
		processService.insertSelective(process);
	

        return mav;
     
		
		
	}
	
	
	/**
	 * 修改初始化
	 * @param request
	 * @return
	 */
	@RequestMapping("/updateInit")
	public ModelAndView updateInit(HttpServletRequest request,HttpServletResponse response, String motion){
		ModelAndView mav = new ModelAndView();  
        mav.setViewName("forward:/jsp/process/process_add.jsp"); //返回的文件名  
        
        String id=request.getParameter("id").toString();
        String action = request.getParameter("action");
//        mav.addObject("action", action);
        mav.addObject("act", action);
//		Process process=processService.selectByPrimaryKey(Integer.parseInt(id));
        Process process=processService.selectProcessById(Integer.parseInt(id));
		mav.addObject("process", process);
        return mav;
     
		
		
	}
	
	
	
	
	
	
	/**
	 * 修改工序
	 * @param request
	 * @return
	 */
	@RequestMapping("/updateProcess")
	public ModelAndView updateProcess(HttpServletRequest request,HttpServletResponse response, String motion){
		ModelAndView mav = new ModelAndView();  
        mav.setViewName("forward:/findProcessList"); //返回的文件名  

		Process process = new Process();
		String id =request.getParameter("processid");
		if(StringUtils.isNotEmpty(id)){
			 process.setID(Integer.valueOf(id));
		}
		Integer deviceId = StringUtils.getIntegerFromString(request.getParameter("deviceId"));
		if( deviceId > 0 ){
			process.setDeviceId(deviceId);
		}
		String processCode = request.getParameter("processCode");
		if(StringUtils.isNotEmpty(processCode)){
			process.setProcessCode(processCode);
		}
		String processName = request.getParameter("processName");
		if(StringUtils.isNotEmpty(processName)){
			process.setProcessName(processName);
		}
		String description = request.getParameter("description");
		if(StringUtils.isNotEmpty(description)){
			process.setDescription(description);
		}
		processService.updateByPrimaryKey(process);
        

        return mav;
     
		
		
	}
	
	
	/**
	 * 删除工序
	 * @param request
	 * @return
	 */
	@RequestMapping("/delProcess")
	public ModelAndView delProcess(HttpServletRequest request,HttpServletResponse response, String motion){
		ModelAndView mav = new ModelAndView();  
        mav.setViewName("forward:/findProcessList"); //返回的文件名  

        String processId = request.getParameter("processId");
        if (null!=processId&&processId.length()>0) {
            try {
                processService.deleteByPrimaryKey(Integer.parseInt(processId));

            } catch (Exception e) {
                e.printStackTrace();
            }
        }


        return mav;
     
		
		
	}
	
	
	
}
