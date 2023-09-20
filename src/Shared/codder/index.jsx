import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hook/AuthContext";
import LoginImg from "../loginImg";

export default function codder() {
  const { signin } = useAuth();
  const location = useLocation();
  const navigate = useNavigate()


  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const user = form.qcode.value;
    console.log(user);
    signin(user, () => navigate("/main", { replace: true }));
  }

  return (
    <form onSubmit={handleSubmit} className="fullflex flex-col">
      <input
        type="password"
        autoComplete="off"
        className="block border border-cyan-600 rounded-xl px-5 py-4 text-xl bg-transparent text-cyan-600"
        name="qcode"
        placeholder="Enter your private-QC"
      />
      <button type="submit" className="mt-5 px-12 py-3 hover:bg-white duration-300 hover:text-cyan-800 uppercase tracking-widest">submit</button>
      <LoginImg />
    </form>
  );
}
