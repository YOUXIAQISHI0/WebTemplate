<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<style>
.list-bottom{
	position: relative;
    float: left;
    padding: 6px 12px;
    margin-left: -1px;
    line-height: 1.42857143;
    color: #428bca;
    text-decoration: none;
    background-color: #fff;
    border: 1px solid #ddd;
    padding: 5px 10px;
    font-size: 12px;
    }
.list-bottom input,.list-bottom select{
	border:1px;
	padding:0 !important;
	height:17px;
}
</style>
<script type="text/javascript">
$(function(){
	var  mod = ${pagination.total%pagination.pageSize} ;
	var  index = Math.floor("${pagination.total}"/"${pagination.pageSize}");
	if(mod > 0){
		$("#index").val(index + 1 );
	}else{
		$("#index").val(index);
	}
	$("#pageSize").val("${pagination.pageSize}");
});
</script>

<div >
	<nav>
		<ul class="pagination pagination-sm " style="width: 100%">
			<li class="list-bottom" >
			<select  id="pageSize" name="pageSize" onchange="query()">
				<option value="5">5</option>
				<option value="10">10</option>
			</select>
			</li>
			<li ><a href="###" onclick = "query(1)">首页</a></li>
			<li ><a href="###" onclick = "queryLast()"><<</a></li>
			<li class="list-bottom" >第<input type="text" style="width: 24px ;text-align:center;margin:0 3px;" id="pageNo"
				name="pageNo" onchange="query(this.value)" value="${pagination.pageNo}" />页
			</li>
			<li ><a href="###" onclick = "queryNext()">>></a></li>
			<li ><a href="###" onclick = "query(${pagination.pageIndex})">尾页</a></li>
			<li class="list-bottom">共 ${pagination.pageIndex}  页
			</li>
			<li class="list-bottom">共 ${pagination.total} 条</li>
		</ul>
		
	</nav>
</div>