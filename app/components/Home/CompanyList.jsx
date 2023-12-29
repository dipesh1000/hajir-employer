import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircleIcon, GroupIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const CompanyList = () => {
  return (
    <div>
      <div className="flex items-center justify-center  ">
        <Tabs defaultValue="state" className="w-[400px] fixed ">
          <TabsList>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="inactive">Inactive</TabsTrigger>
          </TabsList>
          <TabsContent value="active">
            <div className="bg-gray shadow overflow-hidden sm:rounded-md">
              <ul className="divide-y divide-gray-200" role="list">
                <li>
                  <a className="block hover:bg-gray-50" href="#">
                    <div className="px-4 py-4 flex items-center sm:px-6">
                      <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                        <div>
                          <p className="text-sm font-medium text-indigo-600 truncate">
                            Rasan Technologies
                          </p>
                          <div className="mt-2 sm:flex">
                            <div className="sm:flex">
                              <p className="flex items-center text-sm text-gray-500">
                                <GroupIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                                EMPLOYEE | 24
                              </p>
                              <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                                <CheckCircleIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                                APPROVER | 2
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 flex-shrink-0 sm:mt-0 sm:ml-4">
                          <Button className="ml-3" variant="ghost">
                            Edit
                          </Button>
                          <Button className="ml-3" variant="ghost">
                            View
                          </Button>
                          <Button className="ml-3" variant="destructive">
                            Delete
                          </Button>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="inactive">
            {" "}
            <div className="bg-gray shadow overflow-hidden sm:rounded-md">
              <ul className="divide-y divide-gray-200" role="list">
                <li>
                  <a className="block hover:bg-gray-50" href="#">
                    <div className="px-4 py-4 flex items-center sm:px-6">
                      <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                        <div>
                          <p className="text-sm font-medium text-indigo-600 truncate">
                            Velox
                          </p>
                          <div className="mt-2 sm:flex">
                            <div className="sm:flex">
                              <p className="flex items-center text-sm text-gray-500">
                                <GroupIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                                EMPLOYEE | 24
                              </p>
                              <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                                <CheckCircleIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                                APPROVER | 2
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 flex-shrink-0 sm:mt-0 sm:ml-4">
                          <Button className="ml-3" variant="ghost">
                            Edit
                          </Button>
                          <Button className="ml-3" variant="ghost">
                            View
                          </Button>
                          <Button className="ml-3" variant="destructive">
                            Delete
                          </Button>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CompanyList;
