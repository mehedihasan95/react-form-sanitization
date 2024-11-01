// Sanitize Form Data for File Uploads and Required Fields
export const sanitizeFormData = <T>(
  data: T,
  options?: {
    ignoreKeys?: (keyof T)[];
    requiredKeys?: (keyof T)[];
  }
): FormData => {
  const formData = new FormData();
  Object.entries(data as Record<keyof T, unknown>).forEach(([key, value]) => {
    if (Array.isArray(value) && value.length > 0) {
      if (value[0]?.originFileObj) {
        formData.append(key, value[0].originFileObj);
      } else if (value[0].status !== "done" && value[0].status !== "error") {
        formData.append(key, JSON.stringify(value));
      }
    } else if (
      (value || options?.requiredKeys?.includes(key as keyof T)) &&
      !options?.ignoreKeys?.includes(key as keyof T) &&
      !Array.isArray(value)
    ) {
      formData.append(key, value as string | Blob);
    }
  });
  return formData;
};

// Sanitize Non-File Form Values by Removing Falsy Values
export const sanitizeFormValue = <T>(
  data: T,
  options?: {
    ignoreKeys?: (keyof T)[];
    requiredKeys?: (keyof T)[];
  }
): T => {
  const sanitizeValue = Object.fromEntries(
    Object.entries(data as Record<keyof T, unknown>).filter(
      ([key, value]) =>
        (value || options?.requiredKeys?.includes(key as keyof T)) &&
        !options?.ignoreKeys?.includes(key as keyof T)
    )
  );
  return sanitizeValue as T;
};
