import { Link } from 'react-router-dom'

function Login() {
  return (
      <section className="bg-indigo-50">
      <div className="container m-auto max-w-md py-24">
        <div className="bg-white px-6 py-8 shadow-md rounded-md border m-4 md:m-0">
          <form>
            <h2 className="text-3xl text-center font-semibold mb-6">Login</h2>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="border rounded w-full py-2 px-3 mb-2 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500"
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="mb-2">
              <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="border rounded w-full py-2 px-3 mb-1 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500"
                placeholder="Enter your password"
                required
              />
              <div className="text-right">
                <Link to="/forgot-password" className="text-indigo-500 hover:text-indigo-600 text-sm font-semibold">
                  Forgot Password?
                </Link>
              </div>
            </div>

            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                id="remember"
                name="remember"
                className="mr-2"
              />
              <label htmlFor="remember" className="text-gray-700 font-medium">
                Remember me
              </label>
            </div>

            <div className="mb-4">
              <button
                type="submit"
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
              >
                Login
              </button>
            </div>

            <p className="text-center text-gray-600">
              Don't have an account?
              <Link to="/register" className="text-indigo-500 hover:text-indigo-600 font-semibold">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Login
