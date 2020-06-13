package com.hyg.im.controller;

import java.text.SimpleDateFormat;
import java.util.Date;
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
import com.hyg.im.model.Order;
import com.hyg.im.service.OrderService;

@Controller
public class OrderController extends BaseController{

	@Autowired
	private OrderService orderService;
	
	
	/**
	 * 查询订单列表
	 * @param request
	 * @return
	 */
	@RequestMapping("/findOrderList")
	public ModelAndView findOrderList(HttpServletRequest request,HttpServletResponse response){
		ModelAndView mav = new ModelAndView();  
		try {
			request.setCharacterEncoding("UTF-8");
			mav.setViewName("/jsp/order/order.jsp"); //返回的文件名  
			
			
			String pageNo = request.getParameter("pageNo");
			String pageSize = request.getParameter("pageSize");
			
			String customerName = request.getParameter("customerName");
			String prodName = request.getParameter("prodName");
			String deliveryDateBegin = request.getParameter("deliveryDateBegin");
			String deliveryDateEnd = request.getParameter("deliveryDateEnd");
			
			Map map=new HashMap();
			map.put("pageNo", pagination.getPageNo());
			map.put("pageSize", pagination.getPageSize());
			
			map.put("customerName", customerName);
			map.put("prodName", prodName);
			map.put("deliveryDateBegin", deliveryDateBegin);
			map.put("deliveryDateEnd", deliveryDateEnd);
			
			
			super.pagination.setTotal(orderService.findOrderListCount(map));
			super.initPagination(pagination, request);
			
			
			
		

			List<Order> orderList = orderService.findOrderList(map);

			mav.addObject("orderList", orderList);
			mav.addObject("pagination", pagination);
			mav.addObject("customerName", customerName);
			mav.addObject("prodName", prodName);
			mav.addObject("deliveryDateBegin", deliveryDateBegin);
			mav.addObject("deliveryDateEnd", deliveryDateEnd);

		} catch (Exception e) {
			e.printStackTrace();
		}
		return mav;
		
	}
	
	
	
	
	/**
	 * 添加订单
	 * @param request
	 * @return
	 */
	@RequestMapping("/addOrder")
	public ModelAndView addOrEditOrder(HttpServletRequest request,HttpServletResponse response, String motion){
		ModelAndView mav = new ModelAndView();  
        mav.setViewName("forward:/findOrderList"); //返回的文件名  
        
		try {
			Order order = new Order();
			Integer prodId = Integer.valueOf(request.getParameter("prodid")); 
			if(prodId > 0){
				order.setProductID(prodId);
			}
			//TODO  客户模块完成后添加从页面获取客户id相关代码
			Integer customerId = Integer.valueOf(request.getParameter("customid")); 
			if(customerId > 0 ){
				order.setCustomID(customerId);
			}
			Integer quantity = Integer.valueOf( StringUtils.isEmpty(request.getParameter("quantity")) ? "0":request.getParameter("quantity"));
			if(quantity > 0 ){
				order.setQuantity(quantity);
			}
			String deliveryDateStr = request.getParameter("deliveryDateStr");
			if(StringUtils.isNotEmpty(deliveryDateStr)){
				
				SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");         
				Date deliveryDate = format.parse(deliveryDateStr);   
				order.setDeliveryDate(deliveryDate);
			}
			String description  = request.getParameter("description");
			if(StringUtils.isNotEmpty(description)){
				order.setDescription(description);
			}
			String orderCode = request.getParameter("orderCode");
			if(StringUtils.isNotEmpty(orderCode)){
				order.setOrderCode(orderCode);
			}
			orderService.insertSelective(order);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
        return mav;
		
	}
	
	
	/**
	 * 修改初始化
	 * @param request
	 * @return
	 */
	@RequestMapping("/updateOrderInit")
	public ModelAndView updateOrderInit(HttpServletRequest request,HttpServletResponse response, String motion){
		ModelAndView mav = new ModelAndView();  
        mav.setViewName("forward:/jsp/order/order_add.jsp"); //返回的文件名  
        
        String id=request.getParameter("id").toString();
        String action = request.getParameter("action");
        mav.addObject("act", action);
        Order order=orderService.selectOrderById(Integer.parseInt(id));
		mav.addObject("order", order);
        return mav;
     
		
		
	}
	
	
	
	/**
	 * 修改订单
	 * @param request
	 * @return
	 */
	@RequestMapping("/updateOrder")
	public ModelAndView updateOrder(HttpServletRequest request,HttpServletResponse response, String motion){
		ModelAndView mav = new ModelAndView();  
        mav.setViewName("forward:/findOrderList"); //返回的文件名  
        
		try {
			Order order = new Order();
			Integer id = Integer.valueOf(request.getParameter("orderid"));
			if(id > 0){
				order.setID(id);
			}
			Integer prodId = Integer.valueOf(request.getParameter("prodid")); 
			if(prodId > 0){
				order.setProductID(prodId);
			}
			
			Integer customerId = Integer.valueOf(request.getParameter("customid")); 
			if(customerId > 0 ){
				order.setCustomID(customerId);
			}
			Integer quantity = Integer.valueOf( StringUtils.isEmpty(request.getParameter("quantity")) ? "0":request.getParameter("quantity"));
			if(quantity > 0 ){
				order.setQuantity(quantity);
			}
			String deliveryDateStr = request.getParameter("deliveryDateStr");
			if(StringUtils.isNotEmpty(deliveryDateStr)){
				SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");         
				Date deliveryDate = format.parse(deliveryDateStr);   
				order.setDeliveryDate(deliveryDate);
			}
			String description  = request.getParameter("description");
			if(StringUtils.isNotEmpty(description)){
				order.setDescription(description);
			}
			String orderCode = request.getParameter("orderCode");
			if(StringUtils.isNotEmpty(orderCode)){
				order.setOrderCode(orderCode);
			}
			
			orderService.updateByPrimaryKey(order);
		} catch (Exception e) {
			e.printStackTrace();
		}

        return mav;
     
		
	}
	
	
	/**
	 * 删除订单
	 * @param request
	 * @return
	 */
	@RequestMapping("/delOrder")
	public ModelAndView delOrder(HttpServletRequest request,HttpServletResponse response, String motion){
		ModelAndView mav = new ModelAndView();  
        mav.setViewName("forward:/findOrderList"); //返回的文件名  

        String orderId = request.getParameter("orderId");
        if (null!=orderId&&orderId.length()>0) {
            try {
                orderService.deleteByPrimaryKey(Integer.parseInt(orderId));

            } catch (Exception e) {
                e.printStackTrace();
            }
        }

        return mav;
     
		
	}
	
	
	
}
