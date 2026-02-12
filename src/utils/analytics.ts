export const trackPageView = (url: string): void => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("config", "GA_MEASUREMENT_ID", {
      page_path: url,
    });
  }
};

export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number,
): void => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

export const trackFormSubmission = (formName: string): void => {
  trackEvent("form_submission", "engagement", formName);
};

export const trackButtonClick = (buttonName: string): void => {
  trackEvent("button_click", "engagement", buttonName);
};
