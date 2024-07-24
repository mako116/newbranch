import { useCookies } from "react-cookie";

const useCookie = () => {
  const [cookies, setCookie, removeCookie] = useCookies();

  const getCookie = (key: string) => cookies[key];

  const setMyCookie = (key: string, value: string) => {
    setCookie(key, value, {
      path: '/',
      expires: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), // 2 days
      sameSite: "none",
      secure: true,
    });
  };

  const removeMyCookie = (key: string) => removeCookie(key);

  return { setCookie: setMyCookie, getCookie, removeCookie: removeMyCookie };
};

export default useCookie;
