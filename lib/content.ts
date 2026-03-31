import siteData from "@/content/site.json";
import companyData from "@/content/company.json";
import solutionsData from "@/content/solutions.json";
import servicesData from "@/content/services.json";
import vendorsData from "@/content/vendors.json";
import productsData from "@/content/products.json";
import supportData from "@/content/support.json";
import contactData from "@/content/contact.json";

import type {
    SiteData,
    CompanyData,
    SolutionsData,
    ServicesData,
    VendorsData,
    ProductsData,
    SupportData,
    ContactData,
} from "@/types";

export function getSiteData(): SiteData {
    return siteData as SiteData;
}

export function getCompanyData(): CompanyData {
    return companyData as CompanyData;
}

export function getSolutionsData(): SolutionsData {
    return solutionsData as SolutionsData;
}

export function getServicesData(): ServicesData {
    return servicesData as ServicesData;
}

export function getVendorsData(): VendorsData {
    return vendorsData as VendorsData;
}

export function getProductsData(): ProductsData {
    return productsData as ProductsData;
}

export function getSupportData(): SupportData {
    return supportData as SupportData;
}

export function getContactData(): ContactData {
    return contactData as ContactData;
}
