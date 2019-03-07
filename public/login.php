<?php
header("Content-type: text/html; charset=utf-8");
//header('Access-Control-Allow-Origin:http:*');
//写监听端口文件,还在调试中，目标限制特定端口访问，提高安全性


$name = isset($_GET['name'])?$_GET['name']:"";
$pwd = isset($_GET['pwd'])?$_GET['pwd']:"";
//注意！这里神坑，原本打算在SQL查询语句中直接用$user['Name']作为变量，结果语句中的符号识别特别严格，应用数组里面的还需要转义符，直接用会有错误，调试了很多次失败后还是老老实实赋值给变量传过去好了

// 操作数据库
$conn = mysql_connect('localhost','root','');   //连接数据库，根据自己的数据库填写
$select = mysql_select_db('mydata'); //选择数据库表
$sql="select * from users where (name='$name') and (pwd='$pwd')";
//操作数据库，查询用户表是否存在该用户
$result = mysql_query($sql,$conn) ; //执行数据库
$re = mysql_num_rows($result);  //返回结果集的函数，若存在则返回1（一行结果集）
mysql_free_result($result);   //释放查询结果内存（养成良好习惯）
//官网对这个用法解释：mysql_free_result() 仅需要在考虑到返回很大的结果集时会占用多少内存时调用。在脚本结束后所有关联的内存都会被自动释放。

//判断结果集，返回相应的查询结果给前端
if($name==""||$pwd==""){
    $row['status']="2";
    $row['err']="empty";
}else{
    if($re!=0){
        $row['status']="1";
        $row['err']="0";
    }else{
        $row['status']="0";
        $row['err']="fail";
    }
}

echo(json_encode($row));
mysql_close($conn);//关闭数据库
