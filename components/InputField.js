export default function InputField({ label, ...props }) {
    return (
      <div className="mb-4">
        <label className="block mb-1">{label}</label>
        <input
          className="w-full border border-gray-300 p-2 rounded"
          {...props}
        />
      </div>
    );
  }
  