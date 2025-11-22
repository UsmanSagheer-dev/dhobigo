export function toast(message: string, duration = 3000) {
  if (typeof document === "undefined") return;

  let container = document.getElementById("dhb-toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "dhb-toast-container";
    Object.assign(container.style, {
      position: "fixed",
      right: "16px",
      bottom: "16px",
      zIndex: "9999",
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      pointerEvents: "none",
    });
    document.body.appendChild(container);
  }

  const el = document.createElement("div");
  el.textContent = message;
  Object.assign(el.style, {
    background: "rgba(0,0,0,0.85)",
    color: "#fff",
    padding: "10px 14px",
    borderRadius: "8px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
    pointerEvents: "auto",
    maxWidth: "320px",
    fontSize: "14px",
    opacity: "0",
    transform: "translateY(6px)",
    transition: "opacity 200ms ease, transform 200ms ease",
  });

  container.appendChild(el);

  // force reflow then show
  void el.offsetWidth;
  el.style.opacity = "1";
  el.style.transform = "translateY(0)";

  const hide = () => {
    el.style.opacity = "0";
    el.style.transform = "translateY(6px)";
    setTimeout(() => el.remove(), 220);
  };

  const timeout = setTimeout(hide, duration);

  el.addEventListener("click", () => {
    clearTimeout(timeout);
    hide();
  });
}

export default toast;
