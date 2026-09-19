import { useEffect, useState } from "react";

/** Normalise any path into the form "/segment/segment" */
function normalise(path: string): string {
  const raw = path.split("?")[0].split("#")[0];
  const clean = "/" + raw.replace(/^\/+/, "");
  return clean.length > 1 ? clean.replace(/\/+$/, "") : "/";
}

export function useRoute() {
  const [path, setPath] = useState<string>(() =>
    typeof window === "undefined" ? "/" : normalise(window.location.pathname),
  );

  useEffect(() => {
    const onChange = () => setPath(normalise(window.location.pathname));
    window.addEventListener("popstate", onChange);
    return () => window.removeEventListener("popstate", onChange);
  }, []);

  return path;
}

export function navigate(to: string) {
  const clean = to.startsWith("/") ? to : "/" + to;
  if (normalise(window.location.pathname) === clean) {
    window.scrollTo({ top: 0, behavior: "auto" });
    return;
  }
  window.history.pushState({}, "", clean);
  window.dispatchEvent(new PopStateEvent("popstate"));
  window.scrollTo({ top: 0, behavior: "auto" });
}

/** Intercept internal anchor clicks so we keep SPA routing + scroll reset. */
export function linkProps(to: string) {
  return {
    href: to.startsWith("/") ? to : "/" + to,
    onClick: (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
      e.preventDefault();
      navigate(to);
    },
  };
}

/** Scroll to top whenever the route path changes. */
export function useScrollTopOnRoute(path: string) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [path]);
}
