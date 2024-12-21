import clsx from "clsx";
import { IconType } from "react-icons";
import { IoIosSearch } from "react-icons/io";

type InputProps = {
    placeholder: string;
    type: "text" | "email" | "password" | "number" | "tel" | "search";
    className?: string;
    mode?: "form-input" | "input-search";
    icon?: IconType | undefined;
};

export default function Input({
    placeholder = "",
    type = "text",
    className,
    mode = "form-input",
    icon: Icon = IoIosSearch,
}: InputProps) {
  if (mode === "form-input") {
    return (
      <label className="relative w-full">
        <input
          required
          placeholder={placeholder}
          type={type}
          className={clsx(
            className,
            "w-full font-default p-3 border border-orange rounded-lg focus:outline-none focus:ring-2 focus:ring-blue"
          )}
        />
      </label>
    );
  } else if (mode === "input-search") {
    return (
        <div className="relative w-full">
            <input
                required
                placeholder={placeholder}
                type={type}
                className={clsx(
                    className,
                    "w-full pl-4 pr-10 py-3 bg-blue-100 text-gray-700 font-default rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                )}
            />
            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                <Icon className="text-dark-orange" size={20} />
            </div>
        </div>
    );
  } else {
    return null;
  }
}
