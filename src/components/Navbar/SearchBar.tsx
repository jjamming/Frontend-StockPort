import { Input } from "../ui/input";
import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="relative flex w-full max-w-sm mr-4 items-center justify-center">
      <Search
        className="absolute left-4 top-1/2 mr-1.5 -translate-y-1/2 text-gray-400"
        size={20}
      />
      <Input
        type="text"
        placeholder="종목명/종목코드 검색"
        className="h-13 pl-10 border-2 rounded-4xl border-gray-400/50 focus:border-white transition-all duration-200"
      />
    </div>
  );
};

export default SearchBar;
