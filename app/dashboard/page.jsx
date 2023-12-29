import DefaultCompany from "../components/Home/DefaultCompany";
import CompanyList from "../components/Home/CompanyList";

const DashboardPage = () => {
  const hasCompany = true;

  if (!hasCompany) {
    return <DefaultCompany />;
  }

  return <CompanyList />;
};

export default DashboardPage;
