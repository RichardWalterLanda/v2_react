import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hook/AuthContext";

export default function codder() {
  const { signin } = useAuth();
  const location = useLocation();
  const navigate = useNavigate()

  const fromPage = location.state?.from?.pathname || "/"

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const user = form.qcode.value;
    console.log(user);
    signin(user, () => navigate(fromPage, { replace: true }));
  }

  return (
    <form onSubmit={handleSubmit} className="fullflex flex-col">
      <input
        autoComplete="off"
        className="block border-2 border-cyan-600 rounded-xl px-5 py-2 bg-transparent text-cyan-600"
        name="qcode"
        placeholder="Enter your private-QC"
      />
      <button type="submit">submit</button>
    </form>
  );
}
