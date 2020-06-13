<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@include file="/common/taglibs.jsp" %>

<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <link href="${basePath}/css/styles.css" type="text/css" rel="stylesheet"/>
    <link href="${basePath}/css/bootstrap.min.css" type="text/css" rel="stylesheet"/>
    <script type="text/javascript" src="${basePath}/js/jquery/jquery-3.1.1.min.js"></script>
    <script type="text/javascript" src="${basePath}/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="${basePath}/js/base.js"></script>
    <style type="text/css">
        .table {
            font-size: 14px;
        }
    </style>
</head>
<script type="text/javascript">
	$(function(){
		$("#workshopCode").change(function(){
			checkRepeat(this);
		});
	});
	
	function checkRepeat(obj){
		var column = obj.id ;
		var value = obj.value;
		 $.ajax({
			type : "POST",
			url :"${basePath}/WorkshopServlet?action=checkRepeat&column=" + column + "&value=" + value,
			datatype:"json",
			success : function(data) {
				var  m = eval( "(" + data + ")");
					if(m.total > 0){
						alert("车间编号重复!");
						$("#workshopCode").val("");
					}
			}
			}); 
	}

	 function doSubmit(){
			if(checkNull("workshopCode","车间编号")){
	   			 return;	
	   		}
			parent.doSubmit($('#hidEditMotion',parent.document).val());
		}
</script>
<body>
<form id="workshopForm" action="" method="POST" target="_parent">
    <input type="hidden" name="workshopId" value="${requestScope.workshop==null?"0":requestScope.workshop.ID}" />
	<div id="base" class="box">
	      <ul class="cont-list">
	        <li><span>车间编号</span>
	        	<input type="text" id="workshopCode" name="workshopCode"
                                      value='${requestScope.workshop==null?"":requestScope.workshop.workshopCode}'/> 
			</li>
			<li class="box_warning" ><p style="color:red"> *必填 </p>
	        <li><span>车间名称</span>
	        	<input type="text" id="workshopName" name="workshopName"
                       value='${requestScope.workshop==null?"":requestScope.workshop.workshopName}'/>
	        </li>
	        <li><span>备注</span>
	        	<textarea id="description" name="description" cols="22"
                          rows="5">${requestScope.workshop==null?"":requestScope.workshop.description}</textarea>
	        </li>
	      </ul>
	      <div class="box-b">
	        <input class="bta" type="button"  value="确定" onclick="doSubmit();" />
	        <input class="btd" type="button" value="取消" onclick="parent.closeModal()"/>
	      </div>
	    </div>
</form>
</body>
</html>


