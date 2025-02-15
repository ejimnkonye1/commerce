export default  function EditModal  ({ isOpen, onClose, title, fields, onSubmit })  {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
        <div className="bg-gray-800 p-6 rounded-lg w-full max-w-md">
          <h2 className="text-xl font-semibold mb-4">{title}</h2>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              const data = Object.fromEntries(formData.entries());
              await onSubmit(data);
              onClose();
            }}
          >
            {fields.map((field) => (
              <div key={field.name} className="mb-4">
                <label className="block text-sm font-medium mb-2">{field.label}</label>
                <input
                  type={field.type || "text"}
                  name={field.name}
                  className="w-full p-2 rounded bg-gray-700 text-white"
                  required={field.required}
                />
              </div>
            ))}
            <div className="flex justify-end gap-2">
              <button type="button" onClick={onClose} className="bg-gray-600 text-white px-4 py-2 rounded">
                Cancel
              </button>
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }