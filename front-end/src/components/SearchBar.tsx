import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function SearchBar({
  placeholder = "Search creators...",
  onChange,
}: {
  placeholder?: string;
  onChange?: (value: string) => void;
}) {
  return (
    <div className="relative w-full max-w-md">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
      <Input
        type="text"
        placeholder={placeholder}
        onChange={(e) => onChange?.(e.target.value)}
        className="pl-10"
      />
    </div>
  );
}
