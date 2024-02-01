
import Form from "../../components/form/Form";
import Image from "../../components/Image/Image";
import "./LoginAdmin.css"
import React from "react";

const LoginAdmin = () => {
  return (
    <div className="flexx flex h-screen px-10 py-5 justify-center items-center">
      <div className="mainlog flex  w-4/6 max-w-[1300px] rounded-xl">
        <div className="left flex-1 rounded-l-xl" style={{ background: "#2B59FF" }}>
          <Image />
        </div>
        <div className="right flex-1 bg-slate-200 rounded-l-xl">
        <Form isSignUp={false} isAdmin={false}/>
        </div>
      </div>
    </div>
  );
};

export default LoginAdmin;
