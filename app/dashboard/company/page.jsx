"use client";
import { Button } from "@/components/ui/button";
import { useCompany } from "@/context/CompanyContext";
import React, { useState } from "react";

const Page = () => {
  const { setCompany, selectedCompanyId } = useCompany();
  const [openTab, setOpenTab] = useState(1);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [actionType, setActionType] = useState("");
  const [actionCompanyId, setActionCompanyId] = useState("");

  const [companies, setCompanies] = useState([
    { id: 1, name: "Velox Labs", isActive: true },
    { id: 2, name: "Asterisk ", isActive: false },
    { id: 3, name: "Biraj Ltd", isActive: false },
  ]);

  //  deletion of a company
  const handleDelete = (companyId) => {
    setActionType("delete");
    setActionCompanyId(companyId);
    setShowConfirmation(true);
  };

  const handleToggle = (companyId) => {
    setActionType("switch");
    setActionCompanyId(companyId);
    setShowConfirmation(true);
  };

  const handleTabClick = (tabNumber) => {
    setOpenTab(tabNumber);
  };

  // Create a new company
  const handleCreateCompany = () => {
    const newCompany = {
      id: companies.length + 1,
      name: `New Company ${companies.length + 1}`,
      isActive: true,
    };

    setCompanies((prevCompanies) => [...prevCompanies, newCompany]);
  };

  const handleConfirmationYes = () => {
    setShowConfirmation(false); // Close confirmation dialog

    if (actionType === "delete") {
      handleDeleteConfirmed(actionCompanyId);
    } else if (actionType === "switch") {
      handleToggleConfirmed(actionCompanyId);
    }
  };

  // Handle confirmation dialog "Cancel" click
  const handleConfirmationCancel = () => {
    setShowConfirmation(false); // Close confirmation dialog
  };

  // Handle deletion confirmation
  const handleDeleteConfirmed = (companyId) => {
    // Your deletion logic here
    setCompanies((prevCompanies) =>
      prevCompanies.filter((company) => company.id !== companyId)
    );

    // If the deleted company was selected, clear the selected company
    if (selectedCompanyId === companyId) {
      setCompany(null);
    }
  };

  // Handle switching confirmation
  const handleToggleConfirmed = (companyId) => {
    setCompanies((prevCompanies) =>
      prevCompanies.map((company) =>
        company.id === companyId
          ? { ...company, isActive: !company.isActive }
          : company
      )
    );
  };

  // Handle navigation to edit page
  const handleEdit = (companyId) => {
    // Use the history object to navigate to the edit page
    history.push(`/edit-company/${companyId}`);
  };

  return (
    <div className="flex flex-wrap">
      <div className="w-full">
        {/* Tab navigation */}
        <ul
          className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
          role="tablist"
        >
          {[1, 2].map((tabNumber) => (
            <li
              key={tabNumber}
              className="-mb-px mr-2 last:mr-0 flex-auto text-center"
            >
              <a
                className={`text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ${
                  openTab === tabNumber
                    ? "text-white bg-blue-500"
                    : "text-blueGray-600 bg-white"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleTabClick(tabNumber);
                }}
                href={`#link${tabNumber}`}
                role="tab"
              >
                {tabNumber === 1 ? "Active Company" : "Inactive Company"}
              </a>
            </li>
          ))}
        </ul>

        {/* Company information */}
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
          <div className="px-4 py-5 flex-auto">
            {[1, 2].map((tabNumber) => (
              <div
                key={tabNumber}
                className={openTab === tabNumber ? "block" : "hidden"}
                id={`link${tabNumber}`}
              >
                {tabNumber === 1 && (
                  <>
                    <p>Information about the active company goes here.</p>
                    <div className="container mx-auto">
                      {companies
                        .filter((company) => company.isActive)
                        .map((company) => (
                          <div
                            key={company.id}
                            className="h-50 w-full rounded-lg bg-white "
                          >
                            <div className="flex items-center justify-between border-b">
                              <div className="p-3 text-gray-700 text-lg font-bold">
                                {company.name}
                              </div>
                              <div className="p-3 flex">
                                {/* Edit button */}
                                <Button
                                  onClick={() => handleEdit(company.id)}
                                  className="text-slate-800 hover:text-blue-600 text-sm bg-white hover:bg-slate-100 border border-slate-200 rounded-l-lg font-medium px-4 py-2 inline-flex space-x-1 items-center"
                                >
                                  <span>
                                    {/* Edit icon */}
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke-width="1.5"
                                      stroke="currentColor"
                                      className="w-4 h-4"
                                    >
                                      {/* Edit icon path */}
                                    </svg>
                                  </span>
                                  <span>Edit</span>
                                </Button>

                                {/* Switch button */}
                                <button
                                  className="text-slate-800 hover:text-blue-600 text-sm bg-white hover:bg-slate-100 border border-slate-200 font-medium px-4 py-2 inline-flex space-x-1 items-center"
                                  onClick={() => handleToggle(company.id)}
                                >
                                  <span>
                                    {/* Switch icon */}
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke-width="1.5"
                                      stroke="currentColor"
                                      className="w-4 h-4"
                                    ></svg>
                                  </span>
                                  <span>
                                    {company.isActive ? "Inactive" : "Active"}
                                  </span>
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </>
                )}

                {tabNumber === 2 && (
                  <>
                    <p>Information about the inactive company goes here.</p>
                    {/* Display inactive companies */}
                    <div className="container mx-auto">
                      {companies
                        .filter((company) => !company.isActive)
                        .map((company) => (
                          <div
                            key={company.id}
                            className="h-50 w-full rounded-lg bg-white "
                          >
                            <div className="flex items-center justify-between border-b">
                              <div className="p-3 text-gray-700 text-lg font-bold">
                                {company.name}
                              </div>
                              <div className="p-3 flex">
                                <Button
                                  onClick={() => handleEdit(company.id)}
                                  className="text-slate-800 hover:text-blue-600 text-sm bg-white hover:bg-slate-100 border border-slate-200 rounded-l-lg font-medium px-4 py-2 inline-flex space-x-1 items-center"
                                >
                                  <span>
                                    {/* Edit icon */}
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke-width="1.5"
                                      stroke="currentColor"
                                      className="w-4 h-4"
                                    >
                                      {/* Edit icon path */}
                                    </svg>
                                  </span>
                                  <span>Edit</span>
                                </Button>

                                {/* Switch button */}
                                <button
                                  className="text-slate-800 hover:text-blue-600 text-sm bg-white hover:bg-slate-100 border border-slate-200 font-medium px-4 py-2 inline-flex space-x-1 items-center"
                                  onClick={() => handleToggle(company.id)}
                                >
                                  <span>
                                    {/* Switch icon */}
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke-width="1.5"
                                      stroke="currentColor"
                                      className="w-4 h-4"
                                    >
                                      {/* Switch icon path */}
                                    </svg>
                                  </span>
                                  <span>
                                    {company.isActive ? "Inactive" : "Active"}
                                  </span>
                                </button>

                                {/* Delete button */}
                                <button
                                  onClick={() => handleDelete(company.id)}
                                  className="text-slate-800 hover:text-blue-600 text-sm bg-white hover:bg-slate-100 border border-slate-200 rounded-r-lg font-medium px-4 py-2 inline-flex space-x-1 items-center"
                                >
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke-width="1.5"
                                      stroke="currentColor"
                                      className="w-4 h-4"
                                    >
                                      {/* Delete icon path */}
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                      />
                                    </svg>
                                  </span>
                                  <span>Delete</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Create Company button */}
        <div className="flex justify-end mt-4">
          <button
            onClick={handleCreateCompany}
            className="text-white bg-blue-500 border border-blue-500 px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Create Company
          </button>
        </div>

        {/* Confirmation dialog */}
        {showConfirmation && (
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            <div className="relative w-auto max-w-3xl mx-auto my-6">
              {/* Content */}
              <div className="relative flex flex-col w-full bg-white border-0 rounded-lg outline-none focus:outline-none">
                {/* Header */}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    {actionType === "delete"
                      ? "Confirm Deletion"
                      : "Confirm Switch"}
                  </h3>
                  <button
                    className="p-1 ml-auto -mt-1 -mr-2 text-2xl font-semibold leading-none text-black bg-transparent border-0 outline-none focus:outline-none"
                    onClick={handleConfirmationCancel}
                  >
                    <span className="text-black bg-transparent h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/* Body */}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    {actionType === "delete"
                      ? "Are you sure you want to delete this company?"
                      : "Are you sure you want to switch the status of this company?"}
                  </p>
                </div>
                {/* Footer */}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-blue-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={handleConfirmationCancel}
                  >
                    Cancel
                  </button>
                  <button
                    className="text-white bg-blue-500 font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={handleConfirmationYes}
                  >
                    Yes
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
