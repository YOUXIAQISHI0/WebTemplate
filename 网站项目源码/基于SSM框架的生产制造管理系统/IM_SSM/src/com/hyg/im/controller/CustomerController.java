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
import com.hyg.im.model.Customer;
import com.hyg.im.service.CustomerService;

@Controller
public class CustomerController extends BaseController{

	@Autowired
	private CustomerService customerService;
	
	
	
	
	/**
	 * 查询客户列表
	 * @param request
	 * @return
	 */
	@RequestMapping("/findCustomerList")
	public ModelAndView findCustomerList(HttpServletRequest request,HttpServletResponse response){
		ModelAndView mav = new ModelAndView();  
        mav.setViewName("/jsp/customer/customer_list.jsp"); //返回的文件名  
        
        super.pagination.setTotal(customerService.findCustomerListCount());
        super.initPagination(pagination, request);
        
        
        String pageNo = request.getParameter("pageNo");
		String pageSize = request.getParameter("pageSize");
		
		Map map=new HashMap();
		map.put("pageNo", pagination.getPageNo());
		map.put("pageSize", pagination.getPageSize());

        List<Customer> customerList = customerService.findCustomerList(map);

        mav.addObject("customerList", customerList);
        mav.addObject("pagination", pagination);

        return mav;
     
		
		
	}
	
	/**
	 * 跳转到添加或编辑客户页面
	 * @param request
	 * @return
	 */
	@RequestMapping("/toAddOrEditCustomer")
	public ModelAndView toAddOrEditCustomer(HttpServletRequest request,HttpServletResponse response){
		ModelAndView mav = new ModelAndView();  
        mav.setViewName("/jsp/customer/customer_handle.jsp"); //返回的文件名  
        
        String motion = request.getParameter("motion");
        String customerId = request.getParameter("customerId");

        if (null!=motion&&motion.length()>0) {
            if (motion.equals("add")) {
                mav.addObject("customerBean", null);
            } else if (motion.equals("edit") &&null!=customerId&&customerId.length()>0) {
                Map<String, Object> paramMap = new HashMap<String, Object>();
                paramMap.put("ID", customerId); 
                Customer customer = customerService.selectByPrimaryKey(Integer.parseInt(customerId));
                if (customer != null) {
                	mav.addObject("customer", customer);
                }
            }
        }

    

        return mav;
     
		
		
	}
	
	
	/**
	 * 添加或编辑客户
	 * @param request
	 * @return
	 */
	@RequestMapping("/addOrEditCustomer")
	public ModelAndView addOrEditCustomer(HttpServletRequest request,HttpServletResponse response, String motion){
		ModelAndView mav = new ModelAndView();  
        mav.setViewName("forward:/findCustomerList"); //返回的文件名  

        String customerId = request.getParameter("customerId");
        String customerCode = request.getParameter("customerCode");
        String customerName = request.getParameter("customerName");
        String linkman = request.getParameter("linkman");
        String contactNumber = request.getParameter("contactNumber");
        String address = request.getParameter("address");
        String description = request.getParameter("description");

        //SimpleDateFormat simpleDateFormat = new SimpleDateFormat();

        if (null!=customerCode&&customerCode.length()>0) {
            Customer customer = new Customer();
            if (motion.equals("edit") && null!=customerId&&customerId.length()>0) {
                customer.setID(Integer.parseInt(customerId));
            }
            customer.setCustomCode(customerCode);
            customer.setCustomName(customerName);
            customer.setLinkman(linkman);
            customer.setContactNumber(contactNumber);
            customer.setAddress(address);
            customer.setDescription(description);

            try {
                if (motion.equals("add")) {
                    customerService.insertSelective(customer);
                } else if (motion.equals("edit")) {
                	customerService.updateByPrimaryKey(customer);
                }


            } catch (Exception e) {
                e.printStackTrace();
            }


        }


    

        return mav;
     
		
		
	}
	
	
	/**
	 * 删除客户
	 * @param request
	 * @return
	 */
	@RequestMapping("/delCustomer")
	public ModelAndView delCustomer(HttpServletRequest request,HttpServletResponse response, String motion){
		ModelAndView mav = new ModelAndView();  
        mav.setViewName("forward:/findCustomerList"); //返回的文件名  

        String customerId = request.getParameter("customerId");
        if (null!=customerId&&customerId.length()>0) {
            try {
                customerService.deleteByPrimaryKey(Integer.parseInt(customerId));

            } catch (Exception e) {
                e.printStackTrace();
            }
        }


        return mav;
     
		
		
	}
	
	
	
}
