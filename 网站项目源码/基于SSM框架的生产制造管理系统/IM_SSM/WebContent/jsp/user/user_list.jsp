<%@ page import="com.hyg.im.model.User" %>
<%@ page import="java.util.List" %>
<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@include file="/common/taglibs.jsp" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>产品管理</title>
    <link href="${basePath}/css/bootstrap.min.css" type="text/css" rel="stylesheet"/>
    <link href="${basePath}/css/styles.css" type="text/css" rel="stylesheet"/>
    <script type="text/javascript" src="${basePath}/js/jquery/jquery-3.1.1.min.js"></script>
    <script type="text/javascript" src="${basePath}/js/bootstrap.min.js"></script>

    <style type="text/css">
        /*html{*/
        /*display:block;*/
        /*}*/
    </style>
    <script type="text/javascript">
        $(function () {
            $(".main-list-cont tr:odd").css("background", "#e8f3ff");
        });

        function query(pageNo) {
            if (pageNo != undefined) {
                $("#pageNo").val(pageNo);
            }
            $("#userListForm").submit();
        }


        function queryLast() {
            var pageNo = $("#pageNo").val();
            if (pageNo != undefined) {
                $("#pageNo").val(pageNo);
            }
            if (parseInt(pageNo) > 1) {
                query(parseInt(pageNo) - 1);
            }
        }

        function queryNext() {
            var pageNo = $("#pageNo").val();
            if (pageNo != undefined) {
                $("#pageNo").val(pageNo);
            }
            if (parseInt(pageNo) < parseInt("${pagination.pageIndex}")) {
                query(parseInt(pageNo) + 1);
            }
        }


        function editInit(motion) {
            if (motion == "add") {
                $("#myModalLabel").html("新增人员");
                $("#iframeDialog").attr("src", "${basePath}/toAddOrEditUser?motion=" + motion);
            } else if (motion == "edit") {
                $("#myModalLabel").html("修改人员");
                var selectedChks = $(".main-list-cont").find('input[type="checkbox"][id^="chkUser"]:checked');
                if (selectedChks.length == 0) {
                    alert("请选中一个要修改的人员！");
                    return false;
                }
                if (selectedChks.length > 1) {
                    alert("只能选择一条数据！");
                    return false;
                }
                $("#iframeDialog").attr("src", "${basePath}/toAddOrEditUser?motion=" + motion + "&userId=" + selectedChks.val());

            }
            else {
                return false;
            }

            //设置提交按钮的方向
            $("#hidEditMotion").val(motion);
            $("#myModal").modal({backdrop: "static"});


        }

        /**
         * 选择人员编辑时 检查其他选项 以确保只选中一条数据
         * @param thisObj
         */
        function singleSelect(thisObj) {
            var thisId = $(thisObj).attr("id");
            $(".main-list-cont").find('input[type="checkbox"][id^="chkUser"]:checked').each(function () {
                if ($(this).attr("id") != thisId) {
                    $(this).prop("checked", false);
                }
            });
        }

        function doSubmit(motion) {
            if (motion.length > 0) {
                path = "${basePath}/addOrEditUser?motion=" + motion + "&pageNo=" + $("#pageNo").val() + "&pageSize=" + $("#pageSize").val();
                var userForm = window.frames["iframeDialog"].document.getElementById("userForm");
                userForm.action = path;
                userForm.submit();
            }
        }

        function dismission() {
            var selectedChks = $(".main-list-cont").find('input[type="checkbox"][id^="chkUser"]:checked');
            if (selectedChks.length == 0) {
                alert("请选中一个要离职的人员！");
                return false;
            }
            if (selectedChks.length > 1) {
                alert("只能选择一条数据！");
                return false;
            }
            if (confirm("确定要离职该人员吗?")) {
                window.location = "${basePath}/dismission?userId=" + selectedChks.val()  + "&pageNo=" + $("#pageNo").val() + "&pageSize=" + $("#pageSize").val();
            }
        }

        //关闭Modal框
        function closeModal() {
            $("#myModal").modal('hide');
        }


    </script>


</head>
<body>
<%--<div class="base">

    <!-- 头部开始 -->

    <div class="top">
        <a class="logo" href="javascript:void(0)"> <img
                src="images/index/logo_01.png"/>
        </a> <span class="top-name">智能制造系统</span>
    </div>

    <div class="top-line"></div>

</div>--%>

<!-- 头部结束 -->

<!-- 中间开始 -->

<div class="main">
    <form action="${basePath}/findUserList" method="POST" id="userListForm">
        <input type="hidden" id="hidEditMotion"  />
        <div class="main-right">
            <div class="content">
                <div class="main-button">
                    <input class="bta" type="button" value="新增人员" onclick="editInit('add');"/>
                    <input class="btc" type="button" value="修改人员" onclick="editInit('edit');"/>
                    <input class="btd" type="button" value="人员离职" onclick="dismission();"/>
                </div>

                <div class="main-list">
                    <div class="main-list-top">
                        <table width="915px" cellspacing="0" cellpadding="0">
                            <thead>
                            <tr align="center">
                                <td width="30px"></td>
                                <td width="150">用户编号</td>
                                <td width="150">部门</td>
                                <td width="150">人员</td>
                                <td width="150">职位</td>
                                <td width="150">状态</td>
                                <td width="135">备注</td>
                            </tr>
                            </thead>
                        </table>
                    </div>
                    <div class="main-list-cont">
                        <table width="915px" cellspacing="0" cellpadding="0">
                            <tbody>
                           <%--  <%
                                List<User> userList = null;
                                userList = request.getAttribute("userList") != null ? (List<User>) request.getAttribute("userList") : null;
                                if (userList != null) {
                                    for (User user : userList) {
                                        out.println("<tr>");

                                        out.println("<td width='30px'>");
                                        out.println(String.format("<input type='checkbox' id='chkUser%s' name='chkUserId' value='%s' onclick='singleSelect(this);' />", user.getId(), user.getId()));
                                        out.println("</td>");

                                        out.println("<td width='150px'>");
                                        out.println(user.getUserCode());
                                        out.println("</td>");

                                        out.println("<td width='150px'>");
                                        out.println(user.getDeptName());
                                        out.println("</td>");

                                        out.println("<td width='150px'>");
                                        out.println(user.getUserName());
                                        out.println("</td>");

                                        out.println("<td width='150px'>");
                                        out.println(user.getPosition());
                                        out.println("</td>");

                                        out.println("<td width='150px'>");
                                        out.println(user.getJob());
                                        out.println("</td>");

                                        out.println("<td width='150px'>");
                                        out.println(user.getDescription());
                                        out.println("</td>");

                                        out.println("</tr>");

                                    }
                                }

                            %>
								 --%>
								<c:forEach items="${ userList}" var = "user">
									<tr>
									 <c:set var="userId" value = "${user.ID }" />
											<td width='30px'>
												<input type='checkbox' id='chkUser${userId}' name='chkUserId' value='${user.ID}' onclick='singleSelect(this);' />
											</td>
											<td width='150px'>
												${user.userCode}
											</td>
											<td width='150px'>${user.deptName}</td>
											<td width='150px'>${user.userName}</td>
											<td width='150px'>
												<c:if test="${empty user.position}">
													 无职位
												</c:if>
												<c:if test="${!empty user.position}">
													${user.position}
												</c:if>
											</td>
											<td width='150px'>
												<c:choose>
													<c:when test="${user.status eq 0  }">
														在职
													</c:when>
													<c:otherwise>
														离职
													</c:otherwise>
												</c:choose>
											
											</td>
											<td width='150px'>${user.description}</td>
									</tr>
								</c:forEach>
                            </tbody>
                        </table>
                    </div>
                </div>
                <jsp:include page="/pagination.jsp" flush="true"/>
            </div>
        </div>

    </form>
</div>

<%--<!-- 底部开始 -->
<div class="bottom">©青岛英谷教育科技股份有限公司 版权所有 电话：0532-88979016</div>
<!-- 底部结束 -->--%>

<!-- 模态框（Modal） -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog"
     aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog"   style="width:900px;">
        <div class="modal-content">
            <div align="center" style="margin:0 0 0 0;padding:0;">
                <iframe frameborder="0" width="100%" height="450px;" id="iframeDialog" name="iframeDialog"
                        marginwidth="0" marginheight="0" frameborder="0" scrolling="no"
                        src=""></iframe>
            </div>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>
<!-- /.modal -->
</body>
</html>