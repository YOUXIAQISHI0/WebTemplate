<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/common/taglibs.jsp"%>
<form id="insertProdForm" action="${basePath}/ProductServlet?action=insert"
	method="POST" >
	<input type="hidden" id="proid" name="proid" value="${product.id}" />
	<input type="hidden" id="act" name="act"  />
	<div id="base" class="box">
	      <ul class="cont-list">
	        <li><span>产品编号</span>
	        	<input type="text" id="prodCode" name="prodCode"
					value="${product.prodCode}" />
			</li>
			<li class="box_warning" ><p style="color:red"> *必填 </p>
	        <li><span>产品名称</span>
 	       		<input type="text" id="prodName" name="prodName"
					value="${product.prodName}" />
	        </li>
	        <li><span>产品规格</span>
	        	<input type="text" id="prodSpec" name="prodSpec"
					value="${product.prodSpec}" />
	        </li>
	        <li><span>产品型号</span>
	        	<input type="text" id="prodType" name="prodType"
					value="${product.prodType}" />
	        </li>
	        <li><span>单价</span>
	        	<input type="text" id="price" name="price"
					value="${product.price}" />
	        </li>
	        <li><span>备注</span>
	        	<textarea id="description" name="description" cols="20"
						rows="5">${product.description}</textarea>
	        </li>
	      </ul>
	      <div class="box-b">
	        <input class="bta" type="button" onclick="editbtn()" value="确定"/>
	        <input class="btd" type="button" onclick="closeModal()"value="取消"/>
	      </div>
	    </div>
</form>
