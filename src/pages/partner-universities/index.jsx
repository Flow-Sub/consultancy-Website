import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import UniversityCard from './components/UniversityCard';
import FilterPanel from './components/FilterPanel';
import ComparisonPanel from './components/ComparisonPanel';
import UniversityModal from './components/UniversityModal';
import SearchBar from './components/SearchBar';
import FeaturedPartners from './components/FeaturedPartners';

const PartnerUniversities = () => {
  const [universities, setUniversities] = useState([]);
  const [filteredUniversities, setFilteredUniversities] = useState([]);
  const [filters, setFilters] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('ranking');
  const [comparedUniversities, setComparedUniversities] = useState([]);
  const [selectedUniversity, setSelectedUniversity] = useState(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isComparisonOpen, setIsComparisonOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // Mock university data
  const mockUniversities = [
    {
      id: 1,
      name: "University of Oxford",
      location: "Oxford, UK",
      country: "UK",
      ranking: 2,
      rating: 4.8,
      students: 24000,
      image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=800&h=600&fit=crop",
      logo: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=200&h=200&fit=crop",
      tuitionRange: "High",
      acceptanceRate: 17,
      popularPrograms: ["Medicine", "Law", "Philosophy", "Engineering", "Computer Science"],
      scholarships: true,
      scholarshipAmount: "£25,000",
      programType: "Undergraduate",
      established: 1096,
      internationalStudents: "45%",
      satisfaction: "96%",
      applicationDeadline: "January 15, 2025",
      description: `The University of Oxford is a collegiate research university in Oxford, England. There is evidence of teaching as early as 1096, making it the oldest university in the English-speaking world and the world's second-oldest university in continuous operation.`
    },
    {
      id: 2,
      name: "University of Cambridge",
      location: "Cambridge, UK",
      country: "UK",
      ranking: 3,
      rating: 4.9,
      students: 23000,
      image: "https://images.unsplash.com/photo-1520637836862-4d197d17c55a?w=800&h=600&fit=crop",
      logo: "https://images.unsplash.com/photo-1520637836862-4d197d17c55a?w=200&h=200&fit=crop",
      tuitionRange: "High",
      acceptanceRate: 21,
      popularPrograms: ["Computer Science", "Mathematics", "Natural Sciences", "Engineering", "Economics"],
      scholarships: true,
      scholarshipAmount: "£30,000",
      programType: "Postgraduate",
      established: 1209,
      internationalStudents: "38%",
      satisfaction: "95%",
      applicationDeadline: "October 15, 2024",
      description: `The University of Cambridge is a collegiate research university in Cambridge, United Kingdom. Founded in 1209 and granted a royal charter by Henry III in 1231, Cambridge is the second-oldest university in the English-speaking world.`
    },
    {
      id: 3,
      name: "University of Melbourne",
      location: "Melbourne, Australia",
      country: "Australia",
      ranking: 14,
      rating: 4.6,
      students: 50000,
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=800&h=600&fit=crop",
      logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=200&h=200&fit=crop",
      tuitionRange: "Medium",
      acceptanceRate: 70,
      popularPrograms: ["Business", "Medicine", "Engineering", "Arts", "Law"],
      scholarships: true,
      scholarshipAmount: "AUD 15,000",
      programType: "Undergraduate",
      established: 1853,
      internationalStudents: "47%",
      satisfaction: "88%",
      applicationDeadline: "December 31, 2024",
      description: `The University of Melbourne is a public research university located in Melbourne, Australia. Founded in 1853, it is Australia's second oldest university and the oldest in Victoria.`
    },
    {
      id: 4,
      name: "University of Toronto",
      location: "Toronto, Canada",
      country: "Canada",
      ranking: 18,
      rating: 4.5,
      students: 97000,
      image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=800&h=600&fit=crop",
      logo: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=200&h=200&fit=crop",
      tuitionRange: "Medium",
      acceptanceRate: 43,
      popularPrograms: ["Engineering", "Computer Science", "Business", "Medicine", "Arts & Science"],
      scholarships: true,
      scholarshipAmount: "CAD 12,000",
      programType: "Postgraduate",
      established: 1827,
      internationalStudents: "25%",
      satisfaction: "91%",
      applicationDeadline: "January 13, 2025",
      description: `The University of Toronto is a public research university in Toronto, Ontario, Canada, located on the grounds that surround Queen's Park. It was founded by royal charter in 1827 as King's College.`
    },
    {
      id: 5,
      name: "University of Auckland",
      location: "Auckland, New Zealand",
      country: "New Zealand",
      ranking: 68,
      rating: 4.4,
      students: 40000,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      logo: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=200&fit=crop",
      tuitionRange: "Medium",
      acceptanceRate: 65,
      popularPrograms: ["Engineering", "Business", "Medicine", "Arts", "Science"],
      scholarships: true,
      scholarshipAmount: "NZD 10,000",
      programType: "Undergraduate",
      established: 1883,
      internationalStudents: "42%",
      satisfaction: "86%",
      applicationDeadline: "December 8, 2024",
      description: `The University of Auckland is a public research university based in Auckland, New Zealand. It is the largest university in New Zealand by enrollment and is ranked as New Zealand's top university.`
    },
    {
      id: 6,
      name: "Imperial College London",
      location: "London, UK",
      country: "UK",
      ranking: 6,
      rating: 4.7,
      students: 17000,
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop",
      logo: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=200&h=200&fit=crop",
      tuitionRange: "High",
      acceptanceRate: 14,
      popularPrograms: ["Engineering", "Medicine", "Natural Sciences", "Business", "Computing"],
      scholarships: true,
      scholarshipAmount: "£20,000",
      programType: "Postgraduate",
      established: 1907,
      internationalStudents: "59%",
      satisfaction: "93%",
      applicationDeadline: "January 2, 2025",
      description: `Imperial College London is a public research university in London. Dating back to the Royal College of Chemistry's foundation in 1845, Imperial grew out of Prince Albert's vision of an area for culture, including the Royal Albert Hall, Victoria & Albert Museum, Natural History Museum and several royal colleges.`
    },
    {
      id: 7,
      name: "Australian National University",
      location: "Canberra, Australia",
      country: "Australia",
      ranking: 30,
      rating: 4.3,
      students: 25000,
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop",
      logo: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=200&h=200&fit=crop",
      tuitionRange: "Medium",
      acceptanceRate: 35,
      popularPrograms: ["Political Science", "International Relations", "Economics", "Computer Science", "Physics"],
      scholarships: true,
      scholarshipAmount: "AUD 18,000",
      programType: "PhD",
      established: 1946,
      internationalStudents: "44%",
      satisfaction: "89%",
      applicationDeadline: "October 31, 2024",
      description: `The Australian National University is a public research university located in Canberra, the capital of Australia. Its main campus in Acton encompasses seven teaching and research colleges, in addition to several national academies and institutes.`
    },
    {
      id: 8,
      name: "McGill University",
      location: "Montreal, Canada",
      country: "Canada",
      ranking: 31,
      rating: 4.4,
      students: 40000,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
      logo: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=200&h=200&fit=crop",
      tuitionRange: "Low",
      acceptanceRate: 46,
      popularPrograms: ["Medicine", "Engineering", "Business", "Arts", "Science"],
      scholarships: true,
      scholarshipAmount: "CAD 15,000",
      programType: "Undergraduate",
      established: 1821,
      internationalStudents: "31%",
      satisfaction: "90%",
      applicationDeadline: "January 15, 2025",
      description: `McGill University is an English-language public research university located in Montreal, Quebec, Canada. Founded in 1821 by royal charter granted by King George IV, the university bears the name of James McGill, a Scottish merchant whose bequest in 1813 formed the university's precursor.`
    }
  ];

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setUniversities(mockUniversities);
      setFilteredUniversities(mockUniversities);
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    applyFiltersAndSearch();
  }, [filters, searchTerm, sortBy, universities]);

  const applyFiltersAndSearch = () => {
    let filtered = [...universities];

    // Apply search
    if (searchTerm) {
      filtered = filtered?.filter(uni =>
        uni?.name?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
        uni?.location?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
        uni?.popularPrograms?.some(program => 
          program?.toLowerCase()?.includes(searchTerm?.toLowerCase())
        )
      );
    }

    // Apply filters
    if (filters?.country) {
      filtered = filtered?.filter(uni => uni?.country === filters?.country);
    }

    if (filters?.programType) {
      filtered = filtered?.filter(uni => uni?.programType === filters?.programType);
    }

    if (filters?.tuitionRange) {
      filtered = filtered?.filter(uni => uni?.tuitionRange === filters?.tuitionRange);
    }

    if (filters?.ranking) {
      const [min, max] = filters?.ranking?.split('-')?.map(Number);
      if (max) {
        filtered = filtered?.filter(uni => uni?.ranking >= min && uni?.ranking <= max);
      } else {
        filtered = filtered?.filter(uni => uni?.ranking >= min);
      }
    }

    if (filters?.features && filters?.features?.length > 0) {
      filtered = filtered?.filter(uni => {
        return filters?.features?.every(feature => {
          switch (feature) {
            case 'scholarships':
              return uni?.scholarships;
            case 'pathwayPrograms':
              return uni?.popularPrograms?.some(p => p?.toLowerCase()?.includes('pathway'));
            case 'foundationCourses':
              return uni?.popularPrograms?.some(p => p?.toLowerCase()?.includes('foundation'));
            default:
              return true;
          }
        });
      });
    }

    // Apply sorting
    filtered?.sort((a, b) => {
      switch (sortBy) {
        case 'ranking':
          return a?.ranking - b?.ranking;
        case 'name':
          return a?.name?.localeCompare(b?.name);
        case 'tuition':
          const tuitionOrder = { 'Low': 1, 'Medium': 2, 'High': 3 };
          return tuitionOrder?.[a?.tuitionRange] - tuitionOrder?.[b?.tuitionRange];
        case 'acceptance':
          return a?.acceptanceRate - b?.acceptanceRate;
        case 'students':
          return b?.students - a?.students;
        default:
          return 0;
      }
    });

    setFilteredUniversities(filtered);
  };

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleClearFilters = () => {
    setFilters({});
    setSearchTerm('');
  };

  const handleCompare = (university) => {
    setComparedUniversities(prev => {
      const isAlreadyCompared = prev?.find(uni => uni?.id === university?.id);
      if (isAlreadyCompared) {
        return prev?.filter(uni => uni?.id !== university?.id);
      } else if (prev?.length < 3) {
        return [...prev, university];
      }
      return prev;
    });
  };

  const handleRemoveFromComparison = (university) => {
    setComparedUniversities(prev => prev?.filter(uni => uni?.id !== university?.id));
  };

  const handleClearComparison = () => {
    setComparedUniversities([]);
  };

  const handleViewDetails = (university) => {
    setSelectedUniversity(university);
    setIsModalOpen(true);
  };

  const handleUniversityClick = (university) => {
    handleViewDetails(university);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="pt-16">
          <div className="container mx-auto px-4 py-8">
            <div className="flex items-center justify-center min-h-[60vh]">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                <p className="text-gray-600">Loading universities...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {/* Main Content */}
      <div className="pt-16">
        <div className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Icon name="Building2" size={32} className="text-primary" />
              <h1 className="font-headline font-bold text-4xl text-gray-900">
                Partner Universities
              </h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              Explore our verified partnerships with world-renowned institutions offering exclusive pathways for Pakistani students
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={16} className="text-success" />
                <span>200+ Verified Partners</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Award" size={16} className="text-brand-gold" />
                <span>Exclusive Scholarships</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Users" size={16} className="text-primary" />
                <span>5000+ Students Placed</span>
              </div>
            </div>
          </div>

          {/* Featured Partners */}
          <FeaturedPartners onUniversityClick={handleUniversityClick} />

          {/* Search Bar */}
          <SearchBar
            onSearch={setSearchTerm}
            onSortChange={setSortBy}
            sortBy={sortBy}
            totalResults={filteredUniversities?.length}
          />

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-8">
            {/* Filter Panel */}
            <div className="lg:col-span-1">
              <FilterPanel
                filters={filters}
                onFilterChange={handleFilterChange}
                onClearFilters={handleClearFilters}
                isOpen={isFilterOpen}
                onToggle={() => setIsFilterOpen(!isFilterOpen)}
                totalResults={filteredUniversities?.length}
              />
            </div>

            {/* Universities Grid */}
            <div className="lg:col-span-3">
              {filteredUniversities?.length === 0 ? (
                <div className="text-center py-12">
                  <Icon name="Search" size={64} className="text-gray-300 mx-auto mb-4" />
                  <h3 className="font-headline font-bold text-xl text-gray-900 mb-2">
                    No universities found
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Try adjusting your search criteria or filters
                  </p>
                  <Button
                    variant="outline"
                    onClick={handleClearFilters}
                    iconName="RotateCcw"
                    iconPosition="left"
                    iconSize={16}
                  >
                    Clear All Filters
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredUniversities?.map((university) => (
                    <UniversityCard
                      key={university?.id}
                      university={university}
                      onCompare={handleCompare}
                      onViewDetails={handleViewDetails}
                      isCompared={comparedUniversities?.some(uni => uni?.id === university?.id)}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Comparison Panel */}
          {comparedUniversities?.length > 0 && (
            <div className="mt-8">
              <ComparisonPanel
                universities={comparedUniversities}
                onRemove={handleRemoveFromComparison}
                onClear={handleClearComparison}
                isOpen={isComparisonOpen}
                onToggle={() => setIsComparisonOpen(!isComparisonOpen)}
              />
            </div>
          )}
        </div>
      </div>
      {/* University Modal */}
      <UniversityModal
        university={selectedUniversity}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedUniversity(null);
        }}
      />
      {/* Consultation CTA */}
      <div className="bg-gradient-to-r from-primary to-secondary py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-headline font-bold text-3xl text-white mb-4">
              Need Help Choosing the Right University?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Our expert counselors will help you find the perfect match based on your academic goals, budget, and career aspirations
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                variant="default"
                size="lg"
                className="bg-white text-primary hover:bg-gray-100"
                iconName="Calendar"
                iconPosition="left"
                iconSize={20}
              >
                Book Free Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
                iconName="MessageCircle"
                iconPosition="left"
                iconSize={20}
              >
                Chat with Expert
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Spacer for Mobile */}
      <div className="h-20 lg:h-0"></div>
    </div>
  );
};

export default PartnerUniversities;