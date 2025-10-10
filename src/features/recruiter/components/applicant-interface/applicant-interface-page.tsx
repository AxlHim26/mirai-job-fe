import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useApplicants } from "../../api/applicant";
import { ApplicantFilters, ApplicantSort, Applicant } from "@/types";
import { paths } from "@/config/paths";
import {
  ApplicantTable,
  ApplicantControls,
  ApplicantTabs,
  ApplicantPagination,
  ApplicantStats,
} from "./components";

export const ApplicantInterfacePage: React.FC = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState<ApplicantFilters>({});
  const [sort] = useState<ApplicantSort>({
    field: "appliedDate",
    direction: "desc",
  });

  const limit = 10;

  const {
    data: applicantResponse,
    error,
    isLoading,
  } = useApplicants(currentPage, limit, filters, sort);

  // Filter applicants based on active tab and search query
  const filteredApplicants = useMemo(() => {
    if (!applicantResponse?.data?.applicants) return [];

    let filtered = applicantResponse.data.applicants;

    // Filter by status tab
    if (activeTab !== "All") {
      filtered = filtered.filter((app) => app.status === activeTab);
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(
        (app) =>
          app.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          app.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
          app.jobTitle.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filtered;
  }, [applicantResponse?.data?.applicants, activeTab, searchQuery]);

  const handleApplicantClick = (applicant: Applicant) => {
    navigate(paths.recruiter.applicantDetail.getHref(applicant.id.toString()));
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1); // Reset to first page when searching
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setCurrentPage(1); // Reset to first page when changing tabs
  };

  const handleDateRangeChange = (startDate: string, endDate: string) => {
    setFilters((prev) => ({
      ...prev,
      dateRange: { startDate, endDate },
    }));
    setCurrentPage(1);
  };

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-center">
              <div className="text-red-600 text-lg font-medium mb-2">
                Error loading applicants
              </div>
              <div className="text-gray-500 text-sm">
                Please try refreshing the page or contact support if the problem
                persists.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const totalPages = Math.ceil((filteredApplicants.length || 0) / limit);
  const paginatedApplicants = filteredApplicants.slice(
    (currentPage - 1) * limit,
    currentPage * limit
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Applicants</h1>
          <p className="text-gray-600">Manage and review job applicants</p>
        </div>

        {/* Stats */}
        <ApplicantStats
          applicants={filteredApplicants}
          loading={isLoading}
        />

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow">
          <ApplicantControls
            onSearch={handleSearch}
            onDateRangeChange={handleDateRangeChange}
          />

          <ApplicantTabs
            activeTab={activeTab}
            onTabChange={handleTabChange}
            applicants={applicantResponse?.data?.applicants || []}
          />

          <ApplicantTable
            applicants={paginatedApplicants}
            onViewDetails={handleApplicantClick}
            loading={isLoading}
          />

          <ApplicantPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            totalItems={filteredApplicants.length}
            itemsPerPage={limit}
          />
        </div>
      </div>
    </div>
  );
};
