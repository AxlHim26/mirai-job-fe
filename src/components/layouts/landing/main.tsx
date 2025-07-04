import { useState } from 'react';
import { Search, MapPin, Briefcase, Code, DollarSign, Users, Monitor, Building, ChevronRight, Heart, Bookmark } from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';


export const LandingMain = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');

  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: false,
    pauseOnFocus: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 968,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };


  const companies = [
    { name: 'Vodafone', logo: 'V' },
    { name: 'Intel', logo: 'intel' },
    { name: 'Tesla', logo: 'TESLA' },
    { name: 'AMD', logo: 'AMD' },
    { name: 'Talkit', logo: 'Talkit' }
  ];

  const categories = [
    { icon: <Briefcase className="w-6 h-6" />, name: 'Design', jobs: '235 jobs available', color: 'bg-purple-100 text-purple-600' },
    { icon: <DollarSign className="w-6 h-6" />, name: 'Sales', jobs: '756 jobs available', color: 'bg-green-100 text-green-600' },
    { icon: <Monitor className="w-6 h-6" />, name: 'Marketing', jobs: '140 jobs available', color: 'bg-blue-600 text-white' },
    { icon: <Building className="w-6 h-6" />, name: 'Finance', jobs: '325 jobs available', color: 'bg-orange-100 text-orange-600' },
    { icon: <Code className="w-6 h-6" />, name: 'Technology', jobs: '436 jobs available', color: 'bg-gray-100 text-gray-600' },
    { icon: <Code className="w-6 h-6" />, name: 'Engineering', jobs: '542 jobs available', color: 'bg-yellow-100 text-yellow-600' },
    { icon: <Briefcase className="w-6 h-6" />, name: 'Business', jobs: '211 jobs available', color: 'bg-indigo-100 text-indigo-600' },
    { icon: <Users className="w-6 h-6" />, name: 'Human Resource', jobs: '346 jobs available', color: 'bg-pink-100 text-pink-600' }
  ];

  const featuredJobs = [
    {
      id: 1,
      title: 'Social Marketing',
      company: 'Nomad',
      location: 'Paris, France',
      type: 'Full-Time',
      tags: ['Marketing', 'Design'],
      salary: '$30,000 - $35,000',
      logo: 'N',
      featured: true
    },
    {
      id: 2,
      title: 'Brand Designer',
      company: 'Dropbox',
      location: 'San Francisco, US',
      type: 'Full-Time',
      tags: ['Design', 'Business'],
      salary: '$40,000 - $50,000',
      logo: 'D',
      featured: true
    },
    {
      id: 3,
      title: 'Email Marketing',
      company: 'Reddit',
      location: 'New York, US',
      type: 'Full-Time',
      tags: ['Marketing'],
      salary: '$35,000 - $45,000',
      logo: 'R',
      featured: false
    },
    {
      id: 4,
      title: 'Visual Designer',
      company: 'Pinterest',
      location: 'Remote',
      type: 'Full-Time',
      tags: ['Design'],
      salary: '$45,000 - $55,000',
      logo: 'P',
      featured: true
    },
    {
      id: 5,
      title: 'Product Designer',
      company: 'ClassPass',
      location: 'Berlin, Germany',
      type: 'Full-Time',
      tags: ['Design', 'Research'],
      salary: '$40,000 - $50,000',
      logo: 'C',
      featured: false
    },
    {
      id: 6,
      title: 'Lead Designer',
      company: 'Revolut',
      location: 'Madrid, Spain',
      type: 'Full-Time',
      tags: ['Design', 'Leadership'],
      salary: '$60,000 - $70,000',
      logo: 'R',
      featured: true
    }
  ];

  const latestJobs = [
    {
      id: 1,
      title: 'Social Media Assistant',
      company: 'Nomad',
      location: 'Paris, France',
      type: 'Full-Time',
      tags: ['Marketing', 'Social Media'],
      logo: 'N',
      color: 'bg-orange-100'
    },
    {
      id: 2,
      title: 'Social Media Assistant',
      company: 'ClassPass',
      location: 'Berlin, Germany',
      type: 'Full-Time',
      tags: ['Marketing'],
      logo: 'C',
      color: 'bg-green-100'
    },
    {
      id: 3,
      title: 'Brand Designer',
      company: 'Dropbox',
      location: 'San Francisco, US',
      type: 'Full-Time',
      tags: ['Design', 'Brand'],
      logo: 'D',
      color: 'bg-blue-100'
    },
    {
      id: 4,
      title: 'Brand Designer',
      company: 'ClassPass',
      location: 'Berlin, Germany',
      type: 'Full-Time',
      tags: ['Design'],
      logo: 'C',
      color: 'bg-purple-100'
    },
    {
      id: 5,
      title: 'Interactive Developer',
      company: 'Terraform',
      location: 'Hamburg, Germany',
      type: 'Full-Time',
      tags: ['Development', 'Frontend'],
      logo: 'T',
      color: 'bg-cyan-100'
    },
    {
      id: 6,
      title: 'Interactive Developer',
      company: 'Terraform',
      location: 'Hamburg, Germany',
      type: 'Full-Time',
      tags: ['Development'],
      logo: 'T',
      color: 'bg-indigo-100'
    },
    {
      id: 7,
      title: 'HR Manager',
      company: 'Lidl',
      location: 'London, UK',
      type: 'Full-Time',
      tags: ['HR', 'Management'],
      logo: 'L',
      color: 'bg-red-100'
    },
    {
      id: 8,
      title: 'HR Manager',
      company: 'Revolut',
      location: 'Madrid, Spain',
      type: 'Full-Time',
      tags: ['HR'],
      logo: 'R',
      color: 'bg-blue-100'
    }
  ];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Discover more than{' '}
              <span className="text-blue-600">5000+ Jobs</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Great platform for the job seeker that are passionate about startups. Find your dream job easier.
            </p>
            
            {/* Search Bar */}
            <div className="bg-white rounded-lg shadow-lg p-2 max-w-4xl mx-auto mb-8">
              <div className="flex flex-col md:flex-row gap-2">
                <div className="flex-1 flex items-center px-4 py-3 border-r border-gray-200">
                  <Search className="w-5 h-5 text-gray-400 mr-3" />
                  <input
                    type="text"
                    placeholder="Job title or keyword"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 outline-none text-gray-700"
                  />
                </div>
                <div className="flex-1 flex items-center px-4 py-3">
                  <MapPin className="w-5 h-5 text-gray-400 mr-3" />
                  <input
                    type="text"
                    placeholder="Florence, Italy"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="flex-1 outline-none text-gray-700"
                  />
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                  Search my job
                </button>
              </div>
            </div>
            
            <p className="text-gray-500 text-sm">
              Popular: UI Designer, UX Researcher, Android, Admin
            </p>
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    <p className="text-center text-gray-500 mb-8">Companies we helped grow</p>
    <Slider {...settings}>
      {companies.map((company, index) => (
        <div key={index} className="flex justify-center">
          <div className="text-gray-400 font-semibold text-2xl">
            {company.logo === 'V' ? (
              <div className="w-8 h-8 bg-red-600 text-white rounded flex items-center justify-center">V</div>
            ) : (
              company.logo
            )}
          </div>
        </div>
      ))}
    </Slider>
  </div>
</section>


      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Explore by <span className="text-blue-600">category</span>
            </h2>
            <button className="text-blue-600 font-medium flex items-center gap-2 hover:gap-3 transition-all">
              Show all jobs <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <div className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center mb-4`}>
                  {category.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-gray-500 text-sm">{category.jobs}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-blue-600 rounded-2xl p-12 flex flex-col lg:flex-row items-center gap-12">
            <div className="text-white lg:w-1/2">
              <h2 className="text-4xl font-bold mb-4">
                Start posting jobs today
              </h2>
              <p className="text-blue-100 mb-8 text-lg">
                Start posting jobs for only $10.
              </p>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Sign Up For Free
              </button>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-white rounded-lg p-6 shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Job Posting Dashboard</h3>
                  <div className="text-2xl font-bold text-blue-600">21,447</div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full"></div>
                    <div>
                      <div className="font-medium text-sm">Recent Applications</div>
                      <div className="text-xs text-gray-500">124 new applications</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Featured <span className="text-blue-600">jobs</span>
            </h2>
            <button className="text-blue-600 font-medium flex items-center gap-2 hover:gap-3 transition-all">
              Show all jobs <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredJobs.map((job) => (
              <div key={job.id} className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div className={`w-12 h-12 rounded-lg ${job.featured ? 'bg-blue-600' : 'bg-gray-200'} text-white flex items-center justify-center font-semibold`}>
                    {job.logo}
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 hover:bg-gray-100 rounded-lg">
                      <Bookmark className="w-4 h-4 text-gray-400" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg">
                      <Heart className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                </div>
                
                <h3 className="font-semibold text-lg text-gray-900 mb-2">{job.title}</h3>
                <p className="text-gray-600 mb-2">{job.company}</p>
                <p className="text-gray-500 text-sm mb-4 flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {job.location}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {job.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-green-100 text-green-600 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-blue-600">{job.salary}</span>
                  <span className="text-sm text-gray-500">{job.type}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Jobs Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Latest <span className="text-blue-600">jobs open</span>
            </h2>
            <button className="text-blue-600 font-medium flex items-center gap-2 hover:gap-3 transition-all">
              Show all jobs <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {latestJobs.map((job) => (
              <div key={job.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-lg ${job.color} flex items-center justify-center font-semibold text-gray-700`}>
                    {job.logo}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-gray-900 mb-1">{job.title}</h3>
                    <p className="text-gray-600 mb-2">{job.company}</p>
                    <p className="text-gray-500 text-sm mb-3 flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {job.tags.map((tag, index) => (
                        <span key={index} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                      <span className="px-3 py-1 bg-green-100 text-green-600 text-xs rounded-full">
                        {job.type}
                      </span>
                    </div>
                  </div>
                  
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <Bookmark className="w-4 h-4 text-gray-400" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};