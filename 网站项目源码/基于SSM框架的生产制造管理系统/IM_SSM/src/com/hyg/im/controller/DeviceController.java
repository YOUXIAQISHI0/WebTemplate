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
import com.hyg.im.model.Device;
import com.hyg.im.service.DeviceService;

@Controller
public class DeviceController extends BaseController{

	@Autowired
	private DeviceService deviceService;
	
	
	
	
	/**
	 * 查询设备列表
	 * @param request
	 * @return
	 */
	@RequestMapping("/findDeviceList")
	public ModelAndView findDeviceList(HttpServletRequest request,HttpServletResponse response){
		ModelAndView mav = new ModelAndView();  
        mav.setViewName("/jsp/device/device_list.jsp"); //返回的文件名  
        
        super.pagination.setTotal(deviceService.findDeviceListCount());
        super.initPagination(pagination, request);
        
        
        String pageNo = request.getParameter("pageNo");
		String pageSize = request.getParameter("pageSize");
		
		Map map=new HashMap();
		map.put("pageNo", pagination.getPageNo());
		map.put("pageSize", pagination.getPageSize());

        List<Device> deviceList = deviceService.findDeviceList(map);

        mav.addObject("deviceList", deviceList);
        mav.addObject("pagination", pagination);

        return mav;
     
		
		
	}
	
	/**
	 * 跳转到添加或编辑设备页面
	 * @param request
	 * @return
	 */
	@RequestMapping("/toAddOrEditDevice")
	public ModelAndView toAddOrEditUser(HttpServletRequest request,HttpServletResponse response){
		ModelAndView mav = new ModelAndView();  
        mav.setViewName("/jsp/device/device_handle.jsp"); //返回的文件名  
        
        String motion = request.getParameter("motion");
        String deviceId = request.getParameter("deviceId");

        if (null!=motion&&motion.length()>0) {
            if (motion.equals("add")) {
                mav.addObject("deviceBean", null);
            } else if (motion.equals("edit") &&null!=deviceId&&deviceId.length()>0) {
                Map<String, Object> paramMap = new HashMap<String, Object>();
                paramMap.put("ID", deviceId); 
                Device device = deviceService.selectByPrimaryKey(Integer.parseInt(deviceId));
                if (device != null) {
                	mav.addObject("device", device);
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
	@RequestMapping("/addOrEditDevice")
	public ModelAndView addOrEditDevice(HttpServletRequest request,HttpServletResponse response, String motion){
		ModelAndView mav = new ModelAndView();  
        mav.setViewName("forward:/findDeviceList"); //返回的文件名  

        String deviceId = request.getParameter("deviceId");
        String deviceCode = request.getParameter("deviceCode");
        String deviceSpec = request.getParameter("deviceSpec");
        String deviceName = request.getParameter("deviceName");
        String description = request.getParameter("description");

        //SimpleDateFormat simpleDateFormat = new SimpleDateFormat();

        if (null!=deviceCode&&deviceCode.length()>0) {
            Device device = new Device();
            if (null!=motion&&motion.equals("edit") && null!=deviceId&&deviceId.length()>0) {
                device.setID(Integer.parseInt(deviceId));
            }
            device.setDeviceCode(deviceCode);
            device.setDeviceSpec(deviceSpec);
            device.setDeviceName(deviceName);
            device.setDescription(description);

            try {
                if (null!=motion&&motion.equals("add")) {
                    deviceService.insertSelective(device);
                } else if (motion.equals("edit")) {
                    deviceService.updateByPrimaryKey(device);
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
	@RequestMapping("/delDevice")
	public ModelAndView delDevice(HttpServletRequest request,HttpServletResponse response, String motion){
		ModelAndView mav = new ModelAndView();  
        mav.setViewName("forward:/findDeviceList"); //返回的文件名  

        String deviceId = request.getParameter("deviceId");
        if (null!=deviceId&&deviceId.length()>0) {
            try {
                deviceService.deleteByPrimaryKey(Integer.parseInt(deviceId));

            } catch (Exception e) {
                e.printStackTrace();
            }
        }


        return mav;
     
		
		
	}
	
	
	
}
