package com.hyg.im.controller;

import java.math.BigDecimal;
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
import com.hyg.im.model.Product;
import com.hyg.im.service.ProductService;

@Controller
public class ProductController extends BaseController{

	@Autowired
	private ProductService productService;
	
	
	
	
	/**
	 * 查询客户列表
	 * @param request
	 * @return
	 */
	@RequestMapping("/findProductList")
	public ModelAndView findProductList(HttpServletRequest request,HttpServletResponse response){
		ModelAndView mav = new ModelAndView();  
        mav.setViewName("/jsp/product/product.jsp"); //返回的文件名  
        
        super.pagination.setTotal(productService.findProductListCount());
        super.initPagination(pagination, request);
        
        
        String pageNo = request.getParameter("pageNo");
		String pageSize = request.getParameter("pageSize");
		
		Map map=new HashMap();
		map.put("pageNo", pagination.getPageNo());
		map.put("pageSize", pagination.getPageSize());

        List<Product> productList = productService.findProductList(map);

        mav.addObject("productList", productList);
        mav.addObject("pagination", pagination);

        return mav;
		
	}
	
	
	
	
	/**
	 * 添加产品
	 * @param request
	 * @return
	 */
	@RequestMapping("/addProduct")
	public ModelAndView addOrEditProduct(HttpServletRequest request,HttpServletResponse response, String motion){
		ModelAndView mav = new ModelAndView();  
        mav.setViewName("forward:/findProductList"); //返回的文件名  
        
		String prodCode = request.getParameter("prodCode");
		String prodName = request.getParameter("prodName");
		String prodSpec = request.getParameter("prodSpec");
		String prodType = request.getParameter("prodType");
		String price = request.getParameter("price");
		String description = request.getParameter("description");

		Product p = new Product();
		p.setProdCode(prodCode);
		p.setProdName(prodName);
		p.setProdSpec(prodSpec);
		p.setProdType(prodType);
		p.setPrice(new BigDecimal(price));
		p.setDescription(description);
		productService.insertSelective(p);
	

        return mav;
     
		
		
	}
	
	
	/**
	 * 修改产品
	 * @param request
	 * @return
	 */
	@RequestMapping("/updateProduct")
	public ModelAndView updateProduct(HttpServletRequest request,HttpServletResponse response, String motion){
		ModelAndView mav = new ModelAndView();  
        mav.setViewName("forward:/findProductList"); //返回的文件名  

		String id = request.getParameter("proid");
		String prodCode = request.getParameter("prodCode");
		String prodName = request.getParameter("prodName");
		String prodSpec = request.getParameter("prodSpec");
		String prodType = request.getParameter("prodType");
		String price = request.getParameter("price");
		String description = request.getParameter("description");

		Product p = new Product();
		p.setID(Integer.valueOf(id));
		p.setProdCode(prodCode);
		p.setProdName(prodName);
		p.setProdSpec(prodSpec);
		p.setProdType(prodType);
		p.setPrice(new BigDecimal(price));
		p.setDescription(description);
		productService.updateByPrimaryKey(p);
        

        return mav;
     
		
		
	}
	
	
	/**
	 * 删除产品
	 * @param request
	 * @return
	 */
	@RequestMapping("/delProduct")
	public ModelAndView delProduct(HttpServletRequest request,HttpServletResponse response, String motion){
		ModelAndView mav = new ModelAndView();  
        mav.setViewName("forward:/findProductList"); //返回的文件名  

        String productId = request.getParameter("productId");
        if (null!=productId&&productId.length()>0) {
            try {
                productService.deleteByPrimaryKey(Integer.parseInt(productId));

            } catch (Exception e) {
                e.printStackTrace();
            }
        }


        return mav;
     
		
		
	}
	
	
	
}
