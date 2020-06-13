<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/common/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>工序管理</title>
<link href="${basePath}/css/bootstrap.min.css" type="text/css"
	rel="stylesheet" />
<link href="${basePath}/css/styles.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="${basePath}/js/jquery/jquery-3.1.1.min.js"></script>
<script src="${basePath}/js/bootstrap.min.js"></script>
<script src="${basePath}/js/base.js"></script>

<style type="text/css">

button{
    float: right;
}

#deviceCode{
  width:176px;
  margin-right:0px;
}
#selectButton{
	margin-right:20px;
}
</style>
<script type="text/javascript">
	function getProd() {
		/* $("#selectModal").modal({backdrop:"static"}); */
		var obj = window
				.open(
						"${basePath}/ProductServlet",
						"_blank",
						"toolbar=no, location=no, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width=1000, height=800 , top=200 , left = 400");
	}

	$(function() {
		var act = "${act}";
		if (act == "") {
			$("#act").val("insert");
		}
	});


	function editbtn() {
		if(checkNull("processCode","工序编号")){
			 return;	
		}
		if(checkNull("deviceCode","设备名称")){
			 return;	
		}
		var act =  $("#act").val();
		if (act == "insert")
			insertData();
		else
			updateData(); 
	}

	function insertData() {
		var path = "${basePath}/addProcess?action=insert&pageNo="
				+$('#pageNo', window.parent.document).val() + "&pageSize=" + $('#pageSize', window.parent.document).val() ;
		/* frames[0].document.forms["insertProdForm"].action=path;
		 frames["iframeDialog"].document.forms["insertProdForm"].submit(); */
		 
		 $('#insertProcessForm').attr("action", path).submit(); 
	}

	function updateData() {
		var path = "${basePath}/updateProcess?action=update&pageNo="
			+$('#pageNo', window.parent.document).val() + "&pageSize=" + $('#pageSize', window.parent.document).val() ;
		 $('#insertProcessForm').attr("action", path).submit(); 
		 
	}
	
	function selectOption(){
		$("#iframeDialog").attr("src", "${basePath}/findDeviceList" );
	    $("#myModal").modal({backdrop:"static"});
	}
	
	function closeModal(){
		 $("#myModal").modal('hide');
	}
	
</script>

</head>
<body class="innerbody">
	<form id="insertProcessForm"
		action="${basePath}/addProcess" method="POST"  target="_parent"  >
		<input type="hidden" id="processid" name="processid" value="${process.ID}" />
			<input type="hidden" id="act" name="act" />
		<div id="base" class="box">
	      <ul class="cont-list">
	        <li><span>工序编号</span>
	        	<input type="text" id="processCode" name="processCode"  value="${process.processCode}" />
			</li>
			<li class="box_warning" ><p style="color:red"> *必填 </p>
	        <li><span>工序名称</span>
	        	<input type="text" id="processName" name="processName"  value="${process.processName}"/>
	        </li>
	        <li><span>设备名称 ${process.deviceId}</span>
	        	<input type="hidden" id="deviceId" name="deviceId"  value="${process.deviceId}"/>
						<button type="button" onclick="selectOption()" id="selectButton"  > 选择</button>
						<input type="text" id="deviceCode" name="deviceCode" value="${process.device.deviceCode}" />
	        </li>
	        <li class="box_warning" ><p style="color:red"> *必填 </p>
	        <li><span>备注</span>
	        	<textarea id="description" name="description" cols="20"
						rows="5">${process.description}</textarea>
	        </li>
	      </ul>
	      <div class="box-b">
	        <input class="bta" type="button" onclick="editbtn()" value="确定"/>
	        <input class="btd" type="button" onclick="parent.closeModal()"value="取消"/>
	      </div>
	    </div>
	</form>
	<!-- 模态框（Modal） -->
	<div class="modal fade" id="myModal" tabindex="-1" role="dialog"
		aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog"  style="width:1000px;">
			<div class="modal-content" style="100%">
				<iframe frameborder="0" width="1000px;" height="450px;" id="iframeDialog" name="iframeDialog"
                        marginwidth="0" marginheight="0" frameborder="0" scrolling="no"
                        src=""></iframe>
			</div>
			<!-- /.modal-content -->
		</div>
		<!-- /.modal-dialog -->
	</div>
</body>
</html>