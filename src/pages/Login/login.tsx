import logo from "@/assets/logo.svg";

const Login = () => {
  return (
    <div className="w-full h-full">
      <div className="login-header">
        <img src={logo} />
        <h1>React后台管理系统</h1>
      </div>
      <div className="login-content">登录表单</div>
    </div>
  );
};

export default Login;
