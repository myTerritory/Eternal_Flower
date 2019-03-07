<?php
/**根据客户端提交的页面编号，向客户端输出 最后一页 产品列表，以JSON格式：{ ... }**/
header('Content-Type: application/json;charset=UTF-8');


//连接数据库
$conn=mysqli_connect('localhost','root','','mydata');

//SQL1：设置编码方式
$sql = "SET NAMES UTF8";
mysqli_query($conn, $sql);

$sql = "SELECT * FROM goods";
$result = mysqli_query($conn, $sql);

//读取所有的产品记录
$pager['data'] = mysqli_fetch_all($result, MYSQLI_ASSOC);


//把分页对象编码为JSON字符串并输出
echo json_encode($pager);
