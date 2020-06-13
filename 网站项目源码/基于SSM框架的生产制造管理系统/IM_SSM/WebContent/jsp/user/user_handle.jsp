<%@ page import="com.hyg.im.model.User" %>
<%@ page import="java.text.SimpleDateFormat" %>
<%@ page import="java.text.ParseException" %>
<%@ page import="java.util.Date" %>
<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@include file="/common/taglibs.jsp" %>

<html>
<head>

    <link href="${basePath}/css/styles.css" type="text/css" rel="stylesheet"/>
    <link href="${basePath}/css/bootstrap.min.css" type="text/css" rel="stylesheet"/>
    <script type="text/javascript" src="${basePath}/js/jquery/jquery-3.1.1.min.js"></script>
    <script type="text/javascript" src="${basePath}/js/bootstrap.min.js"></script>
    <script src="${basePath}/js/base.js"></script>
    <style type="text/css">
        .table {
            font-size: 14px;
        }
        
        .box li.box_warning {
    list-style-type: none;
    height: 20px;
    position: relative;
}
.box li.box_warning p{
	width:120px;
	height:20px;
	right:20px;
	position: absolute;
	top:-10px;
}
    </style>
    <script type="text/javascript">
    	$(function(){
				/* $.ajax({
					type : "POST",
					url : "${basePath}/ProdPlanServlet?action=checkRepeat&loginName=workShop",
					datatype:"json",
					success : function(data) {
							
					}
				});  */ 
				$("#loginName").change(function(){
					checkRepeat(this);
				});
				$("#userCode").change(function(){
					checkRepeat(this);
				});
    	});
    	
    	function checkRepeat(obj){
    		var column = obj.id ;
    		var value = obj.value;
    		if(value != ""){
	    		 $.ajax({
					type : "POST",
					url : "${basePath}/UserServlet?action=checkRepeat&column=" + column + "&value=" + value,
					datatype:"json",
					success : function(data) {
						var  m = eval( "(" + data + ")");
						console.info(m.total);
							if(m.total > 0){
								if(obj.id == "loginName"){
									alert("用户名重复！");
									$("#loginName").val("");
								}else{
									alert("用户编号重复！");
									$("#userCode").val("");
								}
							}
					}
				 }); 
    		}
    	}

    	//重置
    	function reset() {
            $("#loginName").val("");
            $("#sex").val("");
            $("#nation").val("");
            $("#postion").val("");
            $("#deptName").val("");
            $("#userCode").val("");
            $("#birthday").val("");
            $("#married").val("");
            $("#job").val("");
            $("#mobile").val("");
            $("#userName").val("");
            $("#idNum").val("");
            $("#hireDate").val("");
            $("#email").val("");
            $("#description").html("");
        }
     	
    	function doSubmit(){
    		if(checkNull("loginName","用户名")){
	   			 return;	
	   		}
    		if(checkNull("userCode","用户编号")){
	   			 return;	
	   		}
    		parent.doSubmit($('#hidEditMotion',parent.document).val());
    	}
    
    </script>
</head>

<body>
<%
    User user = null;
    user = request.getAttribute("user") != null ? (User) request.getAttribute("user") : null;

%>
<%


    //    try {
//        out.println(user != null ? sDateFormat.format(user.getBirthday()) : "1900-01-01");
//    } catch (ParseException e) {
//        e.printStackTrace();
//    }
%>

<script type="text/javascript">
$(function(){
				var	 marriedFlag = "<%=user!=null?user.getMarried():"1"%>";
				if(marriedFlag == 2 ){
					$("#married2").attr("checked" , true);
				}else{
					$("#married1").attr("checked" , true);
				}
});
</script>
				

<form id="userForm" action="" method="POST" target="_parent">
    <input type="hidden" name="userId" value="<%=user!=null?user.getID():0%>"/>
	<div id="base" class="box clear box-news-pad">
      <%-- <div class="box-header clear">
        <ul class="add-p">
          <li><span>用户名</span><input type="text" id="loginName" name="loginName"
                       value="<%=user!=null?user.getLoginName():""%>"/></li>
          <li class="box_warning" ><p style="color:red"> *必填 </p>
          <li><span>性别</span><input type="text" id="sex" name="sex"
                       value="<%=user!=null?user.getSex():""%>"/></li>
          <li><span>民族</span><input type="text" id="nation" name="nation"
                       value="<%=user!=null?user.getNation():""%>"/></li>
          <li><span>岗位</span><input type="text" id="postion" name="postion"
                       value="<%=user!=null?user.getPosition():""%>"/></li>
          <li><span>所属部门</span><input type="text" id="deptName" name="deptName"
                       value="<%=user!=null?user.getDeptName():""%>"/></li>
        </ul>
        <ul class="add-p">
          <li><span>用户编号</span><input type="text" id="userCode" name="userCode"
                          value='<%=user!=null?user.getUserCode():""%>'/>
          </li>
          <li class="box_warning" ><p style="color:red"> *必填 </p>
          <li><span>生日</span><input type="date" id="birthday" name="birthday"
                       value="<%=user!=null?user.getBirthday():"1900-01-01"%>"/></li>
          <li><span style="float:left ">婚否</span> <input type="radio"  class="radio_cls"  name="married" id="married1" value="1" >
          <span >是</span>
          <input type="radio"  class="radio_cls" style = "margin-left:10px"name="married" id="married2" value="2"><span >否</span>
                       </li>
          <li><span>职务</span><input type="text" id="job" name="job"
                       value="<%=user!=null?user.getJob():""%>"/>
          </li>
          <li><span>移动电话</span>
          		<input type="text" id="mobile" name="mobile"
                       value="<%=user!=null?user.getMobile():""%>"/>
          </li>
        </ul>
        <ul class="add-p">
          <li><span>姓名</span><input type="text" id="userName" name="userName"
                       value="<%=user!=null?user.getUserName():""%>"/></li>
          <li class="box_warning" ><p style="color:red"> </p></li>
          <li><span>身份证号</span><input type="text" id="idNum" name="idNum"
                       value="<%=user!=null?user.getIdNum():""%>"/></li>
          <li><span>入职时间</span><input type="date" id="hireDate" name="hireDate"
                       value="<%=user!=null?user.getHireDate():"1900-01-01"%>"/></li>
          <li><span>电子邮箱</span><input type="text" id="email" name="email"
                       value="<%=user!=null?user.getEmail():""%>"/>
          </li>
          <li><span></span>
          		
          </li>
        </ul>
         <ul class="add-a">
          <li><span>备注</span>
         	  <textarea class="longer"  id="description" name="description" 
                          ><%=user != null ? user.getDescription() : ""%>
              </textarea>
          </li>
        </ul>
      </div> --%>
      <div class="box-header clear">
        <ul class="add-p">
          <li><span>用户名</span><input type="text" id="loginName" name="loginName"
                       value="${user.loginName}"/></li>
          <li class="box_warning" ><p style="color:red"> *必填 </p>
          <li><span>性别</span><input type="text" id="sex" name="sex"
                       value="${user.sex }"/></li>
          <li><span>民族</span><input type="text" id="nation" name="nation"
                       value="${user.nation }"/></li>
          <li><span>岗位</span><input type="text" id="postion" name="postion"
                       value="${user.position }"/></li>
          <li><span>所属部门</span><input type="text" id="deptName" name="deptName"
                       value="${user.deptName }"/></li>
        </ul>
        <ul class="add-p">
          <li><span>用户编号</span><input type="text" id="userCode" name="userCode"
                          value='${user.userCode }'/>
          </li>
          <li class="box_warning" ><p style="color:red"> *必填 </p>
          <li><span>生日</span><input type="date" id="birthday" name="birthday"
                       value="${user.birthday }"/></li>
          <li><span style="float:left ">婚否</span> <input type="radio"  class="radio_cls"  name="married" id="married1" value="1" >
          <span >是</span>
          <input type="radio"  class="radio_cls" style = "margin-left:10px"name="married" id="married2" value="2"><span >否</span>
                       </li>
          <li><span>职务</span><input type="text" id="job" name="job"
                       value="${user.job }"/>
          </li>
          <li><span>移动电话</span>
          		<input type="text" id="mobile" name="mobile"
                       value="${user.mobile }"/>
          </li>
        </ul>
        <ul class="add-p">
          <li><span>姓名</span><input type="text" id="userName" name="userName"
                       value="${user.userName }"/></li>
          <li class="box_warning" ><p style="color:red"> </p></li>
          <li><span>身份证号</span><input type="text" id="idNum" name="idNum"
                       value="${ user.IDNum}"/></li>
          <li><span>入职时间</span><input type="date" id="hireDate" name="hireDate"
                       value="${user.hireDate }"/></li>
          <li><span>电子邮箱</span><input type="text" id="email" name="email"
                       value="${user.email }"/>
          </li>
          <li><span></span>
          		
          </li>
        </ul>
         <ul class="add-a">
          <li><span>备注</span>
         	  <textarea class="longer"  id="description" name="description" 
                          > 
                          <c:choose>
                          		<c:when test="${not empty user.description}">${user.description }</c:when>
                          		<c:otherwise></c:otherwise>
                          </c:choose>
                         
              </textarea>
          </li>
        </ul>
      </div>
      <div class="box-btn">
        <div class="box-btn-add">
          <input class="btd" type="button" value="取消" onclick="parent.closeModal();"/>
            <input class="bta" id="btnSubmit" type="button" value="保存" onclick="doSubmit();" />
        </div>
        <div class="box-btn-add-l">
          <input class="btc" type="button" value="重置" onclick="reset();"/>
        </div>
      </div>
    </div>
</form>
</body>
</html>


