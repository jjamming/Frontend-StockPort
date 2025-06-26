import Logo from "@/components/Navbar/Logo";
import { Link } from "react-router-dom";
import GoogleIcon from "../components/icons/GoogleIcon";

const LoginPage = () => {
  const handleGoogleLogin = () => {
    // Todo: 여기에 구글 로그인 로직을 구현
    console.log("Google 로그인 시도");
  };

  const handleKakaoLogin = () => {
    // Todo: 여기에 카카오 로그인 로직을 구현
    console.log("카카오 로그인 시도");
  };

  return (
    // 1. 전체 페이지 컨테이너
    <div className="flex justify-center items-center mx-auto px-6 py-12 w-full max-w-xl md:max-w-2xl min-h-screen">
      {/* 2. 로그인 카드 컨테이너 */}
      <div className="space-y-8 bg-brand-container shadow-lg p-8 rounded-xl w-full max-w-md">
        {/* 3. 로고 및 헤더 */}
        <div className="text-center">
          <Logo />
          <p className="font-pretendard text-1xl text-gray-300">
            로그인 후, 투자 전략을 직접 검증해볼 수 있어요.
          </p>
        </div>

        {/* 4. 소셜 로그인 버튼 영역 */}
        <div className="space-y-4">
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="flex items-center bg-white hover:bg-gray-100 shadow-md px-4 py-4 rounded-lg w-full text-[1.1rem] text-gray-800 transition-colors duration-300"
          >
            <span className="flex-shrink-0 mr-3">
              <GoogleIcon />
            </span>
            <span className="mx-auto">Google로 로그인</span>
          </button>

          <div onClick={handleKakaoLogin} className="w-full cursor-pointer">
            <img
              src="/images/kakao_login_large_wide.png"
              alt="카카오로 로그인"
              className="shadow-md hover:brightness-95 rounded-lg w-full transition"
            />
          </div>
        </div>

        {/* 5. 회원가입 유도 문구 */}
        <div className="text-gray-400 text-sm text-center">
          <p>
            아직 회원이 아니신가요?{" "}
            <Link
              to="/signup"
              className="focus:outline-none font-semibold text-white hover:underline focus:underline"
            >
              회원가입
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
