import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users") || "{}");

    if (users[email]) {
      alert("User already exists");
      return;
    }

    users[email] = password;
    localStorage.setItem("users", JSON.stringify(users));
    alert("Account created! You can now log in.");
    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6">Sign Up</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full max-w-sm"
      >
        <input
          type="email"
          placeholder="Email"
          className="border rounded p-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="border rounded p-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="bg-green-500 text-white py-2 rounded">
          Sign Up
        </button>
      </form>
    </div>
  );
}
// src/pages/RegisterPage.tsx
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export function RegisterPage() {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleRegister = (e: React.FormEvent) => {
//     e.preventDefault();

//     // Save user
//     const user = { email, password };
//     localStorage.setItem("user", JSON.stringify(user));

//     // Immediately log in
//     localStorage.setItem("loggedInUser", JSON.stringify(user));

//     navigate("/"); // ✅ Go to HomePage after register
//   };

//   return (
//     <div className="flex min-h-screen flex-col items-center justify-center p-6">
//       <form onSubmit={handleRegister} className="flex flex-col gap-4 max-w-sm w-full">
//         <h1 className="text-3xl font-bold text-center mb-4">Register</h1>
//         <input
//           type="email"
//           placeholder="Email"
//           className="border p-2 rounded"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           className="border p-2 rounded"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button
//           type="submit"
//           className="bg-green-600 hover:bg-green-700 text-white p-2 rounded mt-2"
//         >
//           Register
//         </button>

//         <p className="text-center text-sm">
//           Already have an account?{" "}
//           <a href="/login" className="text-indigo-600 hover:underline">
//             Login
//           </a>
//         </p>
//       </form>
//     </div>
//   );
// }
