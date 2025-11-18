import { useState } from "react";
import axiosClient from "../axios";
import { useStateContext } from "../contexts/ContextProvider";
import { toast } from "react-toastify";

function UpdateProfileInformationForm({ user }) {
  const { setCurrentUser } = useStateContext();
  const [userData, setUserData] = useState({ ...user });
  const [error, setError] = useState({ __html: "" });

  const onSubmit = (ev) => {
    ev.preventDefault();
    setError({ __html: "" });

    axiosClient
      .put("/profile", userData)
      .then(({ data }) => {
        setCurrentUser(data);
        toast.success("Profile information updated successfully.");
      })
      .catch((error) => {
        if (error.response) {
          const finalErrors = Object.values(error.response.data.errors).reduce(
            (accum, next) => [...accum, ...next],
            []
          );
          setError({ __html: finalErrors.join("<br>") });
        }
      });
  };

  return (
    <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
      {error.__html && (
        <div
          className="bg-red-500 rounded py-2 px-3 mb-4 text-white"
          dangerouslySetInnerHTML={error}
        ></div>
      )}
      <form onSubmit={onSubmit}>
        <h2 className="text-3xl font-semibold">Profile Information</h2>

        <p className="text-gray-600 mb-6">
          Update your account's profile information and email address.
        </p>

        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={userData.name}
            onChange={(ev) =>
              setUserData({ ...userData, name: ev.target.value })
            }
            className="border rounded w-full py-2 px-3 mb-2 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={userData.email}
            onChange={(ev) =>
              setUserData({ ...userData, email: ev.target.value })
            }
            className="border rounded w-full py-2 px-3 mb-2 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500"
            required
          />
        </div>

        <div className="mb-4">
          <button
            type="submit"
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdateProfileInformationForm;
