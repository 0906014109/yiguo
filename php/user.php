<?php
    // 后台echo的数据会直接返回到前端
    $user = $_POST["username"];
    $pwd = $_POST["password"];
    $type = $_POST["type"];   //判断是登录还是注册
    if($type !== "login" && $type !== "register"){
        $res = array("error"=>"i don't know what are u doing!");
        die(json_encode($res));  // 数组转字符串，前端只能接受字符串
    }
    require("./_connect.php");  //和数据库建立连接
    // $pwd = md5($pwd);    //把传过来的密码使用md5加密
    $sql_login = "SELECT username,pwd FROM usermsg";  // 数据库的查询语句
    $sql_register = "INSERT usermsg(username,pwd) VALUES ('{$user}','{$pwd}')";  // 插入数据
    
    $result_login = $conn->query($sql_login);   //执行sql语句   返回结果集
    $hasuser = false;   //用户名是否存在;
    $haspwd = false;   //该用户名密码是否正确;
    // $select_res = false;   //储存用户信息;

    while($row = $result_login->fetch_assoc()){  //对结果集进行遍历
        if($row["username"] == $user){
            $hasuser = true;
            if($type == "register"){ //如果是注册，没必要判断密码;
                break;
            }
            if($row["pwd"] == $pwd){
                // $select_res = json_encode($row);    
                $haspwd = true;
                break;
            }
        }
    }

    if($type == "login" &&  $haspwd == true){  //用户名密码都对，登录成功
        die("true");
    }else if($type == "login"){ //登录失败
        die("false");
    }

    if($type == "register" && $hasuser == true){  //用户名重名; => 2;
        echo 2;
    }else if($hasuser == false){   //注册成功;
        if($type == "register"){
            $conn->query($sql_register);
        }
        echo 1;
    }

    // echo $hasuser;

    //返回结果判定是那种操作在执行;
    // echo $hasuser;
    // echo $select_res;
?>