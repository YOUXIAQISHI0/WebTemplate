package com.hyg.im.common;


import javax.servlet.http.HttpServletRequest;


public class BaseController {

	public Pagination pagination = new Pagination();

	/**
	 * 鍒濆鍖栧垎椤�
	 * @param pagination
	 * @param request
	 */
	public void initPagination(Pagination pagination , HttpServletRequest request) {
		String pageNo = request.getParameter("pageNo");
		String pageSize = request.getParameter("pageSize");
		pagination.setPageSize(StringUtils.isEmpty(pageSize) ? 10 : Integer.valueOf(pageSize) );
		pagination.setPageNo(StringUtils.isEmpty(pageNo) ? 1 : Integer.valueOf(pageNo) );
		if ((pagination.getTotal() % pagination.getPageSize()) == 0) {
			pagination.setPageIndex(pagination.getTotal() / pagination.getPageSize());
		} else {
			pagination.setPageIndex(pagination.getTotal() / pagination.getPageSize() + 1);
		}

	}
	
	
	/**
	 * 浠SON鏍煎紡鍝嶅簲鍒板墠鍙�
	 * @param response
	 * @param json
	 */
	/*@SuppressWarnings("null")
	public void  writeToJson(HttpServletResponse response ,JSONObject json) {
		response.setContentType("text/html;charset=utf-8");
		response.setCharacterEncoding("UTF-8");
		PrintWriter out = null;
		try {
			out = response.getWriter();
			if (json == null) {
				json.put("success", false);
			}
			out.println(json);// 鍚戝鎴风杈撳嚭JSONObject瀛楃涓�
	        out.flush();
	        out.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}*/

	
	

}
