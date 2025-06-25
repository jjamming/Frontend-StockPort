import React from "react";
import Logo from "@/components/Navbar/Logo";

// Google 로고 SVG 아이콘
const GoogleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    className="block w-6 h-6"
  >
    <path
      fill="#EA4335"
      d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
    ></path>
    <path
      fill="#4285F4"
      d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
    ></path>
    <path
      fill="#FBBC05"
      d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
    ></path>
    <path
      fill="#34A853"
      d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
    ></path>
    <path fill="none" d="M0 0h48v48H0z"></path>
  </svg>
);

const LoginPage = () => {
  const handleGoogleLogin = () => {
    // 여기에 구글 로그인 로직을 구현합니다.
    console.log("Google 로그인 시도");
  };

  const handleKakaoLogin = () => {
    // 여기에 카카오 로그인 로직을 구현합니다.
    console.log("카카오 로그인 시도");
  };

  const handleSignUp = () => {
    // 회원가입 페이지로 이동하는 로직을 구현합니다.
    console.log("회원가입 페이지로 이동");
  };

  return (
    // 1. 전체 페이지 컨테이너
    <div className="flex justify-center items-center mx-auto px-6 py-12 w-full max-w-xl md:max-w-2xl">
      {/* 2. 로그인 카드 컨테이너 */}
      <div className="space-y-8 bg-brand-container shadow-lg p-8 rounded-xl w-full max-w-md">
        {/* 3. 로고 및 헤더 */}
        <div className="text-center">
          <Logo />
          <p className="font-pretendard text-1xl text-gray-300">
            로그인하고 당신의 투자 전략을 검증해보세요
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
            <button
              onClick={handleSignUp}
              className="focus:outline-none font-semibold text-white hover:underline focus:underline"
            >
              회원가입
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
