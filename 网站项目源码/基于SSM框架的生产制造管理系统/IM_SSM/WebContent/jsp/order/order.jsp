<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %> 
<%@include file="/common/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>产品管理</title>
<link href="${basePath}/css/bootstrap.min.css" type="text/css" rel="stylesheet" />
<link href="${basePath}/css/styles.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="${basePath}/js/jquery/jquery-3.1.1.min.js"></script>
<script src="${basePath}/js/bootstrap.min.js"></script>
<script type="text/javascript">
	$(function(){
		$("tr:odd").css("background","#bbffff");
	});
	
	function clearData(){
		 $("#customerName").val("")  ;
		 $("#prodName").val("") ;
		 $("#deliveryDateBegin").val("") ;
		 $("#deliveryDateEnd").val("") ; 
	}
	
	function query(pageNo) {
		if (pageNo != undefined) {
			$("#pageNo").val(pageNo);
		}
		//var customerName= $("#customerName").val()  ;
		//var prodName = $("#prodName").val() ;
		//var deliveryDateBegin =  $("#deliveryDateBegin").val() ;
		//var deliveryDateEnd = $("#deliveryDateEnd").val() ; 
		var action = "${basePath}/findOrderList";
		$("#prodForm").attr("action",action).submit();
	}

		
	function queryLast(){
		 var pageNo = $("#pageNo").val();
		 if (pageNo != undefined) {
				$("#pageNo").val(pageNo);
			}
		 if(parseInt(pageNo) > 1 ){
			 query(parseInt(pageNo) - 1);
		 }
	}
	
	function queryNext(){
		 var pageNo = $("#pageNo").val();
		 if (pageNo != undefined) {
				$("#pageNo").val(pageNo);
			}
		 if(parseInt(pageNo) < parseInt( "${pagination.pageIndex}")){
			 query(parseInt(pageNo) + 1);
		 }
	}
	
	
	function deleteProd(){
		var id;
		var checkTotal = 0;
		$("input[type=checkbox]").each(function() {
			if (this.checked) {
				id = $(this).val();
				checkTotal++;
			}
		});
		if (checkTotal == 0) {
			alert("请选中一条数据！");
			return;
		} else if (checkTotal > 1) {
			alert("只能选择一条数据！");
			return;
		}
		/* $.ajax({
			type:'POST',
			url : '${basePath}/OrderServlet?action=delete&id=' + id,
			success: function(){
				query($("#pageNo").val());
	      	},
	      	error: function(){
	      		alert("添加数据失败，请联系管理员！");
	      	}
		}); */
		var path = "${basePath}/delOrder?orderId="+ id+"&pageNo="+$("#pageNo").val() + "&pageSize="+ $("#pageSize").val();
		window.location.href=path;
	}
		
	function editInit(act){
		  if (act == "insert") {
              $("#iframeDialog").attr("src", "${basePath}/jsp/order/order_add.jsp");
          } else if (act == "update") {
        	  var id = getChecked();
              if(id > 0){
	              $("#iframeDialog").attr("src", "${basePath}/updateOrderInit?action=" + act + "&id=" + id);
              } else {
		              return false;
		          }
          }
		  $("#myModal").modal({backdrop:"static"});
	}
	
	function getChecked(){
		var id;
		var checkTotal = 0;
		$("input[type=checkbox]").each(function() {
			if (this.checked) {
				id = $(this).val();
				checkTotal++;
			}
		});
		if (checkTotal == 0) {
			alert("请选中一条数据！");
			return;
		} else if (checkTotal > 1) {
			alert("只能选择一条数据！");
			return;
		}
		return id ;
	}
	
	function editbtn() {
		window.frames["iframeDialog"].editbtn();
	}
	function closeModal(){
		$('#myModal').modal("hide");
	}
	
</script>
</head>
<body>
	<!-- 中间开始 -->

	<div class="main">
		<form action="${basePath}/findOrderList" method="POST" id="prodForm">
			<div class="main-right">
				<div class="content">
					<p class="content-top">
						<span>客户名称</span><input type="text" id = "customerName" name="customerName"  value= "${customerName}"/>
						<span>产品名称</span><input type="text" id = "prodName" name="prodName" value= "${prodName}"/>
						<span>交货日期</span>
						<input class="top-data" type="date" id="deliveryDateBegin" name="deliveryDateBegin" value= "${deliveryDateBegin}"/>
						 - <input type="date" id="deliveryDateEnd" name="deliveryDateEnd" value= "${deliveryDateEnd}"/>
						   <input class="bta" type="button" value="查询" onclick="query()"/>
						   <input class="btd" type="button" value="清除" onclick="clearData()"/>
					</p>
					<div class="main-button">
						<input class="btd" type="button" value="新建" onclick="editInit('insert')">
						<input class="btc" type="button" value="修改" onclick="editInit('update')">
						<input class="bta" type="button" value="删除" onclick="deleteProd()">
					</div>

					<div class="main-list">
						<div class="main-list-top">
							<table width="100%"  cellspacing="0" cellpadding="0">
								<thead>
									<tr>
										<td width="5%"></td>
										<td width="15%">订单编号</td>
										<td width="15%">客户</td>
										<td width="15%">产品编号</td>
										<td width="15%">产品名称</td>
										<td width="10%">数量</td>
										<td width="10%">交货日期</td>
										<td width="15%">备注</td>
									</tr>
								</thead>
							</table>
						</div>
						<div class="main-list-cont">
							<table  width="100%" cellspacing="0" cellpadding="0">
								<tbody>
									<c:forEach var="order" items="${orderList}">
										<tr>
											<td width="5%"><input type="checkbox" id="${order.ID}_id" value="${order.ID}">
											<input type = "hidden" id="${order.ID}_cid"  value="${order.customer.ID}"/>
											<input type = "hidden" id="${order.ID}_pid" value="${order.product.ID}" />
											</td>
											<td id="${order.ID}_orderCode" width="15%">${order.orderCode}</td>
											<td id="${order.ID}_customer_customerName" width="15%">${order.customer.customName}</td>
											<td id="${order.ID}_product_prodCode" width="15%">${order.product.prodCode}</td>
											<td id="${order.ID}_product_prodName" width="15%">${order.product.prodName}</td>
											<td id="${order.ID}_quantity" width="10%">${order.quantity}</td>
											<td id="${order.ID}_deliveryDateStr" width="10%"><fmt:formatDate value="${order.deliveryDate}" pattern="yyyy-MM-dd"/> </td>
											<td id="${order.ID}_description" width="15%">${order.description}</td>
										</tr>
									</c:forEach>
								</tbody>
							</table>
						</div>
					</div>
					<jsp:include page="/pagination.jsp" flush="true" />
				</div>
			</div>
		
		</form>
	</div>
	
	<!-- 模态框（Modal） -->
 	<div class="modal fade" id="myModal" tabindex="-1" role="dialog"
		aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<!-- <div class="modal-header" style="background-color: ;">
					<button type="button" class="close" data-dismiss="modal"
						aria-hidden="true">×</button>
					<h4 class="modal-title" id="myModalLabel">新增</h4>
				</div> -->
				<%-- <jsp:include page="/jsp/order/order_add.jsp" flush="true" /> --%>
				<iframe frameborder="0" width="100%" height="500px;" id="iframeDialog" name="iframeDialog"
                        marginwidth="0" marginheight="0" frameborder="0" scrolling="no"
                        src=""></iframe>
				<!-- <div class="modal-footer">
					<button type="button" class="btn btn-default" data-dismiss="modal">关闭
					</button>
        			<button type="button" class="btn btn-primary" onclick = "editbtn()">提交更改</button>
					
				</div> -->
			</div>
			<!-- /.modal-content -->
		</div>
		<!-- /.modal-dialog -->
	</div> 

</body>
</html>