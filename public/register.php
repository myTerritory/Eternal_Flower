<?php
/**
 *接收客户端提交的新用户信息，保存入数据库，返回 {"msg": "succ", "uid": 3} 或 {"msg":"err", "sql":"INSERT...."}
 */
// header('Content-Type: application/json;charset=UTF-8');
header("Content-type: text/html; charset=utf-8");

//接收并处理客户端提交的请求数据
$name = isset($_GET['name'])?$_GET['name']:"";
$pwd = isset($_GET['pwd'])?$_GET['pwd']:"";

$conn=mysqli_connect('localhost','root','','mydata');
mysqli_set_charset($conn,'utf8');

//
////提交SQL
$sql = "SET NAMES UTF8";
mysqli_query($conn,$sql);
$sql = "INSERT INTO users VALUES('$name',NULL,'$pwd')";
$result = mysqli_query($conn,$sql);

//
//echo $result;
////创建要输出给客户端的数据
//$output = [];
if($result){    //执行成功
    $output['msg'] = 'suc';
//    $output['id'] = mysqli_insert_id($conn);
}else {         //执行失败
    $output['msg'] = 'err';
    $output['sql'] = $sql;
}

//
////把数据编码为JSON字符串
echo json_encode($output);

