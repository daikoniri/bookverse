import { useAuthStore } from "../stores/authStore";

export function DashboardPage() {
  const { user, logout } = useAuthStore();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-4xl font-bold mb-4">Welcome, {user}!</h1>
      <button
        onClick={logout}
        className="mt-4 px-6 py-2 bg-red-500 text-white rounded"
      >
        Logout
      </button>
    </div>
  );
}
