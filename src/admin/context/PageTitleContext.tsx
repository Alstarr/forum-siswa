import { createContext } from "react";

export const AdminPage = {
  DASHBOARD: "Dashboard",
  KRITIK: "Form Kritik & Saran",
  HARAPAN: "Form Harapan",
  PERUNDUNGAN: "Form Perundungan",
} as const;

export type AdminPage = (typeof AdminPage)[keyof typeof AdminPage];

export interface PageTitleContextType {
  pageTitle: AdminPage;
  setPageTitle: (title: AdminPage) => void;
}

export const PageTitleContext = createContext<PageTitleContextType>({
  pageTitle: AdminPage.DASHBOARD,
  setPageTitle: () => {},
});
