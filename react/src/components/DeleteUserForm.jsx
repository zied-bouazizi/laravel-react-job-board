import { useState } from "react";
import Modal from "./Modal";
import axiosClient from "../axios";
import { useStateContext } from "../contexts/ContextProvider";

function DeleteUserForm() {
  const { setCurrentUser, setUserToken } = useStateContext();
  const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
  const [form, setForm] = useState({ password: "" });
  const [error, setError] = useState({ __html: "" });

  const confirmUserDeletion = () => {
    setConfirmingUserDeletion(true);
    setError({ __html: "" });
    setForm({ password: "" });
  };

  const onSubmit = (ev) => {
    ev.preventDefault();

    axiosClient
      .delete("/profile", { data: form })
      .then(() => {
        setCurrentUser({});
        setUserToken(null);
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

  const closeModal = () => {
    setConfirmingUserDeletion(false);
  };

  return (
    <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
      <h2 className="text-3xl font-semibold">Delete Account</h2>

      <p className="text-gray-600 mb-6">
        Once your account is deleted, all of its data will be permanently
        deleted.
      </p>

      <button
        type="submit"
        onClick={confirmUserDeletion}
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
      >
        Delete Account
      </button>

      <Modal show={confirmingUserDeletion} onClose={closeModal}>
        <form onSubmit={onSubmit} className="p-6">
          {error.__html && (
            <div
              className="bg-red-500 rounded py-2 px-3 mb-4 text-white"
              dangerouslySetInnerHTML={error}
            ></div>
          )}

          <h2 className="text-2xl font-semibold mb-1">
            Are you sure you want to delete your account?
          </h2>

          <p className="text-gray-600 mb-6">
            Once your account is deleted, all of its data will be permanently
            deleted.
          </p>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={form.password}
              onChange={(ev) => setForm({ ...form, password: ev.target.value })}
              className="border rounded w-full py-2 px-3 mb-2 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500"
              required
            />
          </div>

          <div className="mb-4 flex gap-2">
            <button
              type="button"
              onClick={closeModal}
              className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
            >
              Delete Account
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default DeleteUserForm;
