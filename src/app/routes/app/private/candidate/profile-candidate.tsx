import {
  ProfileAbout,
  ProfileExperience,
  ProfileHeader,
  ProfileLeftSidebar,
  ProfilePortfolio,
  ProfileSkill,
} from "@/features/candidate/components/candidate-profile";

const ProfilePage = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          <div className="max-w-7xl mx-auto">
            <ProfileHeader />
            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <ProfileLeftSidebar />

              {/* Main Content Column */}
              <div className="lg:col-span-2 space-y-6">
                <ProfileAbout />
                <ProfileExperience />
                <ProfileSkill />
                <ProfilePortfolio />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
