<%@ page import="com.hyg.im.model.Device" %>
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
    <script src="${basePath}/js/base.js"></script>
    <style type="text/css">


        .table {
            font-size: 14px;
        }
    </style>
    <script type="text/javascript">
    		
	    function doSubmit(){
			if(checkNull("deviceCode","设备编号")){
	   			 return;	
	   		}
			parent.doSubmit($('#hidEditMotion',parent.document).val());
		}
    </script>
</head>

<body>
<%
    Device device = null;
    device = request.getAttribute("device") != null ? (Device) request.getAttribute("device") : null;
%>
<form id="deviceForm" action="" method="POST" target="_parent">
    <input type="hidden" name="deviceId" value="<%=device!=null?device.getID():0%>" />
	<div id="base" class="box">
	      <ul class="cont-list">
	        <li><span>设备编号</span>
	        		<input type="text" id="deviceCode" name="deviceCode"
                                      value='<%=device!=null?device.getDeviceCode():""%>'/>	
	        </li>
	        <li class="box_warning" ><p style="color:red"> *必填 </p>
	        <li><span>设备型号</span>
	        	<input type="text" id="deviceSpec" name="deviceSpec"
                       value="<%=device!=null?device.getDeviceSpec():""%>"/>
	        </li>
	        <li><span>设备名称</span>
	        	<input type="text" id="deviceName" name="deviceName"
                       value="<%=device!=null?device.getDeviceName():""%>"/>
	        </li>
	        <li><span>备注</span>
	        	<textarea id="description" name="description" cols="22"
                          rows="5"><%=device != null ? device.getDescription() : ""%></textarea>
	        </li>
	      </ul>
	      <div class="box-b">
	        <input class="bta" type="button"  value="确定" onclick="doSubmit();"/>
	        <input class="btd" type="button"  value="取消" onclick="parent.closeModal();"/>
	      </div>
	    </div>
</form>
</body>
</html>


