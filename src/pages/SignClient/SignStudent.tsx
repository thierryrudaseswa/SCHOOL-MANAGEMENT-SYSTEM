import Image from "../../components/Image/Image";
import Form2 from "../../components/form2/Form2";
import "../SchoolReg/SchoolReg.css"

const SchoolReg = () => {
  return (
    <div className="schoolReg flex h-screen bg-white px-10 py-5 justify-center items-center">
      <div className="part1 flex w-4/6 max-w-[1300px]rounded-r-xl bg-white">
        <div className="left flex-1 rounded-l-xl" style={{ background: "#2B59FF" }}>
          <Image />
        </div>
        <div className="right flex-1 bg-blac rounded-r-xl">
          <Form2 isAdmin={false} isSignUp={true} />
        </div>
      </div>
    </div>
  );
};

export default SchoolReg;
