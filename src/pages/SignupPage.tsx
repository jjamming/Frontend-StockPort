import Logo from "@/components/Navbar/Logo";
import { Link } from "react-router-dom";
import GoogleIcon from "../components/icons/GoogleIcon";

const SignUpPage = () => {
  const handleGoogleSignUp = () => {
    // TODO: 구글 회원가입 로직 구현
  };

  const handleKakaoSignUp = () => {
    // TODO: 카카오 회원가입 로직 구현
  };

  return (
    // 1. 전체 페이지 컨테이너
    <div className="flex justify-center items-center mx-auto px-6 py-12 w-full max-w-xl md:max-w-2xl min-h-screen">
      {/* 2. 회원가입 카드 컨테이너 */}
      <div className="space-y-8 bg-brand-container shadow-lg p-8 rounded-xl w-full max-w-md">
        {/* 3. 로고 및 헤더 */}
        <div className="text-center">
          <Logo />
          <p className="mt-2 font-pretendard text-1xl text-gray-300">
            지금 가입하면, 나만의 포트폴리오를 직접 분석할 수 있어요.
          </p>
        </div>

        {/* 4. 소셜 회원가입 버튼 영역 */}
        <div className="space-y-4">
          <button
            type="button"
            onClick={handleGoogleSignUp}
            className="flex items-center bg-white shadow-md hover:brightness-90 px-4 py-4 rounded-lg w-full text-[1.1rem] text-gray-800 transition-colors duration-300 cursor-pointer"
          >
            <span className="flex-shrink-0 mr-3">
              <GoogleIcon />
            </span>
            <span className="mx-auto">Google로 시작하기</span>
          </button>

          <div onClick={handleKakaoSignUp} className="w-full cursor-pointer">
            <img
              src="/images/kakao_login_large_wide.png"
              alt="카카오로 시작하기"
              className="shadow-md hover:brightness-90 rounded-lg w-full transition"
            />
          </div>
        </div>

        {/* 5. 하단 영역: 로그인 페이지 이동 링크 및 약관 안내 */}
        <div className="space-y-4 text-sm text-center">
          <p className="text-gray-400">
            이미 계정이 있으신가요?{" "}
            <Link
              to="/login"
              className="focus:outline-none font-semibold text-white hover:underline focus:underline"
            >
              로그인
            </Link>
          </p>
          <p className="text-gray-500 text-xs">
            가입과 함께 STPT의{" "}
            <Link to="/terms" className="hover:text-gray-300 underline">
              서비스 이용약관{" "}
            </Link>
            및{" "}
            <Link to="/privacy" className="hover:text-gray-300 underline">
              개인정보처리방침
            </Link>
            에 동의하게 됩니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
