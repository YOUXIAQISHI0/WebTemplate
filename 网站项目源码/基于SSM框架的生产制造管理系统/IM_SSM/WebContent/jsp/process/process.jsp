<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/common/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>工序管理</title>
<link href="${basePath}/css/bootstrap.min.css" type="text/css" rel="stylesheet" />
<link href="${basePath}/css/styles.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="${basePath}/js/jquery/jquery-3.1.1.min.js"></script>
<script type="text/javascript" src="${basePath}/js/bootstrap.min.js"></script>
<script type="text/javascript">
	$(function(){
		$("tr:odd").css("background","#bbffff");  
		var act = "${action}";
		if(act != "query"){
			 $("body").attr("class","innerbody");
		}
		selectChecked();
	});
	
	
	function selectChecked(){
		var ids = $(window.parent.document).find("#pids").val();
		console.info(ids);
		var idArray = ids.split(",")
		$("input[type=checkbox]").each(function() {
			for(var i in idArray){
				 if(idArray[i] == $(this).val()){
					   this.checked = true ;
				   }
			}
				  
		});
	}
	
	function query(pageNo) {
		if (pageNo != undefined) {
			$("#pageNo").val(pageNo);
		}
		$("#processForm").submit();
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
	
	function deleteProcess(){
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
			url : '${basePath}/ProcessuctServlet?action=delete&id=' + id,
			success: function(){
				query($("#pageNo").val());
	      	},
	      	error: function(){
	      		alert("添加数据失败，请联系管理员！");
	      	}
		}); */
		var path = "${basePath}/delProcess?processId="+ id+"&pageNo="+$("#pageNo").val() + "&pageSize="+ $("#pageSize").val();
		window.parent.mainFrame.location.href=path;
	}
		
	function editInit(act){
		  if (act == "insert") {
            $("#iframeDialog").attr("src", "${basePath}/jsp/process/process_add.jsp");
        } else if (act == "update") {
      	  var id = getChecked();
            if(id > 0){
	              $("#iframeDialog").attr("src", "${basePath}/updateInit?action=" + act + "&id=" + id);
            } else {
		              return false;
		          }
        }
		$("#myModal").modal({backdrop:"static"});
	}
	
	function editbtn() {
		window.frames["iframeDialog"].editbtn();
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
	
	function closeModal(){
		 $("#myModal").modal('hide');
	}
	
	function selectProcess(){
		var id =""  ; 
		var checkTotal = 0;
		var processCodes ="" ;
		$("input[type=checkbox]").each(function() {
			if (this.checked) {
				id += $(this).val() + ",";
				processCodes  += $("#"+$(this).val()+"_processCode").html() + ",";
				checkTotal++;
			}
		});
		/*  if (checkTotal == 0) {
			alert("请选中一条数据！");
			return;
		} else if (checkTotal > 1) {
			alert("只能选择一条数据！");
			return;
		} */
		$(window.parent.document).find("#processId").val($(window.parent.document).find("#processId").val() + id );
		$(window.parent.document).find("#processCodeAdd").val($(window.parent.document).find("#processCodeAdd").val()+processCodes);
		parent.closeModal();
	}
</script>
</head>
<body >
	<div class="main">
		<%-- <jsp:include page="../../left.jsp" flush="true" /> --%>
		<form action="${basePath}/findProcessList" method="POST" id="processForm">
			<div class="main-right">
				<div class="content">
				<%-- <c:if test="${action ne 'selectProcess' }"> --%>
					<div class="main-button">
						<input class="btd" type="button" value="新建" onclick="editInit('insert')">
						<input class="btc" type="button" value="修改" onclick="editInit('update')">
						<input class="bta" type="button" value="删除" onclick="deleteProcess()">
						<input class="btd" type="button" value="派工" onclick="selectProcess()">
					</div>
				<%-- </c:if> --%>
					<div class="main-list">
						<div class="main-list-top">
							<table width="915px" cellspacing="0" cellpadding="0">
								<thead>
									<tr>
										<td width="5%"></td>
										<td width="20%">工序号</td>
										<td width="25%">工序名称</td>
										<td width="25%">备注</td>
									</tr>
								</thead>
							</table>
						</div>
						<div class="main-list-cont">
							<table width="915px" cellspacing="0" cellpadding="0">
								<tbody>
									<c:forEach var="process" items="${processList}">
										<tr>
											<td width="5%"><input type="checkbox" id="${process.ID}_id" value="${process.ID}"></td>
											<td id="${process.ID}_processCode" width="20%">${process.processCode}</td>
											<td id="${process.ID}_processName" width="25%">${process.processName}</td>
											<td id="${process.ID}_description" width="25%">${process.description}</td>
										</tr>
									</c:forEach>
								</tbody>
							</table>
						</div>
					</div>
					<jsp:include page="../../pagination.jsp" flush="true" />
				</div>
			</div>
		</form>
	</div>

	<!-- 
	<div class="bottom">©青岛英谷教育科技股份有限公司 版权所有 电话：0532-88979016</div> 底部结束 -->
	
	<!-- 模态框（Modal） -->
	<div class="modal fade" id="myModal" tabindex="-1" role="dialog"
		aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog" >
			<div class="modal-content">
			<%-- 	<jsp:include page="process_add.jsp" flush="true" /> --%>
				<iframe frameborder="0" width="100%" height="400px;" id="iframeDialog" name="iframeDialog" 
                        marginwidth="0" marginheight="0" frameborder="0" scrolling="no"
                        src=""></iframe>
			</div>
			<!-- /.modal-content -->
		</div>
		<!-- /.modal-dialog -->
	</div>
	<!-- /.modal -->
</body>
</html>