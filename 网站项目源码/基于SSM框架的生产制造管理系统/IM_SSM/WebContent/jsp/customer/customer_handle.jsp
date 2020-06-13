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
			if(checkNull("customerCode","编号")){
	   			 return;	
	   		}
			parent.doSubmit($('#hidEditMotion',parent.document).val());
		}
    </script>
</head>

<body>
<form id="customerForm" action="" method="POST" target="_parent">
    <input type="hidden" name="customerId" value="${requestScope.customer==null?"0":requestScope.customer.ID}" />
    <div id="base" class="box">
	      <ul class="cont-list">
	        <li><span>编号</span>
	        	<input type="text" id="customerCode" name="customerCode"
                                      value='${requestScope.customer==null?"":requestScope.customer.customCode}'/>
	        </li>
	        <li class="box_warning" ><p style="color:red"> *必填 </p>
	        <li><span>客户名称</span>
 	       		<input type="text" id="customerName" name="customerName"
                       value='${requestScope.customer==null?"":requestScope.customer.customName}'/>
	        </li>
	        <li><span>联系人</span>
	        	<input type="text" id="linkman" name="linkman"
                       value='${requestScope.customer==null?"":requestScope.customer.linkman}'/>
	        </li>
	        <li><span>联系电话</span>
	        	<input type="text" id="contactNumber" name="contactNumber"
                       value='${requestScope.customer==null?"":requestScope.customer.contactNumber}'/>
	        </li>
	        <li><span>地址</span>
	        	<input type="text" id="address" name="address"
                       value='${requestScope.customer==null?"":requestScope.customer.address}'/>
	        </li>
	        <li><span>备注</span>
	        	 <textarea id="description" name="description" cols="22"
                          rows="5">${requestScope.customer==null?"":requestScope.customer.description}</textarea>
	        </li>
	      </ul>
	      <div class="box-b">
	        <input class="bta" type="button"  value="确定" onclick="doSubmit();"/>
	        <input class="btd" type="button" onclick="parent.closeModal()"value="取消"/>
	      </div>
	    </div>

</form>
</body>
</html>


