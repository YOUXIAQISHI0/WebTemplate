<%@ page import="com.hyg.im.model.Device" %>
<%@ page import="java.util.List" %>
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
            selectChecked();
        });

        function query(pageNo) {
            if (pageNo != undefined) {
                $("#pageNo").val(pageNo);
            }
            $("#deviceListForm").submit();
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
                $("#myModalLabel").html("新增设备");
                $("#iframeDialog").attr("src", "${basePath}/toAddOrEditDevice?motion=" + motion
                    + "&pageNo=" + $("#pageNo").val() + "&pageSize=" + $("#pageSize").val());
            } else if (motion == "edit") {
                $("#myModalLabel").html("修改设备");
                var selectedChks = $(".main-list-cont").find('input[type="checkbox"][id^="chkDevice"]:checked');
                if (selectedChks.length == 0) {
                    alert("请选中一个要修改的设备！");
                    return false;
                }
                if (selectedChks.length > 1) {
                    alert("只能选择一条数据！");
                    return false;
                }
                $("#iframeDialog").attr("src", "${basePath}/toAddOrEditDevice?motion=" + motion + "&deviceId=" + selectedChks.val()
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
            $(".main-list-cont").find('input[type="checkbox"][id^="chkDevice"]:checked').each(function () {
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
                path = "${basePath}/addOrEditDevice?motion=" + motion + "&pageNo=" + $("#pageNo").val() + "&pageSize=" + $("#pageSize").val();
                var deviceForm = window.frames["iframeDialog"].document.getElementById("deviceForm");
                deviceForm.action = path;
                deviceForm.submit();
            }
        }

        function del() {
            var selectedChks = $(".main-list-cont").find('input[type="checkbox"][id^="chkDevice"]:checked');
            if (selectedChks.length == 0) {
                alert("请选中一个要删除的设备！");
                return false;
            }
            if (selectedChks.length > 1) {
                alert("只能选择一条数据！");
                return false;
            }
            if (confirm("确定删除该设备吗?")) {
                window.location = "${basePath}/delDevice?deviceId=" + selectedChks.val()
                    + "&pageNo=" + $("#pageNo").val() + "&pageSize=" + $("#pageSize").val();
            }

        }

        //关闭Modal框
        function closeModal() {
            $("#myModal").modal('hide');
        }
	
        function selectChecked(){
    		var id = $(window.parent.document).find("#deviceId").val();
    		$("input[type=checkbox]").each(function() {
    				   if(id == $(this).val()){
    					    this.checked = true ;
    				   }
    		});
    	}
        
        function selectDevice(){
        	var id   ; 
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
    		$(window.parent.document).find("#deviceId").val(id);
    		$(window.parent.document).find("#deviceCode").val($("#chkDevice"+ id).attr("deviceCode"));
    		parent.closeModal();
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
    <form action="${basePath}/findDeviceList" method="POST" id="deviceListForm">
        <input type="hidden" id="hidEditMotion"  />
        <div class="main-right">
            <div class="content">
                <div class="main-button">
                    <input class="bta" type="button" value="新增" onclick="editInit('add');"/>
                    <input class="btc" type="button" value="修改" onclick="editInit('edit');"/>
                    <input class="btd" type="button" value="删除" onclick="del();"/>
                    <input class="btd" type="button" value="选择" onclick="selectDevice();"/>
                </div>

                <div class="main-list">
                    <div class="main-list-top">
                        <table width="100%" cellspacing="0" cellpadding="0">
                            <thead>
                            <tr align="center">
                                <td width="5%"></td>
                                <td width="25%">设备编号</td>
                                <td width="25%">设备型号</td>
                                <td width="25%">设备名称</td>
                                <td width="20%">备注</td>
                            </tr>
                            </thead>
                        </table>
                    </div>
                    <div class="main-list-cont">
                        <table width="100%" cellspacing="0" cellpadding="0">
                            <tbody>
                            <%
                                List<Device> deviceList = null;
                                deviceList = request.getAttribute("deviceList") != null ? (List<Device>) request.getAttribute("deviceList") : null;
                                if (deviceList != null) {
                                    for (Device device : deviceList) {
                                        out.println("<tr>");

                                        out.println("<td width='5%'>");
                                        out.println(String.format("<input type='checkbox' id='chkDevice%s' deviceCode='%s'   value='%s' onclick='singleSelect(this);' />", device.getID(),  device.getDeviceCode(),  device.getID()));
                                        out.println("</td>");

                                        out.println("<td width='25%'>");
                                        out.println(device.getDeviceCode());
                                        out.println("</td>");

                                        out.println("<td width='25%'>");
                                        out.println(device.getDeviceSpec());
                                        out.println("</td>");

                                        out.println(String.format("<td width='ss' id='deviceName%s' >","25%",device.getID()));
                                        out.println(device.getDeviceName());
                                        out.println("</td>");

                                        out.println("<td width='20%'>");
                                        out.println(device.getDescription());
                                        out.println("</td>");

                                        out.println("</tr>");

                                    }
                                }

                            %>

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
            <iframe frameborder="0" width="100%" height="350px;" id="iframeDialog" name="iframeDialog"
                    marginwidth="0" marginheight="0" frameborder="0" scrolling="no"></iframe>

            <!-- <div class="modal-footer">
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