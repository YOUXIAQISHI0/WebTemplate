<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %> 
<%@include file="/common/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>产品管理</title>
<link href="${basePath}/css/bootstrap.min.css" type="text/css"
	rel="stylesheet" />
<link href="${basePath}/css/styles.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="${basePath}/js/jquery/jquery-3.1.1.min.js"></script>
<script src="${basePath}/js/bootstrap.min.js"></script>
<script src="${basePath}/js/base.js"></script>
<script type="text/javascript">
	function getProd(servletName) {
		var obj = window
				.open(
						"${basePath}/" + servletName,
						"_blank",
						"toolbar=no, location=no, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width=1000, height=800 , top=200 , left = 400");
	}

	$(function() {
		var act = "${act}";
		if (act == "") {
			$("#act").val("insert");
		}
			$("#orderCode").change(function(){
				checkRepeat(this);
			});
		
	});


	function editbtn() {
		if(checkNull("orderCode","订单编号")){
			 return;	
		}
		if($("#customerNameAdd").val()=="" || $("#customid").val() == ""){
			  alert("请选择客户！");
			  return;
		 }
		 if($("#prodCodeAdd").val()=="" || $("#prodid").val() == ""){
			  alert("请选择生产的产品！");
			  return;
		 }
		 if(!isNum("quantity","数量")){
			  return;
		 }
		var act =  $("#act").val();
		if (act == "insert")
			insertData();
		else
			updateData(); 
	}

	function insertData() {
			var path = "${basePath}/addOrder?pageNo="
					+$('#pageNo', window.parent.document).val() + "&pageSize=" + $('#pageSize', window.parent.document).val() ;
			/* frames[0].document.forms["insertProdForm"].action=path;
			 frames["iframeDialog"].document.forms["insertProdForm"].submit(); */
			 
			 $('#insertOrderForm').attr("action", path).submit(); 
	}

	function updateData() {
		var path = "${basePath}/updateOrder?pageNo="
			+$('#pageNo', window.parent.document).val() + "&pageSize=" + $('#pageSize', window.parent.document).val() ;
		 $('#insertOrderForm').attr("action", path).submit(); 
	}
	
	function checkRepeat(obj){
		var column = obj.id ;
		var value = obj.value;
		 $.ajax({
			type : "POST",
			url : "${basePath}/OrderServlet?action=checkRepeat&column=" + column + "&value=" + value,
			datatype:"json",
			success : function(data) {
				var  m = eval( "(" + data + ")");
				console.info(m.total);
					if(m.total > 0){
						alert("订单编号重复！");
						$("#orderCode").val("");
						//$("#orderCode").val("订单编号重复！")
					}
			}
			}); 
	}
</script>
<style type="text/css">
.modal-dialog {
	width: 800px !important;
	margin: 30px auto;
	position: relative;
}

button{
    float: right;
}

#prodCodeAdd ,#customerNameAdd {
  width:176px;
  margin-right:0px;
}


#selectButton{
	margin-right:20px;
} 

</style>
</head>
<body class="innerbody">
	<form id="insertOrderForm"
		action="${basePath}/addOrder" method="POST"  target="_parent"  >
		<input type="hidden" id="orderid" name="orderid" value="${order.ID}" />
		<input type="hidden" id="prodid" name="prodid" value="${order.product.ID }"/> 
		<input type="hidden" id="customid" name="customid" value="${order.customer.ID }"/> 
			<input type="hidden" id="act" name="act" />
		<div id="base" class="box">
	      <ul class="cont-list">
	        <li><span>订单编号</span>
	        	<input type="text" id="orderCode" name="orderCode"  value="${order.orderCode}" class="valid" />
			</li>
			<li class="box_warning" ><p style="color:red" id="checkRepeat"> *必填 </p>
			</li>
	        <li><span>客户</span>
	        	<button id="selectButton" type="button" onclick="getProd('findCustomerList')">选择</button>
	        	<input  type="text" id="customerNameAdd" name="customerNameAdd"  value="${order.customer.customName}" />
	        </li>
	         <li class="box_warning" ><p style="color:red"> *必填 </p>
	        <li><span>产品编号</span>
 	       		<button id="selectButton" type="button" onclick="getProd('findProductList')">选择</button>
	       		<input  type="text" id="prodCodeAdd" name="prodCode2"  value="${order.product.prodCode}" />
	        </li>
	        <li class="box_warning" ><p style="color:red"> *必填 </p>
	        <li><span>产品姓名</span>
	        	<input type="text" id="prodNameAdd" name="prodName2"  value="${order.product.prodName}"/>
	        </li>
	        <li><span>数量</span>
	        	<input type="text" id="quantity" name="quantity"  value="${order.quantity}"/>
	        </li>
	        <li class="box_warning" ><p style="color:red"> *只能填数字</p>
	        <li><span>交货日期</span>
	        	<input type="date" id="deliveryDateStr"	name="deliveryDateStr"  value="<fmt:formatDate value="${order.deliveryDate}" pattern="yyyy-MM-dd"/>"/>
	        </li>
	        <li><span>备注</span>
	        	<textarea id="description" name="description" cols="20"	rows="5">${order.description}</textarea>
	        </li>
	      </ul>
	      <div class="box-b">
	        <input class="bta" type="button" onclick="editbtn()" value="确定"/>
	        <input class="btd" type="button" onclick="parent.closeModal()"value="取消"/>
	      </div>
	    </div>
	</form>
</body>
</html>