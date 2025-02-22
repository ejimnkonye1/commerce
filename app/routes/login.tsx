import { ActionFunction, json, redirect } from "@remix-run/node"
import { Form, Link, useActionData } from "@remix-run/react"
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, firestore } from "~/Firebase";

export const action: ActionFunction = async({request}) => {
  const formData = await request.formData();
  const email = formData.get('email') as string;
  const password = formData.get("password") as string;

  try {
const userCredential = await signInWithEmailAndPassword(auth, email, password)
const user = userCredential.user
const userId = user.uid
 const userDoc = await getDoc(doc(firestore, "users", userId))
 if (userDoc.exists()){
  return redirect("/cart")
 } else{
  return json ({error: "You are not an authorized user"})
 }


  }catch(error:any){
    return json({error: error.message}, {status:500});
  }
}
const Login = () => {
  const actionData = useActionData<{error?: string}>();
    return(
<section className="">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    <div className=" w-[500px] bg-white rounded-lg shadow dark:border md:mt-0 xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Sign in to your account
        </h1>
        {actionData?.error && <div className="text-red-500">{actionData.error}</div>}
        <Form  className="space-y-4 md:space-y-6" method="post" >
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@company.com"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  aria-describedby="remember"
                  type="checkbox"
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                  required
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">
                  Remember me
                </label>
              </div>
            </div>
            <Link to="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
              Forgot password?
            </Link>
          </div>
          <button
            type="submit"
                        className="w-full text-white bg-blue-700 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  "
          >
            Sign in
          </button>
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Don’t have an account yet?{' '}
            <Link to="#" className="font-medium text-blue-600 hover:underline dark:text-blue-500">
              Sign up
            </Link>
          </p>
        </Form>
      </div>
    </div>
  </div>
</section>




    )
}

export default Login