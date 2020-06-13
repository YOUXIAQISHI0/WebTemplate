<%@ page import="java.util.List" %>
<%@ page import="com.hyg.im.model.Customer" %>
<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@include file="/common/taglibs.jsp" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>设备管理</title>
    <link href="${basePath}/css/bootstrap.min.css" type="text/css" rel="stylesheet"/>
    <link href="${basePath}/css/styles.css" type="text/css" rel="stylesheet"/>
    <script type="text/javascript" src="${basePath}/js/jquery/jquery-3.1.1.min.js"></script>
    <script type="text/javascript" src="${basePath}/js/bootstrap.min.js"></script>


    <script type="text/javascript">
        $(function () {
            $(".main-list-cont tr:odd").css("background", "#e8f3ff");
        });

        function query(pageNo) {
            if (pageNo != undefined) {
                $("#pageNo").val(pageNo);
            }
            $("#workshopListForm").submit();
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
                $("#myModalLabel").html("新增车间");
                $("#iframeDialog").attr("src", "${basePath}/toAddOrEditWorkshop?motion=" + motion
                    + "&pageNo=" + $("#pageNo").val() + "&pageSize=" + $("#pageSize").val());
            } else if (motion == "edit") {
                $("#myModalLabel").html("修改车间");
                var selectedChks = $(".main-list-cont").find('input[type="checkbox"][id^="chkWorkshop"]:checked');
                if (selectedChks.length == 0) {
                    alert("请选中一个要修改的车间！");
                    return false;
                }
                if (selectedChks.length > 1) {
                    alert("只能选择一条数据！");
                    return false;
                }
                $("#iframeDialog").attr("src", "${basePath}/toAddOrEditWorkshop?motion=" + motion + "&workshopId=" + selectedChks.val()
                    + "&pageNo=" + $("#pageNo").val() + "&pageSize=" + $("#pageSize").val());

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
            $(".main-list-cont").find('input[type="checkbox"][id^="chkWorkshop"]:checked').each(function () {
                if ($(this).attr("id") != thisId) {
                    $(this).prop("checked", false);
                }
            });
        }

        /**
         * 新增或更新 方法
         * @param motion
         */
        function doSubmit(motion) {
            if (motion.length > 0) {
                path = "${basePath}/addOrEditWorkshop?motion=" + motion + "&pageNo=" + $("#pageNo").val() + "&pageSize=" + $("#pageSize").val();
                var customerForm = window.frames["iframeDialog"].document.getElementById("workshopForm");
                customerForm.action = path;
                customerForm.submit();
            }
        }

        function del() {
            var selectedChks = $(".main-list-cont").find('input[type="checkbox"][id^="chkWorkshop"]:checked');
            if (selectedChks.length == 0) {
                alert("请选中一个要删除的车间！");
                return false;
            }
            if (selectedChks.length > 1) {
                alert("只能选择一条数据！");
                return false;
            }
            if (confirm("确定删除该车间吗?")) {
                window.location = "${basePath}/delWorkshop?workshopId=" + selectedChks.val()
                    + "&pageNo=" + $("#pageNo").val() + "&pageSize=" + $("#pageSize").val();
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
    <form action="${basePath}/findWorkshopList" method="POST" id="workshopListForm">
        <input type="hidden" id="hidEditMotion"  />
        <div class="main-right">
            <div class="content">
                <div class="main-button">
                    <input class="bta" type="button" value="新增" onclick="editInit('add');"/>
                    <input class="btc" type="button" value="修改" onclick="editInit('edit');"/>
                    <input class="btd" type="button" value="删除" onclick="del();"/>
                </div>

                <div class="main-list">
                    <div class="main-list-top">
                        <table width="915px" cellspacing="0" cellpadding="0">
                            <thead>
                            <tr align="center">
                                <td width="30px"></td>
                                <td width="150">车间编号</td>
                                <td width="150">车间名称</td>
                                <td width="150">备注</td>
                            </tr>
                            </thead>
                        </table>
                    </div>
                    <div class="main-list-cont">
                        <table width="915px" cellspacing="0" cellpadding="0">
                            <tbody>
                            <c:forEach items="${requestScope.workshopList}" var="workshopList">
                                <tr>
                                    <td width='30px'>
                                        <input type='checkbox' id='chkWorkshop${workshopList.ID}' value='${workshopList.ID}' onclick='singleSelect(this);'/>
                                    </td>
                                    <td width='150px'>
                                            ${workshopList.workshopCode}
                                    </td>
                                    <td width='150px'>
                                            ${workshopList.workshopName}
                                    </td>
                                    <td width='150px'>
                                            ${workshopList.description}
                                    </td>
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
    <div class="modal-dialog">
        <div class="modal-content">
            <iframe frameborder="0" width="100%" height="300px;" id="iframeDialog" name="iframeDialog"
                    marginwidth="0" marginheight="0" frameborder="0" scrolling="no"></iframe>

           <!--  <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">关闭
                </button>
                <button type="button" id="btnSubmit" class="btn btn-primary" onclick="">提交更改</button>

            </div> -->
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>
<!-- /.modal -->
</body>
</html>