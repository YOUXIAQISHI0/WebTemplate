<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@include file="/common/taglibs.jsp" %>
<head>
    <link href="css/bootstrap.min.css" type="text/css" rel="stylesheet"/>
    <link href="css/styles.css" type="text/css" rel="stylesheet"/>
    <script type="text/javascript" src="${basePath}/js/jquery/jquery-3.1.1.min.js"></script>
    <script type="text/javascript" src="${basePath}/js/bootstrap.min.js"></script>
    <style type="text/css">
        body a {
            color: #065396;
        }

        body a:hover {
            text-decoration: none;
        }
    </style>
</head>
<body>
<!-- 引用 css/styles.css -->
<div class="main-left">
    <ul class="menu_list">
       <%--  <li data-label="Home" id="main" class="on">
            <p></p><span>主页</span>
        </li>
        <li data-label="Publ" id="order">
            <p></p><span><a href="${basePath}/OrderServlet" target="mainFrame">生产订单</a></span>
        </li>
        <li data-label="Publ" id="prodPlan">
            <p></p><span><a href="${basePath}/ProdPlanServlet" target="mainFrame">车间计划</a></span>
        </li>
        <li data-label="Publ" id="prodTrack">
            <p></p><span><a href="${basePath}/ProdTrackServlet" target="mainFrame">进度跟踪</a></span>
        </li>
        <li data-label="Publ" id="prodBoard">
            <p></p><span><a href="${basePath}/ProdBoardServlet" target="mainFrame">生产看板</a></span>
        </li> --%>
        <li data-label="Publ">
            <p></p><span>基础信息</span>
            <div class="menu_list_main">
                <ul class="menu_list_in">
                   
                    <li data-label="Events" id="u19">
                        <p></p><span><a href="${basePath}/findDeviceList" target="mainFrame">设备管理</a></span>
                    </li>
                    <li data-label="Events" id="u21">
                        <p></p><span><a href="${basePath}/findCustomerList" target="mainFrame">客户管理</a></span>
                    </li>
                     <li id="u17">
                        <p></p><span><a href="${basePath}/findUserList" target="mainFrame">用户管理</a></span>
                    </li>
                    <li data-label="Events" id="product">
                        <p></p><span><a href="${basePath}/findProductList" target="mainFrame">产品管理</a></span>
                    </li>
                    <li data-label="Events" id="process">
                        <p></p><span><a href="${basePath}/findProcessList" target="mainFrame">工序管理</a></span>
                    </li>
                    <li data-label="Events" id="u29">
                        <p></p><span><a href="${basePath}/findWorkshopList" target="mainFrame">车间管理</a></span>
                    </li>
                    <li data-label="Events" id="u29">
                        <p></p><span><a href="${basePath}/findOrderList" target="mainFrame">生产订单</a></span>
                    </li>
                </ul>
            </div>
        </li>
    </ul>
</div>

</body>