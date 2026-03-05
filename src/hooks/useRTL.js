import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export function useRTL() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const dir = i18n.language === "ar" ? "rtl" : "ltr";
    const lang = i18n.language === "ar" ? "ar" : i18n.language === "en" ? "en" : "fr";

    document.documentElement.setAttribute("dir", dir);
    document.documentElement.setAttribute("lang", lang);
    document.body.setAttribute("dir", dir);
  }, [i18n.language]);
}
