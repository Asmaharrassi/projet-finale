export default function Button({ children, variant = "primary", className = "" }) {
  const base = "text-sm rounded-md font-medium transition";
  const styles = {
    primary: `${base} px-6 py-2 bg-orange-500 text-white hover:bg-orange-600`,
    outlined: `${base} px-6 py-2 border border-orange-200 text-orange-500 hover:bg-orange-50`,
    custom: "" // يخلي الحرية للـ className
  };

  return <button className={`${styles[variant]} ${className}`}>{children}</button>;
}